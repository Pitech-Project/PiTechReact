"use client";

import {
  Accordion,
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  LinearProgress,
  Link,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";

const breakpoints = {
  smallDesktop: "1536px",
  smallDesktop1: "1366px",
  mediumDesk: "1280px",
  tabletView: "1199px",
  md: "991px",
  md1: "899px",
  sm: "767px",
};

interface Props {
  contactform?: boolean;
  activebg?: "light" | "dark" | null;
}

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black,
  boxShadow: "unset",
  padding: "12px 80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& a": {
    fontWeight: 500,
    fontSize: "18px",
    letterSpacing: "10%",
    lineHeight: "20px",
    color: theme.palette.custom?.grey_700,
  },
  "div.menus .LinkUI.active": {
    position: "relative",
  },
  "div.menus .LinkUI.active::before, div.menus .LinkUI:hover::before": {
    width: "6px",
    height: "6px",
    background: "#f7941e",
    transition: "all 0.2s ease-in-out",
    position: "absolute",
    content: "''",
    bottom: "-9px",
    left: "50%",
  },
  "div .LinkUI:hover": {
    transition: "none",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    "&.MuiTypography-root.smallResWhiteBtn": {
      borderColor: theme.palette.custom?.white2,
      color: theme.palette.custom?.white2,
    },
    padding: "11px 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "11px 32px",
  },
}));

export const OutlineBtn = styled(Link, {
  shouldForwardProp: (prop) => prop !== "transformup",
})<Props>(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.custom?.black,
  borderRadius: "100px",
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "14px",
  letterSpacing: "1.6px",
  color: theme.palette.custom?.black,
  textDecoration: "unset",
  width: "max-content",
  transition: "0.5s",
  height: "48px",
  textTransform: "uppercase",
  "&.aboutBtn": {
    marginTop: "54px",
  },
  cursor: "pointer",
  "& .MuiSvgIcon-root": {
    width: "18px",
    transition: "0.5s",
    marginLeft: "16px",
  },

  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
    color: theme.palette.custom?.black,
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "12px",
    lineHeight: "12px",
    "&.aboutBtn": {
      marginTop: "16px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "&.aboutBtn": {
      marginTop: "20px",
    },
  },
}));

export const OutlineBtn1 = styled(Button)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.custom?.black,
  borderRadius: "100px",
  padding: "12px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "14px",
  letterSpacing: "1.6px",
  color: theme.palette.custom?.black,
  textDecoration: "unset",
  width: "max-content",
  transition: "0.5s",
  height: "48px",
  textTransform: "uppercase",
  cursor: "pointer",
  "& .MuiSvgIcon-root": {
    width: "18px",
    transition: "0.5s",
  },
  "&:hover .MuiSvgIcon-root": {
    transform: "translate(6px, -3px)",
  },
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
    color: theme.palette.custom?.black,
  },
  "&.backarrow:hover .MuiSvgIcon-root": {
    transform: "translate(-8px, 0px) rotate(0deg)",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "12px",
    lineHeight: "12px",
    "&.MuiTypography-root.smallResWhiteBtn": {
      borderColor: theme.palette.custom?.white2,
      color: theme.palette.custom?.white2,
    },
  },
}));

export const OutlineWhiteBtn = styled(Link, {
  shouldForwardProp: (prop) => prop !== "transformup",
})<Props>(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.custom?.white2,
  borderRadius: "100px",
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  letterSpacing: "1.6px",
  justifyContent: "space-between",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "14px",
  color: theme.palette.custom?.white2,
  textDecoration: "unset",
  transition: "0.5s",
  width: "max-content",
  height: "48px",
  textTransform: "uppercase",
  cursor: "pointer",
  "& .MuiSvgIcon-root": {
    width: "18px",
    transition: "0.5s",
    marginLeft: "16px",
  },

  "&:hover .MuiSvgIcon-root path": {
    fill: theme.palette.custom?.black,
  },

  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
    color: theme.palette.custom?.black,
  },
  "&.backarrow .MuiSvgIcon-root": {
    transform: "rotate(180deg)",
    marginRight: "16px",
    marginLeft: 0,
  },
}));

export const OutlineWhiteBtn1 = styled(Button)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.custom?.white2,
  borderRadius: "100px",
  padding: "12px 24px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "14px",
  letterSpacing: "1.6px",
  color: theme.palette.custom?.white2,
  textDecoration: "unset",
  transition: "0.5s",
  width: "max-content",
  textTransform: "uppercase",
  cursor: "pointer",
  "& .MuiSvgIcon-root": {
    width: "18px",
    transition: "0.5s",
    marginLeft: "16px",
  },
  "&:hover .MuiSvgIcon-root path": {
    fill: theme.palette.custom?.black,
  },
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
    color: theme.palette.custom?.black,
  },
}));

export const OutlineBtnYellow = styled(Link)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.custom?.orange_600,
  borderRadius: "100px",
  padding: "12px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: 500,
  fontSize: "14px !important",
  lineHeight: "14px !important",
  color: theme.palette.custom?.orange_600,
  textDecoration: "unset",
  letterSpacing: "0.4px",
  transition: "0.5s",
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
    color: theme.palette.custom?.black,
  },
}));

