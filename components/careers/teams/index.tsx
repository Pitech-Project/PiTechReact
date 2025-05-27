"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/assets/img/careers/image1.png";
import img2 from "../../../public/assets/img/careers/image2.png";
import img3 from "../../../public/assets/img/careers/image3.png";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const src = [img1, img2, img3, img1, img2, img3];

const StyledSliderWrapper = styled(Box)(() => ({
  ".slick-slide > div": {
    margin: "0 16px",
  },
  ".slick-list": {
    margin: "0 -16px",
  },
}));

const Teams: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box marginBottom={isMdView ? "80px" : "160px"}>
      <StyledSliderWrapper>
        <Slider {...settings}>
          {src.map((src, index) => (
            <Box
              key={index}
              sx={{
                "& img": {
                  borderRadius: "16px",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Image src={src} alt={`Slide ${index + 1}`} layout="intrinsic" />
            </Box>
          ))}
        </Slider>
      </StyledSliderWrapper>
    </Box>
  );
};

export default Teams;
