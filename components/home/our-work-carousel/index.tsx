"use client";

import {
  Typography,
  Box,
  Stack,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import OurWork from "../../../public/assets/img/Our-Work/chanakya.png";
import OurWork1 from "../../../public/assets/img/Our-Work/ibs.png";
import OurWork2 from "../../../public/assets/img/Our-Work/citius.png";
import OurWork3 from "../../../public/assets/img/Our-Work/taj-ipad.png";
import {
  ArrowDesign,
  OurWorkTitle,
  OuterGrid,
  OwlCarouselBox,
  PrevNext,
  SmallFullStop,
  SubTitlemarginBottom,
  TestimonialBox,
  WorkCompany,
  WorkLink,
} from "@/styles/MUI/common.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ObservedSection from "@/components/common/ObservedSection";
import { useRouter } from "next/navigation";
import arrowRight from "@/public/assets/img/newRightArrow.svg";

const logos = [
  {
    id: "1",
    img: OurWork,
    title: "Threading technology into fashion",
    description: "Chanakya",
    url: "/case-studie-details?project=chanakya",
  },
  {
    id: "2",
    img: OurWork3,
    title: (
      <>
        A premium car rental management <br className="br-tag" /> system
      </>
    ),
    description: "Taj Hotels",
    url: "/case-studie-details?project=tajGroupofHotels",
  },
  {
    id: "3",
    img: OurWork1,
    title: "The strong and steady ERP evolution",
    description: "CitiusTech",
    url: "/case-studie-details?project=citiusTech",
  },
  {
    id: "4",
    img: OurWork2,
    title: "Transforming fintech publishing ",
    description: "IBSintelligence",
    url: "/case-studie-details?project=ibs",
  },
];

export default function OurWorkCarousel() {
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  return (
    <ObservedSection id="home2" bg="light">
      <OuterGrid
        className="workgrid"
        container
        spacing={2}
        marginRight={"0 !important"}
        paddingRight={"0 !important"}
      >
        <Grid
          size={{ xs: 12, lg: 10, xl: 10 }}
          offset={{ xs: 0, lg: 2, xl: 1.95 }}
          sx={{ mx: "auto" }}
        >
          <TestimonialBox
            className="OurWorkCarousel"
            sx={{ position: "relative" }}
          >
            <SubTitlemarginBottom
              flexDirection={isMdView ? "column" : "row"}
              alignItems={"end"}
              justifyContent={"space-between"}
              sx={{ marginRight: { sm: "16px", md: "80px" } }}
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ width: "100%" }}
              >
                <Stack>
                  <Typography color="custom.black3" variant="body_4_600">
                    our work
                    <SmallFullStop />
                  </Typography>
                  <Typography
                    color="custom.black"
                    variant="body_6"
                    display="block"
                  >
                    Dive into our case studies
                  </Typography>
                </Stack>
              </motion.div>
              <PrevNext
                className="OurWorkPrevNext"
                justifyContent={isMdView ? "flex-end" : "space-between"}
                marginTop={isMdView ? "24px" : "0"}
              >
                <Button disableRipple className="swiper-button-prev">
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
                    ></path>
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
                    ></path>
                  </svg>
                </Button>
              </PrevNext>
            </SubTitlemarginBottom>

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={30}
              slidesPerView={2.5}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                480: { slidesPerView: 1.5 },
                991: { slidesPerView: 2.2 },
                1366: { slidesPerView: 2.5 },
              }}
            >
              {logos.map((e, index) => (
                <SwiperSlide key={e.id}>
                  <WorkLink
                    onClick={() => router.push(`${e.url}`)}
                    href={e.url}
                    sx={{ textDecoration: "none" }}
                  >
                    <Box key={e.id}>
                      <Image
                        src={e.img}
                        alt={`Client Logo ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />

                      <OwlCarouselBox className="OurWorkBox">
                        <Box>
                          <OurWorkTitle
                            variant="body_9"
                            color="custom.white2"
                            className="description"
                          >
                            {e.title}
                          </OurWorkTitle>
                          <WorkCompany
                            variant="body_4_400"
                            color="custom.white3"
                          >
                            {e.description}
                          </WorkCompany>
                        </Box>
                        <ArrowDesign className="arrowDesign">
                          <Image src={arrowRight} alt="Right Arrow" />
                        </ArrowDesign>
                      </OwlCarouselBox>
                    </Box>
                  </WorkLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </TestimonialBox>
        </Grid>
      </OuterGrid>
    </ObservedSection>
  );
}
