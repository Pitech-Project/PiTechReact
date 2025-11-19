"use client";

import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Grid,
  CircularProgress,
} from "@mui/material";
import {
  ArrowDesign,
  DownArrow,
  JobOpeningsPaper,
  OuterGrid2,
  SmallFullStop,
} from "@/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import arrowRight from "@/public/assets/img/newRightArrow.svg";
import arrowDown from "@/public/assets/img/downNewArrow.svg";
import arrowUp from "@/public/assets/img/upNewArrow.svg";
import { motion } from "framer-motion";

interface Job {
  _id?: string;
  id?: string;
  title: string;
  experience: string;
  slug?: string;
  status?: string;
  qualification?: string;
  keyResponsibilities?: string;
  goodToHave?: string;
  createdAt?: string;
}

export default function JobOpenings() {
  const router = useRouter();
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("md"));

  const [jobs, setJobs] = useState<Job[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch jobs from MongoDB via /api/jobs (sorted by latest)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs");
        let allJobs: Job[] = res.data;

        // ✅ Filter only published jobs
        allJobs = allJobs.filter(
          (job) => job.status?.toUpperCase() === "PUBLISH",
        );

        // ✅ Sort by createdAt (newest first)
        allJobs.sort((a, b) => {
          const dateA = new Date(a.createdAt || "").getTime();
          const dateB = new Date(b.createdAt || "").getTime();
          return dateB - dateA; // descending order
        });

        setJobs(allJobs);
      } catch (error) {
        console.error("❌ Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // ✅ Navigate dynamically to career details page
  const handleClick = (job: Job) => {
    if (!job.title) return;
    router.push(`/career-details?title=${encodeURIComponent(job.title)}`);
  };

  const visibleJobs = showAll ? jobs : jobs.slice(0, 4);

  if (loading) {
    return (
      <Box bgcolor={"custom.black2"} p={10} textAlign="center">
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box bgcolor={"custom.black7"} id="currentOpenings">
      <OuterGrid2 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={isTabletView ? 7.5 : 10}>
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box flex={1}>
                <Typography color="custom.grey_700" variant="body_4_600">
                  opportunities <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.white2"
                  variant="body_6"
                  width={isTabletView ? "auto" : "max-content"}
                  display={"block"}
                >
                  Our <br style={{ display: isTabletView ? "none" : "" }} />
                  current <br /> openings
                </Typography>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box flex={2} ml={isTabletView ? 0 : 4}>
                <Stack spacing={2} id="jobOpening">
                  {visibleJobs.map((job) => (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                      key={job._id || job.id}
                    >
                      <JobOpeningsPaper
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
                        onClick={() => handleClick(job)}
                      >
                        <Box>
                          <Typography
                            variant="body_3"
                            color="custom.grey_700"
                            display={"block"}
                            className="jobTitle"
                            marginBottom={"8px"}
                            sx={{ cursor: "pointer" }}
                          >
                            {job.title}
                          </Typography>
                          <Typography
                            variant="body_10"
                            color="custom.white3"
                            textTransform={"uppercase"}
                            className="jobExperience"
                          >
                            {job.experience}
                          </Typography>
                        </Box>
                        <ArrowDesign className="icon">
                          <Image src={arrowRight} alt="Right Arrow" />
                        </ArrowDesign>
                      </JobOpeningsPaper>
                    </motion.div>
                  ))}

                  {jobs.length > 4 && (
                    // <OutlineWhiteBtn
                    //   marginTop={"40px !important"}
                    //   onClick={() => setShowAll((prev) => !prev)}
                    // >
                    //   {showAll ? "View Less" : "View More"}
                    // </OutlineWhiteBtn>
                    <DownArrow
                      showall={showAll ? "true" : undefined}
                      sx={{ marginTop: "40px !important" }}
                      onClick={() => setShowAll((prev) => !prev)}
                      disableRipple
                    >
                      {showAll ? "View Less" : "View More"}
                      <ArrowDesign>
                        <Image
                          src={showAll ? arrowUp : arrowDown}
                          alt="Right Arrow"
                        />
                      </ArrowDesign>
                    </DownArrow>
                  )}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid2>
    </Box>
  );
}
