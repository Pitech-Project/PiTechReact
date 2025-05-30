"use client";

import { CountOuterBox } from "@/styles/MUI/common.styled";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Counter from "../Counter";

const countData = [
  {
    target: 300,
    label: "NUMBER OF CLIENTS",
    hasPlus: true,
  },
  {
    target: 100,
    label: "PROJECTS DELIVERED",
    hasPlus: true,
  },
  {
    target: 10,
    label: "LOCATIONS",
    hasPlus: false,
  },
];

const Count = () => {
  const isMdView = useMediaQuery("(max-width:767px)");

  return (
    <Stack flexDirection="row" justifyContent="center">
      <CountOuterBox
        flexDirection={isMdView ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        zIndex={1}
      >
        {countData.map(({ target, label, hasPlus }, index) => (
          <Box key={index} className="CountBox">
            <Stack
              flexDirection="row"
              alignItems="baseline"
              gap={1}
              justifyContent="center"
            >
              <Counter target={target} speed={5} />
              {hasPlus && (
                <Typography variant="body_2" color="custom.orange_600">
                  +
                </Typography>
              )}
            </Stack>
            <Typography
              variant="body_4"
              letterSpacing="1.6px"
              color="custom.white1"
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
