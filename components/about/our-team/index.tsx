"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
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
import { executiveteam, teammember } from "@/lib/teamMember";
import Link from "next/link";
import linkedin from "@/public/assets/img/about-us/linkedin.svg";

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
    <Stack bgcolor={"custom.black7"}>
      <OuterGrid container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 1.95 }}
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
            {teammember.map((team) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={team.id}>
                <OurTeamUI className="equal-height">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      className="bgImg"
                      src={team.image}
                      alt={team.name}
                      width={400}
                      height={300}
                    />
                    <Infromation alignItems={"flex-start"}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                      >
                        <Typography
                          color="custom.white2"
                          variant="Caption2"
                          display={"block"}
                          marginBottom={"4px"}
                        >
                          {team.name}
                        </Typography>
                        <Link href={team.linkedin}>
                          <Image src={linkedin} alt="LinkedIn" />
                        </Link>
                      </Stack>
                      <Typography
                        className="designation"
                        color="custom.white3"
                        variant="body_3_500"
                      >
                        {team.designation}
                      </Typography>
                    </Infromation>
                  </motion.div>
                </OurTeamUI>
              </Grid>
            ))}
          </Grid>

          <Box margin="140px 0 72px">
            <Typography color="custom.grey_700" variant="body_6">
              Executive Team
            </Typography>
          </Box>
          <Grid container spacing={5}>
            {executiveteam.map((exeteam) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: exeteam.gridsize ? exeteam.gridsize : 4,
                }}
                key={exeteam.id}
              >
                <OurTeamUI>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      className={exeteam.mobImage ? "bgImg deskimg" : "bgImg"}
                      src={exeteam.image}
                      alt={exeteam.name}
                      width={400}
                      height={300}
                    />
                    {exeteam.mobImage && (
                      <Image
                        className="mobImg"
                        src={exeteam.mobImage}
                        alt={exeteam.name}
                        width={400}
                        height={300}
                      />
                    )}
                    <Infromation
                      className="equal-height"
                      alignItems={"flex-start"}
                      justifyContent="space-between"
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                      >
                        <Typography
                          color="custom.white2"
                          variant="Caption2"
                          display={"block"}
                          marginBottom={"4px"}
                        >
                          {exeteam.name}
                        </Typography>
                        {exeteam.linkedin && (
                          <Link href={exeteam.linkedin}>
                            <Image src={linkedin} alt="LinkedIn" />
                          </Link>
                        )}
                      </Stack>
                      <Typography
                        className="designation"
                        color="custom.white3"
                        variant="body_3_500"
                      >
                        {exeteam.designation}
                      </Typography>
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
