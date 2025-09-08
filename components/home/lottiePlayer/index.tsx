"use client";

import { useEffect, useRef } from "react";

// Props for LottiePlayer component
interface Props {
  src: string;
  width?: string;
  height?: string;
  hover?: boolean;
}

// Custom element type for dotlottie-player
interface DotLottiePlayerElement extends HTMLElement {
  play: () => void;
  pause: () => void;
  stop: () => void;
}

export const LottiePlayer = ({
  src,
  width = "150px",
  height = "auto",
  hover,
}: Props) => {
  const ref = useRef<DotLottiePlayerElement>(null);

  useEffect(() => {
    import("@dotlottie/player-component").then(() => {
      const player = ref.current;
      if (!player) return;

      customElements.whenDefined("dotlottie-player").then(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              player.play?.();
            } else {
              player.pause?.();
            }
          },
          { threshold: 0.5 },
        );

        observer.observe(player);
      });
    });
  }, []);

  return (
    <dotlottie-player
      ref={ref}
      src={src}
      background="transparent"
      {...(hover ? { hover: "" } : {})} // ✅ sets "hover" attribute correctly
      speed="1"
      style={{ width, height }}
      className="scrollLottie"
    />
  );
};
