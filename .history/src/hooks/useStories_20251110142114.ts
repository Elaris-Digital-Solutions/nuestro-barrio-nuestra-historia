import { useEffect, useMemo, useState } from "react";

export type ApiStory = {
  title: string;
  date: string;
  content: string;
  images?: string[];
  slug: string;
  category?: string;
};

export type Story = {
  title: string;
  summary: string;
  content: string;
  image: string;
  images: string[];
  publishedAt: string;
  slug: string;
  category: string;
};

const FALLBACK_IMAGE = "/assets/hero-image.jpg";
const EXCERPT_MAX_LENGTH = 480;

const sanitizeContent = (value: string) =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const createExcerpt = (content: string) => {
  if (!content) {
    return "";
  }

  const clean = sanitizeContent(content);

  if (clean.length <= EXCERPT_MAX_LENGTH) {
    return clean;
  }

  const clipped = clean.slice(0, EXCERPT_MAX_LENGTH);
  const lastSpace = clipped.lastIndexOf(" ");
  const excerpt = (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).trimEnd();

  return `${excerpt}...`;
};

const mapApiStoryToStory = (item: ApiStory): Story | null => {
  if (!item?.title || !item?.slug) {
    return null;
  }

  const cleanedContent = sanitizeContent(item.content);
  const summary = createExcerpt(item.content || cleanedContent);

  if (!summary) {
    return null;
  }

  return {
    title: item.title,
    summary,
    content: cleanedContent,
    image: item.images && item.images.length > 0 ? item.images[0] : FALLBACK_IMAGE,
    images: item.images && item.images.length > 0 ? item.images : [FALLBACK_IMAGE],
    publishedAt: item.date,
    slug: item.slug,
    category: item.category ?? "Historias",
  };
};

const dedupeBySlug = (stories: Story[]) => {
  const seen = new Set<string>();

  return stories.filter((story) => {
    if (seen.has(story.slug)) {
      return false;
    }

    seen.add(story.slug);
    return true;
  });
};

const SEED_POSTS: ApiStory[] = [
  {
    title: "Respirar Futuro en La Oroya",
    content: `Nuestro proyecto en La Oroya reconstruye el vínculo entre comunidad y territorio. Conversamos con vecinas y vecinos sobre memorias, miedos y esperanzas, y mapeamos estos sentimientos para crear un retrato colectivo de lo que significa vivir, resistir y soñar en este lugar tan especial.

A través de talleres participativos y encuentros comunitarios, hemos creado un espacio donde las voces de La Oroya pueden ser escuchadas, donde las historias personales se entrelazan con la historia colectiva, y donde el pasado dialoga con las aspiraciones de futuro.

## El Proceso de Reconstrucción del Vínculo

Durante meses, nuestro equipo trabajó codo a codo con los habitantes de La Oroya, creando un ambiente de confianza y escucha activa. Cada conversación era una puerta abierta a mundos personales llenos de matices, dolores y alegrías que rara vez encuentran espacio en las narrativas oficiales sobre la ciudad.

Los talleres se convirtieron en espacios de sanación colectiva, donde las personas no solo compartían sus experiencias, sino que también encontraban eco en las historias de sus vecinos. Descubrimos que muchos de los miedos eran compartidos, pero también lo eran las esperanzas y los sueños de un futuro mejor.

"Este proyecto nos dio voz. Por primera vez, alguien quería escuchar nuestras historias sin juzgar, sin intentar cambiarnos. Simplemente estar y compartir." - María, vecina de La Oroya

## Mapeando Memorias y Esperanzas

El mapeo colectivo fue una de las herramientas más poderosas del proyecto. Utilizando metodologías participativas, invitamos a los habitantes a marcar en un mapa gigante de La Oroya los lugares que guardaban sus mejores recuerdos, aquellos que les generaban temor, y los espacios donde imaginaban un futuro próspero.

Lo que emergió fue fascinante: un mosaico de percepciones que revelaba cómo el territorio no es solo un espacio físico, sino un contenedor de emociones, relaciones y posibilidades. La plaza donde se jugaba de niño, el río que ahora genera preocupación ambiental, la esquina donde se sueña con un centro comunitario.

Estos mapas se convirtieron en herramientas de diálogo. Funcionarios municipales, líderes comunitarios y habitantes se reunieron alrededor de ellos para discutir prioridades, entender perspectivas diferentes y co-crear soluciones. El mapa dejó de ser un simple documento geográfico para convertirse en un instrumento de transformación social.

"Ver nuestras historias en el mapa me hizo darme cuenta de que no estaba sola en mis preocupaciones. Todos queremos lo mismo: un lugar donde nuestros hijos puedan crecer seguros y felices." - Rosa, participante del taller

## Impacto y Reflexiones

El proyecto "Respirar Futuro en La Oroya" ha demostrado que cuando se crean espacios genuinos de escucha y participación, las comunidades tienen la capacidad de identificar sus propias necesidades y co-crear soluciones sostenibles.

Más allá de los talleres y los mapas, lo más valioso ha sido el fortalecimiento del tejido comunitario. Vecinos que antes solo se saludaban de lejos ahora trabajan juntos en iniciativas locales. Se ha formado una red de solidaridad que trasciende el proyecto mismo.

Este es apenas el comienzo. Las semillas plantadas durante estos meses seguirán germinando en forma de proyectos comunitarios, espacios de encuentro y acciones colectivas que buscan construir un futuro donde La Oroya pueda respirar tranquila, con orgullo de su pasado y esperanza en su porvenir.`,
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1200&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&h=600&fit=crop&q=80"
    ],
    date: "2024-11-02",
    slug: "respirar-futuro-la-oroya",
    category: "Comunidad",
  },
  {
    title: "Marcavalle en el Mapa: Cartografías de lo Cotidiano",
    content:
      "La sesión de mapeo comunitario en Marcavalle mostró cómo se habita realmente el barrio. Las y los participantes marcaron rutas seguras, zonas de encuentro y espacios que requieren reactivación, integrando saberes locales con información técnica.",
    images: ["/assets/blog-2.jpg"],
    date: "2024-10-20",
    slug: "marcavalle-en-el-mapa",
    category: "Cartografías",
  },
  {
    title: "Mirar para Transformar: Fotovoz y Teatro Comunitario",
    content:
      "El ejercicio de fotovoz invitó a capturar imágenes de injusticias, resiliencias y deseos de cambio. Esas fotografías impulsaron un laboratorio de teatro comunitario donde las historias cobraron vida y abrieron diálogos sobre convivencia y bienestar.",
    images: ["/assets/blog-3.jpg"],
    date: "2024-10-01",
    slug: "mirar-para-transformar",
    category: "Cultura",
  },
];

