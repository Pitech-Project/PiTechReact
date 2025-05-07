import { Drawer, Link, styled } from "@mui/material";
import { color } from "framer-motion";

const drawerWidth = 240;

export const MuiDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  // [`& .${drawerClasses.paper}`]: {
  //   width: drawerWidth,
  //   boxSizing: 'border-box',
  // },
});

export const NavLink = styled(Link)(({theme}) =>({
    color: theme.palette.custom?.grey_700,
    marginRight: 16,
    '&:hover':{
      color: theme.palette.custom?.orange_600
    },
    '&.active':{
      color: theme.palette.custom?.orange_600
    }
}))