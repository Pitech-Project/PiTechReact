"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { WorkOffice } from "@/styles/MUI/common.styled";
import Frame1 from "../../../public/assets/img/careers/frame1-new.jpg";
import Frame2 from "../../../public/assets/img/careers/frame2-new.jpg";
import Frame3 from "../../../public/assets/img/careers/frame3-new.jpg";
import Frame4 from "../../../public/assets/img/careers/frame4-new.jpg";
import Frame5 from "../../../public/assets/img/careers/frame5-new.jpg";
import Frame6 from "../../../public/assets/img/careers/frame6-new.jpg";
import GroupPic from "../../../public/assets/img/careers/career-full.png";

const Teams: React.FC = () => {
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box marginBottom={isMdView ? "80px" : "140px"}>
      <WorkOffice>
        {!isMdView ? (
          <Image src={GroupPic} alt="Office Work" />
        ) : (
          <Box sx={{ img: { width: "100%", height: "auto" } }}>
            <Image src={Frame1} alt="Office Work" />
            <Image src={Frame2} alt="Office Work" />

            <Image src={Frame3} alt="Office Work" />
            <Image src={Frame4} alt="Office Work" />
            <Image src={Frame5} alt="Office Work" />
            <Image src={Frame6} alt="Office Work" />
          </Box>
        )}
      </WorkOffice>
    </Box>
  );
};

export default Teams;
