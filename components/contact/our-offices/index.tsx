"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  ArrowDesign,
  IframeBox,
  OurTeamGrid,
  OuterGrid2,
  OwlCarouselBox,
  RightTopArrow,
  SmallFullStop,
  SubTitlemarginBottom2,
} from "@/styles/MUI/common.styled";
import ObservedSection from "@/components/common/ObservedSection";
import arrowRight from "@/public/assets/img/newRightArrow.svg";
import Link from "next/link";

export const OurOffice = () => {
  return (
    <ObservedSection id="home4" bg="light">
      <Stack>
        <OuterGrid2
          container
          spacing={5}
          justifyContent={"space-between"}
          className="serviceOuterGridOffice"
        >
          <Grid
            size={{ xs: 12, lg: 9, xl: 9 }}
            offset={{ xs: 0, lg: 2, xl: 1.95 }}
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
            <Grid container spacing={5}>
              <OurTeamGrid size={{ xs: 12, md: 6.5 }} order={{ xs: 2, md: 1 }}>
                {/* <Image
                    src={office2}
                    alt="out office"
                    style={{ width: "-webkit-fill-available", height: "auto" }}
                  /> */}
                <IframeBox>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.140669523596!2d72.824424!3d18.9251667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e97e031c0b%3A0x8a44b9ad6132d028!2sPi%20Techniques%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762169535718!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  ></iframe>
                </IframeBox>
                <OwlCarouselBox className="OurOfficeBox">
                  <Box width={"auto !important"}>
                    <Typography
                      variant="body_5_1"
                      display={"block"}
                      color="custom.white2"
                      marginBottom={0.2}
                    >
                      Nariman Point
                    </Typography>
                    <Typography variant="font_20" color="custom.border1">
                      Mumbai
                    </Typography>
                  </Box>
                  {/* <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      gap={"10px"}
                    >
                      <Typography
                        variant="small_typography"
                        color="custom.white2"
                      >
                        GET DIRECTIONS
                      </Typography>
                      <DirectionLink1
                        target="blank"
                        href={
                          "https://www.google.com/maps/place/Pi+Techniques+Pvt.+Ltd./@18.9251667,72.824424,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1e97e031c0b:0x8a44b9ad6132d028!8m2!3d18.9251667!4d72.824424!16s%2Fg%2F1th5y83b?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                        }
                      >
                        <Image src={Arrow} alt="arrow" />
                      </DirectionLink1>
                    </Stack> */}
                  <Link
                    href="https://www.google.com/maps/place/Pi+Techniques+Pvt.+Ltd./@18.9251667,72.824424,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1e97e031c0b:0x8a44b9ad6132d028!8m2!3d18.9251667!4d72.824424!16s%2Fg%2F1th5y83b?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    target="_blank"
                  >
                    <RightTopArrow disableRipple>
                      <Typography variant="font_21" color="custom.white2">
                        Get directions
                      </Typography>
                      <ArrowDesign>
                        <Image src={arrowRight} alt="Right Arrow" />
                      </ArrowDesign>
                    </RightTopArrow>
                  </Link>
                </OwlCarouselBox>
              </OurTeamGrid>
              <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
                <Typography variant="body_2_1" color="custom.border2">
                  61/63C Mittal Tower,<br className="d-block"></br>
                  Nariman Point,<br className="d-block"></br>
                  Mumbai - 400021
                </Typography>
              </Grid>
            </Grid>
            {/* </motion.div> */}
          </Grid>
        </OuterGrid2>
      </Stack>
    </ObservedSection>
  );
};
