"use client";

import { Box } from "@mui/material";
import Header from "../Header";
import SideMenu from "../SideMenu";

export default function Page() {
  return (
    <Box display={"flex"}>
      <SideMenu />
      <Box component="main" flexGrow={1}>
        <Box
          sx={{
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
        </Box>
      </Box>
    </Box>
  );
}
