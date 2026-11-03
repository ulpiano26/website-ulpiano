import nodemailer from "nodemailer";
import type { EvidenceRecord } from "@/lib/legal/evidence";

export type ChannelResult = "sent" | "unconfigured" | "failed";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function summary(record: EvidenceRecord): { subject: string; text: string; replyTo?: string } {
  const payload = record.payload;
  const lines = [
    `Formulario: ${record.form_id}`,
    `Nombre: ${text(payload.name)}`,
    `Email: ${text(payload.email)}`,
    `Despacho o empresa: ${text(payload.company)}`,
    `Asunto: ${text(payload.subject)}`,
    `Mensaje: ${text(payload.message)}`,
    `Origen: ${text(payload.source)}`,
    `Idioma: ${record.locale}`,
    `Página: ${record.source_url}`,
    `Fecha: ${record.timestamp}`,
    `Id: ${record.submission_id}`,
    `Comunicaciones comerciales: ${record.consent_marketing ? "sí" : "no"}`,
  ].filter((line) => !line.endsWith(": "));

  const who = text(payload.name) || text(payload.email) || "web";
  const replyTo = text(payload.email);

  return {
    subject: `[Ulpiano] ${record.form_id}: ${who}`,
    text: lines.join("\n"),
    replyTo: replyTo || undefined,
  };
}

/**
 * Sends the lead to the team mailbox. Google Workspace is already the
 * processor for corporate mail, so this stays on SMTP and does not add a
 * new provider. Without SMTP_HOST / SMTP_USER / SMTP_PASS it does nothing.
 */
export async function notifyTeamByEmail(record: EvidenceRecord): Promise<ChannelResult> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error({
      event: "LEAD_EMAIL_UNCONFIGURED",
      form_id: record.form_id,
      missing: [
        !host ? "SMTP_HOST" : null,
        !user ? "SMTP_USER" : null,
        !pass ? "SMTP_PASS" : null,
      ].filter(Boolean),
    });
    return "unconfigured";
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const to = process.env.LEAD_NOTIFY_EMAIL ?? "soporte@ulpiano.es";
  const from = process.env.LEAD_NOTIFY_FROM ?? user;
  const message = summary(record);

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: message.replyTo,
      subject: message.subject,
      text: message.text,
    });
    return "sent";
  } catch (error) {
    console.error({
      event: "LEAD_EMAIL_FAILED",
      form_id: record.form_id,
      submission_id: record.submission_id,
      error: error instanceof Error ? error.message : "unknown",
    });
    return "failed";
  }
}