const SEED_STORIES: Story[] = dedupeBySlug(
  SEED_POSTS.map(mapApiStoryToStory).filter(Boolean) as Story[]
);

const API_ENDPOINT = import.meta.env.VITE_BLOG_API_ENDPOINT ?? "";

const normalizeStories = (payload: unknown) => {
  const rawArray: ApiStory[] = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { data?: ApiStory[] })?.data)
    ? ((payload as { data: ApiStory[] }).data)
    : Array.isArray((payload as { posts?: ApiStory[] })?.posts)
    ? ((payload as { posts: ApiStory[] }).posts)
    : [];

  const mapped = rawArray
    .map(mapApiStoryToStory)
    .filter(Boolean) as Story[];

  return dedupeBySlug([...mapped, ...SEED_STORIES]).sort(
    (a, b) =>
      new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
  );
};

export const useStories = () => {
  const shouldFetch = Boolean(API_ENDPOINT);
  const [stories, setStories] = useState<Story[]>(SEED_STORIES);
  const [isLoading, setIsLoading] = useState(shouldFetch);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldFetch) {
      setStories(SEED_STORIES);
      setIsLoading(false);
      setErrorMessage(null);
      return;
    }

    const controller = new AbortController();

    const loadStories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_ENDPOINT, {
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        const payload = await response.json();
        const normalized = normalizeStories(payload);

        setStories(normalized);
        setErrorMessage(null);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setStories(SEED_STORIES);
        setErrorMessage(
          "No pudimos conectar con el blog en este momento. Estamos mostrando las historias destacadas más recientes."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadStories();

    return () => controller.abort();
  }, [shouldFetch]);

  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    stories.forEach((story) => {
      if (story.category) {
        categorySet.add(story.category);
      }
    });

    return ["Todas", ...Array.from(categorySet).sort()];
  }, [stories]);

  return {
    stories,
    isLoading,
    errorMessage,
    categories,
  };
};

export const estimateReadTime = (content: string) => {
  const words = content ? content.trim().split(/\s+/).length : 0;
  if (!words) {
    return 3;
  }

  return Math.max(3, Math.round(words / 180));
};

export const estimateViews = (content: string) => {
  const words = content ? content.trim().split(/\s+/).length : 0;
  return Math.max(120, Math.round(words * 2.4));
};

export const useStoryBySlug = (slug: string | undefined) => {
  const { stories, isLoading, errorMessage } = useStories();
  
  const story = useMemo(() => {
    if (!slug) return null;
    return stories.find((s) => s.slug === slug) ?? null;
  }, [stories, slug]);

  return {
    story,
    isLoading,
    errorMessage,
  };
};
