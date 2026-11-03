import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "Com ordenar un expedient successori de principi a fi",
  description:
    "L'ordre amb què s'obre un expedient successori evita rectificacions: fets, títol, persones, inventari i només després el quadern i els models.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/ordenar-expedient-successori",
    languages: {
      es: "https://ulpiano.es/recursos/blog/ordenar-expediente-sucesorio",
      ca: "https://ulpiano.es/ca/recursos/blog/ordenar-expedient-successori",
      "x-default": "https://ulpiano.es/recursos/blog/ordenar-expediente-sucesorio",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Com ordenar un expedient successori de principi a fi",
    description:
      "Fixar els fets, aplegar els documents i validar la posició de cada interessat abans d'adjudicar. Aquest ordre redueix rectificacions.",
    url: "https://ulpiano.es/ca/recursos/blog/ordenar-expedient-successori",
    locale: "ca_ES",
    type: "article",
  },
};

const inlineLink =
  "font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light";

export default function OrdenarExpedientSuccessoriPageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "Ordenar un expedient successori",
            href: "/ca/recursos/blog/ordenar-expedient-successori",
          },
        ]}
      />
      <main>
        <article className="pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="container">
            <Link
              href="/ca/recursos/blog"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green no-underline transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
            >
              <ArrowLeft aria-hidden="true" size={18} />
              Torna al blog
            </Link>

            <header className="mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">Processos</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  8 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Com ordenar un expedient successori de principi a fi
              </h1>
              <p className="body-lg mt-6 text-slate">
                Un expedient successori sòlid comença fixant els fets, aplegant
                els documents i validant la posició de cada interessat.
                L&rsquo;ordre d&rsquo;aquestes comprovacions redueix
                rectificacions i decisions precipitades.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                El desordre d&rsquo;una herència no apareix el dia de la
                signatura. Apareix abans, quan el despatx obre el Word del
                quadern amb dues notes simples, un Excel a mitges i el
                testament encara al correu de l&rsquo;hereu. A partir d&rsquo;aquí,
                cada document nou obliga a refer un paràgraf que ja es donava
                per bo. Ordenar l&rsquo;expedient és decidir què es comprova
                abans d&rsquo;escriure.
              </p>

              <h2 className="h2 mt-12 text-ink">Primer, els fets</h2>
              <p className="mt-5">
                Abans de l&rsquo;inventari hi ha tres dades que mouen tota la
                resta: la data de defunció, el veïnatge civil del causant i el
                seu darrer domicili. La data obre el termini de presentació de
                l&rsquo;impost de successions: sis mesos des del decés. El
                veïnatge civil diu quina llei s&rsquo;aplica. Si és la
                catalana, l&rsquo;expedient es mou dins el Llibre IV del Codi
                Civil de Catalunya: institució d&rsquo;hereu, llegítima com a
                dret de crèdit, i un quadern particional capaç d&rsquo;explicar
                aquesta diferència. El domicili concreta la competència i, a
                la pràctica, el lloc on es demanaran notes, certificats i la
                liquidació.
              </p>
              <p className="mt-5">
                He vist quaderns força avançats que es van haver de refer
                perquè el veïnatge s&rsquo;havia donat per fet a partir del
                DNI. El causant feia anys que estava empadronat a Girona i
                havia atorgat testament sota el Codi civil estatal, o a
                l&rsquo;inrevés. Aquesta comprovació cap en una nota el dia que
                s&rsquo;obre l&rsquo;expedient. Més endavant costa una versió
                sencera.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El títol successori, abans que els béns
              </h2>
              <p className="mt-5">
                Amb els fets fixats, el bloc següent és el títol: el certificat
                de defunció, el certificat d&rsquo;últimes voluntats i, segons
                el que aquest digui, el testament o l&rsquo;acta de declaració
                d&rsquo;hereus. Fins que aquest títol no és damunt la taula,
                valorar un pis és treballar sobre una hipòtesi. Hi pot haver
                un hereu instituït, un llegat de cosa certa, una substitució,
                o ningú instituït i una declaració d&rsquo;hereus al davant.
              </p>
              <p className="mt-5">
                En aquest moment també es demana el certificat de contractes
                d&rsquo;assegurança amb cobertura de defunció. Sovint arriba
                tard, i quan arriba canvia l&rsquo;inventari: hi ha un capital,
                un beneficiari i, de vegades, un model 652 que l&rsquo;expedient
                encara no preveia. Demanar-lo juntament amb les últimes
                voluntats estalvia aquesta sorpresa la setmana de la
                signatura.
              </p>

              <h2 className="h2 mt-12 text-ink">Qui és qui</h2>
              <p className="mt-5">
                El títol diu qui és cridat. L&rsquo;expedient ha de dir, a més,
                en quina posició és cada persona. No és la mateixa fitxa la de
                l&rsquo;hereu, la del legatari, la del legitimari, la del
                cònjuge o de la parella, o la de qui rep un usdefruit.
                Barrejar-ho tot en una sola llista d&rsquo;«interessats» és el
                camí curt cap a una adjudicació que després no lliga amb el
                títol.
              </p>
              <p className="mt-5">
                A Catalunya la{" "}
                <Link href="/ca/recursos/blog/la-legitima-catalana" className={inlineLink}>
                  llegítima
                </Link>{" "}
                és un dret de crèdit, una quarta part de la base legitimària,
                no una quota de béns. Cal saber qui la pot reclamar abans de
                repartir. Si el testament va carregat de llegats, la{" "}
                <Link href="/ca/recursos/blog/quarta-falcidia" className={inlineLink}>
                  quarta falcídia
                </Link>{" "}
                es mira aquí, amb el títol encara obert, i no quan el client ja
                ha llegit un esborrany de quadern. Anotar la posició de cada
                persona —i si accepta, repudia o encara no ha dit res— deixa
                l&rsquo;expedient en condicions d&rsquo;adjudicar.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Actiu i passiu, al mateix lloc
              </h2>
              <p className="mt-5">
                Només llavors toca l&rsquo;inventari. Cada bé amb la seva
                titularitat, les càrregues i un valor datat: nota simple de
                l&rsquo;immoble, saldo bancari amb data, participació en una
                societat, vehicle, aixovar. Cada deute amb el seu document:
                hipoteca pendent, préstec, despeses d&rsquo;enterrament, impost meritat.
                El que no té suport s&rsquo;anota com a pendent, no com a
                xifra tancada.
              </p>
              <p className="mt-5">
                L&rsquo;error habitual és portar l&rsquo;actiu en una carpeta i
                el passiu al correu del gestor. El cabal relicte net surt de
                restar. Si la hipoteca és en un fil de fa tres setmanes i el
                valor del pis en un Excel d&rsquo;una altra persona, la resta
                es fa dues vegades i no coincideix. Un sol inventari, amb la
                versió de cada document, és la peça que després alimenta el
                quadern i els models.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Adjudicar quan l&rsquo;inventari ja quadra
              </h2>
              <p className="mt-5">
                El{" "}
                <Link
                  href="/ca/recursos/blog/quadern-particional-catalunya"
                  className={inlineLink}
                >
                  quadern particional
                </Link>{" "}
                tradueix aquest inventari en adjudicacions. El model 660
                declara el mateix cabal. El 650 liquida la quota de cada
                obligat. Si els tres surten de llocs diferents, el client
                signa una història i l&rsquo;administració en llegeix una
                altra. La comprovació útil, abans de citar a la notaria, és
                aquesta: el bé que surt al quadern és al 660, el deute que
                redueix el cabal és a tots dos, i l&rsquo;adjudicació de cada
                persona respecta el títol i la posició anotada al principi.
              </p>
              <p className="mt-5">
                Rectificar en aquest moment és incòmode i barat. Rectificar
                després de la signatura, o després de presentar, és un altre
                expedient.
              </p>

              <h2 className="h2 mt-12 text-ink">Què compta com a tancat</h2>
              <p className="mt-5">
                Un expedient no es tanca perquè el Word porti la data
                d&rsquo;avui. Es tanca quan es pot respondre, sense remenar
                tres safates, a quatre preguntes: quina norma s&rsquo;ha
                aplicat i per què; qui ha acceptat i qui no; quina és la
                versió vigent de l&rsquo;inventari; i què queda pendent, amb
                data. El termini de sis mesos de l&rsquo;ISD forma part
                d&rsquo;aquesta llista, igual que una nota simple que encara
                no ha arribat o un saldo que el banc ha promès per a la
                setmana que ve.
              </p>
              <p className="mt-5">
                Quan aquesta llista viu a l&rsquo;expedient i no a la memòria
                de qui el porta, el certificat de defunció es demana una vegada
                i es reutilitza. El client veu en quin punt és. I la persona
                que reprèn l&rsquo;assumpte al cap de dos mesos no refà la
                feina de la primera. D&rsquo;això tracta, a la pràctica,{" "}
                <Link
                  href="/ca/recursos/blog/gestio-herencies-despatx"
                  className={inlineLink}
                >
                  ordenar la gestió de l&rsquo;herència al despatx
                </Link>
                .
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    Data de defunció, veïnatge civil i darrer domicili es
                    fixen abans d&rsquo;inventariar. Canvien la norma i el
                    termini.
                  </li>
                  <li>
                    El títol successori i la posició de cada persona van abans
                    que el valor dels béns.
                  </li>
                  <li>
                    Actiu i passiu viuen al mateix inventari, amb suport i amb
                    data. El que falta es marca com a pendent.
                  </li>
                  <li>
                    Quadern, model 660 i model 650 han d&rsquo;explicar el
                    mateix cabal. La comprovació es fa abans de la signatura.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Per a professionals del successori</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novetats i doctrina comentades per a professionals
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Subscriu-te a la newsletter quinzenal d&rsquo;Ulpiano i
                  descarrega el checklist de l&rsquo;expedient successori per
                  obrir i tancar expedients sense buits.
                </p>
                <NewsletterSignupCa />
                <Link
                  href="/ca/recursos/checklist-expedient-successori"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
                >
                  <Download aria-hidden="true" size={18} />
                  Descarregar el checklist de l&rsquo;expedient successori
                </Link>
              </aside>

              <p className="mt-8 rounded-lg border border-mist bg-surface p-6 text-[15px] leading-7 text-slate">
                Aquest article descriu un ordre de treball de referència.
                Cada despatx l&rsquo;adapta al seu volum, als sistemes que ja
                fa servir i a la norma del territori que correspon al causant.
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/quadern-particional-catalunya"
        label="Quadern particional"
        description="Cinc passos perquè el quadern, el 660 i el 650 expliquin la mateixa història."
      />
    </>
  );
}
