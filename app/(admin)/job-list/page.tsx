"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TableContainer,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useJobs } from "@/src/constants/hooks/jobListAPI";
import JobListHeader from "@/components/JobList/JobListHeader";
import { useJobListColumns } from "@/components/JobList/jobListColumns";
import { AppStrings, SnackbarVariants } from "@/src/constants/appStrings";
import { OuterBox, snackbarStyle, StyledPaper, TableContainerSX } from "@/styles/MUI/AdminJobsPage.styles";

function JobListContent() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { jobs, loading, error, deleteJob } = useJobs();

  const [selectedTitle, setSelectedTitle] = useState(AppStrings.ALL);
  const [selectedExperience, setSelectedExperience] = useState(AppStrings.ALL);
  const [selectedStatus, setSelectedStatus] = useState(AppStrings.ALL);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Job List - Pi Admin";
  }, []);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(`❌ ${error}`, { variant: SnackbarVariants.ERROR });
    }
  }, [error, enqueueSnackbar]);

  const handleEdit = (id: string) => {
    router.push(`/add-job?id=${id}`);
  };

  const handleDeleteClick = (id: string) => {
    setSelectedJobId(id);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedJobId) return;
    const result = await deleteJob(selectedJobId);
    if (result.success) {
      enqueueSnackbar(AppStrings.JOB_DELETED, {
        variant: SnackbarVariants.ERROR,
      });
    } else {
      enqueueSnackbar(`❌ ${result.message}`, {
        variant: SnackbarVariants.ERROR,
      });
    }
    setOpenDeleteDialog(false);
    setSelectedJobId(null);
  };

  const handleClearFilters = () => {
    setSelectedTitle(AppStrings.ALL);
    setSelectedExperience(AppStrings.ALL);
    setSelectedStatus(AppStrings.ALL);
  };

  const filteredRows = jobs.filter((job) => {
    const matchTitle =
      selectedTitle === AppStrings.ALL || job.title === selectedTitle;
    const matchExperience =
      selectedExperience === AppStrings.ALL ||
      job.experience === selectedExperience;
    const matchStatus =
      selectedStatus === AppStrings.ALL || job.status === selectedStatus;
    return matchTitle && matchExperience && matchStatus;
  });

  const columns = useJobListColumns({
    onEdit: handleEdit,
    onDelete: handleDeleteClick,
  });

  return (
    <OuterBox>
      <StyledPaper>
        <JobListHeader
          jobs={jobs}
          selectedTitle={selectedTitle}
          selectedExperience={selectedExperience}
          selectedStatus={selectedStatus}
          onTitleChange={setSelectedTitle}
          onExperienceChange={setSelectedExperience}
          onStatusChange={setSelectedStatus}
          onClearFilters={handleClearFilters}
        />
        <TableContainer sx={TableContainerSX}>
          <DataGrid
            rows={filteredRows.map((row, index) => ({
              ...row,
              id: row._id,
              srNo: index + 1,
            }))}
            columns={columns}
            disableRowSelectionOnClick
            pagination
            paginationMode="client"
            pageSizeOptions={[5, 10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            loading={loading}
          />
        </TableContainer>
        <Dialog
          open={openDeleteDialog}
          onClose={() => setOpenDeleteDialog(false)}
        >
          <DialogTitle>{AppStrings.DELETE}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {AppStrings.DELETE_CONFIRMATION}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDeleteDialog(false)} color="inherit">
              {AppStrings.CANCEL}
            </Button>
            <Button
              onClick={handleDeleteConfirm}
              color="error"
              variant="contained"
            >
              {AppStrings.DELETE}
            </Button>
          </DialogActions>
        </Dialog>
      </StyledPaper>
    </OuterBox>
  );
}

export default function JobListPage() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      preventDuplicate
      style={snackbarStyle}
    >
      <JobListContent />
    </SnackbarProvider>
  );
}
