import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Superficie compartida del hero de marketing.
 *
 * Ruta: src/components/hero/HeroShell.tsx
 * Estilos: src/app/globals.css
 *   .hero, .hero--centered, .hero__orb, .hero__content, .hero__eyebrow,
 *   .hero__title, .hero__title-accent, .hero__subtitle, .hero__actions
 * Clases de CTA (la misma cadena en la home y en categoría):
 *   heroPrimaryLinkClass, heroGhostLinkClass
 *
 * variant "home": la usa src/app/_components/Hero.tsx. El viewport completo,
 * la retícula y el marquee siguen viviendo en la home; este wrapper solo
 * aporta el fondo y el orbe para no duplicarlos.
 * variant "centered": páginas de categoría (/pensado-para/* y /ca/pensat-per/*).
 * CategoryHero y HeroTitleAccent se pueden reutilizar en /ia u otras landings.
 */

export const heroPrimaryLinkClass =
  "btn-primary w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)]";

export const heroGhostLinkClass = "btn-ghost group justify-start";

type HeroShellProps = {
  id?: string;
  variant?: "home" | "centered";
  children: ReactNode;
  className?: string;
};

export function HeroShell({ id, variant = "home", children, className }: HeroShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "hero bg-night relative overflow-hidden shrink-0",
        variant === "centered" && "hero--centered",
        className,
      )}
    >
      <div className="hero__orb absolute z-0" aria-hidden="true" />
      {children}
    </section>
  );
}

export function HeroTitleAccent({ children }: { children: ReactNode }) {
  return <span className="hero__title-accent">{children}</span>;
}

function HeroGhostArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

type CategoryHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CategoryHero({
  eyebrow,
  title,
  subtitle,
  primaryHref = "/demo",
  primaryLabel = "Reserva tu Demo",
  secondaryHref = "#propuesta",
  secondaryLabel = "Descubrir ventajas",
}: CategoryHeroProps) {
  return (
    <HeroShell variant="centered">
      <div className="container relative z-10">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow animate-fade-in-up">{eyebrow}</p>
          <h1
            className="hero__title text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-balance animate-fade-in-up leading-tight text-white"
            style={{ animationDelay: "100ms" }}
          >
            {title}
          </h1>
          <p
            className="hero__subtitle text-base md:text-lg text-white/60 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
          <div
            className="hero__actions flex flex-col items-center sm:flex-row sm:justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link href={primaryHref} className={heroPrimaryLinkClass}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className={heroGhostLinkClass}>
              {secondaryLabel}
              <HeroGhostArrow />
            </Link>
          </div>
        </div>
      </div>
    </HeroShell>
  );
}
