"use client";

import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  OuterGrid1,
  SmallFullStop,
  SubtitleTypography,
  TitleTypography,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ObservedSection from "@/components/common/ObservedSection";

export const industries = [
  {
    id: 1,
    name: "Discover & Define",
    description:
      "We start by understanding your goals, challenges, and vision — laying the foundation with clear scope and priorities.",
  },
  {
    id: 2,
    name: "Plan & Prioritize",
    description:
      "With a product backlog in place, we break down work into sprints — short, focused cycles that help us move fast and stay focused.",
  },
  {
    id: 3,
    name: "Design & Develop",
    description:
      "Our teams build iteratively, sharing progress frequently and refining the solution at every stage.",
  },
  {
    id: 4,
    name: "Review & Collaborate",
    description:
      "At the end of each sprint, we present working features, gather feedback, and make sure we’re always aligned.",
  },
  {
    id: 5,
    name: "Test & Improve",
    description:
      "Continuous testing and integration ensure high quality. We don’t just fix bugs — we improve with each cycle.",
  },
  {
    id: 6,
    name: "Deliver & Support",
    description:
      "Once we go live, we’re still with you — providing support, enhancements, and a roadmap for what’s next.",
  },
];

export const OurProcess = () => {
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ObservedSection id="home6" bg="light">
      <Stack bgcolor={"custom.white"}>
        <OuterGrid1 container spacing={2}>
          <Grid
            size={{ xs: 12, lg: 9, xl: 8.3 }}
            offset={{ xs: 0, lg: 2, xl: 2.3 }}
          >
            <Grid
              container
              sx={{
                "& br": {
                  display: isTabletView ? "none" : "block",
                },
              }}
            >
              <Grid size={{ xs: 12, lg: 4.5, xl: 4.5 }}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Typography color="custom.gray_txt" variant="body_4_600">
                    our agile process
                    <SmallFullStop />
                  </Typography>
                  <TitleTypography color="custom.black" variant="body_6">
                    Adapting agility<br></br> for smarter<br></br> outcomes
                  </TitleTypography>
                  <SubtitleTypography color="custom.black" variant="body_3">
                    At Pi Techniques, we’ve learned that agility isn’t just a
                    methodology, it’s a mindset. As client needs evolve, we
                    adapt. That’s why we’ve embraced{" "}
                    <Typography color="custom.orange_600" variant="body_3">
                      Agile Project Management.{" "}
                    </Typography>
                    A proven, flexible framework that helps us stay aligned,
                    responsive, and focused on what matters most: delivering
                    results, fast.
                  </SubtitleTypography>
                </motion.div>
              </Grid>
              <Grid
                size={{ xs: 12, lg: 6.5, xl: 5.5 }}
                offset={{ xs: 0, lg: 1, xl: 2 }}
              >
                <Stack gap={isMobileView ? 5 : 7.5}>
                  {industries.map((industries) => (
                    <Stack
                      flexDirection={"row"}
                      alignItems={"baseline"}
                      gap={1}
                      key={industries.id}
                    >
                      <Stack>
                        <Typography
                          color="custom.black"
                          marginBottom={1}
                          variant="body_11"
                          display={"block"}
                        >
                          {industries.name}
                        </Typography>
                        <Typography
                          color="custom.gray_txt"
                          variant="font_19"
                          display={"block"}
                        >
                          {industries.description}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                  <Typography
                    variant="body_3_600"
                    fontStyle={"italic"}
                    color="custom.black"
                  >
                    Agile isn’t about moving fast blindly. It’s about moving
                    fast in the right direction — with you at the center of the
                    journey.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </OuterGrid1>
      </Stack>
    </ObservedSection>
  );
};
