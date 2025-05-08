"use client"

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BusinessOffice, BusinessOfficeBox, BusinessOfficeImg, FullStop, OutlineBtn, SubTypography } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { motion } from "framer-motion";

type TeamBusinessOfficeType = {
    title: string;
    afterbreaktitle: string;
    subtitle: string;
    buttondisplay: boolean;
};
const TeamBusinessOffice = ({ title, afterbreaktitle, subtitle, buttondisplay }: TeamBusinessOfficeType) => {

    const theme = useTheme();
    const isTabletView = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <BusinessOffice justifyContent={'space-between'} alignItems={'flex-start'}>
            <Box className="leftPanel">
                <motion.div
                   initial={{ opacity: 0, x: -100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1, ease: "easeOut" }}
                   viewport={{ once: true, amount: 0.3 }} 
                >
                    <Typography variant='body_1' display={'block'} width={buttondisplay || isTabletView ? 'auto' : 'max-content'} color={'custom.black'}>{title} <br></br>{afterbreaktitle} <FullStop /></Typography>
                    <SubTypography variant='Caption' color={'custom.black1'} display={'block'}>{subtitle}</SubTypography>
                    {buttondisplay && <Box display={isTabletView ? 'flex' : 'block'} justifyContent={'center'}> <OutlineBtn className='smallResWhiteBtn' href="/contact">SOLUTIONS OFFERED <CallMadeIcon sx={{ marginLeft: '8px' }} /></OutlineBtn> </Box>}
                </motion.div>
            </Box>
            {!buttondisplay && <BusinessOfficeImg></BusinessOfficeImg>}
            {buttondisplay &&
                <BusinessOfficeBox>
                    <video width="100%" height='100%' autoPlay muted loop>
                        <source src="https://pi-tech-react.vercel.app/homepagevideo.mp4" type="video/mp4" />
                    </video>
                </BusinessOfficeBox>
            }
        </BusinessOffice>
    );
};

export default TeamBusinessOffice;
