"use client"

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BusinessOffice, BusinessOfficeImg, CaseStudiesBannerImg, FullStop,  SubTypography } from '@/app/styles/MUI/common.styled';
import CareerImgAnimation from '../career-img-animation';

type ThemeType = {
    darkTheme: boolean;
  }

export const AlwaysKeepSimple = ({darkTheme} : ThemeType) => {
    const theme = useTheme()
    const isSmallDesktopView = useMediaQuery(theme.breakpoints.down('xl'));
    const isTabletView = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <BusinessOffice bgcolor={darkTheme ? 'custom.black' : ''} justifyContent={'space-between'} alignItems={'center'}>
            <Box className="leftPanel">
                <Typography variant='body_1' margin={isSmallDesktopView ? '0 auto' : 'auto'} display={'block'} width={isTabletView ? 'auto' : 'max-content'} color={darkTheme ? 'custom.white2' : 'custom.black'}>Always keep it <br></br> simple <FullStop /></Typography>
                <SubTypography variant='Caption' color={darkTheme ? 'custom.black1' : 'custom.black1'} display={'block'}>Strong team with a passion for technology</SubTypography>
            </Box>
            {darkTheme ? (<CareerImgAnimation />) : (<CaseStudiesBannerImg className='alwaysKeepSimple' />)}
        </BusinessOffice>
    );
};

