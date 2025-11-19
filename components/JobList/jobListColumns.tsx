"use client";

import { Box, Chip, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";

interface JobListColumnsProps {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const useJobListColumns = ({
  onEdit,
  onDelete,
}: JobListColumnsProps): GridColDef[] => {
  return [
    { field: "srNo", headerName: "Sr. No.", width: 90 },
    {
      field: "title",
      headerName: "Job Title",
      flex: 1,
      renderCell: (params) => (
        <Box
          onClick={() => onEdit(params.row._id)}
          sx={{ cursor: "pointer", color: "#F7941E" }}
        >
          {params.value}
        </Box>
      ),
    },
    { field: "experience", headerName: "Experience", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.6,
      renderCell: (params) => (
        <Chip
          label={params.value}
          sx={{
            backgroundColor:
              params.value === "PUBLISH" ? "success.main" : "error.main",
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
          <IconButton color="primary" onClick={() => onEdit(params.row._id)}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(params.row._id)}>
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];
};
