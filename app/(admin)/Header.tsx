"use client";

import * as React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  IconButton,
  Stack,
  Divider,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "next/image";
import logo from "../../public/assets/img/header-logo.svg";
import { NavLink } from "@/styles/MUI/admin.styled";

const mainListItems = [
  {
    linkname: "Career's Job list",
    icon: <WorkOutlineOutlinedIcon />,
    url: "add-career",
    related: ["add-job"], // 👈 any hidden pages that should keep this active
  },
  {
    linkname: "Career enquiry",
    icon: <WorkOutlineOutlinedIcon />,
    url: "career-form-enquiry",
  },
  {
    linkname: "Contact enquiry",
    icon: <EmailOutlinedIcon />,
    url: "contact-form-enquiry",
  },
];

export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  };

  const noHeaderPaths = ["/login"];
  if (noHeaderPaths.includes(pathname)) return null;

  // ✅ Check if the current page should make an item active
  const isItemActive = (item: any) => {
    const current = pathname.replace("/", ""); // remove leading slash
    return (
      current === item.url ||
      item.related?.some((r: string) => current.startsWith(r))
    );
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p="16px 16px"
        bgcolor="#1b1b1b"
      >
        <Image src={logo} alt="logo" height={35} />
        <Stack direction="row" alignItems="center">
          <Box mr={2}>
            {mainListItems.map((item, index) => (
              <NavLink
                key={index}
                href={`/${item.url}`}
                underline="none"
                className={isItemActive(item) ? "active" : ""}
              >
                {item.linkname}
              </NavLink>
            ))}
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography mr={1} ml={1.5} color="#CDCDCE">
            Hi, Admin
          </Typography>
          <IconButton onClick={handleLogout} aria-label="Sign out">
            <LogoutRoundedIcon sx={{ color: theme.palette.custom?.grey_700 }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider orientation="horizontal" />
    </>
  );
}