export const MenusItem = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "18px",
  letterSpacing: "0.3px",
  lineHeight: "20px",
  color: theme.palette.custom?.grey_700,
  textTransform: "uppercase",
  textDecoration: "unset",
  marginRight: "40px",
  transition: "0.5s",
  "&:hover, &.Selected": {
    color: theme.palette.custom?.orange_600,
  },
}));

export const FullStop = styled(Typography)(({ theme }) => ({
  height: "14px",
  width: "14px",
  backgroundColor: theme.palette.custom?.orange_600,
  marginLeft: "8px",
  display: "inline-block",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    height: "10px",
    width: "10px",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    height: "8px",
    width: "8px",
  },
}));

export const SubTypography = styled(Typography)(() => ({
  margin: "32px 0 80px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    margin: "24px 0 0px",
    "&.subTitleSpacing": {
      marginBottom: "32px",
      fontSize: "28px",
      lineHeight: "36px",
      marginTop: "24px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "24px 0 0px",
    "&.subTitleSpacing": {
      fontSize: "16px",
      lineHeight: "24px",
      marginTop: "16px",
    },
  },
}));

export const SmallFullStop = styled(Typography)(({ theme }) => ({
  height: "6px",
  width: "6px",
  backgroundColor: theme.palette.custom?.orange_600,
  display: "inline-block",
  marginLeft: "6px",
}));

export const TooSmallFullStop = styled(Typography)(({ theme }) => ({
  height: "5px",
  width: "5px",
  backgroundColor: theme.palette.custom?.orange_600,
  display: "inline-block",
  marginLeft: "3px",
}));

export const CountOuterBox = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  gap: "100px",
  background: theme.palette.custom?.black,
  borderRadius: "16px",
  padding: "36px 98px",
  color: theme.palette.custom?.white1,
  width: "max-content",
  marginTop: "-75px",
  position: "absolute",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginTop: "-75px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "16px 48px 28px",
    marginTop: "-55px",
    " .CountLabel": {
      fontSize: "13px !important",
      lineHeight: "12px !important",
      letterSpacing: "1.3px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    background: theme.palette.custom?.black,
    padding: "28px 0px",
    margin: "0 32px 0px",
    gap: "48px",
    width: "100%",
    marginTop: "-85px",
    position: "unset",
  },
}));

export const ServiceGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black,
  border: `1px solid ${theme.palette.custom?.borderColor1}`,
  borderRadius: "12px",
  padding: "28px 40px",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    border: `1px solid ${theme.palette.custom?.white2}`,
  },
  "&:hover .onHoverArrow": {
    visibility: "visible",
  },
  "& .servicesName": {
    transition: "all 0.3s ease-in-out",
  },
  "&:hover .servicesName": {
    color: theme.palette.custom?.orange_600,
  },
  "& a": {
    textDecoration: "unset",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    padding: "20px",
    "& img": {
      height: "100px",
      width: "auto",
    },
  },
}));

export const IndustriesGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black,
  position: "relative",
  border: `1px solid ${theme.palette.custom?.borderColor1}`,
  borderRadius: "12px",
  padding: "92px 32px 28px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    border: `1px solid ${theme.palette.custom?.white2}`,
  },
  "dotlottie-player": {
    height: "110px !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    padding: "28px 30px",
  },
}));

export const OuterGrid = styled(Grid)(() => ({
  padding: "280px 0 160px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "220px 0 160px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "140px 0px",
    margin: "0 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 0px",
    margin: "0 32px",
  },
}));

export const OuterGrid1 = styled(Grid)(() => ({
  padding: "280px 0 160px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "220px 0 160px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "140px 0px",
    margin: "0 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 0px",
    margin: "0 32px",
  },
}));

export const OuterGrid2 = styled(Grid)(() => ({
  padding: "140px 0px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "120px 0px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "80px 0px",
    margin: "0 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "0 32px",
  },
}));

export const OuterGrid4 = styled(Grid)(() => ({
  padding: "116px 0px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "116px 0",
    margin: "0 80px 0 26px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "80px 0px",
    margin: "0 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "0 32px",
  },
}));

export const OuterGrid5 = styled(Grid)(() => ({
  padding: "140px 0px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "120px 0px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "120px 84px 80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 32px 20px",
  },
}));

export const OuterSection = styled(Stack)(() => ({
  width: "1160px",
  padding: "120px 0px",
  margin: "0 auto",
  gap: "100px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "auto",
    margin: "0 100px",
    padding: "100px 0px",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    width: "auto",
    padding: "80px 0px",
    margin: "0 32px",
    gap: "80px",
    "& .testimonial-outer": {
      padding: "80px 0px 40px !important",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "0 32px",
  },
}));

export const PrevNext = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  flexDirection: "row",
  position: "absolute",
  right: "80px",
  top: "170px",
  "&.OurWorkPrevNext": {
    position: "relative",
    right: "0px",
    top: "0px",
  },
  "& .MuiButton-root": {
    borderRadius: "100px",
    height: "68px",
    minHeight: "68px",
    width: "68px",
    minWidth: "68px",
    border: "1px solid",
    borderColor: theme.palette.custom?.white2,
    backgroundColor: "transparent",
    margin: 0,
    position: "unset",
    transition: "0.5s",
  },
  "& .MuiButton-root:hover": {
    borderColor: theme.palette.custom?.orange_600,
  },
  "&.OurWorkPrevNext .MuiButton-root:hover": {
    backgroundColor: theme.palette.custom?.orange_600,
    borderColor: theme.palette.custom?.orange_600,
  },
  "& .MuiButton-root.swiper-button-prev": {
    marginRight: "16px",
  },
  "& .MuiButton-root svg": {
    width: "24px",
    transition: "0.5s",
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
  "&.OurWorkPrevNext .MuiButton-root svg path": {
    fill: theme.palette.custom?.black,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    right: "20px",
    top: "180px",
    "&.OurWorkPrevNext": {
      right: "32px",
    },
    "& .MuiButton-root": {
      height: "48px",
      minHeight: "48px",
      width: "48px",
      minWidth: "48px",
    },
  },
}));

