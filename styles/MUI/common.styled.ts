"use client";

import {
  Accordion,
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  LinearProgress,
  Link,
  List,
  Stack,
  styled,
  TableContainer,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { keyframes } from "@emotion/react";

const breakpoints = {
  largeDesktop: "1921px",
  smallDesktop: "1536px",
  smallDesktop1: "1366px",
  smallDesktop2: "1440px",
  mediumDesk: "1280px",
  tabletView: "1199px",
  tablet: "1100px",
  md: "991px",
  md1: "899px",
  md2: "820px",
  sm: "767px",
};

interface Props {
  contactform?: string;
  activebg?: "light" | "dark" | null;
  projectimg?: string;
  textcolor?: string;
  citiusgrid?: string;
  showall?: string;
  bgimg?: StaticImageData;
  accordianarrow?: string;
  bannerprop?: string;
}

const arrowFlyRight = keyframes`
  0%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  40% {
    transform: translateX(8px);
    opacity: 0;
  }

  60% {
    transform: translateX(-8px);
    opacity: 0;
  }
`;

const arrowFlyRightTop = keyframes`
  0%, 100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  40% {
    transform: translate(10px, -10px);
    opacity: 0;
  }

  60% {
    transform: translate(-10px, 10px);
    opacity: 0;
  }
`;

const arrowFlyDown = keyframes`
  0%, 100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  40% {
    transform: translate(0, 10px);
    opacity: 0;
  }

  60% {
    transform: translate(0, -10px);
    opacity: 0;
  }
`;

const arrowFlyUp = keyframes`
  0%, 100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  40% {
    transform: translate(0, -10px);
    opacity: 0;
  }

  60% {
    transform: translate(0, 10px);
    opacity: 0;
  }
`;

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "transparent",
  boxShadow: "unset",
  padding: "32px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& a": {
    fontWeight: 500,
    fontSize: "18px",
    letterSpacing: "normal",
    lineHeight: "20px",
    color: theme.palette.custom?.grey_700,
    textDecoration: "none",
    transition: "0.5s",
    "&:hover, &.LinkUI.active": {
      color: theme.palette.custom?.orange_600,
    },
  },
  "div.menus .LinkUI.active": {
    position: "relative",
  },
  "& .menus .LinkUI": {
    marginRight: "40px",
  },
  "& .LinkUI:last-child": {
    marginRight: 0,
  },
  "div.menus .LinkUI.active::before, div.menus .LinkUI:hover::before": {
    width: "6px",
    height: "6px",
    background: theme.palette.custom?.orange_600,
    transition: "all 0.2s ease-in-out",
    position: "absolute",
    content: "''",
    bottom: "-9px",
    left: "50%",
  },
  "div .LinkUI:hover": {
    transition: "none",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .menus .LinkUI": {
      marginRight: "30px",
    },
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    padding: "22px 0",
    "& a": {
      fontSize: "15px",
      lineHeight: "19px",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    "&.MuiTypography-root.smallResWhiteBtn": {
      borderColor: theme.palette.custom?.white2,
      color: theme.palette.custom?.white2,
    },
    padding: "11px 84px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "20px 84px",
    backgroundColor: theme.palette.custom?.black2,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "16px 32px",
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
  fontWeight: 600,
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
  fontWeight: 600,
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
  fontWeight: 600,
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
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "12px",
    lineHeight: "12px",
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
  fontWeight: 600,
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
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "12px",
    lineHeight: "12px",
  },
}));

export const OutlineBtnYellow = styled(Link)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.custom?.orange_600,
  borderRadius: "100px",
  padding: "13px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: "600 !important",
  fontSize: "14px !important",
  lineHeight: "14px !important",
  color: theme.palette.custom?.orange_600,
  textDecoration: "unset",
  letterSpacing: "1.6px",
  transition: "0.5s",
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
    color: theme.palette.custom?.black,
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "12px !important",
    lineHeight: "12px !important",
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
  margin: "24px 0 80px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "26px",
    lineHeight: "36px",
    margin: "20px 0 56px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "28px",
    lineHeight: "36px",
    margin: "32px 0 0px",
    "&.subTitleSpacing": {
      margin: "32px 0",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "16px",
    lineHeight: "24px",
    margin: "16px 0 0px",
    "&.subTitleSpacing": {
      margin: "16px 0 32px",
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
  alignItems: "center",
  zIndex: 1,
  gap: "100px",
  background: theme.palette.custom?.white2,
  boxShadow: "0 6px 30px 5px #0000001F",
  borderRadius: "16px",
  padding: "36px 98px",
  color: theme.palette.custom?.white1,
  width: "max-content",
  bottom: "-72px",
  position: "absolute",
  "& .MuiTypography-body_4_500": {
    height: 20,
    display: "block",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    padding: "36px 80px",
    gap: "90px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop1})`]: {
    padding: "20px 45px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "16px 48px 28px",
    position: "relative",
    gap: "23px",
    minWidth: "calc(100% - 168px)",
    " .CountLabel": {
      letterSpacing: "1.3px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "28px 0px",
    margin: "0 32px 0px",
    gap: "48px",
    width: "100%",
    marginTop: "-85px",
    position: "unset",
    "& .MuiTypography-body_4_500": {
      height: "unset",
    },
  },
}));

