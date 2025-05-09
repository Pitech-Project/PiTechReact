'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  BusinessOffice,
  CaseStudiesBannerImg,
  FullStop,
  SubTypography,
} from '@/app/styles/MUI/common.styled';

import dynamic from 'next/dynamic';

// Dynamically import the p5 animation component (client-only)
const CareerImgAnimation = dynamic(() => import('../career-img-animation'), {
  ssr: false,
});

export const AlwaysKeepSimple = () => {
  const theme = useTheme();
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <BusinessOffice
      bgcolor={'custom.black'}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box className="leftPanel">
        <Typography
          variant="body_1"
          margin={isSmallDesktopView ? '0 auto' : '0'}
          display="block"
          color={'custom.white2'}
        >
          Always <br />keep it simple<FullStop />
        </Typography>

        <SubTypography
          variant="Caption1"
          color="custom.white2"
          display="block"
        >
         Strong team with a passion for technologsy <br></br>
         <br></br>
        </SubTypography>
      </Box>
        <CareerImgAnimation />
    </BusinessOffice>
  );
};