export const OwlCarouselBox = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black2,
  padding: "24px 28px",
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
  justifyContent: "space-between",
  textAlign: "left",
  flexDirection: "row",
  alignItems: "center",
  "& br": {
    display: "none",
  },
}));

export const OwlCarouselOuterBox = styled(Stack)(({ theme }) => ({
  "& .owl-nav": {
    position: "absolute",
    right: "80px",
    top: "-200px",
    display: "flex",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      "& .owl-nav": {
        right: "0px",
      },
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
      position: "unset",
      transition: "0.5s",
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
      transition: "0.5s",
    },
    "& .owl-prev": {
      marginRight: "16px",
    },
    "& .MuiButton-root svg": {
      width: "24px",
    },
    "& .nav-btn:hover svg, .nav-btn:hover svg path": {
      fill: theme.palette.custom?.orange_600,
      transition: "0.5s",
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
    "& .owl-nav": {
      right: 0,
      top: "-110px",
    },
  },
}));

export const TestimonialBox = styled(Box)(({ theme }) => ({
  "& .swiper-wrapper": {
    alignItems: "center",
  },
  "& .testimonial-boxUI": {
    backgroundColor: theme.palette.custom?.black5,
    padding: "36px 32px",
    borderRadius: "8px",
  },

  "& .swiper-slide-next .MuiTypography-body_8": {
    fontSize: "24px",
    lineHeight: "32px",
    color: theme.palette.custom?.white2,
  },
  "& .swiper-slide-active, & .swiper-slide-next ~ .swiper-slide": {
    transform: "scale(0.8)",
    transitionDuration: "0.3s",
    opacity: "0.6",
  },
  "&.OurWorkCarousel .swiper-slide-active, &.OurWorkCarousel .swiper-slide-next ~ .swiper-slide":
    {
      transform: "scale(1) !important",
      opacity: "1 !important",
    },
  "&.testimonial-slider .swiper-slide-next": {
    border: "1px solid",
    borderColor: theme.palette.custom?.orange_600,
    borderRadius: "6px",
  },
  // '& .swiper-slide-next .MuiTypography-body_8':{
  //   color: theme.palette.custom?.white2,
  // },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .swiper-slide-next .MuiTypography-body_8": {
      fontSize: "18px",
      lineHeight: "30px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .swiper-slide-active, & .swiper-slide-next ~ .swiper-slide": {
      transform: "scale(1)",
      opacity: "1",
    },
    "& .testimonial-boxUI": {
      margin: "0 20px",
      marginTop: "110px",
    },
  },
}));

export const TestimonialBoxNew = styled(Box)(({ theme }) => ({
  "& .swiper-wrapper": {
    alignItems: "center",
  },
  "& .testimonial-boxUI": {
    backgroundColor: theme.palette.custom?.black5,
    padding: "36px 32px",
    borderRadius: "8px",
  },
  "& .swiper-slide-active .MuiTypography-body_8": {
    fontSize: "24px",
    lineHeight: "32px",
    color: theme.palette.custom?.white2,
  },
  "& .swiper-slide-prev .testimonialName, & .swiper-slide-next .testimonialName, & .swiper-slide-prev .testimonialRole, & .swiper-slide-next .testimonialRole":
    {
      color: theme.palette.custom?.grey_700,
      fontSize: "13px",
      lineHeight: "18px",
    },
  "& .swiper-slide-active .testimonialName": {
    color: theme.palette.custom?.orange_600,
  },
  "& .swiper-slide-prev .testimonial-boxUI, & .swiper-slide-next .testimonial-boxUI":
    {
      border: "1px solid",
      borderColor: theme.palette.custom?.borderColor1,
      borderRadius: "6px",
    },
  "& .swiper-slide-prev .MuiTypography-body_8, & .swiper-slide-next .MuiTypography-body_8":
    {
      fontSize: "19px",
      lineHeight: "28px",
      color: theme.palette.custom?.white3,
    },
  "&.testimonial-slider .swiper-slide-active .testimonial-boxUI": {
    border: "1px solid",
    borderColor: theme.palette.custom?.orange_600,
    borderRadius: "6px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    "& .swiper-slide-active .MuiTypography-body_8": {
      fontSize: "19px",
      lineHeight: "28px",
      color: theme.palette.custom?.white2,
    },
    "& .testimonial-heading": {
      width: "50%",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .testimonial-boxUI": {
      margin: "0 20px",
      padding: "32px 30px",
    },
    "& .testimonial-heading": {
      width: "100%",
    },
    "& .swiper-slide-active .MuiTypography-body_8": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .swiper-slide-active .testimonialRole, & .swiper-slide-active .testimonialName ":
      {
        fontSize: "14px",
        lineHeight: "16px",
      },
    "& .swiper-wrapper": {
      alignItems: "flex-start",
    },
    "&.testimonial-slider": {
      paddingBottom: 0,
    },
  },
}));

