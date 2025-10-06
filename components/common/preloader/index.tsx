/* eslint-disable no-undef */
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import {
  CountTypography,
  CustomLinearProgress,
  LoaderWrapper,
} from "@/styles/MUI/common.styled";
import { keyframes } from "@emotion/react";

export default function Preloader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showFullLoader, setShowFullLoader] = useState(true);
  const [showMiniLoader, setShowMiniLoader] = useState(false);
  const [animateMiniLoader, setAnimateMiniLoader] = useState(false);

  const slideUp = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-100%); }
  `;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let isPageLoaded = false;

    const startProgress = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90 && !isPageLoaded) {
            return prev + Math.random() * 2 + 1;
          }
          return prev;
        });
      }, 100);
    };

    const finishProgress = () => {
      isPageLoaded = true;
      clearInterval(interval);

      const current = progress;
      const duration = 400;
      const stepTime = 20;
      const steps = Math.ceil(duration / stepTime);
      const increment = (100 - current) / steps;
      let count = 0;

      const smoothFinish = setInterval(() => {
        count++;
        setProgress((prev) => Math.min(prev + increment, 100));
        if (count >= steps) {
          clearInterval(smoothFinish);
          setTimeout(() => setShowFullLoader(false), 300);
        }
      }, stepTime);
    };

    startProgress();

    if (document.readyState === "complete") {
      finishProgress();
    } else {
      window.addEventListener("load", finishProgress);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", finishProgress);
    };
  }, []);

  useEffect(() => {
    if (!showFullLoader) {
      setShowMiniLoader(true);
      const timeout = setTimeout(() => {
        setAnimateMiniLoader(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  const getDashes = (group: number, line: number): string[] => {
    const config: Record<number, Record<number, string[]>> = {
      1: {
        1: ["exp-40 div", "exp-70 class-name", "exp-110 class", "exp-70 class"],
        2: ["exp-40 div", "exp-70 class-name", "exp-90 class"],
        3: ["exp-300 par"],
        4: ["exp-200 par"],
        5: ["exp-40 div"],
        6: ["exp-40 div"],
        7: ["exp-40 div", "exp-70 class-name", "exp-110 class", "exp-70 class"],
        8: ["exp-40 div", "exp-70 class-name", "exp-90 class"],
        9: ["exp-300 par"],
        10: ["exp-200 par"],
        11: ["exp-40 div"],
        12: ["exp-40 div"],
        13: [
          "exp-40 div",
          "exp-70 class-name",
          "exp-110 class",
          "exp-70 class",
        ],
        14: ["exp-40 div", "exp-70 class-name", "exp-90 class"],
        15: ["exp-300 par"],
        16: ["exp-200 par"],
        17: ["exp-40 div"],
        18: ["exp-40 div"],
      },
      2: {
        1: ["div", "class-name", "class", "class"],
        2: ["div", "exp70 class-name", "exp90 class"],
        3: ["par"],
        4: ["par"],
        5: ["div"],
        6: ["div"],
      },
    };
    return config[group][line] || [];
  };

  if (showFullLoader) {
    return (
      <LoaderWrapper>
        <Box>
          <CustomLinearProgress variant="determinate" value={progress} />
          <CountTypography>{`${Math.round(progress)}%`}</CountTypography>
          <Box className="skeleton-container">
            {[1, 2].map((group) => (
              <Box
                key={group}
                className={`group-${group}`}
                display="flex"
                flexDirection="column"
                gap={1}
                height={"50%"}
              >
                {[1, 2, 3, 4, 5, 6].map((line) => (
                  <Box
                    key={line}
                    className={`line line${line}`}
                    display="flex"
                    gap={1}
                  >
                    {getDashes(group, line).map((dash, index) => (
                      <Box
                        key={index}
                        className={`dash dash-${index + 1} ${dash}`}
                      />
                    ))}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </LoaderWrapper>
    );
  }

  if (showMiniLoader) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          height: "100vh",
          width: "100vw",
          bgcolor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: animateMiniLoader
            ? `${slideUp} 0.6s ease-out forwards`
            : "none",
        }}
        onAnimationEnd={() => setShowMiniLoader(false)}
      />
    );
  }

  return null;
}
