"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BusinessOffice,
  FullStop,
  OutlineWhiteBtn,
  SubTypography,
} from "@/app/styles/MUI/common.styled";
import CallMadeIcon from "@mui/icons-material/CallMade";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const HomeImgAnimation = dynamic(() => import("../home-img-animation"), {
  ssr: false,
});

interface Props {
  transformup?: boolean;
}

const HomeBanner = ({ transformup }: Props) => {
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
        <Box className="leftPanel">
          <Typography variant="body_1" display="block" color={"custom.white2"}>
            Commitment to <br></br> customised solutions <FullStop />
          </Typography>

          <SubTypography
            variant="Caption1"
            color="custom.white2"
            display="block"
            className="subTitleSpacing"
          >
            Within every problem lies an opportunity
          </SubTypography>
          <Box
            display={isTabletView ? "flex" : "block"}
            justifyContent={"center"}
          >
            {" "}
            <OutlineWhiteBtn
              marginBottom={
                isTabletView ? "0" : isSmallDesktop ? "120px" : "75px"
              }
              className="smallResWhiteBtn"
              onClick={() => router.push("/services")}
              transformup={transformup}
            >
              SOLUTIONS OFFERED{" "}
              <CallMadeIcon sx={{ marginLeft: "8px", height: 16 }} />
            </OutlineWhiteBtn>{" "}
          </Box>
        </Box>
        <HomeImgAnimation />
      </BusinessOffice>
    </>
  );
};

export default HomeBanner;
