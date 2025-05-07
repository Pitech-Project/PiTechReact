import * as React from 'react';
import MenuContent from './MenuContent';
import { MuiDrawer } from '../styles/MUI/admin.styled';
import { Typography, Box, drawerClasses, Divider, Stack } from '@mui/material';
import { usePathname } from 'next/navigation';
import logo from '../../public/assets/img/header-logo.svg'
import Image from 'next/image';


export default function SideMenu() {
  const pathname = usePathname();
  const noHeaderPaths = ['/login'];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);
  
  if (!shouldShowHeader) {
      return null; // Don't render header on these pages
  }
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Stack p={"8px 16px"} justifyContent="center" pl={2}>
          <Image src={logo} alt="logo" height={35} />
      </Stack>
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent />
      </Box>
      
    </MuiDrawer>
  );
}
