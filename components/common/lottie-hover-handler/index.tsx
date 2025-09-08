"use client";

import { useEffect } from "react";

// Extend the custom element type for dotlottie-player
interface DotLottiePlayerElement extends HTMLElement {
  play?: () => void;
  stop?: () => void;
  seek?: (frame: number) => void; // some players use seek
}

export default function LottieHoverHandler() {
  useEffect(() => {
    const lotties =
      document.querySelectorAll<DotLottiePlayerElement>(".hoverLottie");

    const handlers: {
      el: DotLottiePlayerElement;
      play: () => void;
      stop: () => void;
    }[] = [];

    lotties.forEach((lottie) => {
      const play = () => {
        // Force reset to frame 0 before play
        lottie.stop?.();
        lottie.seek?.(0); // if supported
        lottie.play?.();
      };

      const stop = () => {
        lottie.stop?.();
      };

      lottie.addEventListener("mouseenter", play);
      lottie.addEventListener("mouseleave", stop);

      handlers.push({ el: lottie, play, stop });
    });

    // ✅ Cleanup on unmount
    return () => {
      handlers.forEach(({ el, play, stop }) => {
        el.removeEventListener("mouseenter", play);
        el.removeEventListener("mouseleave", stop);
      });
    };
  }, []);

  return null;
}
