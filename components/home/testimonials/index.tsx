/* eslint-disable no-redeclare */
"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { StaticImageData } from "next/image";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProfileImg from "../../../public/assets/img/profile-pic.png";
import {
  OuterSection1,
  PrevNext,
  SmallFullStop,
  TestimonialBoxNew,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ObservedSection from "@/components/common/ObservedSection";

// ✅ Rename the interface to avoid conflict with component name
interface TestimonialItem {
  name: string;
  role: React.ReactNode;
  image: StaticImageData;
  text: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Metro Shoes",
    role: (
      <>
        Aashish Mashruwala, <i>Business Head of Metro Shoes</i>
      </>
    ),
    image: ProfileImg,
    text: `"Integration was always a challenge for us until Pi Techniques stepped in. They simplified our infrastructure, ensured smooth connectivity across systems, and gave us the reliability and scalability we needed. Their solutions have saved us both time and costs."`,
  },
  {
    name: "Rabia Gupta Designs",
    role: (
      <>
        Rabia Gupta, <i>Founder</i>
      </>
    ),
    image: ProfileImg,
    text: `"As strategic branding consultants, the design and execution of websites for our clients are critical. Our design solutions are always a marriage between a signature brand language and a relevant UI UX. And in this mix - Pi Techniques always steps in with a near perfect understanding of the detailed execution we require, along with great support and domain knowledge." `,
  },
  {
    name: "The Willingdon Sports Club",
    role: (
      <>
        Gururaj Joshi, <i>Dy Manager EDP</i>
      </>
    ),
    image: ProfileImg,
    text: `"Our members expect premium experiences both offline and online. Pi Techniques designed and developed a web platform that makes everything — from logins to payments — effortless. Their team balanced design, security, and ease of use seamlessly."
                           `,
  },
  {
    name: "The Nutcracker",
    role: (
      <>
        Annie Bafna, <i>Founder</i>
      </>
    ),
    image: ProfileImg,
    text: `"We wanted our website to reflect the warmth and uniqueness of our brand. Pi Techniques delivered exactly that. The site is elegant, easy to navigate, and truly captures who we are. Their team was creative, patient, and extremely supportive."
                           `,
  },
  {
    name: "Chanakya",
    role: (
      <>
        Anisha Shetty, <i>Chief of Atelier</i>
      </>
    ),
    image: ProfileImg,
    text: `"Pi Techniques has been a true partner in our digital transformation journey. Their ability to understand our complex requirements and translate them into simple, scalable solutions has been invaluable. They don’t just deliver technology — they help us think ahead."
                           `,
  },
  {
    name: "St. Jude India ChildCare Centres",
    role: (
      <>
        Anil Nair, <i>CEO</i>
      </>
    ),
    image: ProfileImg,
    text: `"Our website plays a crucial role in telling the stories of the cancer warriors and families we care for. With Pi Techniques leading our website redesign, we got not just a sleek design transformation but a meaningful enhancement in how we showcase our cause and its impact. They blended creativity with clarity, improving the user experience while staying true to our core values. We’re grateful for their support and expertise."
                           `,
  },
];

const TestimonialSection: React.FC = () => {
  // ✅ Equal height logic
  useEffect(() => {
    const applyEqualHeights = () => {
      const items = Array.from(
        document.querySelectorAll<HTMLElement>(".equal-height"),
      );
      if (items.length === 0) return;

      items.forEach((item) => (item.style.height = "auto"));
      const rowTops: Record<number, HTMLElement[]> = {};

      items.forEach((item) => {
        const top = Math.round(item.offsetTop);
        if (!rowTops[top]) rowTops[top] = [];
        rowTops[top].push(item);
      });

      Object.values(rowTops).forEach((rowItems) => {
        const maxHeight = Math.max(
          ...rowItems.map((item) => item.offsetHeight),
        );
        rowItems.forEach((item) => {
          item.style.height = `${maxHeight}px`;
        });
      });
    };

    const delayApply = () => {
      clearTimeout((window as any).__eqTimeout);
      (window as any).__eqTimeout = setTimeout(applyEqualHeights, 800);
    };

    delayApply();
    window.addEventListener("resize", delayApply);

    const images = document.querySelectorAll("img");
    let loaded = 0;
    images.forEach((img) => {
      if (img.complete) loaded++;
      else img.addEventListener("load", delayApply);
    });
    if (loaded === images.length) delayApply();

    return () => {
      window.removeEventListener("resize", delayApply);
      images.forEach((img) => img.removeEventListener("load", delayApply));
      clearTimeout((window as any).__eqTimeout);
    };
  }, []);

  return (
    <ObservedSection id="home3" bg="light">
      <TestimonialBoxNew
        bgcolor={"custom.black7"}
        position={"relative"}
        className="testimonial-slider"
      >
        <OuterSection1
          gap={{ xs: "110px !important", sm: "120px !important" }}
          container
          className="testimonial-outer"
        >
          {/* Heading */}
          <Grid
            size={{ xs: 12, lg: 8.2, xl: 7.4 }}
            offset={{ xs: 0, lg: 2, xl: 1.95 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="testimonial-heading"
            >
              <Stack>
                <Typography color="custom.grey_700" variant="body_4_600">
                  TESTIMONIALS
                  <SmallFullStop />
                </Typography>
                <Typography color="custom.white2" variant="body_6">
                  Voices of trust
                </Typography>
              </Stack>
            </motion.div>

            {/* Navigation */}
            <PrevNext className="testimonialarrow">
              <Button
                disableRipple
                className="swiper-button-prev"
                sx={{ marginRight: "16px !important" }}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2857 1L19 9M19 9L11.2857 17M19 9H1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button disableRipple className="swiper-button-next">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2857 1L19 9M19 9L11.2857 17M19 9H1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </PrevNext>
          </Grid>

          <Grid
            size={{ xs: 12, lg: 9.9, xl: 9.9 }}
            offset={{ xs: 0, lg: 2, xl: 1.95 }}
          >
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              slidesPerView={1.6}
              spaceBetween={30}
              speed={350}
              loop={false}
              allowTouchMove
              resistance
              resistanceRatio={0.5}
              className="mySwiper"
              breakpoints={{
                1366: { slidesPerView: 1.6, spaceBetween: 30 },
                1280: { slidesPerView: 1.5, spaceBetween: 30 },
                1024: { slidesPerView: 1.3, spaceBetween: 30 },
                767: { slidesPerView: 1.3, spaceBetween: 40 },
                0: { slidesPerView: 1, spaceBetween: 0 },
              }}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index} className="equal-height">
                  <Box className="testimonial-boxUI ">
                    <Typography variant="body_8" color="custom.white2">
                      {t.text}
                    </Typography>

                    <Stack
                      flexDirection="row"
                      gap={1.5}
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Stack>
                        <Typography
                          variant="overline_s_700"
                          className="testimonialName"
                          marginBottom="4px"
                          color="custom.orange_600"
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          variant="overline_s_400"
                          color="custom.white2"
                          className="testimonialRole"
                        >
                          {t.role}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </OuterSection1>
      </TestimonialBoxNew>
    </ObservedSection>
  );
};

export default TestimonialSection;