const commonDirectionLink = {
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s ease",
  border: "1px solid",
  cursor: "pointer",
  "& svg": {
    transition: "all 0.5s ease",
    width: "18px !important",
  },
};

export const DirectionLink = styled(Link)(({ theme }) => ({
  ...commonDirectionLink,
  padding: "8px",
  borderColor: theme.palette.custom?.white2,
  height: "30px",
  width: "30px",
  "&:hover svg, &:hover svg path": {
    color: theme.palette.custom?.black,
    fill: theme.palette.custom?.black,
  },
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    height: "22px",
    width: "22px",
  },
}));

export const DirectionLinkOrange = styled(Link)(({ theme }) => ({
  ...commonDirectionLink,
  borderColor: theme.palette.custom?.orange_600,
  backgroundColor: theme.palette.custom?.orange_600,
  height: 52,
  width: 52,
}));

export const FooterOuterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black4,
  padding: "40px 80px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "54px 80px 40px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "54px 32px 14px 32px",
  },
}));

export const LinkUI = styled(Link)(({ theme }) => ({
  fontSize: "19px",
  fontWeight: "500",
  lineHeight: "28px",
  color: theme.palette.custom?.white3,
  textDecoration: "unset",
  display: "block",
  marginBottom: "24px",
  wordBreak: "break-word",
  cursor: "pointer",
  width: "max-content",
  "&:hover": {
    color: theme.palette.custom?.white2,
  },
  "&.active": {
    color: theme.palette.custom?.white2,
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginBottom: "20px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "20px",
    fontSize: "14px",
    lineHeight: "20px",
  },
}));

export const LinkUI1 = styled(Link)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "18px",
  color: theme.palette.custom?.white5,
  textDecorationColor: theme.palette.custom?.white5,
  "&:hover": {
    color: theme.palette.custom?.orange_600,
    textDecorationColor: theme.palette.custom?.orange_600,
  },
}));

export const SocialMediaIcons = styled(Link)(({ theme }) => ({
  color: theme.palette.custom?.white3,
  display: "block",
  marginTop: "32px",
  gap: "24px",
  flexDirection: "row",
  alignItems: "center",
  "& svg:hover": {
    color: theme.palette.custom?.white2,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginTop: "16px",
  },
}));

export const ScrollTopTop = styled(Box)<Props>(({ theme, activebg }) => ({
  padding: "23px 14px",
  border: activebg === "light" ? "1px solid #1b1b1b" : "1px solid #bab9b9",
  backgroundColor:
    activebg === "light" ? theme.palette.custom?.white2 : undefined,
  borderRadius: "100px",
  transition: "0.5s",
  cursor: "pointer",
  position: "fixed",
  right: "35px",
  bottom: "35px",
  zIndex: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    transition: "all 0.5s ease",
    width: "13px !important",
    filter: activebg === "light" ? "brightness(0)" : undefined,
  },
  // '& svg path':{
  //   filter:
  // },
  "&:hover svg path": {
    fill: theme.palette.custom?.black,
  },
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
  },
}));

export const BusinessOfficeImg = styled(Box)(() => ({
  backgroundImage: `url('/assets/img/Team_Business_Office.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "1000px",
  "&.alwaysKeepSimple": {
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
  "& video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
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

export const BusinessOffice = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "195px",
  position: "relative",
  backgroundColor: theme.palette.custom?.black4,
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    flexDirection: "column",
    gap: 0,
  },
}));

export const LeftPanel = styled(Box)(() => ({
  width: "100%",
  position: "absolute",
  paddingLeft: "80px",
  bottom: "80px",
  left: "50px",
  "& .leftPanel": {
    width: "100%",
    position: "absolute",
    paddingLeft: "80px",
    bottom: "50px",
    left: "50px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    bottom: "25px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "100%",
    position: "unset",
    order: 2,
    padding: "32px 84px 80px",
    margin: "0 auto",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    width: "100%",
    padding: "0px 32px",
    marginTop: "-80px",
    marginBottom: "140px",
  },
}));

export const WhyPIGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  transition: "all 0.8s ease",
  "& .bgImg": {
    borderRadius: "16px",
    height: "100%",
    width: "-webkit-fill-available",
  },
  "& .description": {
    display: "none",
  },
  "&:hover .description": {
    display: "block",
  },
  "& .WhyPIHoverEffect": {
    position: "absolute",
    bottom: "0",
    backgroundColor: theme.palette.custom?.white1,
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    width: "-webkit-fill-available",
    padding: "28px",
    transition: "0.5s ease",
    transform: "translateY(2%)",
  },
  "&:hover .WhyPIHoverEffect": {
    transform: "translateY(1px)",
    bottom: "0",
  },
  "& p": {
    transition: "all .8s ease",
  },
}));

export const OurTeamGrid = styled(Grid)(() => ({
  position: "relative",
  "& .bgImg": {
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    width: "-webkit-fill-available",
    height: "auto",
  },
}));

export const OurTeamUI = styled(Box)(({ theme }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.custom?.borderColor1}`,
  transition: "0.4s ease",
  borderRadius: "16px",
  "& .bgImg": {
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    width: "-webkit-fill-available",
    height: "auto",
  },
  "&:hover": {
    border: `1px solid ${theme.palette.custom?.white2}`,
  },
  [`@media (max-width: ${breakpoints.md1})`]: {
    height: "100% !important",
  },
}));

