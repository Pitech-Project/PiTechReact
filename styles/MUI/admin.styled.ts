import { Drawer, Link, styled } from "@mui/material";

const drawerWidth = 240;

export const MuiDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
});

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.custom?.grey_700,
  marginRight: 24,
  "&:hover": {
    color: theme.palette.custom?.orange_600,
  },
  "&.active": {
    color: theme.palette.custom?.orange_600,
  },
}));
