/**
 * Email nurture sequence for the "Checklist Sucesorio" lead magnet.
 *
 * 4 emails spaced over ~10 days:
 *  - Email 1 (immediate): delivery + hook on digital assets
 *  - Email 2 (day 3): case study — time saved per case
 *  - Email 3 (day 7): hidden cost of ISD errors
 *  - Email 4 (day 10): personal demo invitation
 *
 * Integration note: when connecting Resend/Loops/Mailchimp,
 * import these templates and schedule with the provider's API.
 * Each email returns { subject, preheader, html } for the given name.
 */

export interface EmailTemplate {
  id: string;
  delayDays: number;
  subject: string;
  preheader: string;
  body: (name: string) => string;
}

const FOOTER = `
<tr>
  <td style="padding:32px 24px 24px;border-top:1px solid #CBD5E1;font-size:12px;color:#94A3B8;line-height:1.6;">
    Ulpiano · Plataforma de gestión sucesoria integral<br>
    <a href="https://ulpiano.es" style="color:#2D6A4F;text-decoration:none;">ulpiano.es</a><br><br>
    Recibes este email porque descargaste la checklist del expediente sucesorio.<br>
    <a href="%UNSUBSCRIBE_URL%" style="color:#94A3B8;text-decoration:underline;">Darme de baja</a>
  </td>
</tr>`;

