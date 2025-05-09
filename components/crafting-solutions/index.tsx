"use client"

import { BusinessOffice, CraftingSolutionsBox, FullStop, SubTypography } from "@/app/styles/MUI/common.styled";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ServicesImgAnimation = dynamic(() => import('../services-img-animation'), { ssr: false });
export const CraftingSolutions = () => {

    return (
        // <CraftingSolutionsBox flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        //     <Box className="bannerText">
        //         <Typography display={'block'} marginBottom={'30px'} variant="body_7" color="custom.black1">Crafting solutions  <br></br>for your <Typography color="custom.brown" variant="body_7">unique needs</Typography></Typography>
        //         <Typography display={'block'} textAlign={'center'} variant="body_3" fontWeight={400}>Discover service excellence. We craft tailored solutions to
        //         <br></br> meet your unique needs and fuel success. </Typography>
        //     </Box>
        //     <Image className="bannershape" src={BannerImg} alt='Banner' />
        // </CraftingSolutionsBox>
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
                    Crafting solutions <br></br>for your unique needs <FullStop />
                </Typography>

                <SubTypography
                    variant="Caption1"
                    color="custom.white2"
                    display="block"
                >
                    Discover service excellence. We craft tailored solutions to<br></br>
                    meet your unique needs and fuel success.
                </SubTypography>
            </Box>

            <ServicesImgAnimation />
        </BusinessOffice>
    );
};