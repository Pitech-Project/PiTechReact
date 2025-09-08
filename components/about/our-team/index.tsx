"use client";

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  Infromation,
  OurTeamUI,
  OuterGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { useEffect } from "react";

const industries = [
  {
    id: 1,
    name: "Shyamal Swali",
    image: "/assets/img/about-us/shamal-swali.png",
    designation: "Director",
  },
  {
    id: 2,
    name: "Hiten Damania",
    image: "/assets/img/about-us/hiten-damania.png",
    designation: "Head of Delivery",
  },
  {
    id: 3,
    name: "Tarun Kapadia",
    image: "/assets/img/about-us/tarun-kapadia.png",
    designation: "Product Delivery Lead",
  },
  {
    id: 4,
    name: "Hemang Choksi",
    image: "/assets/img/about-us/hemang-choski.png",
    designation: "Lead Solution Architect",
  },
  {
    id: 5,
    name: "Sagar Shirke",
    image: "/assets/img/about-us/sagar-shirke.png",
    designation: "Product Implementation Lead",
  },
  {
    id: 6,
    name: "Firdaus Minocher",
    image: "/assets/img/about-us/firdaus.png",
    designation: "Business Process Strategist",
  },
  {
    id: 7,
    name: "Abhijit Wagh",
    image: "/assets/img/about-us/abhijit.png",
    designation: "Product Implementation Lead",
  },
];

const OurTeam = () => {
  useEffect(() => {
    const applyEqualHeights = () => {
      const items = Array.from(
        document.querySelectorAll<HTMLElement>(".equal-height"),
      );
      if (items.length === 0) return;

      items.forEach((item) => (item.style.height = "auto"));

      const rowTops: Record<number, HTMLElement[]> = {};
      items.forEach((item) => {
        const top = Math.round(item.getBoundingClientRect().top);
        if (!rowTops[top]) rowTops[top] = [];
        rowTops[top].push(item);
      });

      Object.values(rowTops).forEach((rowItems) => {
        const maxHeight = Math.max(
          ...rowItems.map((item) => item.offsetHeight),
        );
        rowItems.forEach((item) => {
          item.style.height = maxHeight + "px";
        });
      });
    };

    const timeout = setTimeout(() => {
      applyEqualHeights();
    }, 100); // delay 100ms to ensure layout is ready

    window.addEventListener("resize", applyEqualHeights);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", applyEqualHeights);
    };
  }, []);

  return (
    <Stack bgcolor={"custom.black2"}>
      <OuterGrid container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <SubTitlemarginBottom>
            <Typography color="custom.grey_700" variant="body_4_600">
              OUR TEAM
              <SmallFullStop />
            </Typography>
            <Typography
              color="custom.white2"
              variant="body_6"
              display={"block"}
            >
              Team of highly qualified leaders
            </Typography>
          </SubTitlemarginBottom>
          <Grid container spacing={5}>
            {industries.map((industry) => (
              <Grid size={{ xs: 12, md: 4 }} key={industry.id}>
                <OurTeamUI className="equal-height">
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
                          marginBottom={"4px"}
                        >
                          {industry.name}
                        </Typography>
                        <Typography
                          className="designation"
                          color="custom.white3"
                          variant="body_3_500"
                        >
                          {industry.designation}
                        </Typography>
                      </Stack>
                    </Infromation>
                  </motion.div>
                </OurTeamUI>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </OuterGrid>
    </Stack>
  );
};

export default OurTeam;