export const Infromation = styled(Stack)(({ theme }) => ({
  bottom: 0,
  backgroundColor: theme.palette.custom?.black,
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
  width: "-webkit-fill-available",
  padding: "16px 32px 20px",
  marginTop: "-7px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    padding: "16px 20px 20px",
  },
}));

export const ChipUI = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.grey_200,
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "10%",
  lineHeight: "14px",
  color: theme.palette.custom?.black,
  borderRadius: "100px",
  padding: "8px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ChipUI2 = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.borderColor1,
  fontWeight: 500,
  fontSize: "19px",
  letterSpacing: "10%",
  lineHeight: "28px",
  color: theme.palette.custom?.grey_700,
  borderRadius: "100px",
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "36px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "16px",
    lineHeight: "26px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "19px",
    lineHeight: "28px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "14px",
    lineHeight: "20px",
    height: "28px",
  },
}));

export const StyledCareersBanner = styled(Box)(() => ({
  backgroundImage: `url('/assets/img/careers/bg-img-1.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  height: "800px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.3,
  },
  "& .content": {
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    height: "100%",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    height: "600px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    height: "380px",
    "& .content": {
      width: "94%",
      margin: "0 auto",
      height: "auto",
    },
    "&.careerBannerImg .content": {
      height: "380px",
    },
  },
}));

export const StyledCareerDetailsBanner = styled(Box)(() => ({
  backgroundImage: `url('/assets/img/careers/career-details-bg.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "600px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.7,
  },
  "& .content": {
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    height: "100%",
  },
}));

export const JobOpeningsPaper = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black,
  padding: "32px 40px",
  textDecoration: "unset",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  border: `1px solid ${theme.palette.custom?.borderColor1}`,
  borderRadius: "4px",
  cursor: "pointer",
  "& .MuiTypography-root": {
    textDecoration: "unset",
    transition: "0.4s ease",
  },
  "&:hover .jobTitle": {
    // fontSize: "37px",
    transition: "0.4s ease",
    color: theme.palette.custom?.orange_600,
  },
  "& .icon": {
    display: "none",
    backgroundColor: theme.palette.custom?.orange_600,
    borderRadius: "100%",
    height: "60px",
    width: "60px",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.5s linear",
  },
  "&:hover .icon": {
    display: "flex",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .icon": {
      height: "50px",
      width: "50px",
    },
  },
}));

export const AccordionUI = styled(Box)(({ theme }) => ({
  "& .MuiAccordion-root": {
    boxShadow: "unset",
    backgroundColor: theme.palette.custom?.black,
  },
  "& .Accordion-title": {
    fontSize: "38px",
    lineHeight: "44px",
    fontWeight: 500,
    color: theme.palette.custom?.white2,
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .Accordion-title": {
      fontSize: "32px",
      lineHeight: "32px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .Accordion-title": {
      fontSize: "27px",
      lineHeight: "32px",
    },
  },
  "& .MuiAccordionSummary-root": {
    borderBottom: "1px solid",
    borderColor: theme.palette.custom?.borderColor,
    marginTop: "40px",
  },
  "& .MuiSvgIcon-root": {
    width: "32px",
    height: "32px",
    color: theme.palette.custom?.white2,
  },
  "& .MuiAccordion-root::before": {
    display: "none",
  },
}));

export const AccordionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  lineHeight: "52px",
  fontWeight: 600,
  color: theme.palette.custom?.white2,
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "32px",
    lineHeight: "32px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "27px",
    lineHeight: "32px",
  },
}));

export const FormUI = styled(Box)<Props>(({ theme, contactform }) => ({
  "& .MuiInputLabel-formControl": {
    fontSize: "16px",
    lineHeight: "20.83px",
    fontWeight: 400,
    letterSpacing: "-0.32px",
    marginBottom: "8px",
    color: theme.palette.custom?.black,
    transform: "unset",
  },
  "& .MuiInputBase-root::after": {
    borderColor: theme.palette.custom?.white3,
  },
  "& .MuiInputBase-root:focus-within::after, & .MuiInputBase-root:focus::after, & .MuiInputBase-root:hover::after":
    {
      borderColor: theme.palette.custom?.orange_600,
    },
  "& .MuiFormControl-root": {
    width: "100%",
  },
  "& .MuiInputBase-input": {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 400,
    letterSpacing: "-0.32px",
    marginTop: "4px",
    color: theme.palette.custom?.black,
    transform: "unset",
  },
  "&.blackTheme .MuiInputLabel-formControl .MuiTypography-root": {
    color: theme.palette.custom?.white3,
    fontSize: "19px",
    lineHeight: "28px",
    fontWeight: 400,
  },
  "&.blackTheme .MuiInputBase-input": {
    color: theme.palette.custom?.white2,
    fontSize: "24px",
    lineHeight: "31.25px",
    fontWeight: 400,
    marginTop: "8px",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: theme.palette.custom?.red1,
    fontSize: "14px",
    fontWeight: 500,
    marginTop: "4px",
    fontStyle: "italic",
  },
  "& .MuiInputBase-root:focus-visible::after, .MuiInputBase-root:focus::after":
    {
      borderColor: theme.palette.custom?.orange_600,
    },
  "& .MuiFormControl-root:hover .MuiInputLabel-formControl .MuiTypography-root":
    {
      color: contactform ? theme.palette.custom?.white : "",
    },
}));

