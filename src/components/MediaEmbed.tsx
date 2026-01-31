import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface MediaEmbedProps {
    url: string;
    className?: string;
}

const getEmbedType = (url: string): "youtube" | "vimeo" | "image" | "invalid" => {
    if (!url) return "invalid";

    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
    const imageRegex = /\.(jpeg|jpg|gif|png|webp)($|\?)/i;

    if (youtubeRegex.test(url)) return "youtube";
    if (vimeoRegex.test(url)) return "vimeo";
    if (imageRegex.test(url)) return "image";

    return "invalid";
};

const getYoutubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
};

const getVimeoId = (url: string) => {
    const match = url.match(/(?:vimeo\.com\/)(\d+)/);
    return match ? match[1] : null;
};

const MediaEmbed = ({ url, className }: MediaEmbedProps) => {
    const type = useMemo(() => getEmbedType(url), [url]);

    if (type === "invalid") return null;

    if (type === "youtube") {
        const videoId = getYoutubeId(url);
        if (!videoId) return null;
        return (
            <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden shadow-sm", className)}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                />
            </div>
        );
    }

    if (type === "vimeo") {
        const videoId = getVimeoId(url);
        if (!videoId) return null;
        return (
            <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden shadow-sm", className)}>
                <iframe
                    src={`https://player.vimeo.com/video/${videoId}`}
                    title="Vimeo video player"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                />
            </div>
        );
    }

    if (type === "image") {
        return (
            <div className={cn("rounded-xl overflow-hidden shadow-sm", className)}>
                <img src={url} alt="Media content" className="w-full h-auto object-cover" />
            </div>
        );
    }

    return null;
};

export default MediaEmbed;
