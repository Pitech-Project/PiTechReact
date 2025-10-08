"use client";
import NextLink from "next/link";
import React, { useState } from "react";
import { HoveredLink } from "./navbar-menu";
import {
  Box,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  Button,
} from "@mui/material";
import Image from "next/image";
import {
  AppBarStyled,
  DrawerUI,
  OutlineBtnYellow,
} from "@/styles/MUI/common.styled";
import PiLogo from "../../../public/assets/img/header-logo.svg";
import PiLogoMobile from "../../../public/assets/img/logo-mobileview.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useRouter } from "next/navigation";

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll({ children, window }: Props) {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export function NavbarComponent(props: Props) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const pathname = usePathname();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpadView = useMediaQuery(theme.breakpoints.down("lg"));

  const noHeaderPaths = [
    "/login",
    "/dashboard",
    "/career-form-enquiry",
    "/contact-form-enquiry",
  ];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);

  const isActivePath = (paths: string | string[]) => {
    const pathList = Array.isArray(paths) ? paths : [paths];
    return pathList.some(
      (path) => pathname === path || pathname.startsWith(path),
    );
  };

  const handleLinkClick = async (href: string) => {
    setMobileOpen(false); // Close drawer

    if (pathname === href) {
      router.replace(href); // Force reload if same page
    } else {
      router.push(href);
    }
  };

  if (!shouldShowHeader) return null;
  return (
    <HideOnScroll {...props}>
      <AppBarStyled
        position="fixed"
        sx={{
          "& .LinkUI": {
            fontWeight: 500,
            letterSpacing: "1.6px",
            lineHeight: "20px",
            color: theme.palette.custom?.grey_700,
            textTransform: "uppercase",
            textDecoration: "none",
            marginRight: "40px",
            transition: "0.5s",
            "&:hover, &.LinkUI.active": {
              color: theme.palette.custom?.orange_600,
            },
          },
          "& .LinkUI:last-child": { marginRight: 0 },
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "space-between",
            p: "0 !important",
          }}
        >
          <HoveredLink className={isActivePath("/") ? "active" : ""} href="/">
            <Image src={isIpadView ? PiLogoMobile : PiLogo} alt="logo" />
          </HoveredLink>

          <Box
            className="menus"
            alignItems="center"
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <HoveredLink
              className={isActivePath("/about") ? "active" : ""}
              href="/about"
            >
              About Us
            </HoveredLink>
            <HoveredLink
              className={isActivePath("/services") ? "active" : ""}
              href="/services"
            >
              Services
            </HoveredLink>
            <HoveredLink
              className={
                isActivePath(["/case-studies", "/case-studie-details"])
                  ? "active"
                  : ""
              }
              href="/case-studies"
            >
              Case Studies
            </HoveredLink>
            <HoveredLink
              className={
                isActivePath(["/careers", "/career-details"]) ? "active" : ""
              }
              href="/careers"
            >
              Careers
            </HoveredLink>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { lg: "none" }, color: "custom.orange_600" }}
          >
            <MenuIcon sx={{ width: "32px", height: "auto" }} />
          </IconButton>

          <DrawerUI
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            SlideProps={{
              direction: "down",
              timeout: 400,
            }}
          >
            <Stack
              mb={7}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <NextLink href="/" passHref>
                <Button
                  onClick={() => handleLinkClick("/")}
                  sx={{ p: "0 !important", justifyContent: "flex-start" }}
                >
                  <Image src={isIpadView ? PiLogoMobile : PiLogo} alt="logo" />
                </Button>
              </NextLink>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: "custom.white1" }}
              >
                <ClearOutlinedIcon />
              </IconButton>
            </Stack>
            {[
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Case Studies", path: "/case-studies" },
              { label: "Careers", path: "/careers" },
            ].map(({ label, path }) => (
              <HoveredLink
                key={path}
                onClick={() => handleLinkClick(path)}
                className={isActivePath(path) ? "active" : ""}
                href={path}
              >
                {label}
              </HoveredLink>
            ))}
            <Box
              width={"fit-content"}
              sx={{
                "& a": {
                  justifyContent: isMobileView ? "center" : "flex-start",
                },
              }}
            >
              <OutlineBtnYellow href="/contact">GET IN TOUCH</OutlineBtnYellow>
            </Box>
          </DrawerUI>

          <OutlineBtnYellow
            sx={{ display: { xs: "none", lg: "flex" } }}
            href="/contact"
          >
            GET IN TOUCH
          </OutlineBtnYellow>
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  );
}
