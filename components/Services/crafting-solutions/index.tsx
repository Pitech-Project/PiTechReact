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
    >
      <LeftPanel>
        <Typography variant="body_1" display="block" color={"custom.white2"}>
          Crafting solutions <br></br>for your unique needs
          <FullStop />
        </Typography>

        <SubTypography variant="Caption1" color="custom.white2" display="block">
          Discover service excellence. We craft tailored solutions to<br></br>
          meet your unique needs and fuel success.
        </SubTypography>
      </LeftPanel>

      <ServicesImgAnimation />
    </BusinessOffice>
  );
};
