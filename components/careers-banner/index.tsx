"use client"

import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { BusinessOffice, FullStop, StyledCareersBanner, SubTypography } from '@/app/styles/MUI/common.styled';
import CareerImgAnimation from '../career-img-animation';

export const CareersBanner = () => {
  const isMdView = useMediaQuery(`(max-width:768px)`);
    return (
        // <StyledCareersBanner className='careerBannerImg' bgcolor={'custom.black'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        //     <Stack flexDirection={'row'} className='content'>
        //         <Box width={'100%'}>
        //         <Typography display={'block'} textAlign={'center'} marginBottom={ isMdView ? '24px' : '40px'} variant='body_1' color={'custom.orange_600'}>Lookout for motivated, bright <br style={{display: isMdView ? 'none' : ''}}></br>
        //             <Typography variant='body_1' color={'custom.white5'}>& passionate individuals</Typography></Typography>
        //         <Typography textAlign={'center'} display={'block'} width={'100%'} variant='Caption' color={'custom.white5'}>Pi is full of challenges, learning and successful smiles.<br style={{display: isMdView ? 'none' : ''}}></br>
        //             Come grow with us and become a part of a global solutions company.</Typography>
        //             </Box>
        //     </Stack>
        // </StyledCareersBanner>
         <BusinessOffice
              bgcolor={'custom.black'}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className="leftPanel">
                <Typography
                  variant="body_1"
                  display="block"
                  color={'custom.white2'}
                >
                  Lookout for motivated, bright <br />& passionate individuals<FullStop />
                </Typography>
        
                <SubTypography
                  variant="Caption1"
                  color="custom.white2"
                  display="block"
                >
                 Pi is full of challenges, learning and successful smiles. <br></br>
                 Come grow with us and become a part of a global solutions company.
                </SubTypography>
              </Box>
                <CareerImgAnimation />
            </BusinessOffice>
    );
};