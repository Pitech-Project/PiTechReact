"use client";

import Image from 'next/image';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { SmallFullStop, OutlineBtn, OuterSection } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';
import BusinessOffice from '../../public/assets/img/img1.jpg';
import AboutUs from '../../public/assets/img/about-us/ourstory.svg';
import TotalYears from '../../public/assets/img/water-mark.png';
import { motion } from "framer-motion";

type WhoWeAreType = {
    title: string;
    buttondisplay: boolean;
    aboutus: boolean;
};

const WhoWeAre = ({ title, buttondisplay, aboutus }: WhoWeAreType) => {
    const isTabletView = useMediaQuery(`(max-width:991px)`);

    return (
        <>
            <OuterSection
                flexDirection={isTabletView ? 'column' : 'row'}
                justifyContent={'space-between'}
                alignItems={isTabletView ? 'flex-start' : aboutus ? 'end' : 'flex-start'}
                paddingBottom={aboutus ? '' : '0 !important'}
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Box marginBottom={isTabletView ? '60px' : '0'}>
                        <Typography
                            color='custom.black3'
                            variant='body_4'
                            display='block'
                            letterSpacing='2.4px'
                            textTransform='uppercase'
                            marginBottom={2} fontWeight={600}
                        >
                            {title}
                            <SmallFullStop />
                        </Typography>

                        {aboutus && (
                            <>
                                <Typography className='SubTitlemarginBottom' color='custom.black' variant='body_6' display='block'>
                                    Our Story
                                </Typography>
                                <Typography color='custom.black' margin='16px 0 0' display='block' variant='body_3'>
                                    Pi Techniques is a company established in 1992 that began as a small support services firm catering to individuals and home offices.
                                    <br /><br />
                                    Over time, we have expanded to encompass multiple divisions specializing in software and web development, as well as IT infrastructure and support services.
                                    <br /><br />
                                    They are characterized by their passion for technology, simplicity in approach and commitment to providing customized solutions to their clients.
                                </Typography>
                            </>
                        )}

                        {!aboutus && (
                            <Typography color='custom.black' margin='16px 0 40px' display='block' variant='body_3'>
                                Since our establishment in 1992, we have been dedicated to empowering businesses with the transformative power of technology. Our commitment to excellence, passion for innovation and unwavering client focus have made us a leader in the industry.
                                <br /><br />
                                At Pi Techniques it&quot;s <Typography color='custom.orange_600' variant='body_3' component="span">always keep it simple</Typography> — that&quot;s how we manage to keep our large client base delighted. We are a strong team with a deep rooted passion for technology.
                            </Typography>
                        )}
                        {buttondisplay && (
                            <OutlineBtn href="/contact">
                                ABOUT US <CallMadeIcon sx={{ marginLeft: '8px' }} />
                            </OutlineBtn>
                        )}
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {aboutus ? (
                        <Image
                            src={AboutUs}
                            alt='AboutUs'
                            style={{ borderRadius: '8px', width: isTabletView ? '100%' : 'auto', height: 'auto' }}
                        />
                    ) : (
                        <Image
                            src={BusinessOffice}
                            alt='teamBusinessOffice'
                            style={{ width: isTabletView ? '100%' : 'auto', height: isTabletView ? 'auto' : '' }}
                        />
                    )}
                </motion.div>
            </OuterSection>
            {!aboutus && (
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Box display='flex' alignItems='center' justifyContent='center' width='100%'>
                        <Image
                            src={TotalYears}
                            className='img-fluid'
                            alt='teamBusinessOffice'
                            style={{ margin: '0 60px', height: isTabletView ? 'auto' : '', width: isTabletView ? '100%' : ''}}
                        />
                    </Box>
                </motion.div>
            )}
        </>
    );
};

export default WhoWeAre;
