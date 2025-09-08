"use client";

import { DotLottiePlayer } from "@dotlottie/player-component";
import { useEffect } from "react";

export default function ScrollLottieHandler() {
  useEffect(() => {
    const lotties = document.querySelectorAll<DotLottiePlayer>(".scrollLottie");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const player = entry.target as DotLottiePlayer;

          if (entry.isIntersecting) {
            player.seek(0); // rewind to start
            player.play(); // play from frame 0
          } else {
            player.pause(); // stop when out of view
          }
        });
      },
      { threshold: 0.5 },
    );

    lotties.forEach((lottie) => observer.observe(lottie));

    // Restart animations that are already visible on load
    function restartVisibleLotties() {
      lotties.forEach((lottie) => {
        const rect = lottie.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.5 &&
          rect.bottom > window.innerHeight * 0.5
        ) {
          lottie.seek(0);
          lottie.play();
        }
      });
    }

    window.addEventListener("load", restartVisibleLotties);

    return () => {
      window.removeEventListener("load", restartVisibleLotties);
      observer.disconnect();
    };
  }, []);

  return null;
}
