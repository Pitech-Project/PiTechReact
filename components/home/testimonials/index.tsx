/* eslint-disable no-redeclare */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProfileImg from "../../../public/assets/img/profile-pic.png";
import {
  OuterSection,
  PrevNext,
  SmallFullStop,
  TestimonialBox,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  image: any;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
  {
    name: "Vikram Pawar",
    role: "Strategic Project Accounting Manager",
    image: ProfileImg,
    text: "Working with Pi Techniques has been an absolute pleasure! Their team of experts not only developed a customized software solution for our business but also provided exceptional support throughout the entire process. Thanks to their expertise and dedication, we were able to streamline our operations and enhance our productivity. I highly recommend Pi Techniques to anyone looking for reliable and innovative technology solutions.",
  },
];

const Testimonial: React.FC = () => {
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TestimonialBox
      bgcolor={"custom.black2"}
      position={"relative"}
      paddingBottom={isMdView ? "80px" : "160px"}
    >
      <OuterSection paddingBottom={isMdView ? "80px" : "140px !important"}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Stack>
            <Typography
              color="custom.white4"
              variant="body_4_600"
              marginBottom={2}
              letterSpacing={"2.4px"}
              display={"block"}
            >
              TESTIMONIALS
              <SmallFullStop />
            </Typography>
            <Typography
              color="custom.white2"
              variant="body_6"
              display={"block"}
            >
              What our clients are saying
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
                fill="#F6F6F6"
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
                fill="#F6F6F6"
              />
            </svg>
          </Button>
        </PrevNext>
      </OuterSection>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box className="testimonial-boxUI">
              <Typography variant="body_8" color="custom.white2">
                {testimonial.text}
              </Typography>
              <Stack
                flexDirection={"row"}
                gap={1.5}
                justifyContent={"flex-start"}
                alignItems={"center"}
                marginTop={2.5}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <Stack>
                  <Typography
                    variant="overline_s_700"
                    color="custom.orange_600"
                    display={"block"}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="overline_s_400" color="custom.white3">
                    {testimonial.role}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialBox>
  );
};

export default Testimonial;
