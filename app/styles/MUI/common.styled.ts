"use client";

import { AppBar, Box, Button, Drawer, Grid, Link, Stack, styled, Typography } from "@mui/material";

const breakpoints = {
    smallDesktop: "1535px",
    smallDesktop1: "1366px",
    tabletView: '1199px',
    md: '991px',
    sm: '768px'
};


interface Props {
    transformUp?: boolean
}

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
    // borderBottom: "1px solid",
    // borderColor: theme.palette.custom?.border1,
    backgroundColor: theme.palette.custom?.black,
    boxShadow: 'unset',
    padding: "12px 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
        fontWeight: 500,
        fontSize: "18px",
        letterSpacing: "10%",
        lineHeight: '20px',
        color: theme.palette.custom?.grey_700,
    },
    "& .dot": {
        width: '6px',
        height: '6px',
        background: '#f7941e',
        borderRadius: '50%',
        opacity: 0,
        transform: 'translateX(-658px)',
        transition: 'all 0.2s ease-in-out',
        marginTop: '31px',
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        "&.MuiTypography-root.smallResWhiteBtn":{
            borderColor: theme.palette.custom?.white2,
            color: theme.palette.custom?.white2,
        },
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        padding: "12px 16px",
    },
}));

export const OutlineBtn = styled(Link)<Props>(({ theme, transformUp }) => ({
    border: "1px solid",
    borderColor: theme.palette.custom?.black,
    borderRadius: '100px',
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: '14px',
    letterSpacing: '1.6px',
    color: theme.palette.custom?.black,
    textDecoration: 'unset',
    width: 'max-content',
    transition: '0.5s',
    textTransform: 'uppercase',
    cursor: 'pointer',
    "& .MuiSvgIcon-root": {
        width: '18px',
        transition: '0.5s',
        marginLeft: '16px'
    },
    "&:hover .MuiSvgIcon-root": {
        transform: transformUp ? 'translate(6px, -3px)' : 'translate(6px, 0px)'
    },
    "&:hover": {
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
        color: theme.palette.custom?.black,
    },
    "&.backarrow:hover .MuiSvgIcon-root": {
        transform: 'translate(-8px, 0px) rotate(0deg)'
    },
    // [`@media (max-width: ${breakpoints.tabletView})`]: {
    //     "&.MuiTypography-root.smallResWhiteBtn":{
    //         borderColor: theme.palette.custom?.white2,
    //         color: theme.palette.custom?.white2,
    //     },
    // },
}));


export const OutlineBtn1 = styled(Button)(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.custom?.black,
    borderRadius: '100px',
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: '14px',
    letterSpacing: '1.6px',
    color: theme.palette.custom?.black,
    textDecoration: 'unset',
    width: 'max-content',
    transition: '0.5s',
    textTransform: 'uppercase',
    cursor: 'pointer',
    "& .MuiSvgIcon-root": {
        width: '18px',
        transition: '0.5s',
    },
    "&:hover .MuiSvgIcon-root": {
        transform: 'translate(6px, -5px)'
    },
    "&:hover": {
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
        color: theme.palette.custom?.black,
    },
    "&.backarrow:hover .MuiSvgIcon-root": {
        transform: 'translate(-8px, 0px) rotate(0deg)'
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        "&.MuiTypography-root.smallResWhiteBtn":{
            borderColor: theme.palette.custom?.white2,
            color: theme.palette.custom?.white2,
        },
    },
}));

export const OutlineWhiteBtn = styled(Link)<Props>(({ theme, transformUp }) => ({
    border: "1px solid",
    borderColor: theme.palette.custom?.white2,
    borderRadius: '100px',
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: '1.6px',
    justifyContent: "space-between",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: '14px',
    color: theme.palette.custom?.white2,
    textDecoration: 'unset',
    transition: '0.5s',
    width: 'max-content',
    textTransform: 'uppercase',
    cursor: 'pointer',
    "& .MuiSvgIcon-root": {
        width: '18px',
        transition: '0.5s',
        marginLeft: '16px'
    },
    "&:hover .MuiSvgIcon-root": {
        transform: transformUp ? 'translate(6px, -3px)' : 'translate(6px, 0px)',
    },
    "&:hover .MuiSvgIcon-root path": {
        fill: theme.palette.custom?.black,
    },
    "&:hover": {
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
        color: theme.palette.custom?.black,
    }
}));

