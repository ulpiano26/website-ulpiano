import type { MetadataRoute } from "next";

const BASE_URL = "https://ulpiano.es";

// Mapa de parelles ES→CA per incloure alternates hreflang al sitemap
const pairs: Array<{ es: string; ca: string; priority: number; freq: "weekly" | "monthly" | "yearly" }> = [
  { es: "",                                              ca: "/ca",                                              priority: 1.0, freq: "weekly"  },
  { es: "/soluciones",                                    ca: "/ca/solucions",                                    priority: 0.9, freq: "monthly" },
  { es: "/soluciones/planificacion-sucesoria",            ca: "/ca/solucions/planificacio-successoria",           priority: 0.9, freq: "monthly" },
  { es: "/soluciones/fiscalidad-sucesoria",               ca: "/ca/solucions/fiscalitat-successoria",             priority: 0.9, freq: "monthly" },
  { es: "/soluciones/documentacion-sucesoria",            ca: "/ca/solucions/documentacio-successoria",           priority: 0.9, freq: "monthly" },
  { es: "/soluciones/procesamiento-documental",           ca: "/ca/solucions/processament-documental",            priority: 0.9, freq: "monthly" },
  { es: "/soluciones/activos-digitales",                  ca: "/ca/solucions/actius-digitals",                    priority: 0.8, freq: "monthly" },
  { es: "/precios",                                       ca: "/ca/preus",                                        priority: 0.9, freq: "monthly" },
  { es: "/ia",                                            ca: "/ca/ia",                                           priority: 0.8, freq: "monthly" },
  { es: "/pensado-para/despachos",                        ca: "/ca/pensat-per/despatxos",                         priority: 0.8, freq: "monthly" },
  { es: "/pensado-para/notarias",                         ca: "/ca/pensat-per/notaries",                          priority: 0.8, freq: "monthly" },
  { es: "/pensado-para/asesorias",                        ca: "/ca/pensat-per/assessories",                       priority: 0.8, freq: "monthly" },
  { es: "/pensado-para/family-office",                    ca: "/ca/pensat-per/family-office",                     priority: 0.8, freq: "monthly" },
  { es: "/pensado-para/funerarias",                       ca: "/ca/pensat-per/funeraries",                        priority: 0.8, freq: "monthly" },
  { es: "/pensado-para/aseguradoras",                     ca: "/ca/pensat-per/asseguradores",                     priority: 0.8, freq: "monthly" },
  { es: "/modelos",                                       ca: "/ca/models",                                       priority: 0.8, freq: "monthly" },
  { es: "/modelos/modelo-650",                            ca: "/ca/models/model-650",                             priority: 0.7, freq: "monthly" },
  { es: "/modelos/modelo-651",                            ca: "/ca/models/model-651",                             priority: 0.7, freq: "monthly" },
  { es: "/modelos/modelo-652",                            ca: "/ca/models/model-652",                             priority: 0.7, freq: "monthly" },
  { es: "/modelos/modelo-653",                            ca: "/ca/models/model-653",                             priority: 0.7, freq: "monthly" },
  { es: "/modelos/modelo-660",                            ca: "/ca/models/model-660",                             priority: 0.7, freq: "monthly" },
  { es: "/recursos/checklist-expediente-sucesorio",       ca: "/ca/recursos/checklist-expedient-successori",      priority: 0.8, freq: "monthly" },
  { es: "/recursos/blog",                                 ca: "/ca/recursos/blog",                                priority: 0.7, freq: "weekly"  },
  { es: "/recursos/blog/la-legitima-catalana",            ca: "/ca/recursos/blog/la-legitima-catalana",           priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/gestion-herencias-despacho",      ca: "/ca/recursos/blog/gestio-herencies-despatx",       priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/ordenar-expediente-sucesorio",    ca: "/ca/recursos/blog/ordenar-expedient-successori",   priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/retencion-fidelizacion-cliente-asesorias", ca: "/ca/recursos/blog/retencio-fidelitzacio-client-assessories", priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/digitalizacion-derecho-sucesorio", ca: "/ca/recursos/blog/digitalitzacio-dret-successori", priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/ia-abogados-sucesiones",          ca: "/ca/recursos/blog/ia-advocats-successions",        priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/por-que-existe-ulpiano",          ca: "/ca/recursos/blog/per-que-existeix-ulpiano",       priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/quarta-falcidia",                 ca: "/ca/recursos/blog/quarta-falcidia",                priority: 0.6, freq: "monthly" },
  { es: "/recursos/blog/quadern-particional-cataluna",    ca: "/ca/recursos/blog/quadern-particional-catalunya",  priority: 0.6, freq: "monthly" },
  { es: "/demo",                                          ca: "/ca/demo",                                         priority: 0.9, freq: "monthly" },
  { es: "/contacto",                                      ca: "/ca/contacte",                                     priority: 0.7, freq: "monthly" },
  { es: "/legal/aviso-legal",                             ca: "/ca/legal/avis-legal",                             priority: 0.3, freq: "yearly"  },
  { es: "/legal/privacidad",                              ca: "/ca/legal/privacitat",                             priority: 0.3, freq: "yearly"  },
  { es: "/legal/terminos",                                ca: "/ca/legal/termes",                                 priority: 0.3, freq: "yearly"  },
  { es: "/legal/cookies",                                 ca: "/ca/legal/cookies",                                priority: 0.3, freq: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { es, ca, priority, freq } of pairs) {
    const esUrl = `${BASE_URL}${es}`;
    const caUrl = `${BASE_URL}${ca}`;
    const alternates = {
      languages: {
        es: esUrl,
        ca: caUrl,
        "x-default": esUrl,
      },
    };
    entries.push({
      url: esUrl,
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates,
    });
    entries.push({
      url: caUrl,
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates,
    });
  }

  return entries;
}
