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
    image: "/assets/img/about-us/team-images/shamal-swali.jpg",
    designation: "Director",
  },
  {
    id: 2,
    name: "Hiten Damania",
    image: "/assets/img/about-us/team-images/hiten-damania.jpg",
    designation: "Head of Delivery",
  },
  {
    id: 3,
    name: "Tarun Kapadia",
    image: "/assets/img/about-us/team-images/tarun-kapadia.jpg",
    designation: "Product Delivery Lead",
  },
  {
    id: 4,
    name: "Hemang Choksi",
    image: "/assets/img/about-us/team-images/hemang-choski.jpg",
    designation: "Lead Solution Architect",
  },
  {
    id: 5,
    name: "Sagar Shirke",
    image: "/assets/img/about-us/team-images/sagar-shirke.jpg",
    designation: "Product Implementation Lead",
  },
  {
    id: 6,
    name: "Firdaus Minocher",
    image: "/assets/img/about-us/team-images/firdaus.jpg",
    designation: "Business Process Strategist",
  },
  {
    id: 7,
    name: "Abhijit Wagh",
    image: "/assets/img/about-us/team-images/abhijit.jpg",
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

      // Reset heights before recalculating
      items.forEach((item) => (item.style.height = "auto"));

      // Group by row (using offsetTop instead of getBoundingClientRect)
      const rowTops: Record<number, HTMLElement[]> = {};
      items.forEach((item) => {
        const top = Math.round(item.offsetTop);
        if (!rowTops[top]) rowTops[top] = [];
        rowTops[top].push(item);
      });

      // Apply equal heights
      Object.values(rowTops).forEach((rowItems) => {
        const maxHeight = Math.max(
          ...rowItems.map((item) => item.offsetHeight),
        );
        rowItems.forEach((item) => {
          item.style.height = `${maxHeight}px`;
        });
      });
    };

    // Helper: run after animations + image load
    const delayApply = () => {
      clearTimeout((window as any).__eqTimeout);
      (window as any).__eqTimeout = setTimeout(applyEqualHeights, 800);
    };

    // Run once after mount
    delayApply();

    // Re-run after resize
    window.addEventListener("resize", delayApply);

    // Re-run when all images finish loading
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
              Leaders fuelled by passion
            </Typography>
          </SubTitlemarginBottom>
          <Grid container spacing={5}>
            {industries.map((industry) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={industry.id}>
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
                          variant="Caption2"
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