export const OutlineWhiteBtn1 = styled(Button)(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.custom?.white2,
    borderRadius: '100px',
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: '14px',
    color: theme.palette.custom?.white2,
    textDecoration: 'unset',
    transition: '0.5s',
    width: 'max-content',
    textTransform: 'uppercase',
     cursor: 'pointer',
    "& .MuiSvgIcon-root": {
        width: '18px',
        transition: '0.5s',
    },
    "&:hover .MuiSvgIcon-root": {
        transform: 'translate(6px, -5px)'
    },
    "&:hover": {
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
        color: theme.palette.custom?.black,
    }
}));

export const OutlineBtnYellow = styled(Link)(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.custom?.orange_600,
    borderRadius: '100px',
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 500,
    fontSize: "14px !important",
    lineHeight: '14px !important',
    color: theme.palette.custom?.orange_600,
    textDecoration: 'unset',
    letterSpacing: '0.4px',
    transition: '0.5s',
    "&:hover": {
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
        color: theme.palette.custom?.black,
    }
}));

export const MenusItem = styled(Link)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "18px",
    letterSpacing: "0.3px",
    lineHeight: '20px',
    color: theme.palette.custom?.grey_700,
    textTransform: "uppercase",
    textDecoration: "unset",
    marginRight: '40px',
    transition: '0.5s',
    "&:hover, &.Selected": {
        color: theme.palette.custom?.orange_600,
    }
}));

export const FullStop = styled(Typography)(({ theme }) => ({
    height: '14px',
    width: '14px',
    backgroundColor: theme.palette.custom?.orange_600,
    display: 'inline-block',
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        height: '10px',
        width: '10px',
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        height: '8px',
        width: '8px',
    },
}));

export const SubTypography = styled(Typography)(() => ({
    margin: '32px 0 80px',
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        margin: '24px 0 0px',
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        margin: '16px 0 0px',
    },
}));

export const SmallFullStop = styled(Typography)(({ theme }) => ({
    height: '8px',
    width: '8px',
    backgroundColor: theme.palette.custom?.orange_600,
    display: 'inline-block',
}));

export const TooSmallFullStop = styled(Typography)(({ theme }) => ({
    height: '5px',
    width: '5px',
    backgroundColor: theme.palette.custom?.orange_600,
    display: 'inline-block',
}));

export const CountOuterBox = styled(Stack)(({ theme }) => ({
    justifyContent: 'space-between',
    gap: '100px',
    background: 'linear-gradient(90deg, #1F1F1F 0%, #333333 17.3%)',
    borderRadius: '16px',
    padding: '36px 98px',
    color: theme.palette.custom?.white1,
    width: 'max-content',
    marginTop: '-105px',
    [`@media (max-width: ${breakpoints.md})`]: {
        padding: '36px 75px',
        gap: '48px',
        margin: '0 20px',
        width: '100%',
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        padding: '36px 8px',
        gap: '48px',
        margin: '0 20px',
        width: '100%',
        // flexDirection: 'column',
        // gap: '16px',
        // padding: '0px',
        // background: 'unset',
        // marginTop: '-50vh',
        // position: 'relative',
        // bottom: '24px',
        // justifyContent: 'end',
        // zIndex: 1,
        // "& .CountBox": {
        //     padding: '24px 24px 30px',
        //     width: '100%',
        //     textAlign: 'center',
        //     background: 'linear-gradient(90deg, #1F1F1F 0%, #333333 17.3%)',
        //     borderRadius: '16px',
        // }
    },
}));

export const ServiceGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.custom?.black,
    border: "1px solid",
    borderColor: theme.palette.custom?.border2,
    borderRadius: '12px',
    padding: "30px 40px",
    [`@media (max-width: ${breakpoints.md})`]: {
        padding: "20px",
        "& img":{
            height: '100px',
            width: 'auto'
        }
    },
}));