export const FileUpload = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  width: "fit-content",
  cursor: "pointer",
  "& .uploadResume": {
    borderBottom: "1px dashed",
    borderColor: theme.palette.custom?.white2,
    paddingBottom: "2px",
    transition: "all 0.2s",
  },
  "& .addIcon": {
    width: "32px",
    height: "32px",
    borderRadius: "5px",
    transition: "all 0.2s",
    backgroundColor: theme.palette.custom?.black,
    color: theme.palette.custom?.bgcolor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "&:hover .MuiTypography-root": {
    color: theme.palette.custom?.orange_600,
  },
  "&:hover .addIcon": {
    backgroundColor: theme.palette.custom?.orange_600,
  },
  "&:hover .uploadResume": {
    borderColor: theme.palette.custom?.orange_600,
  },
}));

export const AttachedFile = styled(Box)(({ theme }) => ({
  width: "fit-content",
  backgroundColor: theme.palette.custom?.black,
  color: theme.palette.custom?.white1,
  padding: "8px 24px",
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
}));

export const DrawerUI = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "-webkit-fill-available",
    padding: "22px 84px",
    marginTop: "0px",
    boxShadow: "unset !important",
    height: "100%",
    backgroundColor: theme.palette.custom?.black,
  },
  "& .LinkUI": {
    color: theme.palette.custom?.grey_700,
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "20px",
    textTransform: "uppercase",
    marginRight: "40px",
    letterSpacing: "1.6px",
    textDecoration: "unset",
    marginBottom: "46px",
    position: "relative",
  },
  "& .LinkUI.active": {
    color: theme.palette.custom?.orange_600,
  },
  "&.MuiDrawer-root ": {
    top: "0",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .MuiDrawer-paper": {
      padding: "22px 32px",
    },
  },
}));

export const CanvasContainer = styled(Box)(() => ({
  width: "calc(100vw - 160px)",
  paddingBottom: "250px",
  paddingTop: "88px",
  margin: "0 80px",
  height: "100%",
  marginTop: "-80px",
  "& canvas": {
    height: "810px !important",
    width: "100% !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    paddingBottom: "200px",
    "& canvas": {
      height: "610px !important",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "100%",
    margin: 0,
    paddingBottom: "0px",
    "& canvas": {
      height: "450px !important",
    },
  },
}));

export const BannerBox = styled(Box)(() => ({
  transform: "translate(-50%, -50%)",
  position: "absolute",
  left: "50%",
  top: "55%",
  [`@media (max-width: ${breakpoints.sm})`]: {
    width: "calc(100% - 32px)",
  },
}));

export const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: "transparent",
  height: 5,
  position: "absolute",
  bottom: "0",
  width: "100%",
  "& .MuiLinearProgress-bar1": {
    backgroundColor: theme.palette.custom?.orange_600,
  },
}));

export const LoaderWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  backgroundColor: theme.palette.custom?.black,
  zIndex: 9999,
}));

export const CountTypography = styled(Typography)(({ theme }) => ({
  position: "absolute",
  left: "53px",
  bottom: 0,
  width: "100%",
  fontWeight: 700,
  fontSize: "325px",
  marginTop: "-1.33em",
  color: theme.palette.custom?.white2,
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "160px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "100px",
    left: "32px",
    textAlign: "start",
    position: "absolute",
  },
}));

export const SubTitlemarginBottom = styled(Stack)(() => ({
  marginBottom: "120px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginBottom: "80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "60px",
  },
}));

export const SubTitlemarginBottom1 = styled(Typography)(() => ({
  marginBottom: "120px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginBottom: "80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "60px",
  },
}));

export const SubTitlemarginBottom2 = styled(Stack)(() => ({
  marginBottom: "84px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginBottom: "80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "60px",
  },
}));

export const OverlayTypography = styled(Typography)(() => ({
  position: "relative",
  zIndex: 10,
  padding: "0 8px",
  width: "max-content",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    zIndex: -1,
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "auto",
  },
}));

export const WorkOffice = styled(Box)(() => ({
  padding: "0 60px",
  "& img": {
    maxWidth: "100%",
    height: "auto",
    borderRadius: 16,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "0px 16px",
    marginBottom: 16,
  },
}));

export const Copyright = styled(Typography)(({ theme }) => ({
  display: "block",
  padding: "32px 0",
  marginTop: "44px",
  fontSize: "19px",
  lineHeight: "28px",
  fontWeight: 400,
  color: theme.palette.custom?.white3,
  borderTop: `1px solid ${theme.palette.custom?.black3}`,
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

export const FooterLink = styled(Stack)(() => ({
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 24,
  alignItems: "center",
  paddingLeft: "20px",
}));

export const BannerText = styled(Typography)(() => ({
  margin: "50px 0 40px",
  width: "100%",
  display: "block",
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginTop: "32px",
  },
}));

export const FooterLeftPanel = styled(Stack)(() => ({
  flexDirection: "row",
  gap: "40px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    flexDirection: "column",
    gap: "0px",
  },
}));

export const FooterRightPanel = styled(Stack)(() => ({
  flexDirection: "row",
  gap: "108px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    gap: "36px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    flexDirection: "column",
    gap: "0px",
  },
}));

