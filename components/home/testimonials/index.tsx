/* eslint-disable no-redeclare */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { StaticImageData } from "next/image";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProfileImg from "../../../public/assets/img/profile-pic.png";
import {
  OuterSection1,
  PrevNext,
  SmallFullStop,
  TestimonialBoxNew,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ObservedSection from "@/components/common/ObservedSection";

interface Testimonial {
  name: string;
  role: string;
  image: StaticImageData;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Chanakya",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Pi Techniques has been a true partner in our digital transformation journey. Their ability to understand our complex requirements and translate them into simple, scalable solutions has been invaluable. They don’t just deliver technology — they help us think ahead.",
  },
  {
    name: "V.Ships",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been seamless. They brought clarity and efficiency to our systems, ensuring we could focus on operations while they handled the complexity behind the scenes. Their expertise and responsiveness give us complete confidence.",
  },
  {
    name: "The Willingdon Sports Club",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Our members expect premium experiences both offline and online. Pi Techniques designed and developed a platform that makes everything — from logins to payments — effortless. Their team balanced design, security, and ease of use beautifully.",
  },
  {
    name: "Rabia Gupta",
    role: "Founder",
    image: ProfileImg,
    text: "As a designer, my work is all about detail and aesthetics. Pi Techniques has been the perfect technology partner, turning my ideas into beautifully functional websites time and again. They understand creativity and bring it to life digitally.",
  },
];

const Testimonial: React.FC = () => {
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ObservedSection id="home3" bg="light">
      <TestimonialBoxNew
        bgcolor={"custom.black2"}
        position={"relative"}
        paddingBottom={isMdView ? "80px" : "160px"}
        className="testimonial-slider"
      >
        <OuterSection1 container className="testimonial-outer">
          <Grid
            size={{ xs: 12, lg: 8.2, xl: 7.4 }}
            offset={{ xs: 0, lg: 2, xl: 2.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="testimonial-heading"
            >
              <Stack>
                <Typography color="custom.white4" variant="body_4_600">
                  TESTIMONIALS
                  <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.white2"
                  variant="body_6"
                  display={"block"}
                >
                  Voices of our partners
                </Typography>
              </Stack>
            </motion.div>
            <PrevNext>
              <Button sx={{ marginRight: "16px !important" }}>
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66846 12L7.91164 10.8491L3.40689 6.79593L24 6.5V5.20407H3.40689L7.91164 1.15092L6.66846 0L-5.53131e-05 6L6.66846 12Z"
                    fill="#f4f4f4"
                  />
                </svg>
              </Button>
              <Button className="swiper-button-next">
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3315 12L16.0884 10.8491L20.5931 6.79593L0 6.5V5.20407H20.5931L16.0884 1.15092L17.3315 0L24.0001 6L17.3315 12Z"
                    fill="#f4f4f4"
                  />
                </svg>
              </Button>
            </PrevNext>
          </Grid>
        </OuterSection1>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={40}
          centeredSlides={true}
          speed={300}
          loop={true}
          className="mySwiper"
          breakpoints={{
            1366: { slidesPerView: 2.5, spaceBetween: 40 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 },
            767: { slidesPerView: 1.6, spaceBetween: 20 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box className="testimonial-boxUI">
                <Typography variant="body_8" color="custom.white3">
                  {testimonial.text}
                </Typography>
                <Stack
                  flexDirection={"row"}
                  gap={1.5}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={2.5}
                >
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  /> */}
                  <Stack>
                    <Typography
                      variant="overline_s_700"
                      className="testimonialName"
                      display={"block"}
                      marginBottom={"4px"}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="overline_s_400"
                      color="custom.white3"
                      className="testimonialRole"
                    >
                      {testimonial.role}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialBoxNew>
    </ObservedSection>
  );
};

export default Testimonial;
