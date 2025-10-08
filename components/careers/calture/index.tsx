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
                  color="custom.gray_txt"
                  variant="body_4_600"
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
            <Grid size={{ xs: 12, md: 7, xl: 6.8 }}>
              <Box>
                <Typography
                  marginBottom={"40px"}
                  color="custom.black"
                  mt="16px"
                  display="block"
                  variant="body_3"
                >
                  Working at Pi Techniques isn’t about ticking boxes, it’s
                  building technology with clarity and purpose. For over three
                  decades, we’ve built lasting client relationships by keeping
                  technology clear, simple, and effective. This philosophy
                  extends to how we work together. Here, innovation means
                  finding smarter, practical solutions; collaboration means
                  every voice counts; and growth comes from learning by doing.
                  <br></br>
                  <br></br>
                  At Pi, you’re part of a place where we build on each other’s
                  ideas, celebrate our collective growth and work towards
                  building a team that’s efficient, supportive, and
                  forward-looking.
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
