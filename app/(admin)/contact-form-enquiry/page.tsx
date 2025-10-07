/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
"use client";

import {
  Box,
  Paper,
  Skeleton,
  TableContainer,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import TableSkeleton from "../skeleton/tableSkeleton";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const paginationModel = { page: 0, pageSize: 5 };
  const [submissions, setSubmissions] = useState<any[]>([]);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch(`/api/get-submissions?type=contact`);
      if (!res.ok) throw new Error("Failed to fetch submissions");
      const data = await res.json();
      setSubmissions(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const rowsWithSrNo = submissions.map((row, i) => ({
    ...row,
    id: row.id || i.toString(), // Ensure each row has a unique ID
    srNo: i + 1, // Add serial number starting from 1
  }));

  const columns: GridColDef[] = [
    { field: "srNo", headerName: "Sr. No.", flex: 0.5 }, // Display Sr. No.
    { field: "name", headerName: "Name", flex: 1 },
    { field: "lastname", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.5 },
    { field: "contactnumber", headerName: "Contact Number", flex: 1 },
    { field: "message", headerName: "Message", flex: 2 },
  ];

  return (
    <Box>
      <Typography component="h2" variant="h6" sx={{ p: "8px 16px" }}>
        {loading ? <Skeleton width={250} /> : "Contact Form Enquiry"}
      </Typography>

      <Box p={2} bgcolor="#f5f5f5">
        <Paper
          sx={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
          }}
        >
          {loading ? (
            <TableSkeleton />
          ) : (
            <TableContainer sx={{ height: "calc(100vh - 155px)" }}>
              <DataGrid
                rows={rowsWithSrNo}
                columns={columns}
                pageSizeOptions={[5, 10, 25, 50]}
                // rowsPerPageOptions={[10, 20, 50]}
                disableRowSelectionOnClick
                sortingOrder={["asc", "desc"]}
                initialState={{
                  sorting: {
                    sortModel: [{ field: "srNo", sort: "desc" }],
                  },
                  pagination: { paginationModel },
                }}
                showToolbar
              />
            </TableContainer>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