export const IndustriesGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.custom?.black,
    borderRadius: '8px',
    padding: "32px 32px 16px",
}));

export const OuterGrid = styled(Grid)(() => ({
    padding: "140px 0px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        width: "auto",
        padding: "140px 0px",
        margin: '0 80px 0 26px',
    },
    [`@media (max-width: ${breakpoints.smallDesktop1})`]: {
        margin: '0 80px 0 10px',
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        padding: "80px 0px",
        margin: '0 32px',
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        margin: '0 20px',
    },
}));
  
export const OuterSection = styled(Stack)(() => ({
    width: "1160px",
    padding: "140px 0px",
    margin: '0 auto',
    gap: '100px',
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        width: "auto",
        margin: '0 100px',
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        width: "auto",
        padding: "80px 0px",
        margin: '0 32px',
        gap: '80px',
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        margin: '0 20px',
    },
}));

export const PrevNext = styled(Stack)(({ theme }) => ({
    justifyContent: "space-between",
    flexDirection: 'row',
    position: 'absolute',
    right: '80px',
    top: '170px',
    "&.OurWorkPrevNext":{
        position: 'relative',
        right: '0px',
        top: '0px',
    },
    "& .MuiButton-root": {
        borderRadius: "100px",
        height: "56px",
        minHeight: "56px",
        width: "56px",
        minWidth: "56px",
        border: "1px solid",
        borderColor: theme.palette.custom?.white2,
        backgroundColor: "transparent",
        margin: 0,
        position: 'unset',
        transition: '0.5s',
    },
    "& .MuiButton-root:hover": {
        borderColor: theme.palette.custom?.orange_600,
    },
    "&.OurWorkPrevNext .MuiButton-root:hover":{
        backgroundColor: theme.palette.custom?.orange_600,
        borderColor: theme.palette.custom?.orange_600,
    },
    "& .MuiButton-root.swiper-button-prev": {
        marginRight: '16px'
    },
    "& .MuiButton-root svg": {
        width: '24px',
        transition: '0.5s',
    },
    "& .MuiButton-root:hover svg path": {
        fill: theme.palette.custom?.orange_600,
    },
    "& .MuiButton-root::after": {
        display: "none",
    },
    "&.OurWorkPrevNext .MuiButton-root": {
        borderColor: theme.palette.custom?.black,
        backgroundColor: "transparent",
    },
    "&.OurWorkPrevNext .MuiButton-root svg path":{
        fill: theme.palette.custom?.black,
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        right: '20px',
        top: '228px',
    },
}));

export const OwlCarouselStyled = styled(Stack)(({ theme }) => ({
    // "& .swiper-slide":{
    //     width: '100% !important'
    // },
    "& .swiper-wrapper": {
        alignItems: 'center'
    },
    "& .testimonial-boxUI": {
        backgroundColor: theme.palette.custom?.border2,
        padding: '36px 32px',
        borderRadius: '8px',
    },
    "& .swiper-slide .MuiTypography-root": {
        fontSize: '19px',
        lineHeight: '30px'
    },
    "& .swiper-slide-next .MuiTypography-root": {
        fontSize: '22px',
        lineHeight: '34px'
    },
    "& .swiper-slide-active, & .swiper-slide-next ~ .swiper-slide": {
        transform: 'scale(0.8)',
        transitionDuration: '0.3s',
        opacity: '0.6',
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        "& .swiper-slide-next .MuiTypography-root": {
            fontSize: '20px',
            lineHeight: '30px'
        },
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        "& .swiper-slide-active, & .swiper-slide-next ~ .swiper-slide": {
            transform: 'scale(1)',
            opacity: '1',
        },
        "& .testimonial-boxUI":{
            margin: "0 20px"
        }
    },
}));

export const OwlCarouselBox = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.custom?.black2,
    padding: '24px 28px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    justifyContent: "space-between",
    textAlign: "left",
    flexDirection: 'row',
    alignItems: 'center',
}));

