"use client";

import { CountOuterBox } from "@/styles/MUI/common.styled";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Counter from "../Counter";
import { useEffect } from "react";

const countData = [
  {
    target: 100,
    label: "NUMBER OF CLIENTS",
    hasPlus: true,
  },
  {
    target: 500,
    label: "PROJECTS DELIVERED",
    hasPlus: true,
  },
  {
    target: 15,
    label: "INDUSTRIES SERVED",
    hasPlus: true,
  },
];

const Count = () => {
  const isMdView = useMediaQuery("(max-width:767px)");

  useEffect(() => {
    const setNumbersDataWidth = () => {
      const numbersData = document.querySelector<HTMLElement>(
        ".CountOuterBoxWidth",
      );
      const header = document.querySelector<HTMLElement>(".headerUI");

      if (!numbersData || !header) return;

      if (window.innerWidth > 1199) {
        const headerWidth = header.offsetWidth; // includes padding + border
        numbersData.style.width = `${headerWidth}px`;
      } else {
        numbersData.style.width = ""; // reset for smaller screens
      }
    };

    // Run initially
    setNumbersDataWidth();

    // Add resize event listener
    window.addEventListener("resize", setNumbersDataWidth);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", setNumbersDataWidth);
    };
  }, []);

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      position={{ xs: "absolute", sm: "unset" }}
      width="100%"
    >
      <CountOuterBox
        flexDirection={isMdView ? "column" : "row"}
        className="CountOuterBoxWidth"
      >
        {countData.map(({ target, label, hasPlus }, index) => (
          <Box key={index} className="CountBox">
            <Stack
              flexDirection="row"
              alignItems="baseline"
              gap={1}
              justifyContent="center"
              mb={1}
            >
              <Counter target={target} speed={5} />
              {hasPlus && (
                <Typography variant="body_2" color="custom.orange_600">
                  +
                </Typography>
              )}
            </Stack>
            <Typography
              variant="body_4_500"
              color="custom.white4"
              className="CountLabel"
            >
              {label}
            </Typography>
          </Box>
        ))}
      </CountOuterBox>
    </Stack>
  );
};

export default Count;
