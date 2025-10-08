"use client";

import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  AccordionParent,
  AccordionText,
  AccordionTitle,
  AccordionUI,
  DividerUI,
  DotUI,
  OuterGrid5,
  OutlineWhiteBtn,
  SmallFullStop,
  SVGIconUI,
} from "@/styles/MUI/common.styled";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import { jobs } from "@/lib/jobs";
import ArrowRightWhite from "@/components/common/SVGIcons/arrowRightWhite";
import CarrerForm from "@/components/careers/career-form";

const AccordionSection = ({
  title,
  items,
  defaultExpanded = false,
  hideExpandIcon = false,
}: {
  title: string;
  items: string[];
  defaultExpanded?: boolean;
  hideExpandIcon?: boolean;
}) => {
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AccordionParent
      defaultExpanded={defaultExpanded}
      expanded={hideExpandIcon ? true : undefined}
    >
      <AccordionSummary
        className={hideExpandIcon ? "hideExpand" : ""}
        expandIcon={
          hideExpandIcon ? null : (
            <SVGIconUI>
              <svg
                width="9"
                height="19"
                viewBox="0 0 9 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.20532 0.587608C4.40058 0.392347 4.71716 0.392347 4.91242 0.587608L8.0944 3.76959C8.28966 3.96485 8.28966 4.28143 8.0944 4.4767C7.89914 4.67196 7.58256 4.67196 7.3873 4.4767L4.55887 1.64827L1.73044 4.47669C1.53518 4.67196 1.2186 4.67196 1.02334 4.47669C0.828073 4.28143 0.828073 3.96485 1.02334 3.76959L4.20532 0.587608ZM4.55887 18.9412L4.05887 18.9412L4.05887 0.941161L4.55887 0.941161L5.05887 0.941161L5.05887 18.9412L4.55887 18.9412Z"
                  fill="#F4F4F4"
                />
              </svg>
            </SVGIconUI>
          )
        }
      >
        <AccordionTitle color="custom.white2">{title}</AccordionTitle>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={isTabletView ? 3 : 4}>
          {items.map((text, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 5.5, xl: 5 }} key={index}>
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                position="relative"
              >
                <DotUI />
                <AccordionText color="custom.white3">{text}</AccordionText>
              </Box>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </AccordionParent>
  );
};

export default function JobDetail() {
  const router = useRouter();

  const params = useSearchParams();
  const title = params.get("title");

  const job = jobs.find((j) => j.title === title);

  if (!job) {
    return (
      <OuterGrid5
        container
        spacing={5}
        justifyContent={"space-between"}
        bgcolor={"custom.black"}
      >
        <Typography
          variant="body_10"
          color="custom.white3"
          width={"100%"}
          textAlign={"center"}
        >
          Job not found!
        </Typography>
      </OuterGrid5>
    );
  }

  return (
    <OuterGrid5
      container
      spacing={5}
      justifyContent={"space-between"}
      bgcolor={"custom.black"}
    >
      <Grid
        size={{ xs: 12, lg: 10, xl: 9.5 }}
        offset={{ xs: 0, lg: 1, xl: 1.2 }}
      >
        <OutlineWhiteBtn
          className="backarrow"
          onClick={() => router.push("/careers#jobOpening")}
        >
          <ArrowRightWhite />
          Back
        </OutlineWhiteBtn>

        <Typography
          margin={"80px 0 16px"}
          color="custom.white2"
          variant="body_6"
          display="block"
        >
          {title}
          <SmallFullStop />
        </Typography>
        <OutlineWhiteBtn onClick={() => router.push("#CareerForm")}>
          Apply
          <ArrowRightWhite />
        </OutlineWhiteBtn>
        <AccordionUI>
          {job.qualifications && (
            <AccordionSection
              title="Qualifications"
              items={job.qualifications}
              defaultExpanded
              hideExpandIcon
            />
          )}

          {job.responsibilities &&
            (Array.isArray(job.responsibilities)
              ? job.responsibilities.length > 0 && (
                  <AccordionSection
                    title="Key Responsibilities"
                    items={job.responsibilities}
                  />
                )
              : Object.entries(job.responsibilities).map(([section, items]) =>
                  items && items.length > 0 ? (
                    <AccordionSection
                      key={section}
                      title={section}
                      items={items}
                    />
                  ) : null,
                ))}

          {job.skills && (
            <AccordionSection title="Good to have" items={job.skills} />
          )}
        </AccordionUI>
        <OutlineWhiteBtn
          onClick={() => router.push("#CareerForm")}
          sx={{ marginTop: "72px" }}
        >
          Apply
          <ArrowRightWhite />
        </OutlineWhiteBtn>
        <DividerUI></DividerUI>
        <CarrerForm />
      </Grid>
    </OuterGrid5>
  );
}
