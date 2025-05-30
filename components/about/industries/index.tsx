"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Industries1 from "../../../public/assets/img/about-us/shipping.png";
import Industries2 from "../../../public/assets/img/about-us/retail.png";
import Industries3 from "../../../public/assets/img/about-us/print.png";
import Industries4 from "../../../public/assets/img/about-us/itservice.png";
import Industries5 from "../../../public/assets/img/about-us/Union.svg";
import Industries6 from "../../../public/assets/img/about-us/gavel.svg";
import Industries7 from "../../../public/assets/img/about-us/apparel.svg";
import Industries8 from "../../../public/assets/img/about-us/auto_stories.svg";
import {
  IndustriesGrid,
  OuterGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";

export const industries = [
  {
    id: 1,
    name: "Shipping",
    img: <Image src={Industries1} alt="teamBusinessOffice" />,
    src: "https://pitech.in3.cdn-alpha.com/videos/about/shipping.mp4",
  },
  {
    id: 2,
    name: "Retail",
    img: <Image src={Industries2} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    name: "Print & Packaging",
    img: <Image src={Industries3} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    name: "IT Services",
    img: <Image src={Industries4} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    name: "E-commerce",
    img: <Image src={Industries5} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    name: "Legal",
    img: <Image src={Industries6} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 7,
    name: "Fashion",
    img: <Image src={Industries7} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    name: "Education",
    img: <Image src={Industries8} alt="teamBusinessOffice" />,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export const KeyIndustries = () => {
  return (
    <Stack bgcolor={"custom.black2"}>
      <OuterGrid container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 11, xl: 8 }}
          offset={{ xs: 0, lg: 1, xl: 2.3 }}
        >
          <SubTitlemarginBottom>
            <Typography
              color="custom.white4"
              variant="body_4_600"
              marginBottom={2}
              letterSpacing={"2.4px"}
              textTransform={"uppercase"}
              display={"block"}
            >
              industries
              <SmallFullStop />
            </Typography>
            <Typography
              color="custom.white2"
              variant="body_6"
              display={"block"}
            >
              Key industries we serve
            </Typography>
          </SubTitlemarginBottom>
          <Grid container spacing={5}>
            {industries.map((industries) => (
              <IndustriesGrid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={industries.id}
              >
                {/* <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                > */}
                <Box className="IndustriesBox">
                  {industries.img}
                  <Typography
                    color="custom.white2"
                    variant="body_5"
                    display={"block"}
                    fontWeight={500}
                    margin={"20px 0 0px"}
                  >
                    {industries.name}
                  </Typography>
                </Box>
                <Box
                  component="video"
                  src={industries.src}
                  autoPlay
                  muted
                  loop
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                    objectFit: "cover",
                  }}
                ></Box>
                {/* </motion.div> */}
              </IndustriesGrid>
            ))}
          </Grid>
        </Grid>
      </OuterGrid>
    </Stack>
  );
};
