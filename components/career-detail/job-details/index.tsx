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
  ResponsibilitiesMainAccordion,
  SmallFullStop,
  SVGIconUI,
} from "@/styles/MUI/common.styled";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import ArrowRightWhite from "@/components/common/SVGIcons/arrowRightWhite";
import CarrerForm from "@/components/careers/career-form";
import axios from "axios";

/* -------------------------------------------------------------------------- */
/* 🧩 REUSABLE ACCORDION SECTION COMPONENT */
/* -------------------------------------------------------------------------- */
const AccordionSection = ({
  title,
  items,
  defaultExpanded = false,
  hideExpandIcon = false,
  children,
}: {
  title: string;
  items: any;
  defaultExpanded?: boolean;
  hideExpandIcon?: boolean;
  children?: React.ReactNode;
}) => {
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  // Normalize to always be an array
  const safeItems = React.useMemo(() => {
    if (!items) return [];
    if (Array.isArray(items)) return items;
    if (typeof items === "string" && items.trim().length > 0) return [items];
    if (typeof items === "object") return Object.values(items).flat();
    return [];
  }, [items]);

  // Don’t render empty accordion
  if (!safeItems.length && !children) return null;

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
        {safeItems.length > 0 && (
          <Grid container spacing={isTabletView ? 3 : 4}>
            {safeItems.map((text, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 5.5, xl: 5 }}>
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
        )}
        {children}
      </AccordionDetails>
    </AccordionParent>
  );
};

/* -------------------------------------------------------------------------- */
/* 🧠 MAIN COMPONENT */
/* -------------------------------------------------------------------------- */
interface Job {
  _id?: string;
  title: string;
  experience: string;
  qualification?: string[] | string;
  keyResponsibilities?: string[] | Record<string, string[]>;
  goodToHave?: string[] | string;
  status?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function JobDetail() {
  const router = useRouter();
  const params = useSearchParams();
  const title = params.get("title");

  const [job, setJob] = React.useState<Job | null>(null);
  const [loading, setLoading] = React.useState(true);

  /* ---------------------------------------------------------------------- */
  /* 🧩 Fetch job details from API dynamically */
  /* ---------------------------------------------------------------------- */
  React.useEffect(() => {
    const fetchJob = async () => {
      if (!title) return;
      try {
        const res = await axios.get(
          `/api/jobs?title=${encodeURIComponent(title)}`,
        );
        if (res.data?.error) setJob(null);
        else setJob(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch job:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [title]);

  /* ---------------------------------------------------------------------- */
  /* 🕓 Loading State */
  /* ---------------------------------------------------------------------- */
  if (loading) {
    return (
      <OuterGrid5
        container
        spacing={5}
        justifyContent="space-between"
        bgcolor="custom.black"
      >
        <Typography
          variant="body_10"
          color="custom.white3"
          width="100%"
          textAlign="center"
          mt={5}
        >
          Loading job details...
        </Typography>
      </OuterGrid5>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* ❌ Not Found State */
  /* ---------------------------------------------------------------------- */
  if (!job) {
    return (
      <OuterGrid5
        container
        spacing={5}
        justifyContent="space-between"
        bgcolor="custom.black"
      >
        <Typography
          variant="body_10"
          color="custom.white3"
          width="100%"
          textAlign="center"
        >
          Job not found!
        </Typography>
      </OuterGrid5>
    );
  }

  const hasSubCategories =
    typeof job.keyResponsibilities === "object" &&
    !Array.isArray(job.keyResponsibilities) &&
    Object.keys(job.keyResponsibilities || {}).length > 0;

  /* ---------------------------------------------------------------------- */
  /* 🧾 Render Job Details */
  /* ---------------------------------------------------------------------- */
  return (
    <OuterGrid5
      container
      spacing={5}
      justifyContent="space-between"
      bgcolor="custom.black"
    >
      <Grid
        size={{ xs: 12, lg: 10, xl: 9.5 }}
        offset={{ xs: 0, lg: 1, xl: 1.2 }}
      >
        {/* 🔙 Back Button */}
        <OutlineWhiteBtn
          className="backarrow"
          onClick={() => router.push("/careers#currentOpenings")}
        >
          <ArrowRightWhite />
          Back
        </OutlineWhiteBtn>

        {/* 🏷 Job Title */}
        <Typography
          margin="80px 0 16px"
          color="custom.white2"
          variant="body_6"
          display="block"
        >
          {job.title}
          <SmallFullStop />
        </Typography>

        {/* 🧾 Apply Button */}
        <OutlineWhiteBtn onClick={() => router.push("#CareerForm")}>
          Apply
          <ArrowRightWhite />
        </OutlineWhiteBtn>

        {/* 📋 Accordion Sections */}
        <AccordionUI>
          {/* Qualifications */}
          {job.qualification &&
            Array.isArray(job.qualification) &&
            job.qualification.length > 0 && (
              <AccordionSection
                title="Qualifications"
                items={job.qualification}
                defaultExpanded
                hideExpandIcon
              />
            )}

          {/* Key Responsibilities */}
          {job.keyResponsibilities &&
            (hasSubCategories &&
            Object.keys(job.keyResponsibilities).length > 0 ? (
              <ResponsibilitiesMainAccordion>
                <AccordionSection
                  title="Key Responsibilities"
                  items={[]}
                  defaultExpanded={false}
                >
                  {Object.entries(job.keyResponsibilities).map(
                    ([category, tasks]) => (
                      <AccordionSection
                        key={category}
                        title={category}
                        items={tasks}
                        defaultExpanded={false}
                        hideExpandIcon
                      />
                    ),
                  )}
                </AccordionSection>
              </ResponsibilitiesMainAccordion>
            ) : Array.isArray(job.keyResponsibilities) &&
              job.keyResponsibilities.length > 0 ? (
              <AccordionSection
                title="Key Responsibilities"
                items={job.keyResponsibilities}
              />
            ) : null)}

          {/* Good To Have */}
          {job.goodToHave &&
            Array.isArray(job.goodToHave) &&
            job.goodToHave.length > 0 && (
              <AccordionSection title="Good to Have" items={job.goodToHave} />
            )}
        </AccordionUI>

        {/* 🧾 Apply Button (Bottom) */}
        <OutlineWhiteBtn
          onClick={() => router.push("#CareerForm")}
          sx={{ marginTop: "72px" }}
        >
          Apply
          <ArrowRightWhite />
        </OutlineWhiteBtn>
        <DividerUI />
        <CarrerForm appliedFor={job.title} />
      </Grid>
    </OuterGrid5>
  );
}
