"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect, useMemo } from "react";
import type { MouseEvent, SyntheticEvent } from "react";

interface SlideData {
  title: string;
  src: string;
  description: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  isAnimating: boolean;
}

const Slide = ({ slide, index, current, handleSlideClick, isAnimating }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLLIElement>) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, description } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className={`group flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 ${!isAnimating ? "transition-none duration-0" : ""
          }`}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: isAnimating ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className={`absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out ${!isAnimating ? "transition-none duration-0" : ""
              }`}
            style={{
              opacity: current === index ? 1 : 0.6,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />

          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 rounded-[1%] overflow-hidden transition-opacity duration-500 ease-out ${current === index ? "opacity-100" : "opacity-40"
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div
              className={`relative z-10 px-[4vmin] pb-[4vmin] pt-[3vmin] text-left text-white transition-opacity duration-500 pointer-events-auto ${current === index ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                }`}
            >
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                {description}
              </p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
  disabled?: boolean;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
  disabled,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex shrink-0 items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
        } ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      title={title}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const hasSlides = slides.length > 0;
  const hasLoop = slides.length > 1;

  const CLONES = 3;

  const extendedSlides = useMemo(() => {
    if (!hasLoop) {
      return [...slides];
    }

    const firstClones = slides.slice(0, CLONES);
    const lastClones = slides.slice(-CLONES);

    // If we don't have enough slides to make full clones, just repeat
    if (slides.length < CLONES) {
      return [...slides, ...slides, ...slides];
    }

    return [...lastClones, ...slides, ...firstClones];
  }, [hasLoop, slides]);

  const [current, setCurrent] = useState(() => (hasLoop ? CLONES : 0));
  const [isAnimating, setIsAnimating] = useState(hasLoop);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setCurrent(hasLoop ? CLONES : 0);
    setIsAnimating(hasLoop);
  }, [hasLoop, slides.length]);

  useEffect(() => {
    if (!hasLoop || isAnimating) {
      return;
    }

    const raf = requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [isAnimating, hasLoop]);

  const handlePreviousClick = () => {
    if (!hasLoop) return;
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (!hasLoop) return;
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handleSlideClick = (index: number) => {
    if (!hasLoop) {
      setCurrent(index);
      return;
    }

    if (isTransitioning) return;

    if (index < CLONES) {
      setIsTransitioning(true);
      setCurrent(index);
      return;
    }

    if (index >= extendedSlides.length - CLONES) {
      setIsTransitioning(true);
      setCurrent(index);
      return;
    }

    setIsTransitioning(true);
    setCurrent(index);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(hasLoop ? index + CLONES : index);
  };

  useEffect(() => {
    if (!hasLoop) return;

    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIsAnimating(false);

        // Normalize the index
        if (current < CLONES) {
          setCurrent(current + slides.length);
        } else if (current >= slides.length + CLONES) {
          setCurrent(current - slides.length);
        }
      }, 1000); // Match CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [current, isTransitioning, hasLoop, slides.length]);

  const id = useId();

  if (!hasSlides) {
    return null;
  }

  const baseSlides = hasLoop ? extendedSlides : slides;
  const step = 100 / baseSlides.length;
  const translate = current * step;
  const activeIndex = hasLoop
    ? ((current - CLONES + slides.length) % slides.length)
    : current;

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className={`absolute flex mx-[-4vmin] ${isAnimating ? "transition-transform duration-1000 ease-in-out" : ""
          }`}
        style={{
          transform: `translateX(-${translate}%)`,
        }}
        onTransitionEnd={() => { }}
      >
        {(hasLoop ? extendedSlides : slides).map((slide, index) => (
          <Slide
            key={`${slide.title}-${index}`}
            slide={slide}
            index={hasLoop ? index : index}
            current={current}
            handleSlideClick={handleSlideClick}
            isAnimating={isAnimating}
          />
        ))}
      </ul>

      {slides.length > 1 && (
        <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
            disabled={isTransitioning}
          />

          <div className="hidden md:flex items-center gap-2 mx-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation ${index === activeIndex
                  ? "bg-primary w-6"
                  : "bg-neutral-300/50 hover:bg-neutral-300"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>

          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
            disabled={isTransitioning}
          />
        </div>
      )}
    </div>
  );
}
