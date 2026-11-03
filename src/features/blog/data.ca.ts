export const blogCategoriesCa = [
  "Tots",
  "Dret Civil",
  "Catalunya",
  "Processos",
  "Tecnologia",
  "IA",
  "Despatxos",
  "Visió",
] as const;

export type BlogCategoryCa = (typeof blogCategoriesCa)[number];

export type BlogPostStatusCa = "published" | "coming-soon";

export type BlogPostCa = {
  slug: string;
  title: string;
  category: Exclude<BlogCategoryCa, "Tots">;
  excerpt: string;
  readingTime: string;
  status: BlogPostStatusCa;
};

export const blogPostsCa: BlogPostCa[] = [
  {
    slug: "la-legitima-catalana",
    title: "La llegítima catalana",
    category: "Catalunya",
    excerpt:
      "La llegítima a Catalunya és un dret de crèdit i equival a una quarta part de la base legitimària. Entendre qui pot reclamar-la i com es calcula és clau per ordenar qualsevol partició.",
    readingTime: "12 min de lectura",
    status: "published",
  },
  {
    slug: "gestio-herencies-despatx",
    title: "Gestió d'herències en un despatx: del caos documental al procés estructurat",
    category: "Despatxos",
    excerpt:
      "Un expedient successori típic genera més de 40 gestions entre hereus, documents i administracions. No és el dret el que consumeix temps: és la coordinació entre Excel, Word, PDF, correu i WhatsApp.",
    readingTime: "9 min de lectura",
    status: "published",
  },
  {
    slug: "ordenar-expedient-successori",
    title: "Com ordenar un expedient successori de principi a fi",
    category: "Processos",
    excerpt:
      "Un expedient successori sòlid comença fixant els fets, reunint els documents i validant la posició de cada interessat. L'ordre d'aquestes comprovacions redueix rectificacions i decisions precipitades.",
    readingTime: "8 min de lectura",
    status: "published",
  },
  {
    slug: "retencio-fidelitzacio-client-assessories",
    title: "Retenir l'hereu: la mètrica que la teva assessoria no mira",
    category: "Despatxos",
    excerpt:
      "El 61% dels hereus confia en el seu advocat i el 49% en el seu comptable per al successori. Tot i així, la majoria d'assessories perden la família sencera quan mor el client històric. La diferència és la infraestructura de visibilitat, no el criteri tècnic.",
    readingTime: "6 min de lectura",
    status: "published",
  },
  {
    slug: "digitalitzacio-dret-successori",
    title: "La digitalització del dret successori",
    category: "Tecnologia",
    excerpt:
      "Digitalitzar no consisteix només a escanejar documents: exigeix estructurar dades, mantenir traçabilitat i preservar les comprovacions jurídiques. Així, l'expedient resulta més revisable i més fàcil de continuar.",
    readingTime: "7 min de lectura",
    status: "published",
  },
  {
    slug: "ia-advocats-successions",
    title: "IA per a advocats de successions: fins on arriba i on no",
    category: "IA",
    excerpt:
      "La IA pot accelerar la lectura, classificació i redacció assistida de documents. Les conclusions jurídiques, els càlculs i les decisions amb efectes patrimonials han de continuar sent verificables i supervisats.",
    readingTime: "9 min de lectura",
    status: "published",
  },
  {
    slug: "per-que-existeix-ulpiano",
    title: "Per què existeix Ulpiano",
    category: "Visió",
    excerpt:
      "Ulpiano neix d'una pregunta de client: què estic pagant i on ho veig. La tecnologia ha de tornar visibilitat a l'expedient, no substituir el criteri de l'advocat.",
    readingTime: "5 min de lectura",
    status: "published",
  },
  {
    slug: "quarta-falcidia",
    title: "Quarta falcídia: el parany més car del testament",
    category: "Dret Civil",
    excerpt:
      "La quarta falcídia permet a l'hereu gravat amb llegats conservar una quarta part del cabal líquid. La seva aplicació exigeix revisar el testament, l'inventari i les càrregues abans de pagar.",
    readingTime: "8 min de lectura",
    status: "published",
  },
  {
    slug: "quadern-particional-catalunya",
    title: "Com redactar un quadern particional sense errors",
    category: "Catalunya",
    excerpt:
      "El quadern particional tradueix inventari, deutes i adjudicacions en un document coherent amb el títol successori. Cinc passos perquè el 660 i el 650 expliquin la mateixa història.",
    readingTime: "8 min de lectura",
    status: "published",
  },
];
