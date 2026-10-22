import { validateEmail } from "@/lib/leads";

/**
 * Public endpoint of the support backend that stores demo requests.
 * It is a public URL (no secrets involved), so it is safe to expose in the browser bundle.
 * Override it per environment with NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT.
 */
export const DEMO_REQUEST_ENDPOINT =
  process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT ?? "https://gestormercantil.com/api/soporte/demos";

/** Fixed origin identifier agreed with the backend. */
export const DEMO_REQUEST_ORIGIN = "ulpiano.es/demo";

/** Maximum length accepted by the backend for name, email and company. */
export const DEMO_FIELD_MAX_LENGTH = 255;

const REQUEST_TIMEOUT_MILLISECONDS = 15_000;

export type DemoFormValues = {
  fullName: string;
  email: string;
  company: string;
};

export type DemoFieldName = keyof DemoFormValues;

export type DemoFieldErrorCode = "required" | "invalidEmail" | "tooLong";

export type DemoFieldErrors = Partial<Record<DemoFieldName, DemoFieldErrorCode>>;

export type DemoSubmitResult =
  | { status: "success" }
  | { status: "invalid" }
  | { status: "rateLimited" }
  | { status: "failed" };

/** Order in which fields appear in the form, used to focus the first invalid one. */
export const DEMO_FIELD_ORDER: readonly DemoFieldName[] = ["fullName", "email", "company"];

/** Client-side validation. Values are checked after trimming surrounding whitespace. */
export function validateDemoForm(values: DemoFormValues): DemoFieldErrors {
  const errors: DemoFieldErrors = {};

  for (const fieldName of DEMO_FIELD_ORDER) {
    const trimmedValue = values[fieldName].trim();
    if (trimmedValue.length === 0) {
      errors[fieldName] = "required";
    } else if (trimmedValue.length > DEMO_FIELD_MAX_LENGTH) {
      errors[fieldName] = "tooLong";
    } else if (fieldName === "email" && !validateEmail(trimmedValue)) {
      errors[fieldName] = "invalidEmail";
    }
  }

  return errors;
}

/**
 * Sends the demo request to the backend. Never throws and never exposes server messages:
 * the caller only receives a coarse status it can translate into user-facing copy.
 */
export async function submitDemoRequest(values: DemoFormValues): Promise<DemoSubmitResult> {
  try {
    const response = await fetch(DEMO_REQUEST_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MILLISECONDS),
      body: JSON.stringify({
        nombre: values.fullName.trim(),
        email: values.email.trim(),
        despacho: values.company.trim(),
        consentimiento_rgpd: true,
        origen: DEMO_REQUEST_ORIGIN,
      }),
    });

    if (response.status === 201) return { status: "success" };
    if (response.status === 400 || response.status === 422) return { status: "invalid" };
    if (response.status === 429) return { status: "rateLimited" };
    return { status: "failed" };
  } catch {
    // Network failure, timeout or a CORS rejection: all look the same to the browser.
    return { status: "failed" };
  }
}
