"use client"

import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ListItemText, Menu, MenuItem, IconButton, Stack, Divider, Link, Typography, Box, useTheme, Button } from '@mui/material'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { NavLink } from '../styles/MUI/admin.styled';
import Image from 'next/image';
import logo from '../../public/assets/img/header-logo.svg'

const mainListItems = [
    { linkname: 'Career form enquiry', icon: <WorkOutlineOutlinedIcon />, url: 'career-form-enquiry' },
    { linkname: 'Contact form enquiry', icon: <EmailOutlinedIcon />, url: 'contact-form-enquiry' },
];

export default function Header() {

    const theme = useTheme()
    const router = useRouter();

 
    const handleLogout = async () => {
        await fetch('/logout', { method: 'POST' });
        router.replace('/login');
        router.refresh(); // optional but ensures fresh state
    };

    const [active, setActive] = useState("/");
    
    const pathname = usePathname();
    const noHeaderPaths = ['/login'];
    const shouldShowHeader = !noHeaderPaths.includes(pathname);

    if (!shouldShowHeader) {
        return null; // Don't render header on these pages
    }
    return (
        <>
            <Stack direction="row" alignItems="center" sx={{ gap: 1 }} justifyContent="space-between" p={"8px 16px"}>
                <Image src={logo} alt="logo" height={35} />
                <Stack direction="row" alignItems="center">
                    <Box mr={1.5}>
                        {mainListItems.map((item, index) => (
                            <NavLink key={index} href={item.url} underline="none" className={pathname === `/${item.url}` ? "active" : ''}  onClick={() => setActive(item.url)} >{item.linkname}</NavLink>
                        ))}
                        
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem  />
                    <Typography mr={1} ml={1.5}>Hi, Admin</Typography>
                    <IconButton  onClick={handleLogout} aria-label="Sign out"> 
                        <LogoutRoundedIcon sx={{ color: theme.palette.custom?.black2 }} />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider orientation='horizontal' />
        </>
    );
}
