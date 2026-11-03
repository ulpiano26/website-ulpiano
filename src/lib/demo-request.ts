import { validateEmail } from "@/lib/leads";
import type { Locale } from "@/lib/legal/consent-texts";

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
 * Sends the demo request through our API, which stores it in the support
 * inbox and emails the team when SMTP is configured. Never throws and never
 * exposes server messages: the caller only receives a coarse status.
 */
export async function submitDemoRequest(
  values: DemoFormValues,
  context: { locale: Locale; sourceUrl: string },
): Promise<DemoSubmitResult> {
  try {
    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MILLISECONDS),
      body: JSON.stringify({
        name: values.fullName.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        consentProcessing: true,
        consentMarketing: false,
        locale: context.locale,
        formId: "demo",
        sourceUrl: context.sourceUrl,
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
