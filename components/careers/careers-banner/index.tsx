"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  BusinessOffice,
  FullStop,
  LeftPanel,
  OverlayTypography,
  SubTypography,
} from "@/styles/MUI/common.styled";
import dynamic from "next/dynamic";

const CareerImgAnimation = dynamic(() => import("../career-img-animation"), {
  ssr: false,
});

export const CareersBanner = () => {
  const theme = useTheme();
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BusinessOffice
      bgcolor={"custom.black"}
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      bannerprop="career"
    >
      <Box>
        <LeftPanel bannerprop="career">
          <OverlayTypography
            variant="body_1"
            display="block"
            color={"custom.white2"}
          >
            Let’s start with a{" "}
            <br
              style={{ display: isSmallDesktopView ? "none" : "inline-block" }}
            />
            conversation
            <FullStop />
          </OverlayTypography>

          <SubTypography
            variant="Caption1"
            color="custom.grey_700"
            display="block"
          >
            You talk, we’ll build it from there.
          </SubTypography>
        </LeftPanel>
        <CareerImgAnimation />
      </Box>
    </BusinessOffice>
  );
};
