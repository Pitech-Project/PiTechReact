"use client";
import React, { useState } from "react";
import { HoveredLink } from "./navbar-menu";
import { Box, Drawer, IconButton, Slide, Stack, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material";
import Image from "next/image";
import { AppBarStyled, DrawerUI, OutlineBtnYellow } from "@/app/styles/MUI/common.styled";
import PiLogo from '../../public/assets/img/header-logo.svg';
import PiLogoMobile from "../../../public/assets/img/logo-mobileview.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}
 
function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
 
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export function NavbarComponent(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pathname = usePathname();

const isActivePath = (paths: string | string[]) => {
  const currentPath = pathname;

  // Convert single string to array
  const pathList = Array.isArray(paths) ? paths : [paths];

  return pathList.some(path => currentPath === path || currentPath.startsWith(path));
};
  const theme = useTheme()
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down('xl'));
   const isMobilwView = useMediaQuery(theme.breakpoints.down("sm"));

  const noHeaderPaths = ['/login', '/dashboard', '/career-form-enquiry', '/contact-form-enquiry'];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);

  if (!shouldShowHeader) {
    return null; // Don't render header on these pages
  }


  return (
    <HideOnScroll {...props} >
      <AppBarStyled position="sticky" sx={{
        "& .LinkUI": {
          fontWeight: 500,
          fontSize: isSmallDesktopView ? "15px" : "18px",
          letterSpacing: "0.3px",
          lineHeight: '20px',
          color: theme.palette.custom?.grey_700,
          textTransform: "uppercase",
          textDecoration: "unset",
          marginRight: '40px',
          transition: '0.5s',
          "&:hover, &.LinkUI.active": {
            color: theme.palette.custom?.orange_600,
          }
        },
        "& .LinkUI:last-child": {
          marginRight: '0',
        },
      }}>
        <Toolbar sx={{ width: '100%', justifyContent: 'space-between', padding: '0 !important' }}>
          <HoveredLink className={isActivePath('/') ? 'active' : ''} href="/">
                    {isMobilwView ?  <Image src={PiLogoMobile} alt="logo" /> :  <Image src={PiLogo} alt="logo" />}
          </HoveredLink>

          <Box className="menus" alignItems={'center'} sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {/* <HoveredLink className={isActive('/') ? 'active' : ''} href="/">Home</HoveredLink> */}
            <HoveredLink className={isActivePath('/about') ? 'active' : ''} href="/about">About Us</HoveredLink>
            <HoveredLink className={isActivePath('/services') ? 'active' : ''} href="/services">Services</HoveredLink>
            <HoveredLink className={isActivePath(['/case-studies' , '/case-studie-details']) ? 'active' : ''} href="/case-studies">Case Studies</HoveredLink>
          <HoveredLink   className={isActivePath(['/careers', '/career-details']) ? 'active' : ''} href="/careers">Careers</HoveredLink>
            <Box className="dot"></Box>
          </Box>

          <IconButton edge="end" color="inherit" aria-label="menu" className={mobileOpen ? '1221' : '1212112121'} onClick={handleDrawerToggle} sx={{ display: { lg: 'none' }, color: 'custom.orange_600' }}>
            <MenuIcon />
          </IconButton>

          <DrawerUI anchor="top" open={mobileOpen} onClose={handleDrawerToggle}>
            <Stack marginBottom={'56px'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image src={PiLogo} alt='logo' />
              <IconButton onClick={handleDrawerToggle}>
                <ClearOutlinedIcon />
              </IconButton>
            </Stack>
            {/* <HoveredLink onClick={handleDrawerToggle} className={isActive('/') ? 'active' : ''} href="/">Home</HoveredLink> */}
            <HoveredLink onClick={handleDrawerToggle} className={isActivePath('/about') ? 'active' : ''} href="/about">About Us</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActivePath('/services') ? 'active' : ''} href="/services">Services</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActivePath('/case-studies') ? 'active' : ''} href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActivePath('/careers') ? 'active' : ''} href="/careers">Careers</HoveredLink>
            <Box width={'fit-content'}>
              <OutlineBtnYellow href="/contact">GET IN TOUCH</OutlineBtnYellow>
            </Box>
          </DrawerUI>
          <OutlineBtnYellow sx={{ display: { xs: 'none', lg: 'flex' } }} href="/contact">GET IN TOUCH</OutlineBtnYellow>
        </Toolbar>
      </AppBarStyled>
      </HideOnScroll>
  );
}
