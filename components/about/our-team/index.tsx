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
    const parents = Array.from(
      document.querySelectorAll<HTMLElement>(".equal-height-parent"),
    );
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".equal-height"),
    );

    if (!parents.length || !items.length) return;

    const resetHeights = () =>
      items.forEach((el) => (el.style.height = "auto"));

    const applyEqualHeights = () => {
      resetHeights();

      const rows = new Map<number, HTMLElement[]>();

      parents.forEach((parent, index) => {
        const top = Math.round(parent.getBoundingClientRect().top);
        if (!rows.has(top)) rows.set(top, []);
        rows.get(top)!.push(items[index]);
      });

      rows.forEach((rowItems) => {
        if (rowItems.length <= 1) return;

        const heights = rowItems.map((el) => el.offsetHeight);
        const max = Math.max(...heights);
        const min = Math.min(...heights);

        if (max === min) return; // all same → skip

        rowItems.forEach((el) => (el.style.height = `${max}px`));
      });
    };

    const observer = new ResizeObserver(applyEqualHeights);
    parents.forEach((p) => observer.observe(p));

    window.addEventListener("resize", applyEqualHeights);

    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener("load", applyEqualHeights));

    setTimeout(applyEqualHeights, 200);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", applyEqualHeights);
      imgs.forEach((img) => img.removeEventListener("load", applyEqualHeights));
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
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={team.id}
                className="equal-height-parent"
              >
                <OurTeamUI>
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
                    <Infromation
                      alignItems={"flex-start"}
                      className="equal-height"
                      justifyContent={"space-between"}
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
                className="equal-height-parent"
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
