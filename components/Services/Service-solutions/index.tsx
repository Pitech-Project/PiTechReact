import React from "react";
import { Box, Typography, Stack, useMediaQuery, Grid } from "@mui/material";
import { ChipUI2, OuterGrid4 } from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "@/components/home/lottiePlayer";
import ScrollLottieHandler from "@/components/common/scroll-lottie-handler";

const services = [
  {
    title: SERVICES.SERVICES1,
    img: (
      <LottiePlayer src="https://lottie.host/e099a1fa-cc41-4a4c-b468-45d1efaabd08/ZI74c8HxKR.lottie" />
    ),
    description:
      "Our application development is focused on solving real business challenges. With a sharp eye for usability and a passion for performance, we build streamlined, scalable apps that move with your business—fast, smart, and future-ready.",
    tags: [".NET C#", "JAVA FX", "WPF with MVM"],
  },
  {
    title: SERVICES.SERVICES2,
    img: (
      <LottiePlayer src="https://lottie.host/5ddf6e19-2253-4413-a68a-4395b41fafd9/PyspVcKRLz.lottie" />
    ),
    description:
      "Harness the power of advanced analytics to drive measurable business outcomes. Our BI solutions deliver precision, visibility, and control — giving leaders the confidence to act with speed and accuracy in an evolving market.",
    tags: ["Database Integration & API", "DevExpress", "SQL BI"],
  },
  {
    title: SERVICES.SERVICES3,
    img: (
      <LottiePlayer src="https://lottie.host/9274627e-7752-49fb-b054-f4d91750bf3e/sPhBzDgj8F.lottie" />
    ),
    description:
      "We design IT infrastructure that evolves with your business. From cloud-native architecture to seamless network performance, we ensure a reliable, secure, and always-on environment built for scale and speed.",
    tags: ["Networking", "Hardware", "Firewall", "Security", "Hosting"],
  },
  {
    title: SERVICES.SERVICES4,
    img: (
      <LottiePlayer src="https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie" />
    ),
    description:
      "We craft intuitive digital experiences that don’t just look good—they feel right. Every pixel is placed with purpose, blending aesthetic brilliance with seamless functionality. Your application deserves design that’s as bold as your vision.",
    tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: SERVICES.SERVICES5,
    img: (
      <LottiePlayer src="https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie" />
    ),
    description:
      "We craft sleek, high-impact mobile apps that don’t just function—they flow. Built with cutting-edge tech and serious design chops, our iOS and Android apps are smooth, scalable, and ready to wow. Whether it's a bold startup or a big idea, we turn screens into seamless experiences.",
    tags: ["Native iOS", "Native Android", "Xamarin"],
  },
  {
    title: SERVICES.SERVICES6,
    img: (
      <LottiePlayer src="https://lottie.host/357aebd0-19ba-45bd-9058-dd4b9a2f8297/hr0mQTHeMm.lottie" />
    ),
    description:
      "We don’t just build websites — we craft digital playgrounds that look stunning, work flawlessly, and convert effortlessly. Whether you're a startup or scaling up, our team blends design, tech, and strategy to deliver custom, high-performance web experiences that set you apart. Fully responsive, mobile-first, and built for tomorrow.",
    tags: ["MERN", "Angular JS", "MVC", "HTML 5", "Wordpress", "Woo Commerce"],
  },
];

const ServicesSolution = () => {
  const isMdView = useMediaQuery(`(max-width:767px)`);
  return (
    <Box bgcolor={"custom.black2"}>
      <OuterGrid4 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 11, xl: 6.2 }}
          offset={{ xs: 0, lg: 1, xl: 3 }}
          sx={{
            "& .service-motion:first-of-type .mt--0": {
              marginTop: 0,
            },
          }}
        >
          <ScrollLottieHandler />
          {services.map((service, index) => (
            <motion.div
              className="service-motion"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
            >
              <Stack
                id={`service-${index}`}
                flexDirection={isMdView ? "column" : "row"}
                alignItems={isMdView ? "flex-start" : "center"}
                justifyContent={"space-between"}
                gap={"80px"}
                sx={{
                  marginTop: "96px",
                  "dotlottie-player": {
                    width: "180px !important",
                  },
                }}
                className="mt--0"
              >
                <Box>{service.img}</Box>
                <Box>
                  <Typography
                    variant="body_11"
                    display={"block"}
                    color="custom.white2"
                    gutterBottom
                    marginBottom={0}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body_10"
                    display={"block"}
                    margin={"32px 0 16px"}
                    color="custom.grey_700"
                    gutterBottom
                  >
                    {service.description}
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    rowGap={1}
                    columnGap={1}
                  >
                    {service.tags.map((tag, idx) => (
                      <ChipUI2 key={idx}>{tag}</ChipUI2>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          ))}
        </Grid>
      </OuterGrid4>
    </Box>
  );
};

export default ServicesSolution;
