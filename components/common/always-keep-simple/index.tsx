"use client";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BusinessOffice,
  FullStop,
  LeftPanel,
  SubTypography,
} from "@/styles/MUI/common.styled";

import dynamic from "next/dynamic";

const CaseStudiesImgAnimation = dynamic(
  () => import("../../case-studies/case-studies-img-animation"),
  {
    ssr: false,
  },
);

export const AlwaysKeepSimple = () => {
  const theme = useTheme();
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <BusinessOffice
      bgcolor={"custom.black"}
      justifyContent="space-between"
      alignItems="center"
    >
      <LeftPanel>
        <Typography
          variant="body_1"
          margin={isSmallDesktopView ? "0 auto" : "0"}
          display="block"
          color={"custom.white2"}
        >
          Not just showcases, <br />
          but solutions that work
          <FullStop />
        </Typography>

        <SubTypography variant="Caption1" color="custom.white2" display="block">
          Stories of purposeful builds and lasting outcomes. <br></br>
          <br></br>
        </SubTypography>
      </LeftPanel>
      <CaseStudiesImgAnimation />
    </BusinessOffice>
  );
};