export const OwlCarouselOuterBox = styled(Stack)(({ theme }) => ({
    "& .owl-nav": {
        position: 'absolute',
        right: "80px",
        top: "-200px",
        display: 'flex',
        [`@media (max-width: ${breakpoints.smallDesktop})`]: {
            "& .owl-nav": {
                right: "0px",
            }
        },
        "& .owl-prev , & .owl-next": {
            borderRadius: "100px",
            height: "56px",
            minHeight: "56px",
            width: "56px",
            minWidth: "56px",
            border: "1px solid",
            borderColor: theme.palette.custom?.border2,
            backgroundColor: "transparent",
            margin: 0,
            position: 'unset',
            transition: '0.5s',
        },
        "& .owl-prev:hover , & .owl-next:hover": {
            borderColor: theme.palette.custom?.orange_600,
        },
        "& .nav-btn": {
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: '0.5s',
        },
        "& .owl-prev": {
            marginRight: '16px'
        },
        "& .MuiButton-root svg": {
            width: '24px',
        },
        "& .nav-btn:hover svg, .nav-btn:hover svg path": {
            fill: theme.palette.custom?.orange_600,
            transition: '0.5s',
        },
        "& .disabled, .disabled:hover": {
            opacity: 0.5,
            borderColor: theme.palette.custom?.border2,
        },
        "& .disabled:hover svg, .disabled:hover svg path": {
            fill: theme.palette.custom?.border2,
        },
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        "& .owl-carousel": {
            marginTop: "70px",
        },
        "& .owl-nav":{
            right: 0,
            top: '-110px'
        }
    },
}));

export const TestimonialBox = styled(Box)(({ theme }) => ({
    "& .swiper-wrapper": {
        alignItems: 'center'
    },
    "& .testimonial-boxUI": {
        backgroundColor: theme.palette.custom?.border2,
        padding: '36px 32px',
        borderRadius: '8px',
    },
    "& .swiper-slide .MuiTypography-root": {
        fontSize: '19px',
        lineHeight: '30px'
    },
    "& .swiper-slide-next .MuiTypography-root": {
        fontSize: '22px',
        lineHeight: '34px'
    },
    "& .swiper-slide-active, & .swiper-slide-next ~ .swiper-slide": {
        transform: 'scale(0.8)',
        transitionDuration: '0.3s',
        opacity: '0.6',
    },
    "&.OurWorkCarousel .swiper-slide-active, &.OurWorkCarousel .swiper-slide-next ~ .swiper-slide":{
        transform: 'scale(1) !important',
        opacity: '1 !important',
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        "& .swiper-slide-next .MuiTypography-root": {
            fontSize: '20px',
            lineHeight: '30px'
        },
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        "& .swiper-slide-active, & .swiper-slide-next ~ .swiper-slide": {
            transform: 'scale(1)',
            opacity: '1',
        },
        "& .testimonial-boxUI":{
            margin: "0 20px"
        }
    },
}));

export const DirectionLink = styled(Link)(({theme}) => ({
    padding: '11px',
    border: '1px solid #f6f6f6',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '16.4px',
    width: '16.4px',
    transition: 'all 0.5s ease',
    "& svg": {
        transition: 'all 0.5s ease',
        width: '18px !important',
        color: theme.palette.custom?.white2,
    },
    "&:hover svg": {
        color: theme.palette.custom?.black,
    },
    "&:hover":{
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
    }
}));

export const FooterOuterBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.custom?.border2,
    padding: '54px 80px',
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        "& .TabletViewBorder":{
            borderTop: '1px solid',
            borderColor: theme.palette.custom?.black3,
            paddingTop: '32px',
            paddingBottom: '32px'
        }
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        padding: '24px',
    },
}));

export const LinkUI = styled(Link)(({ theme }) => ({
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: '34px',
    color: theme.palette.custom?.white2,
    textDecoration: 'unset',
    display: 'block',
    marginBottom: '24px',
    wordBreak: 'break-word',
    cursor: 'pointer',
    width: "max-content",
    "&:hover": {
        color: theme.palette.custom?.orange_600,
    },
    [`@media (max-width: ${breakpoints.md})`]: {
        fontSize: '18px',
        lineHeight: '24px',
        marginBottom: '16px',
    },
}));

