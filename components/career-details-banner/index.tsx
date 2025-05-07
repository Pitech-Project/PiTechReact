

"use client"

import { Box, Stack, Typography } from '@mui/material';
import { OutlineWhiteBtn, StyledCareerDetailsBanner } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';

export const CareerDetailsBanner = () => {
    return (
        <StyledCareerDetailsBanner bgcolor={'custom.black'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack flexDirection={'row'} className='content'>
                <Box width={'100%'} textAlign={'center'}>
                    <Typography variant='count' fontWeight={500} color={'custom.white5'}>DevOps Engineer</Typography>
                    <Typography display={'block'} margin={'16px 0 40px'} variant='body_3' fontWeight={400} color={'custom.white5'}>JOB CODE: PI020</Typography>
                    <Stack flexDirection={'row'} justifyContent={'center'}>
                        <OutlineWhiteBtn href="#">Apply <CallMadeIcon sx={{ marginLeft: '8px' }} /></OutlineWhiteBtn>
                    </Stack>
                </Box>
            </Stack>
        </StyledCareerDetailsBanner>
    );
};
