"use client";

import { Typography } from "@mui/material";
import {
  BusinessOffice,
  FullStop,
  LeftPanel,
  SubTypography,
} from "@/styles/MUI/common.styled";
import dynamic from "next/dynamic";

const AboutImgAnimation = dynamic(() => import("../about-img-animation"), {
  ssr: false,
});
const AboutBanner = () => {
  return (
    <>
      <BusinessOffice
        bgcolor={"custom.black"}
        justifyContent="space-between"
        alignItems="center"
      >
        <LeftPanel>
          <Typography variant="body_1" display="block" color={"custom.white2"}>
            We keep it precise and <br></br> simple
            <FullStop />
          </Typography>

          <SubTypography
            variant="Caption1"
            color="custom.grey_700"
            display="block"
          >
            Three decades of building with care and clarity.
          </SubTypography>
        </LeftPanel>

        <AboutImgAnimation />
      </BusinessOffice>
    </>
  );
};

export default AboutBanner;
