"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import office1 from "../../../public/assets/img/contact/kurla-office.png";
import office2 from "../../../public/assets/img/contact/nariman-office.png";
import office3 from "../../../public/assets/img/contact/pune-office.png";
import office4 from "../../../public/assets/img/contact/thane-office.png";
import Arrow from "../../../public/assets/img/arrow_right_white.svg";
import {
  DirectionLink,
  OurTeamGrid,
  OuterSection,
  OwlCarouselBox,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";

export const ouroffices = [
  {
    id: "1",
    img: office2,
    title: "Nariman Point",
    location: "Mumbai",
    link: "https://www.google.com/maps/place/Pi+Techniques+Pvt.+Ltd./@18.9251667,72.824424,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1e97e031c0b:0x8a44b9ad6132d028!8m2!3d18.9251667!4d72.824424!16s%2Fg%2F1th5y83b?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
  {
    id: "2",
    img: office3,
    title: "Pune",
    location: "Pune",
    link: "https://www.google.com/maps/place/PI+Techniques,Pune+wakad/data=!4m2!3m1!1s0x0:0x69586c432445358e?sa=X&ved=1t:2428&ictx=111",
  },
  {
    id: "3",
    img: office4,
    title: "Thane",
    location: "Thane",
    link: "https://www.google.com/maps/place/PI+Techniques/data=!4m2!3m1!1s0x0:0x53fedd616f5c855a?sa=X&ved=1t:2428&ictx=111",
  },
  {
    id: "4",
    img: office1,
    title: "Kurla",
    location: "Mumbai",
    link: "",
  },
];

export const OurOffice = () => {
  return (
    <Stack>
      <OuterSection sx={{ width: "90%", gap: 0 }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SubTitlemarginBottom>
            <Typography
              color="custom.black"
              variant="body_4_600"
              letterSpacing={"2.4px"}
              marginBottom={2}
              display={"block"}
            >
              OUR OFFICES <SmallFullStop />
            </Typography>
            <Typography color="custom.black" variant="body_6" display={"block"}>
              Offices at different locations
            </Typography>
          </SubTitlemarginBottom>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={2}>
            {ouroffices.map((ouroffices) => (
              <OurTeamGrid size={{ xs: 12, md: 4 }} key={ouroffices.id}>
                <Image
                  src={ouroffices.img}
                  alt="out office"
                  style={{ width: "-webkit-fill-available", height: "auto" }}
                />
                <OwlCarouselBox marginTop={"-8px"}>
                  <Box>
                    <Typography
                      variant="body_5"
                      display={"block"}
                      color="custom.white2"
                      marginBottom={0.2}
                    >
                      {ouroffices.title}
                    </Typography>
                    <Typography variant="body_4_400" color="custom.white3">
                      {ouroffices.location}
                    </Typography>
                  </Box>
                  <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                    <Typography
                      variant="small_typography"
                      color="custom.white2"
                    >
                      GET DIRECTIONS
                    </Typography>
                    <DirectionLink
                      target="blank"
                      href={ouroffices.link}
                      className=""
                    >
                      <Image src={Arrow} alt="arrow" />
                    </DirectionLink>
                  </Stack>
                </OwlCarouselBox>
              </OurTeamGrid>
            ))}
          </Grid>
        </motion.div>
      </OuterSection>
    </Stack>
  );
};
