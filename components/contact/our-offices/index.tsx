"use client";

import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import office2 from "../../../public/assets/img/contact/nariman-office.jpg";
import Arrow from "../../../public/assets/img/arrow_right_white.svg";
import {
  DirectionLink,
  OurTeamGrid,
  OuterGrid2,
  OwlCarouselBox,
  SmallFullStop,
  SubTitlemarginBottom2,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ObservedSection from "@/components/common/ObservedSection";

export const OurOffice = () => {
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ObservedSection id="home4" bg="light">
      <Stack>
        <OuterGrid2
          marginTop={"88px !important"}
          container
          spacing={5}
          justifyContent={"space-between"}
        >
          <Grid
            size={{ xs: 12, lg: 9, xl: 8.3 }}
            offset={{ xs: 0, lg: 2, xl: 2.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SubTitlemarginBottom2>
                <Typography color="custom.gray_txt" variant="body_4_600">
                  Location
                  <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.black"
                  variant="body_6"
                  display={"block"}
                >
                  Our headquarters
                </Typography>
              </SubTitlemarginBottom2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Grid container spacing={isTabletView ? 3 : 5}>
                <OurTeamGrid
                  size={{ xs: 12, md: 5.5 }}
                  order={{ xs: 2, md: 1 }}
                >
                  <Image
                    src={office2}
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
                        Nariman Point
                      </Typography>
                      <Typography variant="body_4_400" color="custom.white3">
                        Mumbai
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
                        href={
                          "https://www.google.com/maps/place/Pi+Techniques+Pvt.+Ltd./@18.9251667,72.824424,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1e97e031c0b:0x8a44b9ad6132d028!8m2!3d18.9251667!4d72.824424!16s%2Fg%2F1th5y83b?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                        }
                      >
                        <Image src={Arrow} alt="arrow" />
                      </DirectionLink>
                    </Stack>
                  </OwlCarouselBox>
                </OurTeamGrid>
                <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
                  <Typography variant="body_2" color="custom.border2">
                    24/C, Second Floor,<br></br>
                    Mittal Tower, C-Wing,<br></br>
                    Nariman Point, <br></br>
                    Mumbai - 400001
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </OuterGrid2>
      </Stack>
    </ObservedSection>
  );
};
