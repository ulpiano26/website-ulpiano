import { validateEmail } from "@/lib/leads";
import type { Locale } from "@/lib/legal/consent-texts";

/** Maximum length accepted by the backend for name, email and company. */
export const DEMO_FIELD_MAX_LENGTH = 255;

/** Optional free-text field ("what would you like to see?"). */
export const DEMO_MESSAGE_MAX_LENGTH = 500;

/** Optional phone. Same limit as the support backend column. */
export const DEMO_PHONE_MAX_LENGTH = 30;

const REQUEST_TIMEOUT_MILLISECONDS = 15_000;

export type DemoFormValues = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export type DemoFieldName = keyof DemoFormValues;

export type DemoFieldErrorCode = "required" | "invalidEmail" | "invalidPhone" | "tooLong";

export type DemoFieldErrors = Partial<Record<DemoFieldName, DemoFieldErrorCode>>;

export type DemoSubmitResult =
  | { status: "success" }
  | { status: "invalid" }
  | { status: "rateLimited" }
  | { status: "failed" };

/** Order in which fields appear in the form, used to focus the first invalid one. */
export const DEMO_FIELD_ORDER: readonly DemoFieldName[] = ["fullName", "email", "phone", "company", "message"];

/** Fields the person must fill in. Phone and message are optional. */
const DEMO_REQUIRED_FIELDS: readonly DemoFieldName[] = ["fullName", "email", "company"];

const PHONE_ALLOWED_CHARACTERS = /^[+\d\s().-]+$/;
const PHONE_MIN_DIGITS = 6;

export function isValidDemoPhone(phone: string): boolean {
  const digitCount = phone.replace(/\D/g, "").length;
  return PHONE_ALLOWED_CHARACTERS.test(phone) && digitCount >= PHONE_MIN_DIGITS && phone.length <= DEMO_PHONE_MAX_LENGTH;
}

/** Client-side validation. Values are checked after trimming surrounding whitespace. */
export function validateDemoForm(values: DemoFormValues): DemoFieldErrors {
  const errors: DemoFieldErrors = {};

  for (const fieldName of DEMO_REQUIRED_FIELDS) {
    const trimmedValue = values[fieldName].trim();
    if (trimmedValue.length === 0) {
      errors[fieldName] = "required";
    } else if (trimmedValue.length > DEMO_FIELD_MAX_LENGTH) {
      errors[fieldName] = "tooLong";
    } else if (fieldName === "email" && !validateEmail(trimmedValue)) {
      errors[fieldName] = "invalidEmail";
    }
  }

  const phone = values.phone.trim();
  if (phone && !isValidDemoPhone(phone)) errors.phone = "invalidPhone";

  if (values.message.trim().length > DEMO_MESSAGE_MAX_LENGTH) errors.message = "tooLong";

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
        phone: values.phone.trim(),
        message: values.message.trim(),
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
