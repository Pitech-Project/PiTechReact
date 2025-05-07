"use client"

import react from 'react'
import Header from '../Header'
import SideMenu from '../SideMenu'
import { Box, Stack } from '@mui/material'

export default function Page() {
    return(
        <Box display={'flex'}>
            <SideMenu />
            <Box
                component="main"
                flexGrow={1}
                sx={(theme) => ({
                    // backgroundColor: theme.vars
                    // ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                    // : alpha(theme.palette.background.default, 1),
                })}
            >
                <Box
                    // spacing={2}
                    sx={{
                    // alignItems: 'center',
                    // mx: 3,
                    pb: 5,
                    mt: { xs: 8, md: 0 },
                    }}
                >
                    <Header />
                </Box>
            </Box>
        </Box>
    )
}