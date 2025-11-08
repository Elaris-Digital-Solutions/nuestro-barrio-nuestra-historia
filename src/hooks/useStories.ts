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
    content:
      "Nuestro proyecto en La Oroya reconstruye el vínculo entre comunidad y territorio. Conversamos con vecinas y vecinos sobre memorias, miedos y esperanzas, y mapeamos caminatas barriales para reconocer puntos críticos y oportunidades.",
    images: ["/assets/blog-1.jpg"],
    date: "2024-11-03",
    slug: "respirar-futuro-en-la-oroya",
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