export const ServiceGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black,
  border: `1px solid transparent`,
  borderRadius: "12px",
  padding: "28px 40px",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    border: `1px solid ${theme.palette.custom?.orange_600}`,
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
    "& img": {
      height: "100px",
      width: "auto",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "32px",
  },
}));

export const IndustriesGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  transition: "all 0.3s ease-in-out",
  "&:hover": {},
  "& .IndustriesBox": {
    backgroundColor: theme.palette.custom?.black,
    padding: "92px 32px 28px",
    borderRadius: "12px",
  },
  "dotlottie-player": {
    height: "110px !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .IndustriesBox": {
      padding: "52px 20px 28px",
    },
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .IndustriesBox": {
      padding: "92px 32px 28px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "dotlottie-player": {
      width: "89px!important",
      height: "78px!important",
    },
    "& .IndustriesBox": {
      padding: "52px 32px 28px 32px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
  },
}));

export const OuterGrid = styled(Grid)(() => ({
  padding: "280px 0 160px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "220px 0 160px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "180px 0px 160px",
    margin: "0 84px",
    "&.workgrid": {
      padding: "180px 84px 160px",
      margin: 0,
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 0px 100px",
    margin: "0 32px",
    "&.workgrid": {
      padding: "127px 0 50px 32px",
      margin: 0,
    },
  },
}));

