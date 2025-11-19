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
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {
  AppBarStyled,
  ArrowDesign,
  DrawerUI,
  HeaderGrid,
  RightTopArrow,
} from "@/styles/MUI/common.styled";
import PiLogo from "../../../public/assets/img/header-logo.svg";
import PiLogoMobile from "@/public/assets/img/logo-mobile.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useRouter } from "next/navigation";
import arrowRight from "@/public/assets/img/newRightArrow.svg";

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
  const isIpadView = useMediaQuery(theme.breakpoints.down("lg"));

  const noHeaderPaths = [
    "/login",
    "/dashboard",
    "/job-list",
    "/add-job",
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
      <AppBarStyled>
        <Grid container spacing={2} maxWidth={"100%"} width={"100%"}>
          <HeaderGrid
            size={{ xs: 12, lg: 8 }}
            offset={{ xs: 0, lg: 2, xl: 1.95 }}
            className="headerUI"
          >
            <Toolbar sx={{}}>
              <HoveredLink
                className={
                  isActivePath("/") ? "active headerlogo" : "headerlogo"
                }
                href="/"
              >
                <Image
                  src={isIpadView ? PiLogoMobile : PiLogo}
                  alt="logo"
                  style={{ height: "42px", width: "auto" }}
                />
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
                  About us
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
                  Case studies
                </HoveredLink>
                <HoveredLink
                  className={
                    isActivePath(["/careers", "/career-details"])
                      ? "active"
                      : ""
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
                sx={{
                  display: { lg: "none" },
                  color: "custom.orange_600",
                  padding: 0,
                  marginRight: 0,
                }}
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
                <Stack>
                  <NextLink href="/" passHref>
                    <Button
                      onClick={() => handleLinkClick("/")}
                      sx={{ p: "0 !important", justifyContent: "flex-start" }}
                    >
                      <Image
                        src={isIpadView ? PiLogoMobile : PiLogo}
                        alt="logo"
                      />
                    </Button>
                  </NextLink>
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                      color: "custom.white1",
                      padding: 0,
                      "& svg": { width: "32px", height: "32px" },
                    }}
                  >
                    <ClearOutlinedIcon />
                  </IconButton>
                </Stack>
                {[
                  { label: "ABOUT US", path: "/about" },
                  { label: "Services", path: "/services" },
                  {
                    label: "Case Studies",
                    path: ["/case-studies", "/case-studie-details"],
                  },
                  { label: "Careers", path: ["/careers", "career-details"] },
                ].map(({ label, path }) => {
                  const key = Array.isArray(path) ? path.join(",") : path;

                  return (
                    <HoveredLink
                      key={key}
                      onClick={() => handleLinkClick(key)}
                      className={isActivePath(path) ? "active" : ""}
                      href={Array.isArray(path) ? path[0] : path}
                    >
                      {label}
                    </HoveredLink>
                  );
                })}
                <Box>
                  {/* <OutlineBtnYellow href="/contact">
                    GET IN TOUCH
                  </OutlineBtnYellow> */}
                  <RightTopArrow
                    sx={{ height: "48px" }}
                    href="/contact#getintouch"
                    disableRipple
                    disableElevation
                  >
                    <Typography
                      fontSize={"18px"}
                      fontWeight={500}
                      color="custom.white2"
                    >
                      Get in touch
                    </Typography>
                    <ArrowDesign>
                      <Image src={arrowRight} alt="Right Arrow" />
                    </ArrowDesign>
                  </RightTopArrow>
                </Box>
              </DrawerUI>

              <RightTopArrow
                sx={{ display: { xs: "none", lg: "flex" }, height: "auto" }}
                href="/contact#getintouch"
                disableRipple
              >
                <Typography
                  fontSize={"18px"}
                  fontWeight={500}
                  color="custom.white2"
                >
                  Get in touch
                </Typography>
                <ArrowDesign>
                  <Image src={arrowRight} alt="Right Arrow" />
                </ArrowDesign>
              </RightTopArrow>
            </Toolbar>
          </HeaderGrid>
        </Grid>
      </AppBarStyled>
    </HideOnScroll>
  );
}
