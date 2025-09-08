"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  Copyright,
  FooterLeftPanel,
  FooterOuterBox,
  FooterRightPanel,
  FooterTopSpacing,
  FooterUI,
  LinkUI,
  SocialMediaIcons,
} from "@/styles/MUI/common.styled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import FooterLogo from "../../../public/assets/img/footer-logo.svg";
import ScrollToTopButton from "../scroll-to-top";
import { usePathname } from "next/navigation";
import { HoveredLink } from "../header/navbar-menu";

const Footer = () => {
  const pathname = usePathname();
  const noHeaderPaths = [
    "/login",
    "/dashboard",
    "/career-form-enquiry",
    "/contact-form-enquiry",
  ];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);

  if (!shouldShowHeader) {
    return null;
  }

  const isActivePath = (paths: string | string[]) => {
    const pathList = Array.isArray(paths) ? paths : [paths];
    return pathList.some(
      (path) => pathname === path || pathname.startsWith(path),
    );
  };
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <FooterTopSpacing className="FooterTopSpacing"></FooterTopSpacing>
      <FooterOuterBox>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="44px"
        >
          <Image src={FooterLogo} alt="Footer logo" />
          <ScrollToTopButton />
        </Stack>

        <FooterUI>
          <FooterLeftPanel>
            <Box>
              <HoveredLink
                className={
                  isActivePath("/about") ? "active FooterLink" : "FooterLink"
                }
                href="/about"
              >
                About Us
              </HoveredLink>
              <HoveredLink
                className={
                  isActivePath("/services") ? "active FooterLink" : "FooterLink"
                }
                href="/services"
              >
                Services
              </HoveredLink>
            </Box>
            <Box>
              <HoveredLink
                className={
                  isActivePath("/case-studies")
                    ? "active FooterLink"
                    : "FooterLink"
                }
                href="/case-studies"
              >
                Case Studies
              </HoveredLink>
              <HoveredLink
                className={
                  isActivePath(["/careers", "/career-details"])
                    ? "active FooterLink"
                    : "FooterLink"
                }
                href="/careers"
              >
                Careers
              </HoveredLink>
            </Box>
          </FooterLeftPanel>

          <FooterRightPanel>
            <Stack spacing={isMobileView ? 2 : 3.5}>
              <Typography variant="body_10" color="custom.white2">
                Get in touch
              </Typography>
              <LinkUI href="tel:+91 22 6292 3333">+91 22 6292 3333</LinkUI>
              <LinkUI
                href="mailto:enquiry@pitechniques.com"
                sx={{ textDecoration: "underline" }}
              >
                enquiry@pitechniques.com
              </LinkUI>
            </Stack>
            <Box className="TabletViewBorder">
              <Typography variant="body_10" color="custom.white3">
                61-63 C Mittal Tower, <br></br>Nariman Point,<br></br> Mumbai -
                400021
              </Typography>
              <SocialMediaIcons
                flexDirection="row"
                alignItems="center"
                gap={3}
                marginTop="32px"
                href="https://in.linkedin.com/company/pi-techniques"
                target="_blank"
              >
                <LinkedInIcon />
              </SocialMediaIcons>
            </Box>
          </FooterRightPanel>
        </FooterUI>

        <Copyright>
          © 2025 Pi Techniques Pvt. Ltd. All rights reserved.
        </Copyright>
      </FooterOuterBox>
    </>
  );
};

export default Footer;
