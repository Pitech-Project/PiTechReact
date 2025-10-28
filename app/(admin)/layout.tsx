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
    // ✅ Add body class and style safely on mount
    document.body.classList.add("page--add-career");
    document.body.style.backgroundColor = "#f4f4f4";

    // ✅ Clean up on unmount
    return () => {
      document.body.classList.remove("page--add-career");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Box component="main">
      {/* ✅ Fixed Header visible on all admin pages */}
      <Header />

      {/* ✅ Page content */}
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
