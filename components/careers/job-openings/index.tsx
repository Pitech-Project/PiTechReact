"use client";

import {
  Box,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import {
  JobOpeningsPaper,
  OuterGrid,
  OuterSection,
  SmallFullStop,
} from "@/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ArrowRightBlack from "../../common/SVGIcons/arrowRightBlack";

const jobOpenings = [
  { title: "DevOps Engineer", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Software Tester", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Senior Tester", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Web Developer", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Business Analyst", exp: "1 – 4 YRS OF EXPERIENCE" },
];

export default function JobOpenings() {
  const router = useRouter();
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box bgcolor={"custom.black2"} id="currentOpenings">
      <OuterGrid container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 11, xl: 8.2 }}
          offset={{ xs: 0, lg: 1, xl: 2.3 }}
        >
          <Grid container spacing={12}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box flex={1} marginBottom={isTabletView ? "32px" : "0"}>
                <Typography
                  color="custom.white4"
                  variant="body_4_600"
                  marginBottom={2}
                  letterSpacing={"2.4px"}
                  display={"block"}
                >
                  VACANCIES <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.white2"
                  variant="body_6"
                  width={"max-content"}
                  display={"block"}
                >
                  {" "}
                  Our <br style={{ display: isTabletView ? "none" : "" }} />
                  current openings
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box flex={2} ml={isTabletView ? 0 : 4}>
                <Stack spacing={2}>
                  {jobOpenings.map((job, index) => (
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.8 }}
                      key={index}
                    >
                      <JobOpeningsPaper
                        onClick={() =>
                          router.push(
                            `/career-details?title=${encodeURIComponent(job.title)}`,
                          )
                        }
                      >
                        <Box>
                          <Typography
                            variant="body_5"
                            color="custom.bgcolor"
                            display={"block"}
                            className="jobTitle"
                            marginBottom={"16px"}
                            sx={{ cursor: "pointer" }}
                          >
                            {job.title}
                          </Typography>
                          <Typography variant="body_4" color="custom.white3">
                            {job.exp}
                          </Typography>
                        </Box>
                        <IconButton className="icon">
                          <ArrowRightBlack />
                        </IconButton>
                      </JobOpeningsPaper>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </Box>
  );
}
