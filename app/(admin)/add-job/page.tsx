"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  SelectChangeEvent,
} from "@mui/material";
import {
  Editor,
  EditorProvider,
  Toolbar,
  BtnBold,
  BtnBulletList,
} from "react-simple-wysiwyg";
import { SnackbarProvider, useSnackbar } from "notistack";
import {
  OuterBox,
  StyledPaper,
  ButtonAdmin,
  SubmitBox,
  snackbarStyle,
  editorStyle,
} from "../job-list/AdminJobsPage.styles";
import "@/styles/global/admin.css";
import { JOB_EDITOR_FIELDS } from "@/src/constants/jobEditorFields";
import { useJobAPI, JobFormData } from "@/src/constants/hooks/addJobAPI";
import { AppStrings, SnackbarVariants } from "@/src/constants/appStrings";

function AddJobForm() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");
  const { loading, fetchJobById, saveJob } = useJobAPI();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState<JobFormData>({
    title: "",
    experienceMonths: "",
    experienceYears: "",
    qualification: "",
    keyResponsibilities: "",
    goodToHave: "",
    status: "",
  });

  useEffect(() => {
    document.title = jobId ? "Edit Job - Pi Admin" : "Add Job - Pi Admin";
  }, [jobId]);

  useEffect(() => {
    if (jobId)
      fetchJobById(jobId).then((data) => {
        if (data) setFormData(data);
      });
  }, [jobId, fetchJobById]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveJob(jobId, formData);
      enqueueSnackbar(AppStrings.JOB_SAVED, {
        variant: SnackbarVariants.SUCCESS,
      });
    } catch (err: any) {
      enqueueSnackbar(`❌ ${err.message || AppStrings.ERROR_SAVING_JOB}`, {
        variant: SnackbarVariants.ERROR,
      });
    }
  };

  const handleCancel = () => window.history.back();

  return (
    <OuterBox>
      <StyledPaper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {jobId ? AppStrings.SAVE : AppStrings.SUBMIT} Job
          </Typography>
          <ButtonAdmin variant="contained" onClick={handleCancel}>
            {AppStrings.BACK_TO_LIST}
          </ButtonAdmin>
        </Box>
        <Box mt={2} mb={2}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
                    {[...Array(13)].map((_, i) => (
                      <MenuItem key={i} value={String(i)}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
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
              {JOB_EDITOR_FIELDS.map(({ label, field, showBold }) => (
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
                      style={editorStyle}
                    >
                      <Toolbar style={{ background: "#f9f9f9" }}>
                        {showBold && <BtnBold />}
                        <BtnBulletList />
                      </Toolbar>
                    </Editor>
                  </EditorProvider>
                </Grid>
              ))}
              <SubmitBox>
                <ButtonAdmin
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {jobId ? AppStrings.SAVE : AppStrings.SUBMIT}
                </ButtonAdmin>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  {AppStrings.CANCEL}
                </Button>
              </SubmitBox>
            </Grid>
          </form>
        </Box>
        <Box sx={{ height: "50px" }} />
      </StyledPaper>
    </OuterBox>
  );
}

export default function AddJobPage() {
  return (
    <Suspense
      fallback={<div style={{ padding: "20px" }}>Loading job form...</div>}
    >
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        preventDuplicate
        style={snackbarStyle}
      >
        <AddJobForm />
      </SnackbarProvider>
    </Suspense>
  );
}
