import type { Metadata } from "next";
import Hero from './_components/Hero'
import SocialProof from './_components/SocialProof'
import Outputs from './_components/Outputs'
import ParaQuien from './_components/ParaQuien'
import ComoFunciona from './_components/ComoFunciona'
import Testimonio from './_components/Testimonio'
import CtaFinal from './_components/CtaFinal'
import ScrollRevealInit from './_components/ScrollRevealInit'
import IntroVideoSection from '@/features/intro-video/IntroVideoSection'
import { introVideoContentEs } from '@/features/intro-video/content'

export const metadata: Metadata = {
  title: "Plataforma Integral de Gestión Sucesoria",
  description:
    "De inventario a cuaderno particional: Ulpiano estructura, valida y documenta el proceso sucesorio para abogados, asesores y notarías.",
  alternates: {
    canonical: "https://ulpiano.es",
    languages: {
      es: "https://ulpiano.es",
      ca: "https://ulpiano.es/ca",
      "x-default": "https://ulpiano.es",
    },
  },
  openGraph: {
    url: "https://ulpiano.es",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Hero />
      <IntroVideoSection content={introVideoContentEs} />
      <Outputs />
      <ParaQuien />
      <ComoFunciona />
      <Testimonio />
      <CtaFinal />
    </>
  )
}
