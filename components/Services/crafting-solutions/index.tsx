"use client";

import {
  BusinessOffice,
  FullStop,
  LeftPanel,
  SubTypography,
} from "@/styles/MUI/common.styled";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ServicesImgAnimation = dynamic(
  () => import("../services-img-animation"),
  { ssr: false },
);
export const CraftingSolutions = () => {
  return (
    <BusinessOffice
      bgcolor={"custom.black"}
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      bannerprop="services"
    >
      <Box>
        <LeftPanel bannerprop="services">
          <Typography variant="body_1" display="block" color={"custom.white2"}>
            First we listen, then, <br></br> we shape the solution
            <FullStop />
          </Typography>

          <SubTypography
            variant="Caption1"
            color="custom.grey_700"
            display="block"
          >
            We build for clarity and longevity, the wins follow.
          </SubTypography>
        </LeftPanel>

        <ServicesImgAnimation />
      </Box>
    </BusinessOffice>
  );
};
