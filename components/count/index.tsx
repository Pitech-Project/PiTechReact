"use client"

import { CountOuterBox } from "@/app/styles/MUI/common.styled";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Counter from "../Counter";

const Count = () => {
      const isMdView = useMediaQuery(`(max-width:768px)`);
    return (
        <Stack flexDirection={'row'} justifyContent={'center'}>
            <CountOuterBox flexDirection={isMdView ? 'column' : 'row'} justifyContent={'space-between'} alignItems={'center'} zIndex={1}>
                <Box className="CountBox">
                    <Stack flexDirection={'row'} alignItems={'baseline'} gap={1} justifyContent={'center'}> <Counter target={300} speed={5} /> <Typography variant="body_2" color="custom.orange_600">+</Typography></Stack>
                    <Typography variant="body_4" letterSpacing={'1.6px'} color="custom.white1">NUMBER OF CLIENTS</Typography>
                </Box>
                <Box className="CountBox">
                    <Stack flexDirection={'row'} alignItems={'baseline'} gap={1} justifyContent={'center'}><Counter target={100} speed={5} /> <Typography variant="body_2" color="custom.orange_600">+</Typography></Stack>
                    <Typography variant="body_4" letterSpacing={'1.6px'} color="custom.white1">PROJECTS DELIVERED</Typography>
                </Box>
                <Box className="CountBox">
                    <Stack flexDirection={'row'} alignItems={'baseline'} gap={1} justifyContent={'center'}><Counter target={10} speed={5} /></Stack>
                    <Typography variant="body_4" letterSpacing={'1.6px'} color="custom.white1">LOCATIONS</Typography>
                </Box>
            </CountOuterBox>
        </Stack>
    );
};

export default Count;
