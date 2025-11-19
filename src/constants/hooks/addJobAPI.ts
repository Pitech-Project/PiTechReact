"use client";

import { useState, useCallback } from "react";
import axios from "axios";

export interface JobFormData {
  title: string;
  experienceMonths: string;
  experienceYears: string;
  qualification: string;
  keyResponsibilities: string;
  goodToHave: string;
  status: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

export function useJobAPI() {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const fetchJobById = useCallback(
    async (id: string): Promise<JobFormData | null> => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/jobs?id=${id}`);
        const job = res.data || {};

        let months = "";
        let years = "";

        if (job.experience) {
          const match = job.experience.match(/(\d+)\s*-\s*(\d+)/);
          if (match) {
            years = match[1] || "";
            months = match[2] || "";
          }
        }

        return {
          title: job.title || "",
          experienceMonths: months,
          experienceYears: years,
          qualification: job.qualificationHTML || job.qualificationRaw || "",
          keyResponsibilities:
            job.keyResponsibilitiesHTML || job.keyResponsibilitiesRaw || "",
          goodToHave: job.goodToHaveHTML || job.goodToHaveRaw || "",
          status: job.status || "",
        };
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          err.message ||
          "Failed to load job data. Please try again.";
        setSnackbar({
          open: true,
          message: `❌ ${message}`,
          severity: "error",
        });
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const saveJob = useCallback(
    async (jobId: string | null, formData: JobFormData) => {
      setLoading(true);

      const experience = `${formData.experienceYears || "0"} - ${
        formData.experienceMonths || "0"
      } YRS EXPERIENCE`;

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
            message: "Job updated successfully",
            severity: "success",
          });
        } else {
          await axios.post("/api/jobs", payload);
          setSnackbar({
            open: true,
            message: "Job added successfully",
            severity: "success",
          });
        }
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          err.message ||
          "An unexpected error occurred. Please try again.";
        setSnackbar({
          open: true,
          message: `❌ ${message}`,
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    loading,
    snackbar,
    setSnackbar,
    fetchJobById,
    saveJob,
  };
}
