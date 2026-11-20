import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";
import LegalTable from "@/components/legal/LegalTable";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de ulpiano.es: datos tratados, bases jurídicas, plazos de conservación y ejercicio de derechos.",
  alternates: {
    canonical: "https://ulpiano.es/legal/privacidad",
    languages: {
      es: "https://ulpiano.es/legal/privacidad",
      ca: "https://ulpiano.es/ca/legal/privacitat",
      "x-default": "https://ulpiano.es/legal/privacidad",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/legal/privacidad",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      updatedLabel="Última actualización: 20 de noviembre de 2026"
    >
      <h2>1. Responsable del tratamiento y contacto</h2>
      <p>El responsable del tratamiento de los datos personales regulados en esta política es:</p>
      <IdentidadTitular locale="es" />
      <p>
        Para cualquier cuestión relativa a protección de datos o para el ejercicio de derechos,
        puede dirigirse a <strong>privacidad@ulpiano.es</strong>.
      </p>
      <p>
        <strong>Delegado de Protección de Datos.</strong> Ulpiano no ha designado delegado de
        protección de datos, al no concurrir ninguno de los supuestos del artículo 37.1 RGPD ni del
        artículo 34 LOPDGDD. El canal indicado en el párrafo anterior es el punto de contacto en
        materia de protección de datos.
      </p>

      <h2>2. Alcance de esta política: distinción esencial entre dos universos de datos</h2>
      <p>
        Esta política se aplica <strong>únicamente</strong> a los datos de visitantes de
        ulpiano.es, contactos comerciales, solicitantes de demostración, personas suscritas a la
        newsletter, usuarios que descarguen recursos desde el sitio web y profesionales que
        contacten con Ulpiano en ferias y eventos.
      </p>
      <p>
        Ulpiano actúa como responsable del tratamiento respecto de esos datos, en los términos de
        los artículos 4.7, 5, 6, 12 a 14 y 24 del Reglamento (UE) 2016/679, General de Protección
        de Datos («RGPD»), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
        Personales y garantía de los derechos digitales («LOPDGDD»).
      </p>
      <p>
        Esta política <strong>no</strong> se aplica a los datos personales contenidos en
        expedientes sucesorios, documentos, datos patrimoniales, familiares o tributarios que un
        despacho profesional cliente introduzca o cargue en las aplicaciones de Ulpiano. Respecto
        de esos datos:
      </p>
      <ul>
        <li>
          el despacho profesional cliente determina los fines y medios del tratamiento y es el{" "}
          <strong>responsable del tratamiento</strong>;
        </li>
        <li>
          Ulpiano actúa exclusivamente como <strong>encargado del tratamiento</strong>, por cuenta
          y siguiendo las instrucciones documentadas del despacho, conforme al artículo 28 RGPD; y
        </li>
        <li>
          el tratamiento se rige por el acuerdo de encargo del tratamiento del artículo 28.3
          RGPD que Ulpiano formaliza con cada despacho al contratar la plataforma, y no por esta
          política.
        </li>
      </ul>
      <p>
        Los usuarios particulares que accedan a la plataforma por habilitación de un despacho son{" "}
        <strong>clientes de dicho despacho, no de Ulpiano</strong>. Deben ejercer sus derechos de
        protección de datos frente al despacho responsable, sin perjuicio de la asistencia que
        Ulpiano preste al despacho como encargado.
      </p>

      <h2>3. Datos tratados y finalidades</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Tratamiento</th>
            <th>Datos tratados</th>
            <th>Finalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Formulario de contacto</td>
            <td>Nombre, correo electrónico, empresa, asunto y mensaje.</td>
            <td>Recibir, analizar y contestar consultas remitidas a Ulpiano.</td>
          </tr>
          <tr>
            <td>Solicitud de demostración</td>
            <td>
              Nombre, correo electrónico, nombre del despacho y, de forma opcional, teléfono y
              comentario.
            </td>
            <td>
              Gestionar la solicitud, contactar con el solicitante y organizar o prestar la
              demostración solicitada.
            </td>
          </tr>
          <tr>
            <td>Descarga de recursos</td>
            <td>Nombre, correo electrónico y origen de la captación.</td>
            <td>
              Facilitar el recurso solicitado, acreditar la solicitud y realizar el seguimiento
              comercial asociado.
            </td>
          </tr>
          <tr>
            <td>Suscripción a la newsletter</td>
            <td>Nombre y correo electrónico.</td>
            <td>
              Remitir las ediciones de la newsletter de Ulpiano, con contenidos técnico-jurídicos y
              novedades de la plataforma.
            </td>
          </tr>
          <tr>
            <td>Contactos en ferias y eventos</td>
            <td>
              Nombre, cargo, empresa y datos de contacto profesional que figuran en la acreditación
              del evento o que la persona facilita en el stand, y notas internas sobre la
              conversación (por ejemplo, interés mostrado o volumen aproximado de expedientes).
            </td>
            <td>
              Dar seguimiento a la conversación mantenida con Ulpiano en el evento y, en su caso,
              organizar una demostración.
            </td>
          </tr>
          <tr>
            <td>Comunicaciones comerciales B2B</td>
            <td>Datos de contacto profesional, datos de interacción y preferencias comunicadas.</td>
            <td>
              Remitir información comercial sobre Ulpiano y sus servicios dirigida a despachos,
              asesorías fiscales, gestorías y notarías.
            </td>
          </tr>
          <tr>
            <td>Analítica web</td>
            <td>
              Identificadores en línea, información del navegador y dispositivo, datos de uso y
              navegación, en la medida autorizada mediante cookies o tecnologías equivalentes.
            </td>
            <td>
              Medir y analizar el uso del sitio, mejorar sus contenidos y funcionamiento y elaborar
              estadísticas de audiencia.
            </td>
          </tr>
          <tr>
            <td>Evidencia de consentimiento</td>
            <td>
              Formulario, fecha y hora, texto y versión de la casilla aceptada, versión de esta
              política, idioma, URL de origen y dirección IP.
            </td>
            <td>
              Acreditar el consentimiento prestado y su eventual retirada, conforme al artículo 7.1
              RGPD.
            </td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        Ulpiano no solicita deliberadamente, a través de estos formularios, categorías especiales
        de datos del artículo 9 RGPD. Se ruega no incluirlas en el campo de mensaje. Si se
        reciben, Ulpiano podrá suprimirlas o limitar su tratamiento cuando no sean necesarias para
        atender la consulta.
      </p>
      <p>
        <strong>Origen de los datos.</strong> Los datos se obtienen directamente de la persona
        interesada: a través de los formularios del sitio web o, en ferias y eventos, cuando la
        persona facilita su acreditación o sus datos en el stand de Ulpiano.
      </p>
      <p>
        Los campos marcados como obligatorios en cada formulario son necesarios para atender la
        solicitud. Si no se facilitan, no será posible tramitarla.
      </p>

      <h2>4. Bases jurídicas</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Tratamiento</th>
            <th>Base jurídica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Formulario de contacto, solicitud de demostración y descarga de recursos</td>
            <td>
              Consentimiento de la persona interesada, art. 6.1.a RGPD, manifestado al marcar la
              casilla habilitada al efecto; y, cuando la petición se dirija a la adopción de
              medidas precontractuales solicitadas por la persona interesada, el art. 6.1.b RGPD.
            </td>
          </tr>
          <tr>
            <td>Suscripción a la newsletter</td>
            <td>
              Consentimiento, art. 6.1.a RGPD, y art. 21 LSSI.
            </td>
          </tr>
          <tr>
            <td>
              Gestión de una relación contractual posterior con el contacto o con la organización
              a la que representa
            </td>
            <td>
              Ejecución de un contrato o aplicación de medidas precontractuales, art. 6.1.b RGPD.
            </td>
          </tr>
          <tr>
            <td>Contactos en ferias y eventos</td>
            <td>
              Interés legítimo de Ulpiano en dar seguimiento a una conversación profesional
              iniciada por la propia persona en el evento, art. 6.1.f RGPD. La persona puede
              oponerse en cualquier momento escribiendo a privacidad@ulpiano.es.
            </td>
          </tr>
          <tr>
            <td>
              Comunicaciones comerciales B2B dirigidas a profesionales o a personas de contacto de
              organizaciones
            </td>
            <td>
              Consentimiento, art. 6.1.a RGPD, cuando resulte exigible o haya sido recabado; o
              interés legítimo de Ulpiano en promocionar sus servicios B2B ante potenciales
              clientes profesionales, art. 6.1.f RGPD, respetando en todo caso el derecho de
              oposición y el art. 21.2 LSSI.
            </td>
          </tr>
          <tr>
            <td>Analítica mediante Google Tag Manager y Google Analytics 4</td>
            <td>
              Consentimiento, art. 6.1.a RGPD y art. 22.2 LSSI, otorgado mediante el panel de
              preferencias. Por defecto el consentimiento se mantiene denegado y no se instalan ni
              leen cookies analíticas hasta su aceptación expresa. Mientras no se acepte, Google
              Tag Manager se carga igualmente y Google puede recibir señales técnicas sin cookies
              (por ejemplo, que se ha visitado una página y el estado del consentimiento), que
              trata de forma agregada; para estas señales la base es el interés legítimo de
              Ulpiano en conocer el uso general del sitio, art. 6.1.f RGPD.
            </td>
          </tr>
          <tr>
            <td>Evidencia de consentimiento</td>
            <td>
              Cumplimiento de una obligación legal de responsabilidad proactiva, arts. 5.2 y 7.1
              RGPD, e interés legítimo en la defensa frente a reclamaciones, art. 6.1.f RGPD.
            </td>
          </tr>
          <tr>
            <td>Registros técnicos y de seguridad</td>
            <td>
              Interés legítimo en garantizar la seguridad e integridad del sitio web, art. 6.1.f
              RGPD y considerando 49.
            </td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        La retirada del consentimiento no afecta a la licitud de los tratamientos efectuados antes
        de su retirada. Las preferencias de cookies pueden modificarse o retirarse en cualquier
        momento mediante el enlace permanente <strong>«Ajustes de cookies»</strong> situado en el
        pie de página del sitio web. Para oponerse a comunicaciones comerciales, puede utilizar el
        enlace de baja incluido en cada comunicación o escribir a privacidad@ulpiano.es.
      </p>

      <h2>5. Plazos de conservación</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Tratamiento</th>
            <th>Plazo de conservación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultas del formulario de contacto sin contratación posterior</td>
            <td>
              <strong>12 meses</strong> desde la última interacción con la persona interesada.
            </td>
          </tr>
          <tr>
            <td>Solicitudes de demostración sin contratación posterior</td>
            <td>
              <strong>24 meses</strong> desde la última interacción.
            </td>
          </tr>
          <tr>
            <td>Datos de descarga de recursos y seguimiento comercial asociado</td>
            <td>
              <strong>24 meses</strong> desde la última interacción, o hasta la oposición o
              retirada del consentimiento si es anterior.
            </td>
          </tr>
          <tr>
            <td>Contactos en ferias y eventos sin contratación posterior</td>
            <td>
              <strong>24 meses</strong> desde la última interacción, o hasta la oposición si es
              anterior.
            </td>
          </tr>
          <tr>
            <td>Suscripción a la newsletter</td>
            <td>Hasta la baja de la persona suscrita.</td>
          </tr>
          <tr>
            <td>Comunicaciones comerciales B2B</td>
            <td>Hasta la retirada del consentimiento o el ejercicio del derecho de oposición.</td>
          </tr>
          <tr>
            <td>Evidencia de consentimiento, retirada, oposición y baja</td>
            <td>
              <strong>2 años</strong> desde la retirada, oposición o baja, para acreditar el
              cumplimiento y para la defensa frente a reclamaciones.
            </td>
          </tr>
          <tr>
            <td>Datos derivados de una relación contractual</td>
            <td>
              Durante la vigencia de la relación y, después: <strong>6 años</strong> desde el
              último asiento (art. 30 del Código de Comercio) y <strong>4 años</strong> a efectos
              fiscales (arts. 66 a 70 de la Ley 58/2003, General Tributaria), sin perjuicio de los
              plazos de prescripción civil aplicables.
            </td>
          </tr>
          <tr>
            <td>Datos de analítica web (Google Analytics 4)</td>
            <td>
              <strong>14 meses</strong>, conforme a la configuración de conservación de datos de
              usuario y evento activada en la propiedad.
            </td>
          </tr>
          <tr>
            <td>Registros técnicos y de seguridad del servidor</td>
            <td>
              <strong>12 meses</strong>.
            </td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        Al finalizar el plazo aplicable, los datos se suprimirán o se anonimizarán, salvo que
        deban conservarse bloqueados para la formulación, el ejercicio o la defensa de
        reclamaciones o para cumplir una obligación legal, conforme al artículo 32 LOPDGDD.
      </p>

      <h2>6. Destinatarios, encargados y transferencias internacionales</h2>
      <p>
        Ulpiano <strong>no vende ni cede datos personales a terceros para sus propios fines
        comerciales</strong>. Podrán acceder a los datos, en calidad de encargados del tratamiento
        y exclusivamente para prestar sus servicios a Ulpiano:
      </p>
      <LegalTable>
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Servicio</th>
            <th>Entidad contratante y tratamiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>HubSpot</strong>
            </td>
            <td>CRM y gestión de los datos obtenidos mediante formularios del sitio web.</td>
            <td>
              HubSpot Ireland Limited (Irlanda) para clientes del EEE. Puede existir acceso desde
              HubSpot, Inc. (Estados Unidos) como subencargado.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Vercel</strong>
            </td>
            <td>Alojamiento y ejecución de la infraestructura del sitio web.</td>
            <td>
              Vercel, Inc. (Estados Unidos). Las funciones de servidor del sitio se ejecutan en la
              región de <strong>Fráncfort (Alemania)</strong>. Puede existir acceso de soporte
              desde Estados Unidos.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Google Tag Manager y Google Analytics 4</strong>
            </td>
            <td>
              Gestión de etiquetas y analítica web. Las cookies analíticas solo se instalan tras
              el consentimiento.
            </td>
            <td>
              Google Ireland Limited (Irlanda). Puede existir acceso desde Google LLC (Estados
              Unidos) como subencargado.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Google Workspace</strong>
            </td>
            <td>
              Correo electrónico y ofimática corporativa, incluidos los avisos internos de las
              solicitudes recibidas por los formularios y la gestión de los contactos de ferias y
              eventos.
            </td>
            <td>Google Ireland Limited (Irlanda).</td>
          </tr>
          <tr>
            <td>
              <strong>Hostkey</strong>
            </td>
            <td>
              Alojamiento de la herramienta de soporte de Ulpiano, donde se registran las
              solicitudes recibidas por los formularios del sitio web.
            </td>
            <td>Hostkey B.V. (Países Bajos), en servidores situados en la Unión Europea.</td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        También podrán ser destinatarios las autoridades y organismos públicos cuando exista una
        obligación legal, requerimiento válido o sea necesario para la formulación, ejercicio o
        defensa de reclamaciones.
      </p>
      <p>
        <strong>Proveedores y sus políticas.</strong> Ulpiano utiliza estos servicios de
        terceros para operar el sitio web y gestionar los datos recabados a través de él. El
        tratamiento que cada proveedor realiza se rige por su propia política de privacidad:
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
        <strong>Transferencias internacionales.</strong> HubSpot, Vercel y Google pueden tratar
        datos desde Estados Unidos. HubSpot, Inc., Vercel, Inc. y Google LLC están certificadas en
        el Marco de Privacidad de Datos UE-EE. UU. (EU-U.S. Data Privacy Framework), que cuenta
        con una decisión de adecuación de la Comisión Europea de 10 de julio de 2023 (art. 45
        RGPD). Además, sus acuerdos de tratamiento de datos incorporan las cláusulas
        contractuales tipo aprobadas por la Comisión Europea (art. 46.2.c RGPD). Puede pedir más
        información sobre estas garantías en privacidad@ulpiano.es.
      </p>

      <h2>7. Derechos de las personas interesadas</h2>
      <p>
        La persona interesada puede solicitar a Ulpiano el <strong>acceso</strong> a sus datos, su{" "}
        <strong>rectificación</strong> o <strong>supresión</strong>, la{" "}
        <strong>limitación</strong> de su tratamiento, la <strong>oposición</strong> al
        tratamiento y la <strong>portabilidad</strong> de los datos, en los supuestos y con el
        alcance previstos en los artículos 15 a 21 RGPD. Cuando el tratamiento se base en el
        consentimiento, podrá <strong>retirarlo</strong> en cualquier momento conforme al
        artículo 7.3 RGPD.
      </p>
      <p>
        Para ejercer estos derechos, deberá remitir una solicitud a{" "}
        <strong>privacidad@ulpiano.es</strong>, indicando el derecho que desea ejercitar y
        adjuntando la información necesaria para verificar razonablemente su identidad. Ulpiano
        responderá en los plazos establecidos por el artículo 12.3 RGPD.
      </p>
      <p>
        La persona interesada tiene igualmente derecho a presentar una reclamación ante la{" "}
        <strong>Agencia Española de Protección de Datos (AEPD)</strong>, C/ Jorge Juan 6, 28001
        Madrid, www.aepd.es, especialmente cuando considere que el tratamiento no se ajusta a la
        normativa aplicable.
      </p>

      <h2>8. Decisiones automatizadas</h2>
      <p>
        Ulpiano no adopta, respecto de los visitantes del sitio web, decisiones basadas
        únicamente en tratamientos automatizados que produzcan efectos jurídicos sobre ellos o les
        afecten significativamente de modo similar, en el sentido del artículo 22 RGPD.
      </p>

      <h2>9. Medidas de seguridad</h2>
      <p>
        Ulpiano aplica medidas técnicas y organizativas apropiadas para proteger los datos frente
        a la destrucción, pérdida, alteración, divulgación o acceso no autorizados, atendiendo a
        la naturaleza del tratamiento y a los riesgos identificados, conforme al artículo 32
        RGPD. Entre ellas se incluyen el cifrado de las comunicaciones, controles de acceso por
        rol, separación lógica de datos y registros de auditoría.
      </p>
      <p>
        Estas medidas se revisan y actualizan atendiendo a la evolución de los riesgos, las
        funcionalidades del sitio y los proveedores efectivamente utilizados. La seguridad
        absoluta no existe; por ello, Ulpiano gestiona los incidentes de seguridad conforme a sus
        procedimientos internos y a las obligaciones de los artículos 33 y 34 RGPD cuando
        resulten aplicables.
      </p>

      <h2>10. Cookies y tecnologías equivalentes</h2>
      <p>
        El sitio utiliza Google Tag Manager y Google Analytics 4. Las cookies analíticas y, en su
        caso, las de marketing se instalan{" "}
        <strong>únicamente cuando la persona usuaria presta su consentimiento</strong> a través
        del panel de preferencias. El Consent Mode v2 se configura con el consentimiento denegado
        por defecto; mientras no se acepte, Google puede recibir las señales técnicas sin cookies
        descritas en el apartado 4.
      </p>
      <p>
        La información detallada sobre cookies, proveedores, finalidades, duraciones y
        mecanismos de aceptación, rechazo o revocación figura en la{" "}
        <Link href="/legal/cookies">Política de Cookies</Link>.
      </p>

      <h2>11. Actualizaciones de esta política</h2>
      <p>
        Ulpiano podrá actualizar esta política para reflejar cambios normativos, técnicos u
        operativos. La versión vigente será la publicada en el sitio web, identificada por su
        fecha de última actualización. Cuando un cambio afecte de forma sustancial a las
        finalidades, bases jurídicas o destinatarios sobre los que se recabó el consentimiento,
        Ulpiano lo comunicará y, cuando resulte exigible, recabará de nuevo el consentimiento
        antes de aplicar el tratamiento afectado.
      </p>
    </LegalPage>
  );
}
