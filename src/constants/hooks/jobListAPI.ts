import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export interface Job {
  _id?: string;
  title: string;
  experience: string;
  status: string;
}

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/jobs");
      setJobs(res.data);
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to fetch jobs. Please try again later.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteJob = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`/api/jobs?id=${id}`);
        await fetchJobs();
        return { success: true };
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          err.message ||
          "Unable to delete job. Please try again later.";
        setError(message);
        return { success: false, message };
      }
    },
    [fetchJobs],
  );

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return {
    jobs,
    loading,
    error,
    fetchJobs,
    deleteJob,
  };
}
