"use client";

import Box from "@mui/material/Box";
import { Paper, TableContainer, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import TableSkeleton from "../skeleton/tableSkeleton";
import DownloadIcon from "@mui/icons-material/Download";

const paginationModel = { page: 0, pageSize: 5 };

export default function Page() {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [columns, setColumns] = useState<GridColDef[]>([]);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch(`/api/get-submissions?type=career`);
      if (!res.ok) throw new Error("Failed to fetch submissions");
      const data = await res.json();

      const dynamicColumns: GridColDef[] = Object.keys(data[0] || {})
        .filter((key) => key !== "id" && key !== "_id" && key !== "resume") // ⬅️ now also excludes _id

        .map((key) => ({
          field: key,
          headerName: key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase()),
          flex: 1,
          filterable: true,
        }));

      // Add Sr. No and Resume columns
      setColumns([
        { field: "srNo", headerName: "Sr. No.", flex: 0.5, filterable: true },
        ...dynamicColumns,
        {
          field: "resume",
          headerName: "Resume",
          flex: 0.7,
          sortable: false,
          filterable: true,
          renderCell: (params) =>
            params.value ? (
              <Tooltip title="Download Resume">
                <IconButton
                  component="a"
                  href={params.value}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon color="primary" />
                </IconButton>
              </Tooltip>
            ) : (
              "N/A"
            ),
        },
      ]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rowsWithSrNo = data.map((row: any, i: number) => ({
        ...row,
        srNo: i + 1,
        id: row.id || `${i}`, // Required internally by DataGrid, but won't be shown
      }));

      setSubmissions(rowsWithSrNo);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <Box>
      {/* <Typography component="h2" variant="h6" sx={{ p: "8px 16px" }}>
        {loading ? <Skeleton width={250} /> : "Career Form Enquiry"}
      </Typography> */}

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
                rows={submissions}
                columns={columns}
                initialState={{
                  sorting: {
                    sortModel: [{ field: "srNo", sort: "desc" }],
                  },
                  pagination: { paginationModel },
                }}
                pageSizeOptions={[5, 10, 25, 50]}
                disableRowSelectionOnClick
                sortingOrder={["asc", "desc"]}
                showToolbar
                loading={loading}
              />
            </TableContainer>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
