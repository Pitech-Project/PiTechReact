"use client"

import { Box, Typography } from '@mui/material';
import { BusinessOffice, FullStop, SubTypography } from '@/app/styles/MUI/common.styled';
import dynamic from 'next/dynamic';

// const AboutImgAnimation = dynamic(() => import('../about-img-animation'), { ssr: false });
const AboutBanner = () => {
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
                        Always keep it <br></br>simple <FullStop />
                    </Typography>

                    <SubTypography
                        variant="Caption1"
                        color="custom.white2"
                        display="block"
                    >
                        Strong team with a passion for technology
                    </SubTypography>
                </Box>

                {/* <AboutImgAnimation /> */}
            </BusinessOffice>
        </>
    );
};

export default AboutBanner;
