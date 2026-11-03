import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Cómo ordenar un expediente sucesorio de principio a fin",
  description:
    "El orden con el que se abre un expediente sucesorio evita rectificaciones: hechos, título, personas, inventario y solo entonces el cuaderno y los modelos.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/ordenar-expediente-sucesorio",
    languages: {
      es: "https://ulpiano.es/recursos/blog/ordenar-expediente-sucesorio",
      ca: "https://ulpiano.es/ca/recursos/blog/ordenar-expedient-successori",
      "x-default": "https://ulpiano.es/recursos/blog/ordenar-expediente-sucesorio",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Cómo ordenar un expediente sucesorio de principio a fin",
    description:
      "Fijar los hechos, reunir los documentos y validar la posición de cada interesado antes de adjudicar. Ese orden reduce rectificaciones.",
    url: "https://ulpiano.es/recursos/blog/ordenar-expediente-sucesorio",
    locale: "es_ES",
    type: "article",
  },
};

const inlineLink =
  "font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light";

export default function OrdenarExpedienteSucesorioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "Ordenar un expediente sucesorio",
            href: "/recursos/blog/ordenar-expediente-sucesorio",
          },
        ]}
      />
      <main>
        <article className="pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="container">
            <Link
              href="/recursos/blog"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green no-underline transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
            >
              <ArrowLeft aria-hidden="true" size={18} />
              Volver al blog
            </Link>

            <header className="mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">Procesos</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  8 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Cómo ordenar un expediente sucesorio de principio a fin
              </h1>
              <p className="body-lg mt-6 text-slate">
                Un expediente sucesorio sólido empieza por fijar los hechos,
                reunir los documentos y validar la posición de cada interesado.
                El orden de esas comprobaciones reduce rectificaciones y
                decisiones precipitadas.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                El desorden de una herencia no nace el día de la firma. Nace
                cuando el despacho abre el Word del cuaderno con dos notas
                simples, un Excel a medias y el testamento todavía en el correo
                del heredero. A partir de ahí, cada documento nuevo obliga a
                rehacer un párrafo que ya se había dado por bueno. Ordenar el
                expediente es decidir qué se comprueba antes de escribir.
              </p>

              <h2 className="h2 mt-12 text-ink">Primero los hechos</h2>
              <p className="mt-5">
                Antes del inventario hay tres datos que cambian el resto del
                trabajo: la fecha de defunción, la vecindad civil del causante
                y su último domicilio. La fecha abre el plazo de presentación
                del Impuesto sobre Sucesiones, seis meses desde el
                fallecimiento. La vecindad civil dice qué ley se aplica. Si es
                la catalana, el expediente se mueve en el Libro IV del Codi
                Civil de Catalunya, con institución de heredero, legítima como
                derecho de crédito y un cuaderno que tiene que poder explicar
                esa diferencia. El domicilio afina la competencia y, en la
                práctica, el lugar donde el despacho va a pedir notas,
                certificados y la propia liquidación.
              </p>
              <p className="mt-5">
                He visto cuadernos avanzados que hubo que rehacer porque la
                vecindad se había dado por supuesta a partir del DNI. El
                causante llevaba años empadronado en Girona y había otorgado
                testamento bajo el Código Civil estatal, o al revés. Esa
                comprobación cabe en una nota al abrir el expediente. Más
                tarde cuesta una versión entera.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El título sucesorio, antes que los bienes
              </h2>
              <p className="mt-5">
                Con los hechos fijados, el siguiente bloque es el título: el
                certificado de defunción, el certificado de últimas voluntades
                y, según lo que este diga, el testamento o el acta de
                declaración de herederos. Hasta que ese título no está encima
                de la mesa, valorar un piso es trabajar sobre una hipótesis.
                Puede haber un heredero instituido, un legado de cosa cierta,
                una sustitución, o nadie instituido y una declaración de
                herederos por delante.
              </p>
              <p className="mt-5">
                En este punto también se pide el certificado de contratos de
                seguros de cobertura de fallecimiento. Llega tarde con
                frecuencia, y cuando llega cambia el inventario: hay un
                capital, un beneficiario y, a veces, un modelo 652 que el
                expediente todavía no contemplaba. Pedirlo junto con las
                últimas voluntades evita esa sorpresa en la semana de la
                firma.
              </p>

              <h2 className="h2 mt-12 text-ink">Quién es quién</h2>
              <p className="mt-5">
                El título dice quién está llamado. El expediente tiene que
                decir, además, en qué posición está cada persona. No es la
                misma ficha la del heredero, la del legatario, la del
                legitimario, la del cónyuge o de la pareja, o la de quien
                recibe un usufructo. Mezclarlas en una sola lista de
                «interesados» es la vía corta hacia una adjudicación que
                después no cuadra con el título.
              </p>
              <p className="mt-5">
                En Cataluña la{" "}
                <Link href="/recursos/blog/la-legitima-catalana" className={inlineLink}>
                  legítima
                </Link>{" "}
                es un derecho de crédito, una cuarta parte de la base
                legitimaria, no una cuota de bienes. Hay que saber quién puede
                reclamarla antes de repartir. Si el testamento está cargado de
                legados, la{" "}
                <Link href="/recursos/blog/quarta-falcidia" className={inlineLink}>
                  quarta falcídia
                </Link>{" "}
                se mira aquí, con el título todavía abierto, y no cuando el
                cliente ya ha leído un borrador de cuaderno. Anotar la
                posición de cada persona —y si acepta, repudia o todavía no ha
                dicho nada— deja el expediente en condiciones de adjudicar.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Activo y pasivo, en el mismo sitio
              </h2>
              <p className="mt-5">
                Solo entonces toca el inventario. Cada bien con su
                titularidad, sus cargas y un valor fechado: nota simple del
                inmueble, saldo bancario con fecha, participación en una
                sociedad, vehículo, ajuar. Cada deuda con su documento:
                hipoteca pendiente, préstamo, gasto de sepelio, impuesto
                devengado. Lo que no tiene soporte se anota como pendiente, no
                como cifra cerrada.
              </p>
              <p className="mt-5">
                El error habitual es llevar el activo en una carpeta y el
                pasivo en el correo del gestor. El caudal relicto neto sale de
                restar. Si la hipoteca está en un hilo de hace tres semanas y
                el valor del piso en un Excel de otra persona, la resta se
                hace dos veces y no coincide. Un solo inventario, con la
                versión de cada documento, es la pieza que después alimenta el
                cuaderno y los modelos.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Adjudicar cuando el inventario ya cuadra
              </h2>
              <p className="mt-5">
                El{" "}
                <Link
                  href="/recursos/blog/quadern-particional-cataluna"
                  className={inlineLink}
                >
                  cuaderno particional
                </Link>{" "}
                traduce ese inventario en adjudicaciones. El modelo 660
                declara el mismo caudal. El 650 liquida la cuota de cada
                obligado. Si los tres salen de sitios distintos, el cliente
                firma una historia y la administración lee otra. La
                comprobación útil, antes de citar en notaría, es esta: el bien
                que aparece en el cuaderno está en el 660, la deuda que reduce
                el caudal está en los dos, y la adjudicación de cada persona
                respeta el título y la posición que se anotó al principio.
              </p>
              <p className="mt-5">
                Rectificar en ese momento es incómodo y barato. Rectificar
                después de la firma, o después de presentar, es otro
                expediente.
              </p>

              <h2 className="h2 mt-12 text-ink">Qué cuenta como cerrado</h2>
              <p className="mt-5">
                Un expediente no se cierra porque el Word tenga fecha de hoy.
                Se cierra cuando se puede responder, sin buscar en tres
                bandejas, a cuatro preguntas: qué norma se aplicó y por qué;
                quién aceptó y quién no; cuál es la versión vigente del
                inventario; y qué queda pendiente, con fecha. El plazo de los
                seis meses del ISD forma parte de esa lista, igual que una
                nota simple que todavía no ha llegado o un saldo que el banco
                ha prometido para la semana que viene.
              </p>
              <p className="mt-5">
                Cuando esa lista vive en el expediente y no en la memoria de
                quien lo lleva, el certificado de defunción se pide una vez y
                se reutiliza. El cliente ve en qué punto está. Y la persona
                que retoma el asunto a los dos meses no rehace el trabajo de
                la primera. De eso trata, en la práctica,{" "}
                <Link
                  href="/recursos/blog/gestion-herencias-despacho"
                  className={inlineLink}
                >
                  ordenar la gestión de la herencia en el despacho
                </Link>
                .
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    Fecha de defunción, vecindad civil y último domicilio se
                    fijan antes de inventariar. Cambian la norma y el plazo.
                  </li>
                  <li>
                    El título sucesorio y la posición de cada persona van
                    antes que el valor de los bienes.
                  </li>
                  <li>
                    Activo y pasivo viven en el mismo inventario, con soporte
                    y con fecha. Lo que falta se marca como pendiente.
                  </li>
                  <li>
                    Cuaderno, modelo 660 y modelo 650 tienen que contar el
                    mismo caudal. La comprobación se hace antes de la firma.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Para profesionales del sucesorio</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novedades y doctrina comentadas para profesionales
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Suscríbete a la newsletter quincenal de Ulpiano y descarga el
                  checklist del expediente sucesorio para abrir y cerrar
                  expedientes sin huecos.
                </p>
                <NewsletterSignup />
                <Link
                  href="/recursos/checklist-expediente-sucesorio"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
                >
                  <Download aria-hidden="true" size={18} />
                  Descargar el checklist del expediente sucesorio
                </Link>
              </aside>

              <p className="mt-8 rounded-lg border border-mist bg-surface p-6 text-[15px] leading-7 text-slate">
                Este artículo describe un orden de trabajo de referencia. Cada
                despacho lo adapta a su volumen, a los sistemas que ya usa y a
                la norma del territorio que corresponda al causante.
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/recursos/blog/quadern-particional-cataluna"
        label="Quadern particional"
        description="Cinco pasos para que el cuaderno, el 660 y el 650 cuenten la misma historia."
      />
    </>
  );
}
