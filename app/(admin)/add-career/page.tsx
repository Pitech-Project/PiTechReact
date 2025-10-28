"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Alert,
  IconButton,
  Typography,
  TableContainer,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Add, ClearAll } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import {
  OuterBox,
  StyledPaper,
  FilterBox,
  ButtonAdmin,
} from "./AdminJobsPage.styles";

interface Job {
  _id?: string;
  title: string;
  experience: string;
  status: string;
}

export default function JobListPage() {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedTitle, setSelectedTitle] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // ✅ Fetch jobs from API
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/jobs");
      setJobs(res.data);
    } catch {
      setSnackbar({
        open: true,
        message: "❌ Failed to fetch jobs",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ✅ Handle delete job
  const handleDeleteConfirm = async () => {
    if (!selectedJobId) return;
    try {
      await axios.delete(`/api/jobs?id=${selectedJobId}`);
      fetchJobs();
      setSnackbar({
        open: true,
        message: "Job deleted successfully",
        severity: "error",
      });
    } catch {
      setSnackbar({
        open: true,
        message: "Failed to delete job",
        severity: "error",
      });
    } finally {
      setOpenDeleteDialog(false);
      setSelectedJobId(null);
    }
  };

  const handleOpenDeleteDialog = (id: string) => {
    setSelectedJobId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedJobId(null);
  };

  const handleClearFilters = () => {
    setSelectedTitle("All");
    setSelectedExperience("All");
    setSelectedStatus("All");
  };

  // ✅ Apply all filters
  const filteredRows = jobs.filter((job) => {
    const matchTitle =
      selectedTitle === "All" ? true : job.title === selectedTitle;
    const matchExperience =
      selectedExperience === "All"
        ? true
        : job.experience === selectedExperience;
    const matchStatus =
      selectedStatus === "All" ? true : job.status === selectedStatus;
    return matchTitle && matchExperience && matchStatus;
  });

  return (
    <OuterBox>
      <Box>
        <StyledPaper>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6">Job List</Typography>
            <ButtonAdmin
              variant="contained"
              startIcon={<Add />}
              onClick={() => router.push("/add-job")}
            >
              Add Job
            </ButtonAdmin>
          </Box>

          {/* Filters Section */}
          <FilterBox
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            {/* Filter by Job Title */}
            <FormControl size="small" sx={{ minWidth: 220 }}>
              <InputLabel>Filter by Job Title</InputLabel>
              <Select
                label="Filter by Job Title"
                value={selectedTitle}
                onChange={(e) => setSelectedTitle(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
                {Array.from(new Set(jobs.map((job) => job.title))).map(
                  (title) => (
                    <MenuItem key={title} value={title}>
                      {title}
                    </MenuItem>
                  ),
                )}
              </Select>
            </FormControl>

            {/* Filter by Experience */}
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel>Filter by Experience</InputLabel>
              <Select
                label="Filter by Experience"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
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
            </FormControl>

            {/* Filter by Status */}
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Filter by Status</InputLabel>
              <Select
                label="Filter by Status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="PUBLISH">PUBLISH</MenuItem>
                <MenuItem value="DRAFT">DRAFT</MenuItem>
              </Select>
            </FormControl>

            {/* Clear Filters */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<ClearAll />}
              onClick={handleClearFilters}
              sx={{
                height: 40,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Clear Filters
            </Button>
          </FilterBox>

          {/* ✅ Table */}
          <TableContainer>
            <DataGrid
              rows={filteredRows.map((row, index) => ({
                ...row,
                id: row._id,
                srNo: index + 1,
              }))}
              columns={[
                {
                  field: "srNo",
                  headerName: "Sr. No.",
                  width: 90,
                  sortable: true,
                },
                {
                  field: "title",
                  headerName: "Job Title",
                  flex: 1,
                  sortable: false,
                  renderCell: (params) => (
                    <Box
                      onClick={() =>
                        router.push(`/add-job?id=${params.row._id}`)
                      }
                      sx={{
                        cursor: "pointer",
                        color: "#F7941E",
                        alignItems: "center",
                      }}
                    >
                      {params.value}
                    </Box>
                  ),
                },
                {
                  field: "experience",
                  headerName: "Experience",
                  flex: 1,
                  sortable: false,
                },
                {
                  field: "status",
                  headerName: "Status",
                  flex: 0.6,
                  sortable: false,
                  renderCell: (params) => (
                    <Chip
                      label={params.value}
                      sx={{
                        backgroundColor:
                          params.value === "PUBLISH"
                            ? "success.main"
                            : "error.main",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    />
                  ),
                },
                {
                  field: "actions",
                  headerName: "Actions",
                  flex: 0.6,
                  sortable: false,
                  renderCell: (params) => (
                    <>
                      <IconButton
                        color="primary"
                        onClick={() =>
                          router.push(`/add-job?id=${params.row._id}`)
                        }
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleOpenDeleteDialog(params.row._id!)}
                      >
                        <Delete />
                      </IconButton>
                    </>
                  ),
                },
              ]}
              disableRowSelectionOnClick
              showToolbar
              pagination
              paginationMode="client"
              pageSizeOptions={[5, 10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              loading={loading}
            />
          </TableContainer>

          {/* Delete Confirmation Dialog */}
          <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this job?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeleteDialog} color="inherit">
                Cancel
              </Button>
              <Button
                onClick={handleDeleteConfirm}
                color="error"
                variant="contained"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>

          {/* ✅ Modern Toast Snackbar (Bottom Right Slide-In) */}
          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            TransitionProps={{
              onEnter: (node) => {
                node.style.transform = "translateX(100%)";
                node.style.opacity = "0";
                requestAnimationFrame(() => {
                  node.style.transition =
                    "transform 0.4s ease, opacity 0.4s ease";
                  node.style.transform = "translateX(0)";
                  node.style.opacity = "1";
                });
              },
            }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={() => setSnackbar({ ...snackbar, open: false })}
              severity={snackbar.severity}
              variant="filled"
              sx={{
                width: "100%",
                fontWeight: 600,
                color: "#fff",
                "& .MuiAlert-icon": { fontSize: "1.5rem" },
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                borderRadius: "8px",
                padding: "10px 16px",
              }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </StyledPaper>
      </Box>
    </OuterBox>
  );
}
