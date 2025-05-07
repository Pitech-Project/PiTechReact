"use client"

import { Box, ThemeProvider } from "@mui/material";
import { lightTheme } from "../styles/MUI/theme";
import Header from "./Header";

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>){
    return(
        <html lang="en" className="bg-black" >
            <body>
                <ThemeProvider theme={lightTheme}>
                        <Box
                            component="main"
                            // overflow={'auto'}
                        >
                            <Box
                                sx={{
                                    mt: { xs: 8, md: 0 },
                                }}
                            >
                                <Header />
                                {children}
                            </Box>
                        </Box>
                </ThemeProvider>
            </body>
        </html>
    )
}