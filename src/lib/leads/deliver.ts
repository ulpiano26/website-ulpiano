import { NextResponse } from "next/server";
import type { EvidenceRecord } from "@/lib/legal/evidence";
import { submitToHubSpot } from "./hubspot";
import { notifyTeamByEmail } from "./notify";
import { forwardToSupportInbox } from "./support-inbox";

export type DeliveryOutcome = {
  ok: boolean;
  rateLimited: boolean;
};

export async function deliverLead(
  record: EvidenceRecord,
  cookieHeader: string | null,
): Promise<DeliveryOutcome> {
  const [hubspot, email, inbox] = await Promise.all([
    submitToHubSpot(record, cookieHeader),
    notifyTeamByEmail(record),
    forwardToSupportInbox(record),
  ]);

  const ok = hubspot === "sent" || email === "sent" || inbox === "sent";
  return { ok, rateLimited: inbox === "rateLimited" && !ok };
}

export function undeliveredResponse(outcome: DeliveryOutcome): NextResponse | null {
  if (outcome.ok) return null;

  if (outcome.rateLimited) {
    return NextResponse.json(
      { error: "Demasiados intentos. Inténtalo más tarde.", code: "RATE_LIMITED" },
      { status: 429 },
    );
  }

  return NextResponse.json(
    {
      error: "No hemos podido registrar el envío. Inténtalo de nuevo.",
      code: "DELIVERY_FAILED",
    },
    { status: 502 },
  );
}
