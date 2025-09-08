"use client";

import { CountOuterBox } from "@/styles/MUI/common.styled";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    target: 150,
    label: "LOCATIONS",
    hasPlus: true,
  },
];

const Count = () => {
  const isMdView = useMediaQuery("(max-width:767px)");
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      bgcolor={isMobileView ? "custom.black4" : ""}
    >
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
            <Typography variant="body_4_500" color="custom.white3">
              {label}
            </Typography>
          </Box>
        ))}
      </CountOuterBox>
    </Stack>
  );
};

export default Count;
