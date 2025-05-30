"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down("lg"));
  
  return (
    <BusinessOffice
      bgcolor={"custom.black"}
      justifyContent="space-between"
      alignItems="center"
    >
      <LeftPanel>
        <OverlayTypography
          variant="body_1"
          display="block"
          color={"custom.white2"}
        >
          Looking for motivated, bright <br style={{display: isSmallDesktopView ? "none" : 'inline-block'}} />& passionate individuals
          <FullStop />
        </OverlayTypography>

        <SubTypography variant="Caption1" color="custom.white2" display="block">
          Pi is full of challenges, learning and successful smiles. <br></br>
          Come grow with us and become a part of a global solutions company.
        </SubTypography>
      </LeftPanel>
      <CareerImgAnimation />
    </BusinessOffice>
  );
};
