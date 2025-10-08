"use client";

import dynamic from "next/dynamic";
import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AppServices,
  OuterGrid2,
  OutlineBtn,
  SmallFullStop,
  WebServicesGrid,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ArrowRightBlack from "../../../common/SVGIcons/arrowRightBlack";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constanst";

// 👇 Dynamically import browser-dependent components to prevent SSR errors
const LottiePlayer = dynamic(
  () => import("../../../home/lottiePlayer").then((mod) => mod.LottiePlayer),
  { ssr: false },
);

const LottieHoverHandler = dynamic(
  () => import("@/components/common/lottie-hover-handler"),
  { ssr: false },
);

const ObservedSection = dynamic(
  () => import("@/components/common/ObservedSection"),
  { ssr: false },
);

const services = [
  {
    title: SERVICES.SERVICES1,
    img: (
      <LottiePlayer
        src="https://lottie.host/48788e75-edba-49cd-bfad-c6aa8143f0c8/xpImWDl8HQ.lottie"
        hover
        autoplay={false}
        className="hoverLottie"
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES7,
    img: (
      <LottiePlayer
        src="https://lottie.host/dc3fde0d-22a3-4ad6-85aa-9ac38dcbe148/wZPuHWhSvN.lottie"
        hover
        autoplay={false}
        className="hoverLottie"
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES2,
    img: (
      <LottiePlayer
        src="https://lottie.host/d7fcaf9c-2e4d-401e-8e18-d39a1444aa8b/CNvMAqyicN.lottie"
        hover
        autoplay={false}
        className="hoverLottie"
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES3,
    img: (
      <LottiePlayer
        src="https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie"
        hover
        autoplay={false}
        className="hoverLottie"
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES4,
    img: (
      <LottiePlayer
        src="https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie"
        hover
        autoplay={false}
        className="hoverLottie"
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES5,
    img: (
      <LottiePlayer
        src="https://lottie.host/77fbd596-08ce-46ea-bef4-aa88852b3416/hMhWIRdi4u.lottie"
        hover
        autoplay={false}
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES6,
    img: (
      <LottiePlayer
        src="https://lottie.host/8e9bd347-1617-429c-8709-c0d39672d48f/iwYG9xLBfx.lottie"
        hover
        className="hoverLottie"
        autoplay={false}
        height="80"
        width="91"
      />
    ),
  },
  {
    title: SERVICES.SERVICES8,
    img: (
      <LottiePlayer
        src="https://lottie.host/87d7dad3-b487-4c22-bf0e-a123f3ad6821/oU8tQxgMx6.lottie"
        hover
        className="hoverLottie"
        autoplay={false}
        height="80"
        width="91"
      />
    ),
  },
];

export const Service = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <ObservedSection id="home7" bg="light">
      <Stack>
        <OuterGrid2
          paddingBottom={"0 !important"}
          container
          justifyContent={"space-between"}
          className="serviceOuterGrid"
        >
          <Grid
            size={{ xs: 12, lg: 9, xl: 8.3 }}
            offset={{ xs: 0, lg: 2, xl: 2.3 }}
          >
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, lg: 5 }}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Typography color="custom.black3" variant="body_4_600">
                    SERVICES
                    <SmallFullStop />
                  </Typography>
                  <Typography
                    color="custom.black"
                    variant="body_6"
                    display={"block"}
                    marginBottom={isMobileView ? "8px" : "24px"}
                  >
                    Web and{" "}
                    <br style={{ display: isTabletView ? "none" : "block" }} />
                    App Services
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, lg: 7 }} gap={5}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Stack gap={8}>
                    <Typography
                      color="custom.black"
                      display={"block"}
                      variant="body_3"
                    >
                      Every business has unique challenges. At Pi Techniques, we
                      build technology that adapts to you. Whether you’re an
                      individual, a growing business, or a global enterprise, we
                      partner with you to create solutions that fit your world.
                      From sleek websites to complex applications and agile
                      infrastructure, everything we build is designed to support
                      your goals and grow with you.
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            size={{ xs: 12, md: 12, lg: 9, xl: 9 }}
            offset={{ xs: 0, md: 0, lg: 2, xl: 2.3 }}
          >
            <Grid
              size={{ xs: 12 }}
              margin={"91px 0 71px"}
              padding={{ xs: "0px 24px", sm: "0" }}
              sx={{
                "dotlottie-player": {
                  height: "80px !important",
                  width: "91px !important",
                },
              }}
            >
              <WebServicesGrid container spacing={5}>
                {services.map((service, index) => (
                  <Grid
                    size={{ xs: 12, sm: 4, md: 3, lg: 2.4, xl: 2.4 }}
                    key={index}
                  >
                    <AppServices
                      href={`/services#service-${index}`}
                      className="hoverLottieParent"
                    >
                      <LottieHoverHandler />
                      {service.img}
                      <Typography
                        variant="body_10_500"
                        color="custom.gray_txt"
                        margin={"12px 0"}
                        display={"block"}
                      >
                        {service.title}
                      </Typography>
                    </AppServices>
                  </Grid>
                ))}
              </WebServicesGrid>

              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={{ xs: "flex-start", sm: "center" }}
              >
                <OutlineBtn
                  onClick={() => router.push("/contact")}
                  marginTop={"30px"}
                >
                  GET IN TOUCH <ArrowRightBlack />
                </OutlineBtn>
              </Stack>
            </Grid>
          </Grid>
        </OuterGrid2>
      </Stack>
    </ObservedSection>
  );
};
