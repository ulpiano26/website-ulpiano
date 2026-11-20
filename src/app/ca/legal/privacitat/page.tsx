/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";
import LegalTable from "@/components/legal/LegalTable";

export const metadata: Metadata = {
  title: "Política de Privacitat",
  description:
    "Política de privacitat d'ulpiano.es: dades tractades, bases jurídiques, terminis de conservació i exercici de drets.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/privacitat",
    languages: {
      es: "https://ulpiano.es/legal/privacidad",
      ca: "https://ulpiano.es/ca/legal/privacitat",
      "x-default": "https://ulpiano.es/legal/privacidad",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/legal/privacitat",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function PrivacitatPage() {
  return (
    <LegalPage
      title="Política de Privacitat"
      updatedLabel="Darrera actualització: 20 de novembre de 2026"
    >
      <h2>1. Responsable del tractament i contacte</h2>
      <p>El responsable del tractament de les dades personals regulades en aquesta política és:</p>
      <IdentidadTitular locale="ca" />
      <p>
        Per a qualsevol qüestió relativa a protecció de dades o per a l'exercici de drets, us
        podeu adreçar a <strong>privacidad@ulpiano.es</strong>.
      </p>
      <p>
        <strong>Delegat de Protecció de Dades.</strong> Ulpiano no ha designat delegat de
        protecció de dades, atès que no concorre cap dels supòsits de l'article 37.1 RGPD ni de
        l'article 34 LOPDGDD. El canal indicat al paràgraf anterior és el punt de contacte en
        matèria de protecció de dades.
      </p>

      <h2>2. Abast d'aquesta política: distinció essencial entre dos universos de dades</h2>
      <p>
        Aquesta política s'aplica <strong>únicament</strong> a les dades de visitants
        d'ulpiano.es, contactes comercials, sol·licitants de demostració, persones subscrites a la
        newsletter, usuaris que descarreguin recursos des del lloc web i professionals que
        contactin amb Ulpiano en fires i esdeveniments.
      </p>
      <p>
        Ulpiano actua com a responsable del tractament respecte d'aquestes dades, en els termes
        dels articles 4.7, 5, 6, 12 a 14 i 24 del Reglament (UE) 2016/679, General de Protecció de
        Dades («RGPD»), i de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades
        Personals i garantia dels drets digitals («LOPDGDD»).
      </p>
      <p>
        Aquesta política <strong>no</strong> s'aplica a les dades personals contingudes en
        expedients successoris, documents, dades patrimonials, familiars o tributàries que un
        despatx professional client introdueixi o carregui a les aplicacions d'Ulpiano. Respecte
        d'aquestes dades:
      </p>
      <ul>
        <li>
          el despatx professional client determina les finalitats i els mitjans del tractament i
          és el <strong>responsable del tractament</strong>;
        </li>
        <li>
          Ulpiano actua exclusivament com a <strong>encarregat del tractament</strong>, per compte
          i seguint les instruccions documentades del despatx, d'acord amb l'article 28 RGPD; i
        </li>
        <li>
          el tractament es regeix per l'acord d'encàrrec del tractament de l'article 28.3 RGPD
          que Ulpiano formalitza amb cada despatx en contractar la plataforma, i no per aquesta
          política.
        </li>
      </ul>
      <p>
        Els usuaris particulars que accedeixin a la plataforma per habilitació d'un despatx són{" "}
        <strong>clients d'aquest despatx, no d'Ulpiano</strong>. Han d'exercir els seus drets de
        protecció de dades davant del despatx responsable, sens perjudici de l'assistència que
        Ulpiano presti al despatx com a encarregat.
      </p>

      <h2>3. Dades tractades i finalitats</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Tractament</th>
            <th>Dades tractades</th>
            <th>Finalitat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Formulari de contacte</td>
            <td>Nom, correu electrònic, empresa, assumpte i missatge.</td>
            <td>Rebre, analitzar i respondre les consultes trameses a Ulpiano.</td>
          </tr>
          <tr>
            <td>Sol·licitud de demostració</td>
            <td>
              Nom, correu electrònic, nom del despatx i, de manera opcional, telèfon i comentari.
            </td>
            <td>
              Gestionar la sol·licitud, contactar amb el sol·licitant i organitzar o prestar la
              demostració sol·licitada.
            </td>
          </tr>
          <tr>
            <td>Descàrrega de recursos</td>
            <td>Nom, correu electrònic i origen de la captació.</td>
            <td>
              Facilitar el recurs sol·licitat, acreditar la sol·licitud i fer el seguiment
              comercial associat.
            </td>
          </tr>
          <tr>
            <td>Subscripció a la newsletter</td>
            <td>Nom i correu electrònic.</td>
            <td>
              Trametre les edicions de la newsletter d'Ulpiano, amb continguts tecnicojurídics i
              novetats de la plataforma.
            </td>
          </tr>
          <tr>
            <td>Contactes en fires i esdeveniments</td>
            <td>
              Nom, càrrec, empresa i dades de contacte professional que figuren a l'acreditació de
              l'esdeveniment o que la persona facilita a l'estand, i notes internes sobre la
              conversa (per exemple, l'interès mostrat o el volum aproximat d'expedients).
            </td>
            <td>
              Fer el seguiment de la conversa mantinguda amb Ulpiano a l'esdeveniment i, si escau,
              organitzar una demostració.
            </td>
          </tr>
          <tr>
            <td>Comunicacions comercials B2B</td>
            <td>
              Dades de contacte professional, dades d'interacció i preferències comunicades.
            </td>
            <td>
              Trametre informació comercial sobre Ulpiano i els seus serveis adreçada a despatxos,
              assessories fiscals, gestories i notaries.
            </td>
          </tr>
          <tr>
            <td>Analítica web</td>
            <td>
              Identificadors en línia, informació del navegador i dispositiu, dades d'ús i
              navegació, en la mesura autoritzada mitjançant cookies o tecnologies equivalents.
            </td>
            <td>
              Mesurar i analitzar l'ús del lloc, millorar-ne els continguts i el funcionament i
              elaborar estadístiques d'audiència.
            </td>
          </tr>
          <tr>
            <td>Evidència de consentiment</td>
            <td>
              Formulari, data i hora, text i versió de la casella acceptada, versió d'aquesta
              política, idioma, URL d'origen i adreça IP.
            </td>
            <td>
              Acreditar el consentiment prestat i la seva eventual retirada, d'acord amb
              l'article 7.1 RGPD.
            </td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        Ulpiano no sol·licita deliberadament, per mitjà d'aquests formularis, categories especials
        de dades de l'article 9 RGPD. Us preguem que no les incloeu al camp de missatge. Si se'n
        reben, Ulpiano les podrà suprimir o limitar-ne el tractament quan no siguin necessàries
        per atendre la consulta.
      </p>
      <p>
        <strong>Origen de les dades.</strong> Les dades s'obtenen directament de la persona
        interessada: per mitjà dels formularis del lloc web o, en fires i esdeveniments, quan la
        persona facilita la seva acreditació o les seves dades a l'estand d'Ulpiano.
      </p>
      <p>
        Els camps marcats com a obligatoris a cada formulari són necessaris per atendre la
        sol·licitud. Si no es faciliten, no serà possible tramitar-la.
      </p>

      <h2>4. Bases jurídiques</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Tractament</th>
            <th>Base jurídica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Formulari de contacte, sol·licitud de demostració i descàrrega de recursos</td>
            <td>
              Consentiment de la persona interessada, art. 6.1.a RGPD, manifestat en marcar la
              casella habilitada a aquest efecte; i, quan la petició s'adreci a l'adopció de
              mesures precontractuals sol·licitades per la persona interessada, l'art. 6.1.b RGPD.
            </td>
          </tr>
          <tr>
            <td>Subscripció a la newsletter</td>
            <td>
              Consentiment, art. 6.1.a RGPD, i art. 21 LSSI.
            </td>
          </tr>
          <tr>
            <td>
              Gestió d'una relació contractual posterior amb el contacte o amb l'organització que
              representa
            </td>
            <td>
              Execució d'un contracte o aplicació de mesures precontractuals, art. 6.1.b RGPD.
            </td>
          </tr>
          <tr>
            <td>Contactes en fires i esdeveniments</td>
            <td>
              Interès legítim d'Ulpiano a fer el seguiment d'una conversa professional iniciada
              per la mateixa persona a l'esdeveniment, art. 6.1.f RGPD. La persona s'hi pot oposar
              en qualsevol moment escrivint a privacidad@ulpiano.es.
            </td>
          </tr>
          <tr>
            <td>
              Comunicacions comercials B2B adreçades a professionals o a persones de contacte
              d'organitzacions
            </td>
            <td>
              Consentiment, art. 6.1.a RGPD, quan sigui exigible o hagi estat recollit; o interès
              legítim d'Ulpiano a promocionar els seus serveis B2B davant de potencials clients
              professionals, art. 6.1.f RGPD, respectant en tot cas el dret d'oposició i l'art.
              21.2 LSSI.
            </td>
          </tr>
          <tr>
            <td>Analítica mitjançant Google Tag Manager i Google Analytics 4</td>
            <td>
              Consentiment, art. 6.1.a RGPD i art. 22.2 LSSI, atorgat mitjançant el panell de
              preferències. Per defecte, el consentiment es manté denegat i no s'instal·len ni es
              llegeixen cookies analítiques fins a la seva acceptació expressa. Mentre no
              s'accepti, Google Tag Manager es carrega igualment i Google pot rebre senyals tècnics
              sense cookies (per exemple, que s'ha visitat una pàgina i l'estat del
              consentiment), que tracta de manera agregada; per a aquests senyals la base és
              l'interès legítim d'Ulpiano a conèixer l'ús general del lloc, art. 6.1.f RGPD.
            </td>
          </tr>
          <tr>
            <td>Evidència de consentiment</td>
            <td>
              Compliment d'una obligació legal de responsabilitat proactiva, arts. 5.2 i 7.1
              RGPD, i interès legítim en la defensa davant de reclamacions, art. 6.1.f RGPD.
            </td>
          </tr>
          <tr>
            <td>Registres tècnics i de seguretat</td>
            <td>
              Interès legítim a garantir la seguretat i la integritat del lloc web, art. 6.1.f
              RGPD i considerant 49.
            </td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        La retirada del consentiment no afecta la licitud dels tractaments efectuats abans de la
        seva retirada. Les preferències de cookies es poden modificar o retirar en qualsevol
        moment mitjançant l'enllaç permanent <strong>«Ajustos de cookies»</strong> situat al peu
        de pàgina del lloc web. Per oposar-vos a comunicacions comercials, podeu utilitzar
        l'enllaç de baixa inclòs a cada comunicació o escriure a privacidad@ulpiano.es.
      </p>

      <h2>5. Terminis de conservació</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Tractament</th>
            <th>Termini de conservació</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultes del formulari de contacte sense contractació posterior</td>
            <td>
              <strong>12 mesos</strong> des de la darrera interacció amb la persona interessada.
            </td>
          </tr>
          <tr>
            <td>Sol·licituds de demostració sense contractació posterior</td>
            <td>
              <strong>24 mesos</strong> des de la darrera interacció.
            </td>
          </tr>
          <tr>
            <td>Dades de descàrrega de recursos i seguiment comercial associat</td>
            <td>
              <strong>24 mesos</strong> des de la darrera interacció, o fins a l'oposició o
              retirada del consentiment si és anterior.
            </td>
          </tr>
          <tr>
            <td>Contactes en fires i esdeveniments sense contractació posterior</td>
            <td>
              <strong>24 mesos</strong> des de la darrera interacció, o fins a l'oposició si és
              anterior.
            </td>
          </tr>
          <tr>
            <td>Subscripció a la newsletter</td>
            <td>Fins a la baixa de la persona subscrita.</td>
          </tr>
          <tr>
            <td>Comunicacions comercials B2B</td>
            <td>Fins a la retirada del consentiment o l'exercici del dret d'oposició.</td>
          </tr>
          <tr>
            <td>Evidència de consentiment, retirada, oposició i baixa</td>
            <td>
              <strong>2 anys</strong> des de la retirada, oposició o baixa, per acreditar-ne el
              compliment i per a la defensa davant de reclamacions.
            </td>
          </tr>
          <tr>
            <td>Dades derivades d'una relació contractual</td>
            <td>
              Durant la vigència de la relació i, després: <strong>6 anys</strong> des del darrer
              assentament (art. 30 del Codi de Comerç) i <strong>4 anys</strong> a efectes fiscals
              (arts. 66 a 70 de la Llei 58/2003, General Tributària), sens perjudici dels
              terminis de prescripció civil aplicables.
            </td>
          </tr>
          <tr>
            <td>Dades d'analítica web (Google Analytics 4)</td>
            <td>
              <strong>14 mesos</strong>, d'acord amb la configuració de conservació de dades
              d'usuari i esdeveniment activada a la propietat.
            </td>
          </tr>
          <tr>
            <td>Registres tècnics i de seguretat del servidor</td>
            <td>
              <strong>12 mesos</strong>.
            </td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        En finalitzar el termini aplicable, les dades se suprimiran o s'anonimitzaran, llevat que
        s'hagin de conservar bloquejades per a la formulació, l'exercici o la defensa de
        reclamacions o per complir una obligació legal, d'acord amb l'article 32 LOPDGDD.
      </p>

      <h2>6. Destinataris, encarregats i transferències internacionals</h2>
      <p>
        Ulpiano <strong>no ven ni cedeix dades personals a tercers per a les seves pròpies
        finalitats comercials</strong>. Podran accedir a les dades, en qualitat d'encarregats del
        tractament i exclusivament per prestar els seus serveis a Ulpiano:
      </p>
      <LegalTable>
        <thead>
          <tr>
            <th>Proveïdor</th>
            <th>Servei</th>
            <th>Entitat contractant i tractament</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>HubSpot</strong>
            </td>
            <td>CRM i gestió de les dades obtingudes mitjançant formularis del lloc web.</td>
            <td>
              HubSpot Ireland Limited (Irlanda) per a clients de l'EEE. Pot existir accés des de
              HubSpot, Inc. (Estats Units) com a subencarregat.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Vercel</strong>
            </td>
            <td>Allotjament i execució de la infraestructura del lloc web.</td>
            <td>
              Vercel, Inc. (Estats Units). Les funcions de servidor del lloc s'executen a la
              regió de <strong>Frankfurt (Alemanya)</strong>. Pot existir accés de suport des dels
              Estats Units.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Google Tag Manager i Google Analytics 4</strong>
            </td>
            <td>
              Gestió d'etiquetes i analítica web. Les cookies analítiques només s'instal·len
              després del consentiment.
            </td>
            <td>
              Google Ireland Limited (Irlanda). Pot existir accés des de Google LLC (Estats Units)
              com a subencarregat.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Google Workspace</strong>
            </td>
            <td>
              Correu electrònic i ofimàtica corporativa, inclosos els avisos interns de les
              sol·licituds rebudes pels formularis i la gestió dels contactes de fires i
              esdeveniments.
            </td>
            <td>Google Ireland Limited (Irlanda).</td>
          </tr>
          <tr>
            <td>
              <strong>Hostkey</strong>
            </td>
            <td>
              Allotjament de l'eina de suport d'Ulpiano, on es registren les sol·licituds rebudes
              pels formularis del lloc web.
            </td>
            <td>Hostkey B.V. (Països Baixos), en servidors situats a la Unió Europea.</td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        També podran ser destinataris les autoritats i els organismes públics quan hi hagi una
        obligació legal, un requeriment vàlid o sigui necessari per a la formulació, l'exercici o
        la defensa de reclamacions.
      </p>
      <p>
        <strong>Proveïdors i les seves polítiques.</strong> Ulpiano utilitza aquests serveis de
        tercers per operar el lloc web i gestionar les dades recollides per mitjà seu. El
        tractament que cada proveïdor realitza es regeix per la seva pròpia política de
        privacitat:
      </p>
      <ul>
        <li>
          HubSpot:{" "}
          <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            https://legal.hubspot.com/privacy-policy
          </a>
        </li>
        <li>
          Vercel:{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            https://vercel.com/legal/privacy-policy
          </a>
        </li>
        <li>
          Google:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
        </li>
      </ul>
      <p>
        <strong>Transferències internacionals.</strong> HubSpot, Vercel i Google poden tractar
        dades des dels Estats Units. HubSpot, Inc., Vercel, Inc. i Google LLC estan certificades
        en el Marc de Privacitat de Dades UE-EUA (EU-U.S. Data Privacy Framework), que compta amb
        una decisió d'adequació de la Comissió Europea de 10 de juliol de 2023 (art. 45 RGPD). A
        més, els seus acords de tractament de dades incorporen les clàusules contractuals tipus
        aprovades per la Comissió Europea (art. 46.2.c RGPD). Podeu demanar més informació sobre
        aquestes garanties a privacidad@ulpiano.es.
      </p>

      <h2>7. Drets de les persones interessades</h2>
      <p>
        La persona interessada pot sol·licitar a Ulpiano l'<strong>accés</strong> a les seves
        dades, la seva <strong>rectificació</strong> o <strong>supressió</strong>, la{" "}
        <strong>limitació</strong> del seu tractament, l'<strong>oposició</strong> al tractament i
        la <strong>portabilitat</strong> de les dades, en els supòsits i amb l'abast previstos
        als articles 15 a 21 RGPD. Quan el tractament es basi en el consentiment, el podrà{" "}
        <strong>retirar</strong> en qualsevol moment d'acord amb l'article 7.3 RGPD.
      </p>
      <p>
        Per exercir aquests drets, cal trametre una sol·licitud a{" "}
        <strong>privacidad@ulpiano.es</strong>, indicant el dret que es vol exercir i adjuntant
        la informació necessària per verificar raonablement la seva identitat. Ulpiano respondrà
        en els terminis establerts per l'article 12.3 RGPD.
      </p>
      <p>
        La persona interessada té igualment dret a presentar una reclamació davant de l'
        <strong>Agència Espanyola de Protecció de Dades (AEPD)</strong>, C/ Jorge Juan 6, 28001
        Madrid, www.aepd.es, especialment quan consideri que el tractament no s'ajusta a la
        normativa aplicable.
      </p>

      <h2>8. Decisions automatitzades</h2>
      <p>
        Ulpiano no adopta, respecte dels visitants del lloc web, decisions basades únicament en
        tractaments automatitzats que produeixin efectes jurídics sobre ells o els afectin
        significativament de manera similar, en el sentit de l'article 22 RGPD.
      </p>

      <h2>9. Mesures de seguretat</h2>
      <p>
        Ulpiano aplica mesures tècniques i organitzatives apropiades per protegir les dades davant
        de la destrucció, pèrdua, alteració, divulgació o accés no autoritzats, atenent la
        naturalesa del tractament i els riscos identificats, d'acord amb l'article 32 RGPD. Entre
        aquestes s'inclouen el xifratge de les comunicacions, controls d'accés per rol, separació
        lògica de dades i registres d'auditoria.
      </p>
      <p>
        Aquestes mesures es revisen i s'actualitzen atenent l'evolució dels riscos, les
        funcionalitats del lloc i els proveïdors efectivament utilitzats. La seguretat absoluta no
        existeix; per això, Ulpiano gestiona els incidents de seguretat d'acord amb els seus
        procediments interns i amb les obligacions dels articles 33 i 34 RGPD quan resultin
        aplicables.
      </p>

      <h2>10. Cookies i tecnologies equivalents</h2>
      <p>
        El lloc utilitza Google Tag Manager i Google Analytics 4. Les cookies analítiques i, si
        escau, les de màrqueting s'instal·len{" "}
        <strong>únicament quan la persona usuària presta el seu consentiment</strong> per mitjà
        del panell de preferències. El Consent Mode v2 es configura amb el consentiment denegat
        per defecte; mentre no s'accepti, Google pot rebre els senyals tècnics sense cookies
        descrits a l'apartat 4.
      </p>
      <p>
        La informació detallada sobre cookies, proveïdors, finalitats, durades i mecanismes
        d'acceptació, rebuig o revocació figura a la{" "}
        <Link href="/ca/legal/cookies">Política de Cookies</Link>.
      </p>

      <h2>11. Actualitzacions d'aquesta política</h2>
      <p>
        Ulpiano podrà actualitzar aquesta política per reflectir canvis normatius, tècnics o
        operatius. La versió vigent serà la publicada al lloc web, identificada per la seva data
        de darrera actualització. Quan un canvi afecti de manera substancial les finalitats,
        bases jurídiques o destinataris sobre els quals es va recollir el consentiment, Ulpiano
        ho comunicarà i, quan resulti exigible, recollirà de nou el consentiment abans d'aplicar
        el tractament afectat.
      </p>
    </LegalPage>
  );
}
