"use client";

import {
  Box,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
  CircularProgress,
} from "@mui/material";
import {
  JobOpeningsPaper,
  OuterGrid2,
  OutlineWhiteBtn,
  SmallFullStop,
} from "@/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import ArrowRightBlack from "../../common/SVGIcons/arrowRightBlack";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <Box bgcolor={"custom.black2"} id="currentOpenings">
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
                    <JobOpeningsPaper
                      key={job._id || job.id}
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
                      <IconButton className="icon">
                        <ArrowRightBlack />
                      </IconButton>
                    </JobOpeningsPaper>
                  ))}

                  {jobs.length > 4 && (
                    <OutlineWhiteBtn
                      marginTop={"40px !important"}
                      onClick={() => setShowAll((prev) => !prev)}
                    >
                      {showAll ? "View Less" : "View More"}
                    </OutlineWhiteBtn>
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