export const LinkUI2 = styled(Typography)(({ theme }) => ({
    fontSize: '22px',
    fontWeight: '600',
    lineHeight: '34px',
    color: theme.palette.custom?.white2,
    textDecoration: 'unset',
    display: 'block',
    marginBottom: '24px',
    wordBreak: 'break-word',
    [`@media (max-width: ${breakpoints.md})`]: {
        fontSize: '18px',
        lineHeight: '24px',
        marginBottom: '16px',
    },
}));

export const LinkUI1 = styled(Link)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '18px',
    color: theme.palette.custom?.white5,
    textDecorationColor: theme.palette.custom?.white5,
    "&:hover": {
        color: theme.palette.custom?.orange_600,
        textDecorationColor: theme.palette.custom?.orange_600,
    }
}));

export const SocialMediaIcons = styled(Stack)(({ theme }) => ({
    color: theme.palette.custom?.white2,
    "& svg:hover": {
        color: theme.palette.custom?.orange_600,
    }
}));

export const ScrollTopTop = styled(Box)(({ theme }) => ({
    padding: '22px 14px',
    border: '1px solid #f6f6f6',
    borderRadius: '100px',
    transition: '0.5s',
    "& svg": {
        transition: 'all 0.5s ease',
        width: '13px !important',
    },
    "&:hover svg": {
        transform: 'translateY(-5px)',
    },
    "&:hover svg path": {
        fill: theme.palette.custom?.black,
    },
    "&:hover": {
        borderColor: theme.palette.custom?.orange_600,
        backgroundColor: theme.palette.custom?.orange_600,
    }
}));

export const BusinessOfficeImg = styled(Box)(() => ({
    backgroundImage: `url('/assets/img/Team_Business_Office.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "1000px",
    "&.alwaysKeepSimple":{
        backgroundImage: `url('/assets/img/case-studies/case-studies-right.jpg')`,
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        width: "calc(100vw)",
        height: "430px",
    },
    
}));

export const CaseStudiesBannerImg = styled(Box)(() => ({
    backgroundImage: `url('/assets/img/case-studies/case-study-white.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "1000px",
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        width: "calc(100vw)",
        height: "430px",
    },
    
}));

export const BusinessOfficeBox = styled(Box)(() => ({
    width: "calc(100vw - 750px)",
    height: "1000px",
    "& video":{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        width: "calc(100vw - 550px)",
        height: "800px",
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        width: "calc(100vw)",
        height: "430px",
    },
}));

export const BusinessOffice = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: '195px',
    position: 'relative',
    "& .leftPanel": {
        width: '100%',
        position:'absolute',
        paddingLeft: '80px',
        bottom: '50px',
        left:'50px'
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
     "& .leftPanel": {
        bottom: '0px',
    },
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        flexDirection: 'column',
        gap: 0 ,
        "& .leftPanel": {
            width: '100%',
            position: 'unset',
            textAlign: 'center',
            order: 2,
            padding: '140px 52px',
             margin: '0'
        },
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        "& .leftPanel": {
            width: '100%',
            padding: '80px 52px'
        },
    },
}));


export const WhyPIGrid = styled(Grid)(({theme}) => ({
    position:'relative', 
     transition: 'all 0.8s ease',
    "& .bgImg":{
        borderRadius: '16px',
        height: '100%',
        width: '-webkit-fill-available'
    },
    "& .description":{
        display: 'none',
    },
    "&:hover .description":{
        display: 'block'
    },
    "& .WhyPIHoverEffect":{
        position: 'absolute',
        bottom: '0',
        backgroundColor: theme.palette.custom?.white1,
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        width: '-webkit-fill-available',
        // transition: 'all 0.2s linear',
        padding: '28px',
        transition: '0.5s ease',
        transform: 'translateY(2%)'
    },
    "&:hover .WhyPIHoverEffect":{
        transform: 'translateY(1px)',
        bottom: '0',
    },
    "& p":{
        transition: 'all .8s ease',
    }
}));

