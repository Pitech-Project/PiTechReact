"use client";

import { Box, Typography } from "@mui/material";
import {
  ArrowDesign,
  BusinessOffice,
  FullStop,
  LeftPanel,
  RightArrow,
  SubTypography,
} from "@/styles/MUI/common.styled";
import Image from "next/image";
import dynamic from "next/dynamic";
import arrowRight from "@/public/assets/img/rightNewArrow1.svg";
import Count from "../count";

const HomeImgAnimation = dynamic(() => import("../home-img-animation"), {
  ssr: false,
});

const HomeBanner = () => {
  return (
    <>
      <BusinessOffice
        bgcolor={"custom.black"}
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        display="block"
      >
        <Box>
          <LeftPanel className="homeBannerLeftPanel">
            <Typography
              variant="body_1"
              display="block"
              color={"custom.white2"}
            >
              Systems and platforms <br></br> built with care, and <br></br>{" "}
              designed with purpose
              <FullStop />
            </Typography>

            <SubTypography
              variant="Caption1"
              color="custom.grey_700"
              display="block"
              className="subTitleSpacing"
            >
              Every build is thought through, every design intentional.
            </SubTypography>
            <Box>
              {" "}
              <RightArrow>
                <Typography variant="font_21" color="custom.white2">
                  Solutions offered
                </Typography>
                <ArrowDesign>
                  <Image src={arrowRight} alt="Right Arrow" />
                </ArrowDesign>
              </RightArrow>
            </Box>
          </LeftPanel>
          <HomeImgAnimation />
        </Box>
        <Count />
      </BusinessOffice>
    </>
  );
};

export default HomeBanner;
