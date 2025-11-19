"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  AddressTypography,
  Copyright,
  FooterLeft,
  FooterLeftPanel,
  FooterNewUI,
  FooterOuterBox,
  FooterRight,
  FooterRightPanel,
  SocialMediaIcons,
} from "@/styles/MUI/common.styled";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HoveredLink } from "../header/navbar-menu";
import PiLogo from "../../../public/assets/img/header-logo.svg";
import LinkedinIcon from "../SVGIcons/linkedinIcon";

const Footer = () => {
  const pathname = usePathname();
  const noHeaderPaths = [
    "/login",
    "/dashboard",
    "/job-list",
    "/add-job",
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
  return (
    <>
      <FooterOuterBox>
        <Grid container>
          <Grid size={{ xs: 12, lg: 8, xl: 8 }} offset={{ lg: 1.95, xl: 1.95 }}>
            <FooterNewUI>
              <Stack
                direction={{ xs: "column", md: "row" }}
                gap={{ xs: 0, sm: 0, md: 5, lg: 2 }}
                justifyContent="space-between"
              >
                <FooterLeftPanel>
                  <FooterLeft>
                    <Typography
                      variant="secTitle"
                      color="custom.white2"
                      display={"block"}
                    >
                      Company
                    </Typography>
                    <HoveredLink
                      className={
                        isActivePath("/about")
                          ? "active FooterLink"
                          : "FooterLink"
                      }
                      href="/about"
                    >
                      About Us
                    </HoveredLink>
                    <HoveredLink
                      className={
                        isActivePath("/services")
                          ? "active FooterLink"
                          : "FooterLink"
                      }
                      href="/services"
                    >
                      Services
                    </HoveredLink>
                    <HoveredLink
                      className={
                        isActivePath(["/case-studies", "/case-studie-details"])
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
                  </FooterLeft>
                  <Box>
                    <Typography className="blankLI"></Typography>
                    <HoveredLink
                      className={
                        isActivePath("/privacy-policy")
                          ? "active FooterLink"
                          : "FooterLink"
                      }
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </HoveredLink>
                    <HoveredLink
                      className={
                        isActivePath("/terms-of-use")
                          ? "active FooterLink"
                          : "FooterLink"
                      }
                      href="/terms-of-use"
                    >
                      Terms of Use
                    </HoveredLink>
                    <HoveredLink
                      className={
                        isActivePath("/data-protection")
                          ? "active FooterLink"
                          : "FooterLink"
                      }
                      href="/data-protection"
                    >
                      Data Protection & Cookie Statement
                    </HoveredLink>
                  </Box>
                </FooterLeftPanel>

                <FooterRightPanel>
                  <FooterRight>
                    <Typography
                      variant="secTitle"
                      color="custom.white2"
                      display={"block"}
                    >
                      Contact
                    </Typography>
                    {/* <FooterRightPanel> */}
                    <HoveredLink
                      href="mailto:enquiry@pitechniques.com"
                      className="FooterLink"
                    >
                      enquiry@pitechniques.com
                    </HoveredLink>
                    <HoveredLink
                      href="tel:+91 22 6292 3333"
                      className="FooterLink"
                    >
                      +91 22 6292 3333
                    </HoveredLink>
                    <Box display={{ xs: "none", md: "block" }}>
                      <HoveredLink className="footerlogo" href="/">
                        <Image src={PiLogo} alt="logo" />
                      </HoveredLink>
                    </Box>
                  </FooterRight>
                  <Box
                    className="address"
                    display={{ xs: "none", md: "block" }}
                  >
                    <Box>
                      <Typography
                        variant="secTitle"
                        color="custom.white2"
                        display={"block"}
                      >
                        Address
                      </Typography>
                      <AddressTypography
                        variant="body_10"
                        color="custom.gray_txt"
                      >
                        61/63C Mittal Tower, <br></br>Nariman Point, Mumbai -
                        400021
                      </AddressTypography>
                      <SocialMediaIcons
                        href="https://in.linkedin.com/company/pi-techniques"
                        target="_blank"
                      >
                        <LinkedinIcon />
                      </SocialMediaIcons>
                    </Box>
                  </Box>

                  {/* </FooterRightPanel> */}
                </FooterRightPanel>
              </Stack>
              <Box className="addresstab" display={{ xs: "block", md: "none" }}>
                <Box>
                  <Typography
                    variant="secTitle"
                    color="custom.white2"
                    display={"block"}
                  >
                    Address
                  </Typography>
                  <AddressTypography variant="body_10" color="custom.gray_txt">
                    61/63C Mittal Tower, <br style={{ display: "block" }}></br>
                    Nariman Point, Mumbai - 400021
                  </AddressTypography>
                  <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <HoveredLink className="footerlogo" href="/">
                      <Image src={PiLogo} alt="logo" />
                    </HoveredLink>
                    <SocialMediaIcons
                      href="https://in.linkedin.com/company/pi-techniques"
                      target="_blank"
                    >
                      <LinkedinIcon />
                    </SocialMediaIcons>
                  </Stack>
                </Box>
              </Box>
              <Copyright>
                <Typography className="copyrightIcon" component="span">
                  ©{" "}
                </Typography>{" "}
                2025 Pi Techniques Pvt. Ltd. All rights reserved.
              </Copyright>
            </FooterNewUI>
          </Grid>
        </Grid>
        {/* <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="44px"
        >
          <HoveredLink className={isActivePath("/") ? "active" : ""} href="/">
            <Image src={FooterLogo} alt="Footer logo" />
          </HoveredLink>
        </Stack>

        <FooterUI>
          <Box>
            <Typography
              variant="body_10"
              color="custom.white2"
              display={"block"}
              marginBottom={"32px"}
            >
              Company
            </Typography>
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
                    isActivePath("/services")
                      ? "active FooterLink"
                      : "FooterLink"
                  }
                  href="/services"
                >
                  Services
                </HoveredLink>
              </Box>
              <Box>
                <HoveredLink
                  className={
                    isActivePath(["/case-studies", "/case-studie-details"])
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
          </Box>

          <Box>
            <Typography
              variant="body_10"
              color="custom.white2"
              display={"block"}
              marginBottom={"32px"}
              marginTop={isMobileView ? "28px" : "0"}
            >
              Get in touch
            </Typography>
            <FooterRightPanel>
              <Stack spacing={isMobileView ? 2 : 3.5}>
                <LinkUI href="tel:+91 22 6292 3333">+91 22 6292 3333</LinkUI>
                <LinkUI
                  href="mailto:enquiry@pitechniques.com"
                  sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  enquiry@pitechniques.com
                </LinkUI>
              </Stack>
              <Box className="TabletViewBorder">
                <AddressTypography variant="body_10" color="custom.white3">
                  61-63 C Mittal Tower, <br></br>Nariman Point,<br></br> Mumbai
                  - 400021
                </AddressTypography>
                <SocialMediaIcons
                  href="https://in.linkedin.com/company/pi-techniques"
                  target="_blank"
                >
                  <LinkedInIcon />
                </SocialMediaIcons>
              </Box>
            </FooterRightPanel>
          </Box>
        </FooterUI>

        <Copyright>
          <Typography className="copyrightIcon" component="span">
            ©
          </Typography>{" "}
          2025 Pi Techniques Pvt. Ltd. All rights reserved.
        </Copyright> */}
      </FooterOuterBox>
    </>
  );
};

export default Footer;