export const OurTeamGrid = styled(Grid)(({theme}) => ({
    position:'relative', 
    "& .bgImg":{
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        width: '-webkit-fill-available',
        height: 'auto'
    },
    "& .infromation":{
        bottom: 0,
        backgroundColor: theme.palette.custom?.black,
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        width: '-webkit-fill-available',
        padding: '16px 23px',
        marginTop: '-7px'
    }
}));

export const ChipUI = styled(Typography)(({theme}) => ({
        backgroundColor: theme.palette.custom?.grey_200,
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "10%",
        lineHeight: '14px',
        color: theme.palette.custom?.black,
        borderRadius: '100px',
        padding: "8px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
}));

export const ChipUI2 = styled(Typography)(({theme}) => ({
    backgroundColor: theme.palette.custom?.border2,
    fontWeight: 500,
    fontSize: "14px",
    letterSpacing: "10%",
    lineHeight: '14px',
    color: theme.palette.custom?.white3,
    borderRadius: '100px',
    padding: "8px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));


export const CraftingSolutionsBox = styled(Stack)(() => ({
    backgroundImage: `url('/assets/img/Services/servicebg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "1000px",
    position: 'relative',
    zIndex: 1,
    "& .bannershape":{
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
        opacity: 0.4,
        textAlign: 'center',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    "& .bannerText":{
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        padding: '0 24px',
        left: '50%',
        top: '50%',
        textAlign: 'center',
        width: '100%',
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        height: "600px",
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        "& .bannerText":{
            position: 'unset',
            transform: 'unset',
            width: '100%',
            margin: '0 20px',
            textAlign: 'center',
            padding: 0,
        },
        "& .bannershape":{
            width: '90%',
            height: '55%'
        }
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        height: "340px",
    },
}));


export const StyledCareersBanner = styled(Box)(() => ({
    backgroundImage: `url('/assets/img/careers/bg-img.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    height: "800px",
    position: 'relative',
    "&::before":{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.3,
    },
    "& .content":{
        alignItems: "center",
        justifyContent: "space-between",
        position: 'relative',
        height: '100%',
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        height: "600px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        height: "380px",
        "& .content":{
            width: '94%',
            margin: '0 auto',
            height: 'auto'
        },
        "&.careerBannerImg .content":{
            height: '380px'
        }
    },
}));

export const StyledCareerDetailsBanner = styled(Box)(() => ({
    backgroundImage: `url('/assets/img/careers/career-details-bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: '600px',
    position: 'relative',
    "&::before":{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.7,
    },
    "& .content":{
        alignItems: "center",
        justifyContent: "space-between",
        position: 'relative',
        height: '100%'
    }
}));

export const JobOpeningsPaper = styled(Link)(({theme}) => ({
    backgroundColor: theme.palette.custom?.black,
    padding: '40PX',
          textDecoration: 'unset',
          display: 'flex',
        justifyContent: 'space-between',
           alignItems: 'flex-start',
    "& .MuiTypography-root":{
        textDecoration: 'unset',
        transition: '0.4s ease'
    },
    "&:hover .jobTitle":{
        fontSize: '37px',
        transition: '0.4s ease',
        color:  theme.palette.custom?.orange_600,
    },
    "& .icon":{
        display: 'none',
        backgroundColor: theme.palette.custom?.orange_600,
        borderRadius: '100%',
        height: '60px',
        width: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        transition:'opacity 0.5s linear',
    },
    "&:hover .icon":{
        display: 'flex'
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        "& .icon":{
            height: '50px',
            width: '50px',
        },
    },
}));

export const AccordionUI = styled(Box)(({ theme }) => ({
    "& .MuiAccordion-root":{
        boxShadow: 'unset',
        backgroundColor: theme.palette.custom?.bgcolor,
    },
    "& .Accordion-title":{
        fontSize: '40px',
        lineHeight: '52px',
        fontWeight: 600,
        color: theme.palette.custom?.black,
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        "& .Accordion-title":{
            fontSize: '32px',
            lineHeight: '32px',
        },
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
        "& .Accordion-title":{
            fontSize: '27px',
            lineHeight: '32px',
        },
    },
    "& .MuiAccordionSummary-root":{
        borderBottom: '1px solid',
        borderColor: theme.palette.custom?.borderColor,
        marginTop: '50px'
    },
    "& .MuiSvgIcon-root":{
        width: '32px',
        height: '32px',
        color: theme.palette.custom?.black,
    },
    "& .MuiAccordion-root::before":{
        display: 'none'
    }
}));

export const FormUI = styled(Box)(({theme}) => ({
    "& .MuiInputLabel-formControl":{
        fontSize: '16px',
        lineHeight: '20.83px',
        fontWeight: 400,
        letterSpacing: '-0.32px',
        marginBottom: '8px',
        color: theme.palette.custom?.black,
        transform: 'unset',
    },
    "& .MuiInputBase-root::after": {
        borderColor: theme.palette.custom?.borderColor,
    },
    "& .MuiFormControl-root":{
        width: '100%'
    },
    "& .MuiInputBase-input":{
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 400,
        letterSpacing: '-0.32px',
        marginTop: '4px',
        color: theme.palette.custom?.black,
        transform: 'unset',
    },
    "&.blackTheme .MuiInputLabel-formControl .MuiTypography-root":{
        color: theme.palette.custom?.white6,
    },
    "&.blackTheme .MuiInputBase-input":{
        color: theme.palette.custom?.white5,
    },
}));

export const FileUpload = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    width: 'fit-content',
    cursor: 'pointer',
    "& .uploadResume":{
        borderBottom: '1px dashed',
        borderColor: theme.palette.custom?.black, 
        paddingBottom: '2px' ,
        transition: 'all 0.2s',
    },
    "& .addIcon":{
        width: '32px',
        height: '32px',
        borderRadius: '5px',
        transition: 'all 0.2s',
        backgroundColor: theme.palette.custom?.black, 
        color: theme.palette.custom?.bgcolor, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    "&:hover .MuiTypography-root":{
        color: theme.palette.custom?.orange_600, 
    },
    "&:hover .addIcon":{
        backgroundColor: theme.palette.custom?.orange_600, 
    },
    "&:hover .uploadResume":{
        borderColor: theme.palette.custom?.orange_600, 
    },
}));

export const AttachedFile = styled(Box)(({theme}) => ({
    width: 'fit-content',
    backgroundColor: theme.palette.custom?.black, 
    color: theme.palette.custom?.white1, 
    padding: '8px 24px',
    borderRadius: '100px',
}));

export const DrawerUI = styled(Drawer)(({theme}) => ({
  "& .MuiDrawer-paper":{
    width: '-webkit-fill-available',
    padding: '22px 16px',
    marginTop: '0px',
    boxShadow: 'unset !important',
    height: '100%'
  },
  "& .LinkUI":{
    color: theme.palette.custom?.grey_700, 
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '20px',
    textTransform: 'uppercase',
    marginRight: '40px',
    letterSpacing: '1.6px',
    textDecoration: 'unset',
    marginBottom: '46px'
  },
  "& .LinkUI.active": {
    color: theme.palette.custom?.orange_600,
},
"&.MuiDrawer-root ":{
    top: '0'
}

}));

export const CanvasContainer = styled(Box)(() => ({
    width: 'calc(100vw - 160px)',
    paddingBottom: '250px',
    margin: '0 80px',
    height: '810px',
    marginTop: '-80px',
    '& canvas': {
      height: '810px !important',
      width: '100% !important'
    },
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
        height: '750px',
        paddingBottom: '200px',
        '& canvas': {
            height: '750px !important',
        },
    },
    [`@media (max-width: ${breakpoints.tabletView})`]: {
        height: '450px',
        width: '100%',
        margin: 0,
        paddingBottom: '0px',
        '& canvas': {
            height: '450px !important',
        },
    },
}));

export const BannerBox = styled(Box)(()=>({
    transform: "translate(-50%, -50%)",
    position: "absolute",
    left: "50%",
    top: '55%',
}))