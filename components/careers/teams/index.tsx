"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { BgImgBox, WorkOffice } from "@/styles/MUI/common.styled";
import Frame1 from "../../../public/assets/img/careers/team-members/frame_15.jpg";
import Frame2 from "@/public/assets/img/careers/team-members/frame_16.jpg";
import Frame3 from "@/public/assets/img/careers/team-members/frame_17.jpg";
import Frame21 from "@/public/assets/img/careers/team-members/frame_21.jpg";
import Frame22 from "@/public/assets/img/careers/team-members/frame_22.jpg";
import Frame6 from "@/public/assets/img/careers/team-members/frame_13.jpg";
import Frame7 from "@/public/assets/img/careers/team-members/frame_4.jpg";
import Frame8 from "@/public/assets/img/careers/team-members/frame_8.jpg";
import Frame9 from "@/public/assets/img/careers/team-members/frame_18.jpg";
import Frame10 from "@/public/assets/img/careers/team-members/frame_10.jpg";
import Frame11 from "@/public/assets/img/careers/team-members/frame_11.jpg";
import Frame12 from "@/public/assets/img/careers/team-members/frame_12.jpg";
import Frame13 from "@/public/assets/img/careers/team-members/frame_24.jpg";
import Frame14 from "@/public/assets/img/careers/team-members/frame_14.jpg";
import Frame19 from "@/public/assets/img/careers/team-members/frame_19.jpg";

const Teams: React.FC = () => {
  return (
    <Box>
      <WorkOffice>
        <Grid container spacing={{ xs: "20px", md: "10px", lg: "20px" }}>
          <Grid size={{ xs: 12, sm: 9 }}>
            <Grid container spacing={{ xs: "20px", md: "10px", lg: "20px" }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <BgImgBox bgimg={Frame1}></BgImgBox>
                <Image src={Frame1} alt="Office Work" className="teamImage" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Grid
                  container
                  spacing={{ xs: "20px", md: "10px", lg: "20px" }}
                >
                  <Grid size={{ xs: 12, sm: 7 }}>
                    <BgImgBox bgimg={Frame2}></BgImgBox>
                    <Image
                      src={Frame2}
                      alt="Office Work"
                      className="teamImage"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <Image src={Frame3} alt="Office Work" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Image src={Frame6} alt="Office Work" />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Image src={Frame7} alt="Office Work" />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Image src={Frame9} alt="Office Work" />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <BgImgBox bgimg={Frame8}></BgImgBox>
            <Image src={Frame21} alt="Office Work" className="teamImage" />
          </Grid>
          <Grid size={{ xs: 12, sm: 9 }}>
            <Grid container spacing={{ xs: "20px", md: "10px", lg: "20px" }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <BgImgBox bgimg={Frame11}></BgImgBox>
                <Image src={Frame22} alt="Office Work" className="teamImage" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Image src={Frame10} alt="Office Work" />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <BgImgBox bgimg={Frame12}></BgImgBox>
                <Image src={Frame12} alt="Office Work" className="teamImage" />
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <Grid
                  container
                  spacing={{ xs: "20px", md: "10px", lg: "20px" }}
                >
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <Image src={Frame19} alt="Office Work" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7 }}>
                    <BgImgBox bgimg={Frame14}></BgImgBox>
                    <Image
                      src={Frame14}
                      alt="Office Work"
                      className="teamImage"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <BgImgBox bgimg={Frame13}></BgImgBox>
            <Image src={Frame13} alt="Office Work" className="teamImage" />
          </Grid>
        </Grid>

        {/* {!isMdView ? (
          <Image src={GroupPic} alt="Office Work" />
        ) : (
          <Box sx={{ img: { width: "100%", height: "auto" } }}>
            <Image src={Frame1} alt="Office Work" />
            <Image src={Frame2} alt="Office Work" />

            <Image src={Frame3} alt="Office Work" />
            <Image src={Frame4} alt="Office Work" />
            <Image src={Frame5} alt="Office Work" />
            <Image src={Frame8} alt="Office Work" />
          </Box>
        )} */}
      </WorkOffice>
    </Box>
  );
};

export default Teams;
