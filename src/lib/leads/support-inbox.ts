import type { EvidenceRecord } from "@/lib/legal/evidence";

export type InboxResult = "sent" | "rateLimited" | "failed";

const FORM_LABEL: Record<EvidenceRecord["form_id"], string> = {
  contact: "Contacto web",
  demo: "Solicitud de demo",
  "resource-download": "Descarga de recurso",
  newsletter: "Newsletter",
};

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * The support backend is the channel that already accepts demo requests.
 * Contact, newsletter and resource downloads had no working destination
 * (HubSpot form ids are empty and the route still answered 201), so they
 * land in the same inbox. The message is truncated to the 255-character
 * field the API accepts.
 */
export async function forwardToSupportInbox(record: EvidenceRecord): Promise<InboxResult> {
  const endpoint =
    process.env.DEMO_REQUEST_ENDPOINT ??
    process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT ??
    "https://gestormercantil.com/api/soporte/demos";

  const payload = record.payload;
  const detail = [text(payload.subject), text(payload.message), text(payload.source)]
    .filter(Boolean)
    .join(" · ");
  const desk = text(payload.company) || FORM_LABEL[record.form_id];
  const despacho = (detail ? `${desk}: ${detail}` : desk).slice(0, 255);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://ulpiano.es",
      },
      body: JSON.stringify({
        nombre: text(payload.name).slice(0, 255),
        email: text(payload.email),
        despacho,
        consentimiento_rgpd: true,
        origen: `ulpiano.es/${record.form_id}`,
      }),
    });

    if (response.status === 201) return "sent";
    if (response.status === 429) return "rateLimited";

    console.error({
      event: "LEAD_INBOX_FAILED",
      form_id: record.form_id,
      submission_id: record.submission_id,
      status: response.status,
      response: await response.text(),
    });
    return "failed";
  } catch (error) {
    console.error({
      event: "LEAD_INBOX_FAILED",
      form_id: record.form_id,
      submission_id: record.submission_id,
      error: error instanceof Error ? error.message : "unknown",
    });
    return "failed";
  }
}
