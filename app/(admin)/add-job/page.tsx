"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Divider,
  SelectChangeEvent,
} from "@mui/material";
import {
  Editor,
  EditorProvider,
  Toolbar,
  BtnBold,
  BtnBulletList,
} from "react-simple-wysiwyg";
import {
  OuterBox,
  StyledPaper,
  ButtonAdmin,
} from "../add-career/AdminJobsPage.styles";

export default function AddJobPage() {
  return (
    <Suspense
      fallback={<div style={{ padding: "20px" }}>Loading job form...</div>}
    >
      <AddJobForm />
    </Suspense>
  );
}

function AddJobForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    experienceMonths: "",
    experienceYears: "",
    qualification: "",
    keyResponsibilities: "",
    goodToHave: "",
    status: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  /* -------------------------------------------------------------------------- */
  /* 🟩 FETCH JOB DATA (EDIT MODE) */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (jobId) {
      axios
        .get(`/api/jobs?id=${jobId}`)
        .then((res) => {
          const job = res.data || {};
          let months = "";
          let years = "";

          if (job.experience) {
            const match = job.experience.match(/(\d+)\s*-\s*(\d+)/);
            if (match) {
              months = match[1] || "";
              years = match[2] || "";
            }
          }

          setFormData({
            title: job.title || "",
            experienceMonths: months,
            experienceYears: years,
            qualification: job.qualificationHTML || job.qualificationRaw || "",
            keyResponsibilities:
              job.keyResponsibilitiesHTML || job.keyResponsibilitiesRaw || "",
            goodToHave: job.goodToHaveHTML || job.goodToHaveRaw || "",
            status: job.status || "",
          });
        })
        .catch(() => {
          setSnackbar({
            open: true,
            message: "❌ Failed to load job data",
            severity: "error",
          });
        });
    }
  }, [jobId]);

  /* -------------------------------------------------------------------------- */
  /* 🟩 HANDLE CHANGES */
  /* -------------------------------------------------------------------------- */
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /* -------------------------------------------------------------------------- */
  /* 🟩 SUBMIT HANDLER */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const experience = `${formData.experienceMonths || "0"} - ${formData.experienceYears || "0"} YRS EXPERIENCE`;

    const payload = {
      title: formData.title,
      experience,
      qualification: formData.qualification,
      keyResponsibilities: formData.keyResponsibilities,
      goodToHave: formData.goodToHave,
      status: formData.status,
    };

    try {
      if (jobId) {
        await axios.put("/api/jobs", { id: jobId, ...payload });
        setSnackbar({
          open: true,
          message: "✅ Job updated successfully",
          severity: "success",
        });
      } else {
        await axios.post("/api/jobs", payload);
        setSnackbar({
          open: true,
          message: "✅ Job added successfully",
          severity: "success",
        });
        setFormData({
          title: "",
          experienceMonths: "",
          experienceYears: "",
          qualification: "",
          keyResponsibilities: "",
          goodToHave: "",
          status: "",
        });
      }
    } catch {
      setSnackbar({
        open: true,
        message: "❌ Operation failed",
        severity: "error",
      });
    }
  };

  const handleCancel = () => router.push("/add-career");

  /* -------------------------------------------------------------------------- */
  /* 🧩 UI RENDER */
  /* -------------------------------------------------------------------------- */
  return (
    <OuterBox>
      <StyledPaper>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{jobId ? "Edit Job" : "Add Job"}</Typography>
          <ButtonAdmin
            variant="contained"
            onClick={() => router.push("/add-career")}
          >
            ← &nbsp; BACK TO JOB LIST
          </ButtonAdmin>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Job Title */}
            <Grid size={4}>
              <TextField
                label="Job Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                fullWidth
                size="small"
              />
            </Grid>

            {/* Months */}
            <Grid size={2}>
              <FormControl fullWidth size="small" required>
                <InputLabel>Months</InputLabel>
                <Select
                  name="experienceMonths"
                  label="Months"
                  value={formData.experienceMonths}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Select Month</em>
                  </MenuItem>
                  {[...Array(13)].map((_, i) => (
                    <MenuItem key={i} value={String(i)}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Years */}
            <Grid size={2}>
              <FormControl fullWidth size="small" required>
                <InputLabel>Years</InputLabel>
                <Select
                  name="experienceYears"
                  label="Years"
                  value={formData.experienceYears}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Select Year</em>
                  </MenuItem>
                  {[...Array(10)].map((_, i) => (
                    <MenuItem key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Status */}
            <Grid size={4}>
              <FormControl fullWidth size="small" required>
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Select Status</em>
                  </MenuItem>
                  <MenuItem value="PUBLISH">PUBLISH</MenuItem>
                  <MenuItem value="DRAFT">DRAFT</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Rich Text Editors */}
            {[
              {
                label: "Qualification",
                field: "qualification",
                showBold: false,
              },
              {
                label: "Key Responsibilities",
                field: "keyResponsibilities",
                showBold: true,
              },
              { label: "Good To Have", field: "goodToHave", showBold: false },
            ].map(({ label, field, showBold }) => (
              <Grid size={12} key={field}>
                <Typography fontWeight={600} mb={1}>
                  {label}
                </Typography>
                <EditorProvider>
                  <Editor
                    value={formData[field as keyof typeof formData] || ""}
                    onChange={(e) =>
                      handleEditorChange(
                        field,
                        (e.target as HTMLTextAreaElement).value,
                      )
                    }
                    style={{
                      minHeight: "200px",
                      backgroundColor: "#fff",
                      padding: "6px",
                      fontSize: "0.95rem",
                    }}
                  >
                    <Toolbar style={{ background: "#f9f9f9" }}>
                      {showBold && <BtnBold />}{" "}
                      {/* ✅ Only Key Responsibilities has bold */}
                      <BtnBulletList />
                    </Toolbar>
                  </Editor>
                </EditorProvider>
              </Grid>
            ))}

            {/* Buttons */}
            <Grid size={12} display="flex" gap={2} mt={2}>
              <ButtonAdmin type="submit" variant="contained" color="primary">
                {jobId ? "Save" : "Submit"}
              </ButtonAdmin>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>
      </StyledPaper>
    </OuterBox>
  );
}
