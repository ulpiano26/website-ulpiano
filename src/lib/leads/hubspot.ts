import { getConsentCopy } from "@/lib/legal/consent-texts";
import type { EvidenceRecord } from "@/lib/legal/evidence";

const FORM_ID_ENV: Record<EvidenceRecord["form_id"], string> = {
  contact: "HUBSPOT_FORM_ID_CONTACT",
  demo: "HUBSPOT_FORM_ID_DEMO",
  "resource-download": "HUBSPOT_FORM_ID_RESOURCE",
  newsletter: "HUBSPOT_FORM_ID_NEWSLETTER",
};

function readCookie(cookieHeader: string | null, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
  return match?.slice(name.length + 1);
}

function fieldsFromRecord(record: EvidenceRecord): { name: string; value: string }[] {
  const payload = record.payload;
  const fields: { name: string; value: string }[] = [];
  const push = (name: string, value: unknown) => {
    if (typeof value === "string" && value.length > 0) {
      fields.push({ name, value });
    }
  };

  push("email", payload.email);
  push("firstname", payload.name);
  push("company", payload.company);
  push("message", payload.message);
  if (typeof payload.subject === "string" && payload.subject.length > 0) {
    fields.push({ name: "subject", value: payload.subject });
  }

  fields.push({ name: "consent_text_version", value: record.consent_text_version });
  fields.push({ name: "privacy_policy_version", value: record.privacy_policy_version });
  fields.push({ name: "locale", value: record.locale });
  fields.push({ name: "source_url", value: record.source_url });

  return fields;
}

async function postOnce(
  url: string,
  body: unknown,
): Promise<{ ok: boolean; status: number; text: string }> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { ok: res.ok, status: res.status, text };
}

export type HubSpotDelivery = "sent" | "unconfigured" | "failed";

export async function submitToHubSpot(
  record: EvidenceRecord,
  cookieHeader: string | null,
): Promise<HubSpotDelivery> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formEnv = FORM_ID_ENV[record.form_id];
  const formGuid = process.env[formEnv];

  if (!portalId || !formGuid) {
    console.error({
      event: "LEAD_DELIVERY_UNCONFIGURED",
      form_id: record.form_id,
      missing: [
        !portalId ? "HUBSPOT_PORTAL_ID" : null,
        !formGuid ? formEnv : null,
      ].filter(Boolean),
    });
    return "unconfigured";
  }

  const copy = getConsentCopy(record.locale, record.form_id);
  const hutk = readCookie(cookieHeader, "hubspotutk");
  const subscriptionTypeId = process.env.HUBSPOT_SUBSCRIPTION_TYPE_ID;

  const communications =
    record.form_id === "resource-download" && subscriptionTypeId
      ? [
          {
            subscriptionTypeId,
            value: record.consent_marketing,
            text: copy.marketing,
          },
        ]
      : [];

  const body = {
    fields: fieldsFromRecord(record),
    context: {
      hutk,
      pageUri: record.source_url,
      pageName: record.form_id,
      ipAddress: record.ip || undefined,
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: record.consent_text_shown,
        communications,
      },
    },
  };

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  try {
    const first = await postOnce(url, body);
    if (first.ok) return "sent";

    await new Promise((r) => setTimeout(r, 400));
    const second = await postOnce(url, body);
    if (second.ok) return "sent";

    console.error({
      event: "LEAD_DELIVERY_FAILED",
      record,
      status: second.status,
      response: second.text,
    });
    return "failed";
  } catch (error) {
    console.error({
      event: "LEAD_DELIVERY_FAILED",
      record,
      error: error instanceof Error ? error.message : "unknown",
    });
    return "failed";
  }
}
