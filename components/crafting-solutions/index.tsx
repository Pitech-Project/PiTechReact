"use client"

import {  CraftingSolutionsBox } from "@/app/styles/MUI/common.styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BannerImg from '../../public/assets/img/Services/bannershape.png'


export const CraftingSolutions = () => {

    // const breakpoints = {
    //     smallDesktop: "1535px",
    //     tabletView: '1199px',
    //     md: '991px'
    // };
    return (
        <CraftingSolutionsBox flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Box className="bannerText">
                <Typography display={'block'} marginBottom={'30px'} variant="body_7" color="custom.black1">Crafting solutions  <br></br>for your <Typography color="custom.brown" variant="body_7">unique needs</Typography></Typography>
                <Typography display={'block'} textAlign={'center'} variant="body_3" fontWeight={400}>Discover service excellence. We craft tailored solutions to
                <br></br> meet your unique needs and fuel success. </Typography>
            </Box>
            <Image className="bannershape" src={BannerImg} alt='Banner' />
        </CraftingSolutionsBox>
    );
};