"use client";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  SmallFullStop,
  OutlineBtn,
  OuterGrid2,
} from "@/styles/MUI/common.styled";
import ArrowRightBlack from "../../common/SVGIcons/arrowRightBlack";
import { useRouter } from "next/navigation";
import ObservedSection from "@/components/common/ObservedSection";

const Culture = () => {
  const router = useRouter();
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ObservedSection id="home8" bg="light">
      <OuterGrid2
        paddingBottom={"100px !important"}
        container
        spacing={5}
        justifyContent={"space-between"}
      >
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography
                  color="custom.black"
                  variant="body_4"
                  marginBottom={2}
                  letterSpacing={"2.4px"}
                  display="block"
                  textTransform="uppercase"
                >
                  culture
                  <SmallFullStop />
                </Typography>

                <Typography
                  color="custom.black"
                  variant="body_6"
                  display="block"
                >
                  Working at
                  <br style={{ display: isTabletView ? "none" : "" }}></br>
                  Pi
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box>
                <Typography
                  marginBottom={"40px"}
                  color="custom.black"
                  mt="16px"
                  display="block"
                  variant="body_3"
                >
                  Working at Pi Techniques is an enriching experience where
                  innovation, collaboration, and professional growth are at the
                  forefront. Our team thrives in a dynamic and inclusive
                  environment that values creativity and a passion for
                  technology. With a commitment to continuous learning, we stay
                  ahead of industry trends and embrace new challenges with
                  enthusiasm.
                  <br></br>
                  <br></br>
                  At Pi Techniques, every employee is an integral part of our
                  success, contributing to impactful projects that drive
                  business transformation. Join us and be a part of a motivated
                  team that is dedicated to excellence and making a difference
                  in the tech world.
                </Typography>

                <OutlineBtn
                  onClick={() => router.push("/careers/#currentOpenings")}
                >
                  JOB OPPORTUNITIES <ArrowRightBlack />
                </OutlineBtn>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid2>
    </ObservedSection>
  );
};

export default Culture;
