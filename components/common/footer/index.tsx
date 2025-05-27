"use client";

import { Grid, Stack, Typography } from "@mui/material";
import {
  FooterOuterBox,
  LinkUI,
  LinkUI1,
  LinkUI2,
  SocialMediaIcons,
} from "@/styles/MUI/common.styled";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import FooterLogo from "../../../public/assets/img/footer-logo.svg";
import ScrollToTopButton from "../scroll-to-top";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
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
  return (
    <FooterOuterBox>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="44px"
      >
        <Image src={FooterLogo} alt="Footer logo" layout="intrinsic" />
        <ScrollToTopButton />
      </Stack>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6, lg: 3, xl: 2 }}>
          <LinkUI onClick={() => router.push("/about")}>About Us</LinkUI>
          <LinkUI onClick={() => router.push("/services")}>Services</LinkUI>
          <LinkUI onClick={() => router.push("/")}>Technologies</LinkUI>
        </Grid>

        <Grid size={{ xs: 6, lg: 3, xl: 2 }}>
          <LinkUI onClick={() => router.push("/case-studies")}>
            Case Studies
          </LinkUI>
          <LinkUI onClick={() => router.push("/")}>Blogs</LinkUI>
          <LinkUI onClick={() => router.push("/careers")}>Careers</LinkUI>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <LinkUI2>Get in touch</LinkUI2>
          <LinkUI href="tel:+91 22 6292 3333">+91 22 6292 3333</LinkUI>
          <LinkUI
            href="mailto:pitechniques@customersupport.com"
            sx={{ textDecoration: "underline" }}
          >
            pitechniques@customersupport.com
          </LinkUI>
        </Grid>

        <Grid size={{ xs: 12, lg: 12, xl: 3 }} className="TabletViewBorder">
          <Typography variant="body_3_400" color="custom.white2">
            61-63 C Mittal Tower, Nariman Point, Mumbai - 400021
          </Typography>
          <SocialMediaIcons
            flexDirection="row"
            alignItems="center"
            gap={3}
            marginTop="24px"
          >
            <FacebookRoundedIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </SocialMediaIcons>
        </Grid>
      </Grid>

      <Stack>
        <Grid
          container
          spacing={2}
          rowSpacing={4}
          paddingTop="32px"
          borderTop="1px solid"
          borderColor="custom.black3"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body_4_400" color="custom.white5">
              © 2024 Pi Techniques Pvt. Ltd. All rights reserved.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              flexDirection="row"
              flexWrap="wrap"
              gap={3}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <LinkUI1 href="#" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </LinkUI1>
              <LinkUI1 href="#" onClick={(e) => e.preventDefault()}>
                Terms & Conditions
              </LinkUI1>
              <LinkUI1 href="#" onClick={(e) => e.preventDefault()}>
                Copyright
              </LinkUI1>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </FooterOuterBox>
  );
};

export default Footer;
