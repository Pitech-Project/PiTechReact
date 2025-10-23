"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/assets/img/top-companies/chanakya-new.svg";
import img2 from "../../../public/assets/img/top-companies/v-group.svg";
import img3 from "../../../public/assets/img/top-companies/wri.svg";
import img4 from "../../../public/assets/img/top-companies/sea-tec.svg";
import img5 from "../../../public/assets/img/top-companies/taj.svg";
import img6 from "../../../public/assets/img/top-companies/citius.png";
import img7 from "../../../public/assets/img/top-companies/metro.png";
import img8 from "../../../public/assets/img/top-companies/bdl-logo.svg";
import img9 from "../../../public/assets/img/top-companies/oceanic.svg";
import img10 from "../../../public/assets/img/top-companies/cotton-world.svg";
import img11 from "../../../public/assets/img/top-companies/willington.svg";
import img12 from "../../../public/assets/img/top-companies/nutcracker.svg";
import img13 from "../../../public/assets/img/top-companies/crownvet.png";
import img14 from "../../../public/assets/img/top-companies/westwind.png";
import img15 from "../../../public/assets/img/top-companies/honey-bees.svg";
import img16 from "../../../public/assets/img/top-companies/sohfit.svg";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { OuterSection, SmallFullStop } from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";

interface Props {
  homeSlider?: boolean;
}

const src1 = [
  { src: img1, width: 320, height: 80 },
  { src: img2, width: 90, height: 67 },
  { src: img3, width: undefined, height: 88 },
  { src: img4, width: 152, height: 56 },
  { src: img5, width: 118, height: 104 },
  { src: img6, width: undefined, height: undefined },
  { src: img7, width: undefined, height: undefined },
  { src: img8, width: 132, height: 117 },
  { src: img9, width: 225, height: 38 },
  { src: img10, width: undefined, height: 61 },
  { src: img11, width: 66, height: 100 },
  { src: img12, width: undefined, height: 87 },
  { src: img13, width: undefined, height: undefined },
  { src: img14, width: undefined, height: undefined },
  { src: img15, width: 128, height: 128 },
  { src: img16, width: 222, height: 60 },
];

const StyledSliderWrapper = styled(Box)(() => ({
  ".slick-slide > div": {
    margin: "0 40px",
  },
  ".slick-list": {
    margin: "0 -16px",
  },
  ".slick-track": {
    display: "flex",
    alignItems: "center",
  },
  ".slick-slide": {
    width: "auto !important",
  },
}));

const CompaniesSlider: React.FC<Props> = ({ homeSlider }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
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
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const BottomSpacing = () => {
    if (homeSlider && isMdView) {
      return 12;
    }
    if (homeSlider) {
      return "154px";
    }
    if (!homeSlider && isTablet) {
      return "120px";
    }
    return "100px";
  };
  return (
    <Box marginBottom={BottomSpacing()}>
      {homeSlider && (
        <OuterSection textAlign={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography color="custom.black3" variant="body_4_600">
              OUR CLIENTS
              <SmallFullStop />
            </Typography>
            <Typography color="custom.black" variant="body_6" display={"block"}>
              Lasting partnerships
            </Typography>
          </motion.div>
        </OuterSection>
      )}
      <StyledSliderWrapper>
        <Slider {...settings}>
          {src1.map((item, index) => (
            <Box key={index}>
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={`Slide ${index + 1}`}
              />
            </Box>
          ))}
        </Slider>
      </StyledSliderWrapper>
    </Box>
  );
};

export default CompaniesSlider;
