"use client"; // Ensures it's client-side only

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../public/assets/img/top-companies/citiustechlogo.jpg'
import img2 from '../../public/assets/img/top-companies/metrologo.jpg'
import img3 from '../../public/assets/img/top-companies/seateclogo.jpg'
import img4 from '../../public/assets/img/top-companies/stapleslogo.jpg'
import img5 from '../../public/assets/img/top-companies/starpluslogo.jpg'
import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { OuterSection, SmallFullStop } from "@/app/styles/MUI/common.styled";
import { motion } from "framer-motion";

interface Props {
  homeSlider?: boolean
}

const src = [img1, img2, img3, img4, img5];

const StyledSliderWrapper = styled(Box)(() => ({
  '.slick-slide > div': {
    margin: '0 16px',
  },
  '.slick-list': {
    margin: '0 -16px',
  },
}));

const CompaniesSlider: React.FC<Props> = ({homeSlider}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000, // Smooth scrolling
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous smooth scroll
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
  const isMdView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box marginBottom={homeSlider ? 25 : 0}>
      {homeSlider &&
        <OuterSection textAlign={'center'}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} 
          >
            <Typography color='custom.black3' variant='body_4' marginBottom={2} fontWeight={600} letterSpacing={'2.4px'} display={'block'} textTransform={'uppercase'}>OUR CLIENTS <SmallFullStop /></Typography>
            <Typography color='custom.black' variant='body_6' display={'block'} className=''>Trusted by top companies</Typography>
          </motion.div>
        </OuterSection>
      }
      <StyledSliderWrapper>
      <Slider {...settings}>
        {src.map((src, index) => (
          <Box key={index} sx={{ "& img": { borderRadius: '16px', width: '100%', height:'100%' } }}>
            <Image src={src} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>
      </StyledSliderWrapper>
    </Box>
  );
};

export default CompaniesSlider;
