"use client";

import { useEffect } from "react";
import "@dotlottie/player-component"; // ensure web component is registered

export default function ScrollLottieHandler() {
  useEffect(() => {
    const lotties = document.querySelectorAll<HTMLElement>(".scrollLottie");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as any;

          // Wait until custom element is upgraded (player API is available)
          if (typeof el.play !== "function" || typeof el.pause !== "function") {
            return;
          }

          if (entry.isIntersecting) {
            el.seek(0);
            el.play();
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    lotties.forEach((lottie) => observer.observe(lottie));

    // Restart visible Lotties on load
    function restartVisibleLotties() {
      lotties.forEach((lottie) => {
        const rect = lottie.getBoundingClientRect();
        const el = lottie as any;
        if (
          typeof el.play === "function" &&
          rect.top < window.innerHeight * 0.5 &&
          rect.bottom > window.innerHeight * 0.5
        ) {
          el.seek(0);
          el.play();
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
