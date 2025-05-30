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
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import OurWork from "../../../public/assets/img/Our-Work/vchat.png";
import OurWork2 from "../../../public/assets/img/Our-Work/work2.png";
import {
  DirectionLink,
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

const logos = [
  {
    id: "1",
    img: OurWork,
    title: "V.Chat",
    description: "V.Ships | Ship Management",
  },
  {
    id: "2",
    img: OurWork2,
    title: "Inspection Manager",
    description: "V.Ships | Ship Management",
  },
  {
    id: "3",
    img: OurWork,
    title: "V.Chat",
    description: "V.Ships | Ship Management",
  },
  {
    id: "4",
    img: OurWork2,
    title: "Inspection Manager",
    description: "V.Ships | Ship Management",
  },
];

export default function OurWorkCarousel() {
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={2}
      sx={{ py: isMdView ? "80px" : "140px", px: isMdView ? "20px" : 0 }}
    >
      <Grid
        size={{ xs: 12, sm: 10, xl: 10 }}
        offset={{ xs: 0, sm: 2, xl: 2 }}
        sx={{ mx: "auto" }}
      >
        <TestimonialBox
          className="OurWorkCarousel"
          sx={{ position: "relative" }}
        >
          <SubTitlemarginBottom
            flexDirection={isMdView ? "column" :"row"}
            alignItems={"end"}
            justifyContent={"space-between"}
            sx={{ marginRight: { sm: "16px", md: "80px" } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Stack>
                <Typography
                  color="custom.black3"
                  variant="body_4_600"
                  mb={2}
                  display="block"
                  letterSpacing="2.4px"
                  textTransform="uppercase"
                >
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
            <PrevNext className="OurWorkPrevNext" justifyContent={isMdView ? "flex-end" : 'space-between'} marginTop={isMdView? "24px" : '0'}>
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
          </SubTitlemarginBottom>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
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
                  <OwlCarouselBox>
                    <Box>
                      <Typography
                        variant="body_5"
                        display="block"
                        color="custom.white2"
                        mb={1}
                      >
                        {e.title}
                      </Typography>
                      <Typography variant="body_4_400" color="custom.white3">
                        {e.description}
                      </Typography>
                    </Box>
                    <DirectionLink>
                      <CallMadeOutlinedIcon />
                    </DirectionLink>
                  </OwlCarouselBox>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialBox>
      </Grid>
    </Grid>
  );
}