export const OuterGrid1 = styled(Grid)(() => ({
  padding: "280px 0 160px",
  "&.Home_whoWeAreSection": {
    padding: "356px 0 160px",
    paddingBottom: "0 !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "220px 0 160px",
    "&.Home_whoWeAreSection": {
      padding: "224px 0 160px",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "180px 0px 160px",
    margin: "0 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "100px 0px 100px",
    margin: "0 32px",
    "&.Home_whoWeAreSection": {
      padding: "345px 0 0",
    },
  },
}));

export const OuterGrid2 = styled(Grid)(() => ({
  padding: "140px 0px",
  "&.serviceOuterGridOffice": {
    marginTop: "88px !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "140px 0px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "180px 0px 160px",
    margin: "0 84px",
    "&.serviceOuterGrid": {
      padding: "140px 0px 0px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 0px 100px",
    margin: "0 32px",
    "&.serviceOuterGrid": {
      padding: "120px 0px 100px",
    },
    "&.serviceOuterGridOffice": {
      marginTop: "78px !important",
    },
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
  padding: "175px 80px 120px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "auto",
    padding: "175px 0px 120px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "175px 80px 80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "175px 32px 100px",
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

export const OuterSection1 = styled(Grid)(() => ({
  padding: "280px 0px 160px",
  margin: "0 auto",
  gap: "100px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    padding: "220px 0 160px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "180px 0px 160px 84px",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    gap: "80px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "0 32px",
    padding: "80px 0",
    "&.testimonial-outer": {
      padding: "80px 0px 0px !important",
    },
  },
}));

export const PrevNext = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  flexDirection: "row",
  position: "absolute",
  right: "80px",
  top: "170px",
  "&.testimonialarrow": {
    top: "220px",
  },
  "&.OurWorkPrevNext": {
    position: "relative",
    right: "0px",
    top: "0px",
  },
  "&.testimonialarrow .MuiButton-root.swiper-button-disabled": {
    backgroundColor: `${theme.palette.custom?.gray_txt} !important`,
    "& svg path": {
      stroke: theme.palette.custom?.grey_700,
    },
  },
  "& .MuiButton-root": {
    borderRadius: "4px",
    height: "48px",
    minHeight: "48px",
    width: "48px",
    minWidth: "48px",
    backgroundColor: theme.palette.custom?.orange_600,
    margin: 0,
    position: "unset",
    transition: "0.5s",
    "&.swiper-button-disabled": {
      opacity: 1,
      backgroundColor: `${theme.palette.custom?.grey_700} !important`,
    },
    "&.swiper-button-disabled svg path": {
      stroke: theme.palette.custom?.gray_txt,
    },
    "& .MuiBox-root": {
      backgroundColor: "transparent",
    },
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
    "& svg": {
      transform: "rotate(-180deg)",
    },
  },
  "& .MuiButton-root svg": {
    width: "20px",
    height: "18px",
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
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    top: "225px",
    "&.testimonialarrow": {
      top: "185px",
    },
    "&.OurWorkPrevNext": {
      right: "32px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    right: "20px",
    top: "274px",
    "&.testimonialarrow": {
      top: "150px",
    },
    "&.OurWorkPrevNext": {
      right: "32px",
    },
    "& .MuiButton-root": {
      height: "36px",
      minHeight: "36px",
      width: "36px",
      minWidth: "36px",
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
  "&.OurWorkBox:hover .directionIcon svg, &.OurWorkBox:hover .directionIcon svg path":
    {
      color: theme.palette.custom?.black,
      fill: theme.palette.custom?.black,
    },
  "&.OurWorkBox:hover .description": {
    color: theme.palette.custom?.orange_600,
  },
  "&.OurWorkBox:hover .directionIcon": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
  },
  "& br": {
    display: "none",
  },
  "& > .MuiBox-root": {
    width: " 78%",
    display: "flex",
    flexDirection: "column",
  },
  "& .arrowDesign": {
    height: "22px !important",
    width: "22px !important",
    display: "none",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "&.OurOfficeBox": {
      padding: "18px 15px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "&.OurOfficeBox": {
      padding: "24px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px",
    },
    "&.OurWorkBox": {
      padding: "24px 20px",
    },
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
    backgroundColor: theme.palette.custom?.black2,
    padding: "32px 30px",
    borderRadius: "8px",
    cursor: "grab",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  "& .swiper-slide .MuiTypography-body_8": {
    borderLeft: `2px solid ${theme.palette.custom?.white2}`,
    paddingLeft: "30px",
    display: "block",
    marginBottom: "140px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .swiper-slide .MuiTypography-body_8": {
      marginBottom: "80px",
    },
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

export const DirectionBox = styled(Box)(({ theme }) => ({
  ...commonDirectionLink,
  padding: "8px",
  borderColor: theme.palette.custom?.white2,
  height: "30px",
  width: "30px",
  [`@media (max-width: ${breakpoints.sm})`]: {
    height: "22px",
    width: "22px",
  },
}));

export const DirectionLink1 = styled(Link)(({ theme }) => ({
  ...commonDirectionLink,
  padding: "8px",
  borderColor: theme.palette.custom?.white2,
  height: "48px",
  width: "48px",
  "&:hover svg, &:hover svg path": {
    color: theme.palette.custom?.black,
    fill: theme.palette.custom?.black,
  },
  "&:hover": {
    borderColor: theme.palette.custom?.orange_600,
    backgroundColor: theme.palette.custom?.orange_600,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    height: "40px",
    width: "40px",
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
  backgroundColor: theme.palette.custom?.black7,
  padding: "100px 0",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "90px 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "40px 32px",
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
  color: theme.palette.custom?.gray_txt,
  display: "block",
  marginTop: "22px",
  gap: "24px",
  flexDirection: "row",
  alignItems: "center",
  height: 24,
  "& svg:hover": {
    color: theme.palette.custom?.white2,
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    marginTop: "25px",
  },
}));

export const ScrollTopTop = styled(Box)<Props>(({ theme, activebg }) => ({
  padding: "23px 14px",
  border:
    activebg === "light"
      ? `1px solid ${theme.palette.custom?.black}`
      : `1px solid ${theme.palette.custom?.grey}`,
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

export const BusinessOffice = styled(Stack)<Props>(({ theme, bannerprop }) => ({
  flexDirection: "row",
  gap: "195px",
  // position: "relative",
  "& canvas": {
    objectFit:
      bannerprop == "career" ? undefined : bannerprop ? "cover" : undefined,
  },
  backgroundColor: theme.palette.custom?.black4,
  "& > .MuiBox-root:first-of-type": {
    width: "calc(100vw - 160px)",
    margin: "0 auto",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& canvas": {
      height:
        bannerprop == "services" || bannerprop == "career"
          ? "560px !important"
          : bannerprop == "casestudy"
            ? "560px !important"
            : undefined,
    },
  },
  [`@media (max-width: ${breakpoints.smallDesktop1})`]: {
    "& canvas": {
      height: bannerprop ? "520px !important" : undefined,
    },
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    "& > .MuiBox-root:first-of-type": {
      width: "100%",
      display: "grid",
    },
  },
  [`@media (max-height: ${breakpoints.md2}) and (max-width: ${breakpoints.tabletView})`]:
    {
      "& canvas": {
        height: bannerprop ? "390px !important" : undefined,
      },
    },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    flexDirection: "column",
    gap: 0,
    "& canvas": {
      height:
        bannerprop == "career"
          ? "390px !important"
          : bannerprop
            ? "605px !important"
            : undefined,
      objectFit: "unset",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& canvas": {
      height: bannerprop ? "540px !important" : undefined,
    },
  },
}));

export const LeftPanel = styled(Box)<Props>(({ bannerprop }) => ({
  position: "absolute",
  paddingLeft: "40px",
  bottom:
    bannerprop == "services" ? "15px" : bannerprop == "about" ? "50px" : "18px",
  marginBottom: bannerprop ? 0 : "90px",
  "& .leftPanel": {
    width: "100%",
    position: "absolute",
    paddingLeft: "80px",
    bottom: "50px",
    left: "50px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    bottom: bannerprop == "casestudy" ? "65px" : "95px",
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    position: "unset",
    order: 2,
    padding: bannerprop ? "52px 52px 64px" : "0px 52px 50px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "100%",
    padding: bannerprop ? "32px 84px 80px" : "32px 84px 0px",
    margin: "0 auto",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "0px 32px",
    marginTop: "-136px",
    marginBottom: "140px",
    marginRight: "34px",
    textAlign: "left",
    "&.homeBannerLeftPanel": {
      marginBottom: "160px",
      padding: "0px 32px",
    },
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
  border: `1px solid transparent`,
  transition: "0.4s ease",
  borderRadius: "16px",
  "& .bgImg": {
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    width: "-webkit-fill-available",
    height: "auto",
  },
  "& .mobImg": {
    width: "100% !important",
    height: "auto",
    display: "none",
  },
  "&:hover": {
    border: `1px solid ${theme.palette.custom?.orange_600}`,
  },
  "&:hover .MuiTypography-Caption2": {
    color: theme.palette.custom?.orange_600,
    transition: "0.4s ease",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    "& .mobImg": {
      display: "block",
    },
    "& .deskimg": {
      display: "none",
    },
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
  lineHeight: "28px",
  color: theme.palette.custom?.grey_700,
  borderRadius: "100px",
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "36px",
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
    minHeight: "28px",
  },
}));

export const StyledCareersBanner = styled(Box)(({ theme }) => ({
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
    backgroundColor: theme.palette.custom?.black6,
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
    backgroundAttachment: "inherit",
    backgroundPosition: "center",
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
    "&.bg-fixedImg": {
      height: "500px",
    },
  },
}));

export const StyledCareerDetailsBanner = styled(Box)(({ theme }) => ({
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
    backgroundColor: theme.palette.custom?.black6,
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
  alignItems: "center",
  border: `1px solid transparent`,
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px !important",
  "&:first-of-type": {
    marginTop: "0px !important",
  },
  "&.MuiTypography-root": {
    textDecoration: "unset",
  },
  "&:hover": {
    border: `1px solid ${theme.palette.custom?.orange_600}`,
  },
  "&:hover .jobTitle": {
    color: theme.palette.custom?.orange_600,
  },
  "& .icon": {
    display: "none",
    backgroundColor: theme.palette.custom?.orange_600,
    height: "40px",
    width: "40px",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.5s linear",
  },
  "&:hover .icon": {
    display: "flex",
    "& img": {
      animation: `.35s ease-in-out forwards ${arrowFlyRightTop}`,
    },
  },
}));

export const AccordionUI = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  "& .MuiAccordion-root": {
    boxShadow: "unset",
    backgroundColor: theme.palette.custom?.black7,
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
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    marginTop: "60px",
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
    minHeight: "auto !important",
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
    fontSize: "24px",
    lineHeight: "30px",
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
    borderBottomColor: `${theme.palette.custom?.white3} !important`,
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
    color: theme.palette.custom?.errormsg,
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
  "& .MuiInputBase-root-MuiInput-root::before,  .MuiInputBase-root-MuiInput-root::after":
    {
      borderBottomColor: "rgba(0, 0, 0, 0.42)",
    },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    "&.blackTheme .MuiInputLabel-formControl .MuiTypography-root": {
      fontSize: "16px",
      lineHeight: "16px",
    },
    "&.blackTheme .MuiInputBase-input": {
      fontSize: "19px",
      lineHeight: "24px",
    },
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
    padding: "16px 84px",
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
    marginRight: "40px",
    letterSpacing: "1.6px",
    textDecoration: "unset",
    marginBottom: "16px",
    padding: "20px 0",
    position: "relative",
    textTransform: "uppercase",
    width: "max-content",
  },
  "& .LinkUI.active": {
    color: theme.palette.custom?.orange_600,
  },
  "&.MuiDrawer-root ": {
    top: "0",
  },
  "& .LinkUI.active:before": {
    content: "''",
    position: "absolute",
    bottom: "26px",
    top: "27px",
    right: "-20px",
    width: "6px",
    height: "6px",
    background: theme.palette.custom?.orange_600,
  },
  "& .MuiStack-root": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "50px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .MuiDrawer-paper": {
      padding: "16px 32px",
    },
  },
}));

export const CanvasContainer = styled(Box)(() => ({
  width: "calc(100vw - 160px)",
  paddingBottom: "190px",
  paddingTop: "88px",
  margin: "0 auto",
  height: "100%",
  "& canvas": {
    height: "730px !important",
    width: "100% !important",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& canvas": {
      height: "640px !important",
    },
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    width: "100%",
    paddingBottom: 0,
    "& canvas": {
      height: "610px !important",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "100%",
    margin: 0,
    paddingBottom: "0px",
    "& canvas": {
      height: "485px !important",
    },
  },
  [`@media (max-height: ${breakpoints.md2}) and (max-width: ${breakpoints.tabletView})`]:
    {
      "& canvas": {
        height: "370px !important",
      },
    },
  [`@media (max-width: ${breakpoints.sm})`]: {
    paddingTop: "80px",
    "& canvas": {
      height: "440px !important",
    },
  },
}));

export const BannerBox = styled(Box)(() => ({
  transform: "translate(-50%, -50%)",
  position: "absolute",
  left: "50%",
  top: "55%",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "calc(100% - 168px)",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    width: "calc(100% - 64px)",
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
  marginBottom: "96px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    marginBottom: "96px",
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
  padding: "140px 80px 120px",
  "& img": {
    maxWidth: "100%",
    height: "100%",
    width: "100%",
    borderRadius: 16,
    objectFit: "cover",
    "&.teamImage": {
      display: "none",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 32px",
    "& img.teamImage": {
      display: "block",
    },
  },
}));

export const Copyright = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "28px 0 0",
  marginTop: "44px",
  fontSize: "16px",
  lineHeight: "28px",
  fontWeight: 400,
  color: theme.palette.custom?.gray_txt,
  "& .copyrightIcon": {
    fontSize: "16px",
    lineHeight: "28px",
  },
  borderTop: `1px solid ${theme.palette.custom?.black3}`,
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    marginTop: "68px",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    marginTop: "10px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "16px",
    lineHeight: "28px",
    gap: "7px",
    "& .copyrightIcon": {
      fontSize: "20px",
    },
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
  "& .blankLI": {
    display: "block",
    height: "32px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    gap: "20px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    flexDirection: "column",
    gap: "0px",
    "& .blankLI": {
      display: "none",
    },
  },
  [`@media (max-width: ${breakpoints.md1})`]: {
    flexDirection: "row",
    marginBottom: "40px",
    gap: "72px",
    "& .blankLI": {
      display: "block",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    flexDirection: "column",
    gap: "0px",
    "& a:last-of-type": {
      marginBottom: 0,
    },
    "& .MuiTypography-secTitle": {
      marginBottom: "12px",
    },
  },
}));

export const FooterRightPanel = styled(Stack)(() => ({
  flexDirection: "row",
  gap: "40px",
  "& .footerlogo": {
    display: "flex",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    gap: "20px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    gap: "36px",
  },
  [`@media (max-width: ${breakpoints.tablet})`]: {
    "& .address": {
      width: "225px",
    },
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    marginBottom: "40px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    flexDirection: "column",
    gap: "0px",
    marginBottom: "40px",
    "& .MuiTypography-secTitle": {
      marginBottom: "16px",
    },
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
    color: theme.palette.custom?.gray_txt,
    textDecoration: "unset",
    display: "block",
    marginBottom: "4px",
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
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    width: "100%",
    height: "520px",
    marginLeft: "0px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    height: "338px",
  },
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
  borderRadius: "4px",
  height: "30px",
  width: "30px",
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
    marginTop: "0 !important",
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
  "& .MuiAccordion-heading:hover .MuiAccordionSummary-expandIconWrapper img": {
    filter: "brightness(0)",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .MuiAccordionDetails-root": {
      padding: "40px 0 0 8px",
    },
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
  [`@media (max-width: ${breakpoints.sm})`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    width: "100%",
  },
}));

export const WebServicesGrid = styled(Grid)(() => ({
  margin: "91px 0 71px",
  "dotlottie-player": {
    height: "80px !important",
    width: "91px !important",
  },
  "& .MuiGrid-root .MuiGrid-root:nth-of-type(2) dotlottie-player ": {
    width: "105px !important",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "66px 0 72px",
    "dotlottie-player": {
      minWidth: "91px",
    },
    "& .MuiGrid-root .MuiGrid-root:nth-of-type(2) dotlottie-player ": {
      minWidth: "105px",
    },
  },
}));

export const CaseBox = styled(Box)(({ theme }) => ({
  padding: "110px 132px 72px 132px",
  position: "relative",
  "& .MuiLink-root": {
    textDecoration: "none",
  },
  "&:hover .MuiLink-root .MuiTypography-font_38, &:hover .caseStudieDetail": {
    color: theme.palette.custom?.orange_600,
  },
  "&:hover .MuiBox-root": {
    visibility: "visible",
  },
  "&:hover .MuiButton-root img": {
    animation: `.35s ease-in-out forwards ${arrowFlyRightTop}`,
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    padding: "60px 60px 0px 60px",
    "& .MuiTypography-body_4_600": {
      fontSize: "16px !important",
      lineHeight: "18px",
    },
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    padding: "60px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "100px 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "100px 32px",
    "& .MuiTypography-body_4_600": {
      fontSize: "14px !important",
      lineHeight: "14px",
    },
    "& .MuiTypography-font_38": {
      width: "100%",
    },
  },
}));

export const CaseImage = styled(Image)({
  height: "380px !important",
  width: "auto !important",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    height: "330px !important",
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    height: "330px !important",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    height: "400px !important",
  },
});

export const OnHoverArrowBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 56,
  right: 56,
  transition: "all 0s ease-in-out",
  visibility: "hidden",
  borderColor: theme.palette.custom?.orange_600,
  backgroundColor: theme.palette.custom?.orange_600,
  height: 30,
  width: 30,
  borderRadius: "4px",
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
  display: "inline-block",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "16px",
    lineHeight: "26px",
    padding: "6px 20px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "14px",
    lineHeight: "20px",
    padding: "6px 20px",
  },
};

export const WhiteChip = styled(Typography)<Props>(({ theme, textcolor }) => ({
  ...CommonChip,
  backgroundColor: theme.palette.custom?.grey_200,
  color: textcolor ? textcolor : theme.palette.custom?.gray_txt,
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

export const ImageBox = styled(Box)<Props>(({ projectimg }) => ({
  position: "relative",
  top: "0px",
  right: "-70px",
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    position: "initial",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    justifyContent: "end",
    marginLeft: "72px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    marginLeft: projectimg == "chanakya" ? 0 : undefined,
    justifyContent: projectimg == "chanakya" ? "start" : undefined,
    "& img": {
      height: projectimg == "citius" ? "325px !important" : "290px !important",
      marginLeft:
        projectimg == "taj"
          ? "-119px"
          : projectimg == "citius"
            ? "-100px"
            : "-162px",
      marginTop: projectimg ? "20px" : projectimg == "citius" ? "5px" : "42px",
    },
  },
}));

export const TopBox = styled(Box)({
  paddingTop: 343,
  "& .MuiTypography-body_6": {
    marginTop: 80,
    marginBottom: 12,
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .MuiTypography-body_9": {
      fontSize: "19px",
      lineHeight: "28px",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "268px 84px 60px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "200px 32px 90px",
    "& .MuiTypography-body_6": {
      marginTop: 60,
    },
    "& .MuiTypography-body_9": {
      fontSize: "16px",
      lineHeight: "24px",
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
    padding: "40px 0 48px",
    "& .MuiBox-root .MuiBox-root .MuiTypography-font_19_600": {
      fontSize: "14px",
      lineHeight: "19px",
    },
  },
});

export const ChallengeBox = styled(Box)(({ theme }) => ({
  padding: "120px 0",
  backgroundColor: theme.palette.custom?.black7,
  "& .MuiListItem-root": {
    color: theme.palette.custom?.white2,
    display: "list-item",
    padding: 0,
  },
  "& .MuiList-root": {
    listStyleType: "disc",
    paddingLeft: "32px",
    paddingTop: 0,
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "140px 84px 100px",
    "& .MuiTypography-font_19_500": {
      lineHeight: "24px",
    },
    "& .MuiGrid-container": {
      rowGap: "80px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 32px 80px",
    "& .MuiList-root": {
      marginBottom: 40,
    },
    "& .MuiTypography-font_19_500, .MuiListItem-root": {
      fontSize: "14px",
      lineHeight: "24px",
    },
    "& .MuiGrid-container": {
      rowGap: "20px",
    },
  },
}));

export const SolutionBox = styled(Box)(({ theme }) => ({
  padding: "120px 0",
  "& .MuiListItem-root": {
    fontSize: "19px",
    lineHeight: "28px",
    fontWeight: 500,
    color: theme.palette.custom?.gray_txt,
    display: "list-item",
    padding: 0,
  },
  "& .MuiList-root": {
    listStyleType: "disc",
    paddingTop: 0.5,
    paddingBottom: 0,
    paddingLeft: "32px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .MuiListItem-root": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .MuiTypography-body_9_600": {
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "120px 84px 100px",
    "& .MuiTypography-body_9_600": {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 32px 80px",
    "& .MuiTypography-mediumFont, .MuiTypography-body_9_600, .MuiGrid-root .MuiTypography-font_19_500":
      {
        fontSize: "19px",
        lineHeight: "28px",
      },
    "& .MuiTypography-mediumFont ~ .MuiTypography-font_19_500, .MuiListItem-root":
      {
        fontSize: "14px",
        lineHeight: "20px",
      },
  },
}));

export const FeatureGrid = styled(Box)<Props>(({ citiusgrid }) => ({
  display: "grid",
  gridTemplateColumns: citiusgrid ? "repeat(8, 1fr)" : "repeat(6, 1fr)",
  columnGap: "40px",
  marginTop: "40px",
  marginBottom: "80px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    gridTemplateColumns: "repeat(auto-fill, 155px)",
    rowGap: "40px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "40px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
    marginBottom: 0,
  },
}));

export const ImpactGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "20px",
  marginTop: "40px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .MuiTypography-body_3": {
      fontSize: "17px",
      lineHeight: "23px",
    },
  },
  [`@media (max-width: ${breakpoints.smallDesktop1})`]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    "& div:last-of-type": {
      gridColumn: "1 / -1",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const ImpactBox = styled(Box)({
  padding: "80px 80px 80px 0",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "80px 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 32px 80px",
    "& .MuiTypography-mediumFont": {
      lineHeight: "32px",
    },
    "& .MuiTypography-font_19_500": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});

export const GridBox = styled(Box)(({ theme }) => ({
  padding: "80px 28px 32px",
  border: "1px solid",
  borderColor: theme.palette.custom?.orange_600,
  borderRadius: "8px",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "60px 24px 32px",
    "& .MuiTypography-font_subtitle": {
      fontSize: "14px",
      lineHeight: "20px",
    },
    "& .MuiTypography-body_3": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "48px 24px 32px 24px",
    "& img": {
      width: "48px",
      height: "48px",
    },
  },
}));

export const GetBox = styled(Box)(({ theme }) => ({
  padding: "120px 80px 80px",
  position: "relative",
  backgroundColor: theme.palette.custom?.black7,
  "& .MuiTypography-mediumFont": {
    marginTop: 20,
    marginBottom: 60,
  },
  "& .MuiLink-root.smallResWhiteBtn": {
    display: "inline-block",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "60px 16px",
    "& .MuiTypography-mediumFont": {
      marginBottom: 40,
    },
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "120px 32px 80px",
    "& .MuiTypography-root.MuiLink-root": {
      fontSize: "12px",
      lineHeight: "12px",
    },
    "& .MuiTypography-font_14": {
      color: theme.palette.custom?.white3,
    },
  },
  [`@media (min-width: ${breakpoints.largeDesktop})`]: {
    "& .MuiBox-root": {
      margin: "0 auto",
    },
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
      color: theme.palette.custom?.orange_600,
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    position: "relative",
    width: "100%",
    marginTop: "50px",
    left: "unset",
  },
  [`@media (min-width: ${breakpoints.largeDesktop})`]: {
    width: " 66.66%",
    margin: "0 auto",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    // marginBottom: "40px",
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
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    minHeight: "55px",
    marginBottom: "4px",
    fontSize: "22px",
    lineHeight: "28px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    minHeight: "60px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    minHeight: "unset",
    fontSize: "18px",
    lineHeight: "24px",
  },
}));

export const AddressTypography = styled(Typography)(() => ({
  lineHeight: "31px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "16px",
    lineHeight: "25px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    lineHeight: "28px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "16px",
    lineHeight: "24px",
    display: "block",
    "& br": {
      display: "block",
    },
  },
}));

export const TitleTypography = styled(Typography)(() => ({
  marginBottom: "120px",
  display: "block",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
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

export const ReCAPTCHABox = styled(Box)(() => ({
  "& .rc-anchor-dark": {
    borderRadius: "4px",
  },
}));

export const AccordionText = styled(Typography)(() => ({
  marginLeft: "20px",
  fontSize: "19px",
  lineHeight: "28px ",
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

export const DividerUI = styled(Divider)(({ theme }) => ({
  margin: "120px 0",
  border: "1px solid",
  borderColor: theme.palette.custom?.white3,
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    margin: "80px 0",
  },
}));
export const ClientImage = styled(Image)({
  width: "auto !important",
  height: "auto !important",
  [`@media (max-width: ${breakpoints.sm})`]: {
    height: "30px !important",
  },
});

export const KeyFeatureBox = styled(Box)({
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "0 84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "0 32px",
    "& .MuiTypography-mediumFont": {
      fontSize: "24px",
      lineHeight: "32px",
    },
    "& .MuiTypography-font_subtitle": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});

export const StackServicesSetions = styled(Stack)({
  flexDirection: "row",
  gap: "83px",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginTop: "152px",
  [`@media (max-width: ${breakpoints.md})`]: {
    gap: "72px",
    flexDirection: "column",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    gap: "40px",
    marginTop: "120px",
  },
});

export const SuccessfulMsg = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom?.green,
  fontSize: "16PX",
  fontWeight: "400",
}));

export const SuccessfulMsgBox = styled(Box)(({ theme }) => ({
  padding: "16px",
  borderRadius: "4px",
  backgroundColor: theme.palette.custom?.light_green,
  marginTop: "8px",
  display: "flex",
  alignItems: "flex-start",
}));

export const ResponsibilitiesMainAccordion = styled(Box)(() => ({
  "& .MuiAccordionDetails-root": {
    paddingTop: 0,
  },
  "& .MuiAccordion-heading ~ div .MuiAccordion-heading p": {
    fontSize: "1.5rem",
  },
  "& .MuiAccordion-heading ~ div .MuiAccordion-heading .MuiAccordionSummary-content":
    {
      marginTop: 0,
      marginBottom: "30px !important",
    },
}));

export const IframeBox = styled(Box)({
  "& iframe": {
    height: "380px",
    width: "100%",
    borderTopLeftRadius: "12px",
    marginBottom: "-7px",
    borderTopRightRadius: "12px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& iframe": {
      height: "240px",
    },
  },
});

const BtnWithArrow = {
  gap: "12px",
  display: "inline-flex",
  width: "fit-content",
  height: "48px",
  padding: 0,
  border: "unset !important",
  fontWeight: 500,
  fontSize: "21px",
  lineHeight: "100%",
  color: "#f4f4f4 !important",
  letterSpacing: "normal",
  "&:hover": {
    backgroundColor: "transparent",
  },
};

export const ArrowDesign = styled(Box)<Props>(({ accordianarrow, theme }) => ({
  backgroundColor: accordianarrow ? "transparent" : "#f7941e",
  border: accordianarrow
    ? `1px solid ${theme.palette.custom?.bgcolor}`
    : undefined,
  borderRadius: "4px",
  padding: "9px",
  width: accordianarrow ? "40px" : "30px",
  height: accordianarrow ? "40px" : "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    filter: accordianarrow ? "invert(1)" : undefined,
  },
  "&:hover img": {
    filter: accordianarrow ? "brightness(0)" : undefined,
  },

  [`@media (max-width: ${breakpoints.sm})`]: {
    width: "30px",
    height: "30px",
  },

  // },
}));

export const RightTopArrow = styled(Button)({
  ...BtnWithArrow,
  textTransform: "initial",
  "&:hover img": {
    animation: `.35s ease-in-out forwards ${arrowFlyRightTop}`,
  },
});

export const RightArrow = styled(Button)({
  ...BtnWithArrow,
  textTransform: "initial",
  "&:hover img": {
    animation: `.35s ease-in-out forwards ${arrowFlyRight}`,
  },
});

export const DownArrow = styled(Button)<Props>(({ showall }) => ({
  ...BtnWithArrow,
  textTransform: "initial",
  "&:hover img": {
    animation: `.35s ease-in-out forwards ${showall ? arrowFlyUp : arrowFlyDown}`,
  },
}));

export const HeaderGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom?.borderColor1,
  padding: "11px 16px",
  borderRadius: "8px",
  "& .MuiToolbar-root": {
    width: "100%",
    justifyContent: "space-between",
    padding: "0 !important",
    minHeight: "auto",
  },
  "& .headerlogo": {
    height: "42px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    background: 0,
    padding: 0,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .headerlogo, & .headerlogo img": {
      height: "45px !important",
    },
  },
}));

export const BgImgBox = styled(Box)<Props>(({ bgimg }) => ({
  backgroundImage: `url(${bgimg?.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  [`@media (max-width: ${breakpoints.sm})`]: {
    display: "none",
  },
}));

export const BacktoCareer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "32px",
  alignItems: "center",
  "& a .MuiTypography-root": {
    display: "none",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    flexDirection: "column",
    alignItems: "start",
    "& a": {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      fontSize: "18px",
      color: theme.palette.custom?.bgcolor,
      textDecoration: "none",
      "& .MuiTypography-root": {
        fontWeight: 500,
        display: "block",
      },
    },
  },
}));

export const FooterNewUI = styled(Box)(({ theme }) => ({
  background: theme.palette.custom?.black2,
  padding: "80px",
  borderRadius: "16px",
  "& .FooterLink": {
    fontSize: "19px",
    fontWeight: "500",
    lineHeight: "28px",
    color: theme.palette.custom?.gray_txt,
    textDecoration: "unset",
    display: "block",
    marginBottom: "4px",
    wordBreak: "break-word",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.custom?.white2,
    },
    "&.active": {
      color: theme.palette.custom?.white2,
    },
  },
  "& .footerlogo img": {
    height: 30,
    width: "auto",
    marginTop: "24px",
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .FooterLink": {
      fontSize: "16px",
      lineHeight: "25px",
    },
  },
  [`@media (max-width: ${breakpoints.smallDesktop2})`]: {
    padding: "50px",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    padding: "60px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "40px",
    flexDirection: "column",
    gap: "0",
    "& .FooterLink": {
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "12px",
    },
    "& .footerlogo img": {
      marginTop: "12px",
    },
  },
}));

export const CaseStudyGrid = styled(Grid)({
  "& a, .customheight": {
    height: "100%",
    display: "block",
  },
  "& a": {
    textDecoration: "none",
  },
});

export const WorkLink = styled(Link)(({ theme }) => ({
  "& > .MuiBox-root": {
    border: "1px solid transparent",
  },
  "&:hover .arrowDesign": {
    display: "flex",
    "& img": {
      animation: `.35s ease-in-out forwards ${arrowFlyRightTop}`,
    },
  },
  "&:hover .OurWorkBox .description": {
    color: theme.palette.custom?.orange_600,
  },
  "&:hover > .MuiBox-root": {
    border: `1px solid ${theme.palette.custom?.orange_600}`,
    borderRadius: "16px",
  },
}));

export const OuterGrid6 = styled(Grid)(({ theme }) => ({
  paddingTop: 151,
  paddingBottom: 150,
  "& a": {
    textDecoration: "none",
    color: theme.palette.custom?.orange_600,
  },
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    "& .MuiTypography-body_3_600": {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    paddingLeft: "84px",
    paddingRight: "84px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    padding: "140px 32px 100px",
  },
}));

export const ListUI = styled(List)({
  listStyleType: "disc",
  padding: 0,
  paddingLeft: "32px",
  paddingTop: 0,
  marginBottom: 75,
  "& .MuiListItem-root": {
    display: "block",
    padding: 0,
  },
  "& .MuiListItem-root::after": {
    content: '""',
    position: "absolute",
    left: "-18px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "6px",
    height: "6px",
    backgroundColor: "#1b1b1b",
    borderRadius: "50%",
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    marginBottom: 40,
  },
});

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginBottom: 75,
  "& thead tr th": {
    borderBottom: `1px solid ${theme.palette.custom?.gray_txt}`,
    padding: 8,
  },
  "& tbody tr td": {
    padding: 12,
  },
  "& table tbody tr:nth-of-type(odd)": {
    backgroundColor: theme.palette.custom?.grey_200,
  },
  "& thead tr th:first-of-type, & tbody tr td:first-of-type": {
    paddingLeft: 16,
  },
  [`@media (max-width: ${breakpoints.mediumDesk})`]: {
    "& .MuiTypography-body_10_1": {
      fontSize: "14px !important",
      lineHeight: "22px",
    },
  },
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    marginBottom: 40,
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    display: "none",
  },
}));

export const CookieStack = styled(Stack)(({ theme }) => ({
  marginBottom: 40,
  "& .MuiBox-root": {
    padding: "20px 16px",
    "& .MuiTypography-body_10_1:nth-of-type(2)": {
      margin: "8px 0 0",
    },
    "& .MuiTypography-body_10_1:nth-of-type(3)": {
      margin: "0 0 16px",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.custom?.grey_200,
    },
  },
  [`@media (min-width: ${breakpoints.sm})`]: {
    display: "none",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    "& .MuiTypography-body_10_1": {
      fontSize: "16px !important",
      lineHeight: "24px",
    },
  },
}));

export const FooterLeft = styled(Box)(() => ({}));

export const FooterRight = styled(Box)(() => ({
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    width: "254px",
  },
}));

export const IndustriesName = styled(Typography)(() => ({
  display: "block",
  margin: "20px 0 0px",
  [`@media (max-width: ${breakpoints.sm})`]: {
    margin: "0",
  },
}));

export const WorkCompany = styled(Typography)(() => ({
  [`@media (max-width: ${breakpoints.tabletView})`]: {
    fontSize: "19px !important",
    lineHeight: "24px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "14px !important",
    lineHeight: "22px",
  },
}));
