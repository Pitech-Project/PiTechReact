"use client"

import { Box, Typography, Stack, IconButton, Paper, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { JobOpeningsPaper, OuterSection, SmallFullStop } from "@/app/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ArrowRightBlack from "../SVGIcons/arrowRightBlack";

const jobOpenings = [
  { title: "DevOps Engineer", exp: "1 – 4 YRS OF EXPERIENCE",  },
  { title: "Software Tester", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Senior Tester", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Web Developer", exp: "1 – 4 YRS OF EXPERIENCE" },
  { title: "Business Analyst", exp: "1 – 4 YRS OF EXPERIENCE" }
];

export default function JobOpenings() {
    const router = useRouter();
     const theme = useTheme();
        const isTabletView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box bgcolor={'custom.black2'} id="currentOpenings">
      <OuterSection flexDirection={isTabletView ? 'column' : 'row'}>
        <Box flex={1} marginBottom={isTabletView ? '32px' : '0'}>
          <Typography color='custom.white4' variant='body_4' marginBottom={2} letterSpacing={'2.4px'} fontWeight={600} display={'block'}>VACANCIES <SmallFullStop /></Typography>
          <Typography color='custom.white2' variant='body_6' width={'max-content'} display={'block'}> Our <br style={{display : isTabletView ? 'none' : ''}} />current openings</Typography>
        </Box>

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
              <JobOpeningsPaper onClick={() => router.push(`/career-details?title=${encodeURIComponent(job.title)}`)} >
                <Box>
                  <Typography
                    variant="body_5"
                    color="custom.bgcolor"
                    display={'block'}
                    className="jobTitle"
                    marginBottom={'16px'}
                    sx={{cursor: 'pointer'}}
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
      </OuterSection>
    </Box>
  );
}
