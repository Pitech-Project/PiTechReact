"use client";

import {
  Typography,
  Box,
  Stack,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  Link,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import OurWork from "../../../public/assets/img/Our-Work/chanakya.png";
import OurWork1 from "../../../public/assets/img/Our-Work/ibs.png";
import OurWork2 from "../../../public/assets/img/Our-Work/citius.png";
import OurWork3 from "../../../public/assets/img/Our-Work/taj-ipad.png";
import {
  DirectionBox,
  OurWorkTitle,
  OuterGrid,
  OwlCarouselBox,
  PrevNext,
  SmallFullStop,
  SubTitlemarginBottom,
  TestimonialBox,
} from "@/styles/MUI/common.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIconWhite from "@/components/common/SVGIcons/arrowForwardIconWhite";
import ObservedSection from "@/components/common/ObservedSection";
import { useRouter } from "next/navigation";

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
      <OuterGrid container spacing={2} marginRight={"0 !important"}>
        <Grid
          size={{ xs: 12, lg: 10, xl: 10 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
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
                <Button className="swiper-button-prev">
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
            </SubTitlemarginBottom>

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={20}
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
                    <Link
                      onClick={() => router.push(`${e.url}`)}
                      href={e.url}
                      sx={{ textDecoration: "none" }}
                    >
                      <OwlCarouselBox className="OurWorkBox">
                        <Box>
                          <OurWorkTitle
                            variant="body_9"
                            color="custom.white2"
                            className="description"
                          >
                            {e.title}
                          </OurWorkTitle>
                          <Typography
                            variant="body_4_400"
                            color="custom.white3"
                          >
                            {e.description}
                          </Typography>
                        </Box>
                        <DirectionBox className="directionIcon">
                          <ArrowForwardIconWhite />
                        </DirectionBox>
                      </OwlCarouselBox>
                    </Link>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </TestimonialBox>
        </Grid>
      </OuterGrid>
    </ObservedSection>
  );
}
