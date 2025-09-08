"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  IndustriesGrid,
  OuterGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { LottiePlayer } from "@/components/home/lottiePlayer";
import ScrollLottieHandler from "@/components/common/scroll-lottie-handler";

export const industries = [
  {
    id: 1,
    name: (
      <>
        Maritime <br /> Tech
      </>
    ),
    img: (
      <LottiePlayer src="https://lottie.host/61bfe07e-bc87-4bfc-8765-46ba87f188e5/S2Skt6YyBd.lottie" />
    ),
  },
  {
    id: 2,
    name: "Omnichannel & Retail Experience",
    img: (
      <LottiePlayer src="https://lottie.host/381f9853-1565-4e45-96b0-60a94425a659/OfI6ZJfv6Z.lottie" />
    ),
  },
  {
    id: 3,
    name: "Print Innovation & Smart Packaging",
    img: (
      <LottiePlayer src="https://lottie.host/563b649c-66d9-421f-a45b-6b32d60f0bb9/g48UbLMH5S.lottie" />
    ),
  },
  {
    id: 4,
    name: "Tech-Enabled Service Providers",
    img: (
      <LottiePlayer src="https://lottie.host/08ec936f-e1d4-49ab-a2e7-cd7c5d1185f7/RzKUcbaH1X.lottie" />
    ),
  },
  {
    id: 5,
    name: "Digital Commerce & Online Marketplace",
    img: (
      <LottiePlayer src="https://lottie.host/6fd22f27-b026-4dfb-b122-925a4df9af58/y3sPafP3En.lottie" />
    ),
  },
  {
    id: 6,
    name: "LegalTech & Digital Compliance",
    img: (
      <LottiePlayer src="https://lottie.host/366b1f4b-11d9-435d-b40d-dadd905d4a30/l6bhG2Lut9.lottie" />
    ),
  },
  {
    id: 7,
    name: "Fashion, Lifestyle & Digital Brands",
    img: (
      <LottiePlayer src="https://lottie.host/ec144433-6a5c-43f1-9005-d8754d340c77/V3LsYABBns.lottie" />
    ),
  },
  {
    id: 8,
    name: "EdTech & Learning Solutions",
    img: (
      <LottiePlayer src="https://lottie.host/19b089e1-ba02-4447-ac82-7330c7384bf1/ZxF7hlHfiR.lottie" />
    ),
  },
];

export const KeyIndustries = () => {
  return (
    <>
      <ScrollLottieHandler />
      <Stack bgcolor={"custom.black2"}>
        <OuterGrid container spacing={2}>
          <Grid
            size={{ xs: 12, lg: 9, xl: 8.3 }}
            offset={{ xs: 0, lg: 2, xl: 2.3 }}
          >
            <SubTitlemarginBottom>
              <Typography color="custom.grey_700" variant="body_4_600">
                key industries
                <SmallFullStop />
              </Typography>
              <Typography
                color="custom.white2"
                variant="body_6"
                display={"block"}
              >
                Technology crafted for every sector
              </Typography>
            </SubTitlemarginBottom>
            <Grid
              container
              spacing={5}
              display={"flex"}
              justifyContent={"flex-start"}
            >
              {industries.map((industries) => (
                <IndustriesGrid
                  size={{ xs: 12, sm: 6, md: 4, xl: 3 }}
                  key={industries.id}
                >
                  {/* <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                > */}
                  <Box className="IndustriesBox">
                    {industries.img}
                    <Typography
                      color="custom.white2"
                      variant="body_9_600"
                      display={"block"}
                      margin={"20px 0 0px"}
                    >
                      {industries.name}
                    </Typography>
                  </Box>

                  {/* </motion.div> */}
                </IndustriesGrid>
              ))}
            </Grid>
          </Grid>
        </OuterGrid>
      </Stack>
    </>
  );
};