function wrap(content: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Inter',system-ui,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;">
<tr><td align="center" style="padding:24px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:12px;border:1px solid #CBD5E1;max-width:600px;width:100%;">
<tr>
  <td style="padding:24px 24px 16px;">
    <span style="font-family:'DM Sans',sans-serif;font-weight:700;font-size:20px;color:#0F1F3D;">Ulpiano</span>
  </td>
</tr>
${content}
${FOOTER}
</table>
</td></tr>
</table>
</body>
</html>`;
}

function cta(text: string, url: string): string {
  return `<a href="${url}" style="display:inline-block;background:#2D6A4F;color:#FFFFFF;font-weight:600;font-size:15px;padding:14px 28px;border-radius:8px;text-decoration:none;margin-top:8px;">${text}</a>`;
}

export const checklistSequence: EmailTemplate[] = [
  {
    id: "checklist-01-delivery",
    delayDays: 0,
    subject: "Tu checklist del expediente sucesorio — 47 puntos de control",
    preheader: "Descarga directa + un punto que sorprende a muchos profesionales",
    body: (name: string) => wrap(`
<tr>
  <td style="padding:0 24px 24px;font-size:15px;color:#1E293B;line-height:1.7;">
    <p>Hola${name ? ` ${name.split(" ")[0]}` : ""},</p>
    <p>Gracias por descargar la <strong>Checklist del Expediente Sucesorio en Cataluña</strong>. Aquí tienes tu enlace de descarga directa:</p>
    <p style="text-align:center;margin:24px 0;">
      ${cta("Descargar checklist (PDF)", "https://ulpiano.es/recursos/checklist-sucesorio-cataluna.html")}
    </p>
    <p>Un punto que sorprende a muchos profesionales: el <strong>punto 19 — Activos digitales</strong>.</p>
    <p>Criptomonedas, wallets, exchanges... cada vez más expedientes incluyen activos digitales que tributan en ISD pero que muchos despachos no incorporan al inventario de forma estructurada. La checklist te recuerda qué documentar y cómo valorarlos a fecha de devengo.</p>
    <p>Es uno de los diferenciadores que construimos en Ulpiano: un sistema que trata los activos digitales como categoría fiscal de primer nivel, no como una nota al pie.</p>
    <p style="color:#64748B;font-size:14px;margin-top:24px;">¿Te resulta útil la checklist? Responde a este email — leo todas las respuestas.</p>
    <p style="margin-top:24px;">Un saludo,<br><strong>Equipo Ulpiano</strong></p>
  </td>
</tr>`),
  },

  {
    id: "checklist-02-case-study",
    delayDays: 3,
    subject: "De 15 horas a 6: cómo se reparte un expediente complejo",
    preheader: "Inventario, legítima e ISD sobre un expediente de ejemplo",
    body: (name: string) => wrap(`
<tr>
  <td style="padding:0 24px 24px;font-size:15px;color:#1E293B;line-height:1.7;">
    <p>Hola${name ? ` ${name.split(" ")[0]}` : ""},</p>
    <p>Un expediente sucesorio con domicilio fiscal en Cataluña, 3 herederos, un inmueble con cargas, participaciones en una SL familiar y un heredero residente en Francia. Así se reparte el trabajo, a modo de ejemplo:</p>
    <p><strong>Antes de Ulpiano:</strong></p>
    <ul style="padding-left:20px;color:#64748B;">
      <li>Cálculo de legítimas: 2 horas en Excel con verificación manual del CCCat</li>
      <li>Liquidación ISD: 4 horas por heredero (aplicar reducciones, bonificaciones, verificar tablas)</li>
      <li>Coordinación con el asesor fiscal: emails y llamadas durante 3 semanas</li>
      <li>Total estimado: <strong>15 horas de trabajo técnico</strong></li>
    </ul>
    <p><strong>Con Ulpiano:</strong></p>
    <ul style="padding-left:20px;color:#64748B;">
      <li>Inventario estructurado en la plataforma: 1 hora</li>
      <li>Legítima y cuotas calculadas automáticamente con norma citada</li>
      <li>ISD liquidado en paralelo para los 3 herederos: 45 minutos de revisión</li>
      <li>Total: <strong>6 horas</strong>, con trazabilidad completa</li>
    </ul>
    <p>Eso son <strong>9 horas recuperadas</strong> en un solo expediente.</p>
    <p>Si gestionas 30 expedientes al año, estamos hablando de <strong>270 horas</strong>: más de un mes de trabajo que puedes dedicar a tus clientes o a hacer crecer el despacho.</p>
    <p style="text-align:center;margin:24px 0;">
      ${cta("Ver cómo funciona Ulpiano", "https://ulpiano.es/demo")}
    </p>
    <p>Un saludo,<br><strong>Equipo Ulpiano</strong></p>
  </td>
</tr>`),
  },

  {
    id: "checklist-03-isd-errors",
    delayDays: 7,
    subject: "El error de ISD que puede costarte más que perder un cliente",
    preheader: "No aplicar una reducción en plazo tiene consecuencias reales",
    body: (name: string) => wrap(`
<tr>
  <td style="padding:0 24px 24px;font-size:15px;color:#1E293B;line-height:1.7;">
    <p>Hola${name ? ` ${name.split(" ")[0]}` : ""},</p>
    <p>En la gestión sucesoria hay errores que se ven y errores que solo aparecen cuando es tarde.</p>
    <p>Algunos de los errores más frecuentes al liquidar el ISD:</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;border:1px solid #CBD5E1;border-radius:8px;overflow:hidden;">
      <tr style="background:#F1F5F9;">
        <td style="padding:10px 16px;font-weight:600;font-size:13px;color:#64748B;border-bottom:1px solid #CBD5E1;">Error</td>
        <td style="padding:10px 16px;font-weight:600;font-size:13px;color:#64748B;border-bottom:1px solid #CBD5E1;">Consecuencia</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid rgba(203,213,225,0.4);">No aplicar reducción de vivienda habitual</td>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid rgba(203,213,225,0.4);">Hasta 500.000 € de base no reducida</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid rgba(203,213,225,0.4);">Confundir grupo de parentesco</td>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid rgba(203,213,225,0.4);">Bonificación del 99% vs. 0%</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid rgba(203,213,225,0.4);">Presentar fuera de plazo sin prórroga</td>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid rgba(203,213,225,0.4);">Recargo del 5–20% + intereses (Art. 27 LGT)</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;">Aplicar normativa estatal en vez de catalana</td>
        <td style="padding:10px 16px;font-size:14px;color:#1E293B;">Diferencia de miles de euros en cuota</td>
      </tr>
    </table>
    <p>El denominador común: <strong>procesos manuales donde la verificación depende de la memoria</strong>, no de un sistema.</p>
    <p>Ulpiano no sustituye tu criterio jurídico. Pero sí elimina los errores que no tienen nada que ver con criterio — los de cálculo, los de normativa y los de plazo.</p>
    <p style="text-align:center;margin:24px 0;">
      ${cta("Ver el motor normativo en acción", "https://ulpiano.es/soluciones/fiscalidad-sucesoria")}
    </p>
    <p>Un saludo,<br><strong>Equipo Ulpiano</strong></p>
  </td>
</tr>`),
  },

  {
    id: "checklist-04-demo-invite",
    delayDays: 10,
    subject: "25 minutos para ver si Ulpiano encaja en tu despacho",
    preheader: "Sin diapositivas. Directamente sobre un caso real del sector",
    body: (name: string) => wrap(`
<tr>
  <td style="padding:0 24px 24px;font-size:15px;color:#1E293B;line-height:1.7;">
    <p>Hola${name ? ` ${name.split(" ")[0]}` : ""},</p>
    <p>Hace unos días descargaste nuestra checklist del expediente sucesorio. Espero que te esté siendo útil.</p>
    <p>Si los puntos de la checklist te resultaron relevantes, creo que tiene sentido que veas cómo Ulpiano resuelve cada uno de ellos dentro de la plataforma:</p>
    <ul style="padding-left:20px;color:#64748B;">
      <li><strong>Inventario patrimonial</strong> estructurado (incluidos activos digitales)</li>
      <li><strong>Legítimas y cuotas</strong> calculadas automáticamente según CCCat</li>
      <li><strong>ISD liquidado</strong> con norma citada (Llei 19/2010)</li>
      <li><strong>Cuaderno particional</strong> generado desde los datos del expediente</li>
    </ul>
    <p>La sesión es de <strong>25 minutos</strong>, sin presentación comercial. Trabajamos directamente sobre la plataforma con un caso real del sector sucesorio catalán.</p>
    <p>Sin compromiso. Sin datos de pago. Solo una conversación entre profesionales.</p>
    <p style="text-align:center;margin:24px 0;">
      ${cta("Reservar mi sesión personalizada →", "https://ulpiano.es/demo")}
    </p>
    <p style="color:#64748B;font-size:14px;">Si prefieres explorar por tu cuenta, también puedes <a href="https://ulpiano.es/precios" style="color:#2D6A4F;text-decoration:none;font-weight:500;">empezar gratis sin tarjeta</a>.</p>
    <p style="margin-top:24px;">Un saludo,<br><strong>Equipo Ulpiano</strong></p>
  </td>
</tr>`),
  },
];
