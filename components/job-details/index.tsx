"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionUI, OuterSection, OutlineBtn, SmallFullStop, TooSmallFullStop } from '@/app/styles/MUI/common.styled';
import { useRouter, useSearchParams } from 'next/navigation';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Grid } from '@mui/material';
import ArrowRightBlack from '../SVGIcons/arrowRightBlack';

const items = [
  '4+ years of experience',
  'Proven experience in build engineering, release engineering, or related roles within a DevOps or Agile environment.',
  'Strong understanding of CI/CD concepts, version control systems, and automation tools.',
  'Familiarity with scripting languages (e.g. PowerShell, batch, shell) and build automation tools (e.g., AzureDevOps, Jenkins, GitLab CI/CD, Travis CI).',
  'Experience with containerization and container orchestration tools (e.g., Docker, Kubernetes) is a must.',
  'Knowledge of DevOps best practices and principles.',
  'Relevant certifications in DevOps, CI/CD, or related areas are advantageous.',
];

export default function JobDetail() {

  const searchParams = useSearchParams();
  const title = searchParams?.get('title');
  const router = useRouter();

  return (
    <OuterSection sx={{ paddingBottom: 0, gap: 0 }}>
      <OutlineBtn className="backarrow" onClick={() => router.push('/careers')}>
        <ArrowRightBlack /> Back to List
      </OutlineBtn>
      <Typography margin={'40px 0 30px'} color="custom.black" variant="body_6" display="block">
        {title} <SmallFullStop />
      </Typography>

      <AccordionUI>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="Accordion-title">Qualifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {items.map((text, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box display="flex" alignItems="flex-start">
                    <Typography variant="body_3" color="custom.black" minWidth={'32px'} fontWeight={700} marginRight={1}>
                      {index + 1} <TooSmallFullStop />
                    </Typography>
                    <Typography variant="body_3" color="custom.black1">{text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="Accordion-title">Key Responsibilities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="Accordion-title">Good to have</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </AccordionDetails>
        </Accordion>
      </AccordionUI>
    </OuterSection>
  );
}
