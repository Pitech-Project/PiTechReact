"use client";

import { Typography } from "@mui/material";
import {
  BusinessOffice,
  FullStop,
  LeftPanel,
  SubTypography,
} from "@/styles/MUI/common.styled";
import dynamic from "next/dynamic";

const CareerImgAnimation = dynamic(() => import("../career-img-animation"), {
  ssr: false,
});
export const CareersBanner = () => {
  return (
    <BusinessOffice
      bgcolor={"custom.black"}
      justifyContent="space-between"
      alignItems="center"
    >
      <LeftPanel>
        <Typography variant="body_1" display="block" color={"custom.white2"}>
          Looking for motivated, bright <br />& passionate individuals{" "}
          <FullStop />
        </Typography>

        <SubTypography variant="Caption1" color="custom.white2" display="block">
          Pi is full of challenges, learning and successful smiles. <br></br>
          Come grow with us and become a part of a global solutions company.
        </SubTypography>
      </LeftPanel>
      <CareerImgAnimation />
    </BusinessOffice>
  );
};
