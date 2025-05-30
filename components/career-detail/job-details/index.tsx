"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionTitle,
  AccordionUI,
  OuterGrid,
  OuterSection,
  OutlineBtn,
  SmallFullStop,
  TooSmallFullStop,
} from "@/styles/MUI/common.styled";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Grid } from "@mui/material";
import ArrowRightBlack from "../../common/SVGIcons/arrowRightBlack";
import {
  EXPERIENCE_REQUIREMENTS,
  GOOD_TO_HAVE,
  KEY_RESPONSIBILITIES,
} from "@/lib/constanst";

const AccordionSection = ({
  title,
  items,
  defaultExpanded = false,
}: {
  title: string;
  items: string[];
  defaultExpanded?: boolean;
}) => (
  <Accordion defaultExpanded={defaultExpanded}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <AccordionTitle>{title}</AccordionTitle>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container spacing={2}>
        {items.map((text, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Box display="flex" alignItems="flex-start">
              <Typography
                variant="body_3"
                color="custom.black"
                minWidth={"32px"}
                fontWeight={700}
                marginRight={1}
              >
                {index + 1}
                <TooSmallFullStop />
              </Typography>
              <Typography variant="body_3" color="custom.black1">
                {text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </AccordionDetails>
  </Accordion>
);

export default function JobDetail() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = React.useMemo(
    () => searchParams?.get("title") || "Job Title",
    [searchParams],
  );

  return (
    <OuterGrid container spacing={5} justifyContent={"space-between"}>
      <Grid
        size={{ xs: 12, lg: 11, xl: 8.2 }}
        offset={{ xs: 0, lg: 1, xl: 2.3 }}
      >
        <OutlineBtn
          className="backarrow"
          onClick={() => router.push("/careers")}
        >
          <ArrowRightBlack /> Back to List
        </OutlineBtn>

        <Typography
          margin={"40px 0 30px"}
          color="custom.black"
          variant="body_6"
          display="block"
        >
          {title}
          <SmallFullStop />
        </Typography>

        <AccordionUI>
          <AccordionSection
            title="Qualifications"
            items={EXPERIENCE_REQUIREMENTS}
            defaultExpanded
          />
          <AccordionSection
            title="Key Responsibilities"
            items={KEY_RESPONSIBILITIES}
          />
          <AccordionSection title="Good to have" items={GOOD_TO_HAVE} />
        </AccordionUI>
      </Grid>
    </OuterGrid>
  );
}
