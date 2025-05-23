"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  width?: string;
  height?: string;
}

export const LottiePlayer = ({ src, width = "150px", height = "auto" }: Props) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    import('@dotlottie/player-component').then(() => {
      const player = ref.current;

      if (!player) return;

      customElements.whenDefined('dotlottie-player').then(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              player.play?.(); 
            } else {
              player.pause?.();
            }
          },
          {
            threshold: 0.5,
          }
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
      speed="1"
      style={{ width, height }}
    />
  );
};
