export const CONSENT_TEXT_VERSION = "consent-2026-11-20-v3";
export const PRIVACY_POLICY_VERSION = "privacidad-2026-11-20-v3";

export type FormId = "contact" | "demo" | "resource-download" | "newsletter";
export type Locale = "es" | "ca";

export const FORM_IDS: readonly FormId[] = [
  "contact",
  "demo",
  "resource-download",
  "newsletter",
] as const;

export const LOCALES: readonly Locale[] = ["es", "ca"] as const;

type ConsentCopy = {
  processing: string;
  marketing: string;
  privacyUrl: string;
  privacyLinkLabel: string;
};

export const CONSENT_TEXTS: Record<Locale, Record<FormId, ConsentCopy>> = {
  es: {
    contact: {
      processing:
        "He leído y acepto la Política de Privacidad de Ulpiano y consiento el tratamiento de mis datos para atender mi consulta.",
      marketing:
        "Acepto recibir por correo electrónico comunicaciones comerciales de Ulpiano sobre sus servicios y recursos. Puedo retirar mi consentimiento en cualquier momento.",
      privacyUrl: "/legal/privacidad",
      privacyLinkLabel: "Política de Privacidad",
    },
    demo: {
      processing:
        "He leído y acepto la Política de Privacidad de Ulpiano y consiento el tratamiento de mis datos para gestionar mi solicitud de demostración.",
      marketing:
        "Acepto recibir por correo electrónico comunicaciones comerciales de Ulpiano sobre sus servicios y recursos. Puedo retirar mi consentimiento en cualquier momento.",
      privacyUrl: "/legal/privacidad",
      privacyLinkLabel: "Política de Privacidad",
    },
    "resource-download": {
      processing:
        "He leído y acepto la Política de Privacidad de Ulpiano y consiento el tratamiento de mis datos para facilitarme el recurso solicitado y realizar el seguimiento asociado a mi solicitud.",
      marketing:
        "Acepto recibir por correo electrónico comunicaciones comerciales de Ulpiano sobre sus servicios y recursos. Puedo retirar mi consentimiento en cualquier momento.",
      privacyUrl: "/legal/privacidad",
      privacyLinkLabel: "Política de Privacidad",
    },
    newsletter: {
      processing:
        "He leído y acepto la Política de Privacidad de Ulpiano y consiento el tratamiento de mis datos para recibir la newsletter. Puedo darme de baja en cualquier momento desde el enlace incluido en cada envío.",
      marketing:
        "Acepto recibir por correo electrónico comunicaciones comerciales de Ulpiano sobre sus servicios y recursos. Puedo retirar mi consentimiento en cualquier momento.",
      privacyUrl: "/legal/privacidad",
      privacyLinkLabel: "Política de Privacidad",
    },
  },
  ca: {
    contact: {
      processing:
        "He llegit i accepto la Política de Privacitat d'Ulpiano i consento el tractament de les meves dades per atendre la meva consulta.",
      marketing:
        "Accepto rebre per correu electrònic comunicacions comercials d'Ulpiano sobre els seus serveis i recursos. Puc retirar el meu consentiment en qualsevol moment.",
      privacyUrl: "/ca/legal/privacitat",
      privacyLinkLabel: "Política de Privacitat",
    },
    demo: {
      processing:
        "He llegit i accepto la Política de Privacitat d'Ulpiano i consento el tractament de les meves dades per gestionar la meva sol·licitud de demostració.",
      marketing:
        "Accepto rebre per correu electrònic comunicacions comercials d'Ulpiano sobre els seus serveis i recursos. Puc retirar el meu consentiment en qualsevol moment.",
      privacyUrl: "/ca/legal/privacitat",
      privacyLinkLabel: "Política de Privacitat",
    },
    "resource-download": {
      processing:
        "He llegit i accepto la Política de Privacitat d'Ulpiano i consento el tractament de les meves dades per facilitar-me el recurs sol·licitat i fer el seguiment associat a la meva sol·licitud.",
      marketing:
        "Accepto rebre per correu electrònic comunicacions comercials d'Ulpiano sobre els seus serveis i recursos. Puc retirar el meu consentiment en qualsevol moment.",
      privacyUrl: "/ca/legal/privacitat",
      privacyLinkLabel: "Política de Privacitat",
    },
    newsletter: {
      processing:
        "He llegit i accepto la Política de Privacitat d'Ulpiano i consento el tractament de les meves dades per rebre la newsletter. Em puc donar de baixa en qualsevol moment des de l'enllaç inclòs a cada tramesa.",
      marketing:
        "Accepto rebre per correu electrònic comunicacions comercials d'Ulpiano sobre els seus serveis i recursos. Puc retirar el meu consentiment en qualsevol moment.",
      privacyUrl: "/ca/legal/privacitat",
      privacyLinkLabel: "Política de Privacitat",
    },
  },
};

export function isLocale(value: unknown): value is Locale {
  return value === "es" || value === "ca";
}

export function isFormId(value: unknown): value is FormId {
  return FORM_IDS.includes(value as FormId);
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/ca" || pathname.startsWith("/ca/") ? "ca" : "es";
}

export function getConsentCopy(locale: Locale, formId: FormId): ConsentCopy {
  return CONSENT_TEXTS[locale][formId];
}
