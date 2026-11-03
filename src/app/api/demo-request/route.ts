import { NextRequest, NextResponse } from "next/server";
import { validateEmail } from "@/lib/leads";
import { buildEvidenceRecord, rejectIfNoConsent } from "@/lib/legal/evidence";
import { deliverLead, undeliveredResponse } from "@/lib/leads/deliver";

export const runtime = "nodejs";
export const preferredRegion = "fra1";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const consent = rejectIfNoConsent(body);
    if (consent instanceof NextResponse) return consent;
    if (consent.formId !== "demo") {
      return NextResponse.json(
        { error: "formId no válido para este endpoint", code: "INVALID_FORM_ID" },
        { status: 400 },
      );
    }

    const { name, email, company } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nombre requerido (mínimo 2 caracteres)" },
        { status: 400 },
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Email profesional válido requerido" },
        { status: 400 },
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2) {
      return NextResponse.json(
        { error: "Nombre del despacho requerido" },
        { status: 400 },
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      source: "demo-request",
    };

    const record = buildEvidenceRecord(request, consent, payload);
    const outcome = await deliverLead(record, request.headers.get("cookie"));
    const failed = undeliveredResponse(outcome);
    if (failed) return failed;

    return NextResponse.json({ ok: true, submission_id: record.submission_id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