export const FooterUI = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "40px",
  "& .FooterLink": {
    fontSize: "19px",
    fontWeight: "500",
    lineHeight: "28px",
    color: theme.palette.custom?.white3,
    textDecoration: "unset",
    display: "block",
    marginBottom: "24px",
    wordBreak: "break-word",
    cursor: "pointer",
    width: "max-content",
    "&:hover": {
      color: theme.palette.custom?.white2,
    },
    "&.active": {
      color: theme.palette.custom?.white2,
    },
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .FooterLink": {
      marginBottom: "20px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "16px",
    flexDirection: "column",
    gap: "0",
    "& .FooterLink": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
}));

export const AboutImage = styled(Box)(() => ({
  backgroundImage: `url('/assets/img/about-us/about-newoffice.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "auto",
  height: "100%",
  marginLeft: "40px",
  borderRadius: "16px",
}));

export const FooterTopSpacing = styled(Box)(({ theme }) => ({
  paddingTop: "100px",
  backgroundColor: theme.palette.custom?.black,
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    paddingTop: "0",
  },
}));

export const IconButtonUI = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.custom?.orange_600}`,
  backgroundColor: theme.palette.custom?.orange_600,
  borderRadius: "100px",
  height: "48px",
  width: "48px",
  top: "32px",
  right: "40px",
  visibility: "hidden",
  transition: "all 0.3s ease-in-out",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const DotUI = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.white3,
  borderRadius: "100px",
  height: "5px",
  width: "5px",
  minWidth: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "10px",
}));

export const TellUsTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "64px",
  fontSize: "38px",
  lineHeight: "44px",
  fontWeight: 500,
  color: theme.palette.custom?.white2,
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "28px",
    lineHeight: "32px",
  },
}));

export const AccordionParent = styled(Accordion)(({ theme }) => ({
  "& .MuiAccordion-heading .MuiAccordionSummary-root": {
    border: "unset",
    padding: 0,
  },
  "& .MuiAccordionSummary-content": {
    marginBottom: "0 !important",
  },
  "& .MuiAccordionDetails-root": {
    padding: "52px 0 0 8px",
  },
  "& .MuiAccordion-heading:hover .MuiAccordionSummary-content .MuiTypography-root":
    {
      color: theme.palette.custom?.orange_600,
    },
  "&  .MuiAccordion-heading:hover .hideExpand .MuiAccordionSummary-content .MuiTypography-root":
    {
      color: theme.palette.custom?.white2,
      cursor: "default",
    },
  "& .MuiAccordion-heading:hover .MuiAccordionSummary-expandIconWrapper div svg":
    {
      filter: "invert(1)",
    },
  "& .MuiAccordion-heading:hover .MuiAccordionSummary-expandIconWrapper div": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
  },
}));

