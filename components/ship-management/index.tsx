"use client"

import Image from 'next/image';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { SmallFullStop, OutlineBtn, OuterSection, ChipUI, OuterGrid } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ShipManagementImg from '../../public/assets/img/case-studies/ship-management.png'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export const ShipManagement = () => {
    const router = useRouter();
    const isMdView = useMediaQuery(`(max-width:768px)`);
    return (
        <>
            <OuterGrid container spacing={5} justifyContent={'space-between'}>
                <Grid size={{ xs: 12, lg: 11, xl: 9 }} offset={{ xs: 0, lg: 1, xl: 2 }}>
                    <Grid container spacing={10}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                    <Typography color='custom.black3' variant='body_4' display={'block'} textTransform={'uppercase'} letterSpacing={'2.4px'}>V.SHIPS | Ship Management <SmallFullStop /></Typography>
                                    <Typography marginBottom={isMdView ? '32px' : '64px'} color='custom.black' variant='body_6' display={'block'}>V.Chat</Typography>
                                    <Typography color='custom.black' margin={'16px 0 0'} display={'block'} variant='body_3'>An all-in-one communication and collaboration hub designed for seamless interaction among ship vessel crews and office personnel.</Typography>
                                    <Stack flexDirection={'row'} gap={2} margin={'20px 0 50px'} flexWrap={'wrap'}>
                                        <ChipUI>Web</ChipUI>
                                        <ChipUI>Desktop</ChipUI>
                                        <ChipUI>Mobile</ChipUI>
                                        <ChipUI>Tablet</ChipUI>
                                    </Stack>
                                    <OutlineBtn onClick={() => router.push('/case-studie-details')}>VIEW CASE STUDY <CallMadeIcon sx={{ marginLeft: '8px' }} /></OutlineBtn>
                            </motion.div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <Image src={ShipManagementImg} alt='ShipManagementImg' style={{ borderRadius: '8px', width: '-webkit-fill-available', height: 'auto' }} />

                                </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
            </OuterGrid>
        </>
    );
};
