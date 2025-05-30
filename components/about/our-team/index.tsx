"use client";

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  Infromation,
  OurTeamGrid,
  OuterGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";

const industries = [
  {
    id: 1,
    name: "Shyamal Swali",
    image: "/assets/img/about-us/shamal-swali.jpg",
    designation: "Director",
  },
  {
    id: 2,
    name: "Hiten Damania",
    image: "/assets/img/about-us/hiten-damania.jpg",
    designation: "Head of Development",
  },
  {
    id: 3,
    name: "Tarun Kapadia",
    image: "/assets/img/about-us/tarun-kapadia.jpg",
    designation: "Sr. Project Manager",
  },
  {
    id: 4,
    name: "Hemang Choksi",
    image: "/assets/img/about-us/hemang-choski.jpg",
    designation: "Project Manager / Analyst",
  },
  {
    id: 5,
    name: "Sagar Shirke",
    image: "/assets/img/about-us/sagar-shirke.jpg",
    designation: "Project Manager",
  },
  {
    id: 6,
    name: "Firdaus Minocher",
    image: "/assets/img/about-us/firdaus.jpg",
    designation: "Project Manager / Business Analyst",
  },
];

const OurTeam = () => {
  return (
    <Stack>
      <OuterGrid container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 11, xl: 8 }}
          offset={{ xs: 0, lg: 1, xl: 2.3 }}
        >
          <SubTitlemarginBottom>
            <Typography
              color="custom.black"
              variant="body_4_600"
              marginBottom={2}
              display={"block"}
            >
              OUR TEAM
              <SmallFullStop />
            </Typography>
            <Typography color="custom.black" variant="body_6" display={"block"}>
              Team of highly qualified leaders
            </Typography>
          </SubTitlemarginBottom>
          <Grid container spacing={2}>
            {industries.map((industry) => (
              <Grid size={{ xs: 12, md: 4 }} key={industry.id}>
                <OurTeamGrid>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Image
                      className="bgImg"
                      src={industry.image}
                      alt={industry.name}
                      width={400}
                      height={300}
                    />
                    <Infromation
                      flexDirection={"row"}
                      alignItems={"flex-start"}
                      gap={2}
                    >
                      <Stack>
                        <Typography
                          color="custom.white2"
                          variant="Caption"
                          display={"block"}
                        >
                          {industry.name}
                        </Typography>
                        <Typography
                          className="designation"
                          fontSize={"20px"}
                          color="custom.white3"
                          variant="body_3_400"
                          display={"block"}
                        >
                          {industry.designation}
                        </Typography>
                      </Stack>
                    </Infromation>
                  </motion.div>
                </OurTeamGrid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </OuterGrid>
    </Stack>
  );
};

export default OurTeam;
