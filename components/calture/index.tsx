'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SmallFullStop, OutlineBtn, OuterSection } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Culture = () => {

      const theme = useTheme();
        const isTabletView = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
        <OuterSection flexDirection={isTabletView ? "column" : "row"} justifyContent="space-between" alignContent={'flex-start'}>
            <Box>
            {/* <Box width={isTabletView ? "auto" : "565px"}> */}
                <Typography color="custom.black" variant="body_4" marginBottom={2} letterSpacing={'2.4px'} display="block" textTransform="uppercase">
                    culture <SmallFullStop />
                </Typography>

                <Typography className="" color="custom.black" variant="body_6" display="block">
                Working <br style={{display: isTabletView ? 'none' : ''}}></br>
                at Pi
                </Typography>
            </Box>
            <Box>
            {/* // <Box width={isTabletView ? '100%' : 'calc(100% - 565px)' }> */}
                <Typography marginBottom={'40px'}  color="custom.black" mt="16px" display="block" variant="body_3">
                    Working at Pi Techniques is an enriching experience where innovation, collaboration, and professional growth are at the forefront. Our team thrives in a dynamic and inclusive environment that values creativity and a passion for technology. With a commitment to continuous learning, we stay ahead of industry trends and embrace new challenges with enthusiasm.
                    <br></br>
                    <br></br>
                    At Pi Techniques, every employee is an integral part of our success, contributing to impactful projects that drive business transformation. Join us and be a part of a motivated team that is dedicated to excellence and making a difference in the tech world.
                </Typography>

                <OutlineBtn href="/contact">
                JOB OPPORTUNITIES  <CallMadeIcon sx={{ marginLeft: '8px' }} />
                </OutlineBtn>
            </Box>
        </OuterSection>
    );
};

export default Culture;
