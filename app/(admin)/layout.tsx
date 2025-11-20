"use client";

import { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./Header"; // adjust path as needed
import "@/styles/global/admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("page--job-list");
    document.body.style.backgroundColor = "#f4f4f4";

    return () => {
      document.body.classList.remove("page--job-list");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Box component="main">
      <Header />

      <Box
        sx={{
          mt: { xs: 8, md: 0 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
