"use client";

import { InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Add, ClearAll } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { ButtonAdmin, ClearButton, FilterBox, FilterFormControl, HeaderBox } from "@/styles/MUI/AdminJobsPage.styles";


interface JobListHeaderProps {
  jobs: any[];
  selectedTitle: string;
  selectedExperience: string;
  selectedStatus: string;
  onTitleChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onClearFilters: () => void;
}

export default function JobListHeader({
  jobs,
  selectedTitle,
  selectedExperience,
  selectedStatus,
  onTitleChange,
  onExperienceChange,
  onStatusChange,
  onClearFilters,
}: JobListHeaderProps) {
  const router = useRouter();

  return (
    <>
      <HeaderBox>
        <Typography variant="h6">Job List</Typography>
        <ButtonAdmin
          variant="contained"
          startIcon={<Add />}
          onClick={() => router.push("/add-job")}
        >
          Add Job
        </ButtonAdmin>
      </HeaderBox>

      <FilterBox>
        <FilterFormControl size="small" className="title">
          <InputLabel>Filter by Job Title</InputLabel>
          <Select
            label="Filter by Job Title"
            value={selectedTitle}
            onChange={(e) => onTitleChange(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            <MenuItem value="All">All</MenuItem>
            {Array.from(new Set(jobs.map((job) => job.title))).map((title) => (
              <MenuItem key={title} value={title}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </FilterFormControl>

        <FilterFormControl size="small">
          <InputLabel>Filter by Experience</InputLabel>
          <Select
            label="Filter by Experience"
            value={selectedExperience}
            onChange={(e) => onExperienceChange(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            <MenuItem value="All">All</MenuItem>
            {Array.from(new Set(jobs.map((job) => job.experience))).map(
              (exp) => (
                <MenuItem key={exp} value={exp}>
                  {exp}
                </MenuItem>
              ),
            )}
          </Select>
        </FilterFormControl>

        <FilterFormControl size="small" className="status">
          <InputLabel>Filter by Status</InputLabel>
          <Select
            label="Filter by Status"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="PUBLISH">PUBLISH</MenuItem>
            <MenuItem value="DRAFT">DRAFT</MenuItem>
          </Select>
        </FilterFormControl>

        <ClearButton
          variant="contained"
          color="primary"
          startIcon={<ClearAll />}
          onClick={onClearFilters}
        >
          Clear Filters
        </ClearButton>
      </FilterBox>
    </>
  );
}
