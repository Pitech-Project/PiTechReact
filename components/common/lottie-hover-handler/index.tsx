"use client";

import { useEffect } from "react";
import "@dotlottie/player-component";

interface DotLottiePlayerElement extends HTMLElement {
  play?: () => void;
  stop?: () => void;
}

export default function LottieHoverHandler() {
  useEffect(() => {
    const parents =
      document.querySelectorAll<HTMLElement>(".hoverLottieParent");

    const handlers: {
      parent: HTMLElement;
      lottie: DotLottiePlayerElement;
      play: () => void;
      stop: () => void;
    }[] = [];

    parents.forEach((parent) => {
      const lottie =
        parent.querySelector<DotLottiePlayerElement>(".hoverLottie");
      if (!lottie) return;

      const play = () => {
        lottie.stop?.();
        lottie.play?.();
      };

      const stop = () => {
        lottie.stop?.();
      };

      parent.addEventListener("mouseenter", play);
      parent.addEventListener("mouseleave", stop);

      handlers.push({ parent, lottie, play, stop });
    });

    return () => {
      handlers.forEach(({ parent, play, stop }) => {
        parent.removeEventListener("mouseenter", play);
        parent.removeEventListener("mouseleave", stop);
      });
    };
  }, []);

  return null;
}
