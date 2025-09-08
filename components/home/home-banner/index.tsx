"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BusinessOffice,
  FullStop,
  LeftPanel,
  OutlineWhiteBtn,
  SubTypography,
} from "@/styles/MUI/common.styled";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import ArrowRightWhite from "@/components/common/SVGIcons/arrowRightWhite";

const HomeImgAnimation = dynamic(() => import("../home-img-animation"), {
  ssr: false,
});

const HomeBanner = () => {
  const theme = useTheme();
  const router = useRouter();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <BusinessOffice
        bgcolor={"custom.black"}
        justifyContent="space-between"
        alignItems="center"
      >
        <LeftPanel>
          <Typography variant="body_1" display="block" color={"custom.white2"}>
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
            <OutlineWhiteBtn
              marginBottom={
                isTabletView ? "0" : isSmallDesktop ? "120px" : "75px"
              }
              className="smallResWhiteBtn"
              onClick={() => router.push("/services")}
            >
              SOLUTIONS OFFERED <ArrowRightWhite />
            </OutlineWhiteBtn>{" "}
          </Box>
        </LeftPanel>
        <HomeImgAnimation />
      </BusinessOffice>
    </>
  );
};

export default HomeBanner;