export const SVGIconUI = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.custom?.white2}`,
  height: "48px",
  width: "48px",
  borderRadius: "100%",
  transition: "all 0.3s ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const AppServices = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  textAlign: "left",
  textDecoration: "unset",
  "&:hover .MuiTypography-root": {
    color: theme.palette.custom?.orange_600,
  },
}));

export const WebServicesGrid = styled(Grid)(() => ({
  // flexDirection: "row",
  // alignItems: "center",
  // gap: "48px",
  // [`@media (max-width: ${breakpoints.smallDesktop})`]: {
  //   gap: "16px",
  // },
}));

export const CaseBox = styled(Box)(({ theme }) => ({
  padding: "110px 132px 72px 132px",
  position: "relative",
  "& .MuiLink-root": {
    textDecoration: "none",
  },
  "&:hover .MuiLink-root .MuiTypography-font_38": {
    color: theme.palette.custom?.orange_600,
  },
  "&:hover .MuiBox-root": {
    visibility: "visible",
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    padding: "60px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    padding: "60px 60px 0px 60px",
    "& .MuiTypography-body_4_600": {
      fontSize: "16px !important",
      lineHeight: "18px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "60px 40px",
  },
}));

export const CaseImage = styled(Image)({
  height: "380px !important",
  width: "auto !important",
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    height: "330px !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    height: "255px !important",
  },
});

export const OnHoverArrowBox = styled(Box)(({ theme })=>({
  position: "absolute",
  top: 56,
  right: 56,
  transition: "all 0s ease-in-out",
  visibility: "hidden",
  borderColor: theme.palette.custom?.orange_600,
  backgroundColor: theme.palette.custom?.orange_600,
  height: 52,
  width: 52,
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  cursor: "pointer",
  "& svg": {
    width: "18px !important",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    top: 36,
    right: 26,
  },
}));

const CommonChip = {
  padding: "4px 20px",
  fontSize: 19,
  lineHeight: "28px",
  fontWeight: 500,
  borderRadius: "200px",
  marginRight: 12,
  marginBottom: 12,
  display: "inline-block",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "16px",
    lineHeight: "26px",
    padding: "6px 20px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "15px",
    lineHeight: "20px",
  },
};

export const WhiteChip = styled(Typography)(({ theme }) => ({
  ...CommonChip,
  backgroundColor: theme.palette.custom?.grey_200,
  color: theme.palette.custom?.white4,
}));

export const GreyChip = styled(Typography)(({ theme }) => ({
  ...CommonChip,
  backgroundColor: theme.palette.custom?.borderColor1,
  color: theme.palette.custom?.grey_700,
}));

export const OrangeChip = styled(Typography)({
  ...CommonChip,
  backgroundColor: "#FCDBC6",
  color: "#6E420D",
});

export const ImageBox = styled(Box)({
  position: "relative",
  top: "-17px",
  right: "-70px",
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    position: "initial",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& img": {
      height: "200px !important",
    },
  },
});

export const TopBox = styled(Box)({
  paddingTop: 288,
  "& .MuiTypography-body_6": {
    marginTop: 80,
    marginBottom: 12,
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "268px 84px 60px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "200px 32px 90px",
    "& .MuiTypography-body_6": {
      marginTop: 40,
    },
  },
});

export const LaptopImage = styled(Image)({
  marginTop: -65,
  width: "100% !important",
  height: "auto !important",
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginTop: 0,
  },
});

export const ProjectInf = styled(Box)({
  padding: "60px 0 120px",
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "40px 0 60px",
  },
});

export const ChallengeBox = styled(Box)(({ theme }) => ({
  padding: "150px 0 100px",
  backgroundColor: theme.palette.custom?.black2,
  "& .MuiListItem-root": {
    color: theme.palette.custom?.white2,
    display: "list-item",
    textIndent: "-23px",
    padding: 0,
    paddingLeft: "36px",
  },
  "& .MuiList-root": {
    listStyleType: "disc",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "140px 84px 100px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "60px 0px",
    "& .MuiList-root": {
      marginBottom: 40,
    },
  },
}));

export const SolutionBox = styled(Box)({
  padding: "120px 0",
  "& .MuiListItem-root": {
    color: "#68686A",
    display: "list-item",
    textIndent: "-23px",
    padding: 0,
    paddingLeft: "36px",
    paddingBottom: "5px",
  },
  "& .MuiList-root": {
    listStyleType: "disc",
    paddingTop: 0.5,
    paddingBottom: 0,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "60px 0px",
  },
});

export const FeatureGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  columnGap: "40px",
  marginTop: "40px",
  marginBottom: "40px",
  [`@media (max-width: ${breakpoints.sm})`]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
  },
});

export const ImpactGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "20px",
  marginTop: "40px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    gridTemplateColumns: "repeat(auto-fill, 200px)",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const ImpactBox = styled(Box)({
  padding: "80px 80px 80px 0",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "60px 0",
  },
});

export const GridBox = styled(Box)(({ theme }) => ({
  padding: "80px 28px 32px",
  border: "1px solid",
  borderColor: theme.palette.custom?.orange_600,
  borderRadius: "8px",
}));

export const GetBox = styled(Box)(({ theme }) => ({
  padding: "120px 80px 80px",
  position: "relative",
  backgroundColor: theme.palette.custom?.black2,
  "& .MuiTypography-mediumFont": {
    marginTop: 20,
    marginBottom: 60,
  },
  "& .MuiLink-root.smallResWhiteBtn": {
    display: "inline-block",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "60px 16px",
  },
}));

export const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 0,
  position: "absolute",
  width: "91%",
  left: "80px",
  top: "50%",
  textTransform: "uppercase",
  "& .MuiLink-root": {
    color: theme.palette.custom?.white2,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    position: "relative",
    width: "100%",
    marginTop: "50px",
    left: "unset",
  },
}));

export const LogoGroup = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: "16px",
  rowGap: "24px",
  columnGap: "32px",
}));

export const ClientsServed = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "52px",
  display: "none",
  "& .MuiTypography-root": {
    cursor: "pointer",
  },
  "& .MuiTypography-root:hover": {
    color: theme.palette.custom?.orange_600,
  },
  "& .MuiTypography-root:hover .MuiSvgIcon-root path": {
    fill: theme.palette.custom?.orange_600,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    flexDirection: "column",
    rowGap: "32px",
  },
}));

export const BoxBottomSpace = styled(Box)(() => ({
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginBottom: "40px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "40px",
  },
}));

export const GridContainerUI = styled(Grid)(() => ({
  marginTop: "96px",
  "dotlottie-player": {
    height: "128px !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginTop: "120px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginTop: "80px",
    "dotlottie-player": {
      width: "89px !important",
      height: "78px !important",
    },
  },
}));

export const OurWorkTitle = styled(Typography)(() => ({
  display: "block",
  minHeight: "68px",
  marginBottom: "8px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    minHeight: "68px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    minHeight: "unset",
  },
}));

export const AddressTypography = styled(Typography)(() => ({
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "14px",
    LineHeight: "20px",
    marginTop: "36px",
    display: "block",
  },
}));

export const TitleTypography = styled(Typography)(() => ({
  marginBottom: "120px",
  display: "block",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    marginBottom: "80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginBottom: "32px",
  },
}));

export const SubtitleTypography = styled(Typography)(() => ({
  margin: "16px 0 0",
  display: "block",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    margin: "16px 0 120px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "16px 0 60px",
  },
}));
