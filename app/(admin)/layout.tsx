"use client";

import { Box } from "@mui/material";
import Header from "./Header";

export default function AdminLayout({
  children,
  // eslint-disable-next-line no-undef
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Box component="main">
          <Box
            sx={{
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
