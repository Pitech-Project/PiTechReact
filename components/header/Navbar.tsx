"use client";
import React, { useState } from "react";
import { HoveredLink } from "./navbar-menu";
import { Box, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { AppBarStyled, DrawerUI, OutlineBtnYellow } from "@/app/styles/MUI/common.styled";
import PiLogo from '../../public/assets/img/header-logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export function NavbarComponent() {
  return (

    <Navbar />

  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const theme = useTheme()
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down('xl'));

  const noHeaderPaths = ['/login', '/dashboard', '/career-form-enquiry', '/contact-form-enquiry'];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);

  if (!shouldShowHeader) {
    return null; // Don't render header on these pages
  }

  return (
    <>
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
          <Image src={PiLogo} alt='logo' />

          <Box alignItems={'center'} sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <HoveredLink className={isActive('/') ? 'active' : ''} href="/">Home</HoveredLink>
            <HoveredLink className={isActive('/about') ? 'active' : ''} href="/about">About Us</HoveredLink>
            <HoveredLink className={isActive('/services') ? 'active' : ''} href="/services">Services</HoveredLink>
            <HoveredLink className={isActive('/case-studies') ? 'active' : ''} href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink className={isActive('/careers') ? 'active' : ''} href="/careers">Careers</HoveredLink>
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
            <HoveredLink onClick={handleDrawerToggle} className={isActive('/') ? 'active' : ''} href="/">Home</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActive('/about') ? 'active' : ''} href="/about">About Us</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActive('/services') ? 'active' : ''} href="/services">Services</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActive('/case-studies') ? 'active' : ''} href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink onClick={handleDrawerToggle} className={isActive('/careers') ? 'active' : ''} href="/careers">Careers</HoveredLink>
            <Box width={'fit-content'}>
              <OutlineBtnYellow href="/contact">GET IN TOUCH</OutlineBtnYellow>
            </Box>
          </DrawerUI>
          <OutlineBtnYellow sx={{ display: { xs: 'none', lg: 'flex' } }} href="/contact">GET IN TOUCH</OutlineBtnYellow>
        </Toolbar>
      </AppBarStyled>

    </>
  );
}
