"use client";

import { Grid, Stack, Typography } from "@mui/material";
import {
  AppServices,
  OuterGrid2,
  OutlineBtn,
  SmallFullStop,
  WebServicesStack,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ArrowRightBlack from "../../common/SVGIcons/arrowRightBlack";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "../lottiePlayer";
import LottieHoverHandler from "@/components/common/lottie-hover-handler";

const services = [
  {
    title: SERVICES.SERVICES1,
    img: (
      <LottiePlayer
        src="https://lottie.host/48788e75-edba-49cd-bfad-c6aa8143f0c8/xpImWDl8HQ.lottie"
        hover
      />
    ),
  },
  {
    title: SERVICES.SERVICES2,
    img: (
      <LottiePlayer
        src="https://lottie.host/d7fcaf9c-2e4d-401e-8e18-d39a1444aa8b/CNvMAqyicN.lottie"
        hover
      />
    ),
  },
  {
    title: SERVICES.SERVICES3,
    img: (
      <LottiePlayer
        src="https://lottie.host/8e9bd347-1617-429c-8709-c0d39672d48f/iwYG9xLBfx.lottie"
        hover
      />
    ),
  },
  {
    title: SERVICES.SERVICES4,
    img: (
      <LottiePlayer
        src="https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie"
        hover
      />
    ),
  },
  {
    title: SERVICES.SERVICES5,
    img: (
      <LottiePlayer
        src="https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie"
        hover
      />
    ),
  },
  {
    title: SERVICES.SERVICES6,
    img: (
      <LottiePlayer
        src="https://lottie.host/77fbd596-08ce-46ea-bef4-aa88852b3416/hMhWIRdi4u.lottie"
        hover
      />
    ),
  },
];

export const Service = () => {
  const router = useRouter();
  return (
    <Stack>
      <OuterGrid2
        paddingBottom={"0 !important"}
        container
        justifyContent={"space-between"}
      >
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 5 }}>
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
                  marginBottom={"24px"}
                >
                  Web and<br></br> App Services
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} gap={5}>
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
          <Grid
            size={{ xs: 12 }}
            margin={"91px 0 71px"}
            sx={{
              "dotlottie-player": {
                height: "80px !important",
                width: "100% !important",
              },
            }}
          >
            <WebServicesStack>
              <LottieHoverHandler />
              {services.map((service, index) => (
                <AppServices key={index} href={`/services#service-${index}`}>
                  {service.img}
                  <Typography
                    variant="body_10_500"
                    color="custom.gray_txt"
                    textAlign={"center"}
                    margin={"12px 0"}
                    display={"block"}
                  >
                    {service.title}
                  </Typography>
                </AppServices>
              ))}
            </WebServicesStack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
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
  );
};
