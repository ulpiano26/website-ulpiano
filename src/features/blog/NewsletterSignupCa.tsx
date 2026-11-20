"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import ConsentCheckbox from "@/components/forms/ConsentCheckbox";
import { localeFromPathname } from "@/lib/legal/consent-texts";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function NewsletterSignupCa() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [consentProcessing, setConsentProcessing] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const locale = localeFromPathname(usePathname() ?? "");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consentProcessing) {
      setConsentError(true);
      return;
    }
    const formData = new FormData(event.currentTarget);

    setStatus("submitting");
    setMessage("");
    setConsentError(false);

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          source: "blog-ca-newsletter",
          consentProcessing,
          consentMarketing,
          locale,
          formId: "newsletter",
          sourceUrl: window.location.href,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "No hem pogut completar la subscripció.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage(
        "Gràcies, la subscripció s'ha completat. Et pots donar de baixa quan vulguis des de l'enllaç de cada tramesa.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No hem pogut completar la subscripció. Torna-ho a provar.",
      );
    }
  }

  return (
    <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="newsletter-name-ca" className="text-sm font-semibold text-ink">
          Nom
        </label>
        <input
          id="newsletter-name-ca"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          className="mt-2 min-h-11 w-full rounded-md border border-mist bg-surface px-3 text-base text-ink outline-none transition-colors placeholder:text-fog focus:border-ulpiano-green focus:bg-white focus:ring-2 focus:ring-green-bg"
        />
      </div>
      <div>
        <label htmlFor="newsletter-email-ca" className="text-sm font-semibold text-ink">
          Correu professional
        </label>
        <input
          id="newsletter-email-ca"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 min-h-11 w-full rounded-md border border-mist bg-surface px-3 text-base text-ink outline-none transition-colors placeholder:text-fog focus:border-ulpiano-green focus:bg-white focus:ring-2 focus:ring-green-bg"
        />
      </div>
      <div className="sm:col-span-2">
        <ConsentCheckbox
          locale={locale}
          formId="newsletter"
          consentProcessing={consentProcessing}
          consentMarketing={consentMarketing}
          onProcessingChange={(v) => {
            setConsentProcessing(v);
            if (v) setConsentError(false);
          }}
          onMarketingChange={setConsentMarketing}
          processingError={consentError}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="min-h-11 rounded-md bg-ulpiano-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-light disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
        >
          {status === "submitting" ? "Subscrivint…" : "Rebre la newsletter"}
        </button>
        {message && (
          <p
            className={`mt-3 text-sm ${status === "success" ? "text-ulpiano-green" : "text-warning"}`}
            role={status === "error" ? "alert" : "status"}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
