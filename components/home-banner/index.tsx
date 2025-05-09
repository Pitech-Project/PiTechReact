"use client"

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BusinessOffice, BusinessOfficeBox, BusinessOfficeImg, FullStop, OutlineBtn, OutlineWhiteBtn, SubTypography } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';
import dynamic from 'next/dynamic';

//  const HomeImgAnimation = dynamic(() => import('../home-img-animation'), { ssr: false });

const HomeBanner = () => {
    const theme = useTheme();
    const isTabletView = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
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
                  Commitment to <br></br> customised solutions
                </Typography>
        
                <SubTypography
                  variant="Caption1"
                  color="custom.white2"
                  display="block"
                >
                  Within every problem lies an opportunity
                </SubTypography>
                <Box display={isTabletView ? 'flex' : 'block'} justifyContent={'center'}> <OutlineWhiteBtn className='smallResWhiteBtn' href="/contact">SOLUTIONS OFFERED <CallMadeIcon sx={{ marginLeft: '8px' }} /></OutlineWhiteBtn> </Box>
              </Box>
              {/* <HomeImgAnimation /> */}
          
            </BusinessOffice>
        </>
    );
};

export default HomeBanner;
