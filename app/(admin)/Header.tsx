"use client";

import * as React from "react";
import { useState } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  IconButton,
  Stack,
  Divider,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "next/image";
import logo from "../../public/assets/img/header-logo.svg";
import { NavLink } from "@/styles/MUI/admin.styled";

const mainListItems = [
  {
    linkname: "Career form enquiry",
    icon: <WorkOutlineOutlinedIcon />,
    url: "career-form-enquiry",
  },
  {
    linkname: "Contact form enquiry",
    icon: <EmailOutlinedIcon />,
    url: "contact-form-enquiry",
  },
];

export default function Header() {
  const theme = useTheme();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState("/");

  const pathname = usePathname();
  const noHeaderPaths = ["/login"];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);

  if (!shouldShowHeader) {
    return null;
  }
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ gap: 1 }}
        justifyContent="space-between"
        p={"8px 16px"}
      >
        <Image src={logo} alt="logo" height={35} />
        <Stack direction="row" alignItems="center">
          <Box mr={1.5}>
            {mainListItems.map((item, index) => (
              <NavLink
                key={index}
                href={item.url}
                underline="none"
                className={pathname === `/${item.url}` ? "active" : ""}
                onClick={() => setActive(item.url)}
              >
                {item.linkname}
              </NavLink>
            ))}
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography mr={1} ml={1.5}>
            Hi, Admin
          </Typography>
          <IconButton onClick={handleLogout} aria-label="Sign out">
            <LogoutRoundedIcon sx={{ color: theme.palette.custom?.black2 }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider orientation="horizontal" />
    </>
  );
}
