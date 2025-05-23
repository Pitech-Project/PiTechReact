import React from "react";
import { Box, Typography, Stack, useMediaQuery, Grid } from "@mui/material";
import { ChipUI2, OuterGrid } from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "@/components/home/lottiePlayer";

const services = [
  {
    title: SERVICES.SERVICES1,
    img: <LottiePlayer src="https://lottie.host/e099a1fa-cc41-4a4c-b468-45d1efaabd08/ZI74c8HxKR.lottie" />,
    description:
      "Pi Techniques provides comprehensive application development services, crafting innovative and user-centric software solutions tailored to your specific business requirements. Our expert team leverages the latest technologies to deliver scalable, robust, and efficient applications that enhance your operational efficiency and drive business growth.",
    tags: [".NET C#", "JAVA FX", "WPF with MVM"],
  },
  {
    title: SERVICES.SERVICES5,
    img: <LottiePlayer src="https://lottie.host/5ddf6e19-2253-4413-a68a-4395b41fafd9/PyspVcKRLz.lottie" />,
    description:
      "Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.",
    tags: ["Database Integration & API", "DevExpress", "SQL BI"],
  },
  {
    title: SERVICES.SERVICES6,
    img: <LottiePlayer src="https://lottie.host/9274627e-7752-49fb-b054-f4d91750bf3e/sPhBzDgj8F.lottie" />,
    description:
      "Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.",
    tags: ["Networking", "Hardware", "Firewall", "Security", "Hosting"],
  },
  {
    title: SERVICES.SERVICES4,
    img: <LottiePlayer src="https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie" />,
    description:
      "Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.",
    tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: SERVICES.SERVICES2,
    img: <LottiePlayer src="https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie" />,
    description:
      "Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.",
    tags: ["Native iOS", "Native Android", "Xamarin"],
  },
  {
    title: SERVICES.SERVICES3,
    img: <LottiePlayer src="https://lottie.host/357aebd0-19ba-45bd-9058-dd4b9a2f8297/hr0mQTHeMm.lottie" />,
    description:
      "Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.",
    tags: ["MERN", "Angular JS", "MVC", "HTML 5", "Wordpress", "Woo Commerce"],
  },
];

const ServicesSolution = () => {
  const isMdView = useMediaQuery(`(max-width:768px)`);
  return (
    <Box bgcolor={"custom.black2"}>
      <OuterGrid
        container
        spacing={5}
        justifyContent={"space-between"}
      >
        <Grid size={{ xs: 12, lg: 11, xl: 9 }} offset={{ xs: 0, lg: 1, xl: 2 }}>
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
            >
              <Stack
                flexDirection={isMdView ? "column" : "row"}
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                sx={{marginTop: "96px", "dotlottie-player":{width: '200px !important'}}}
              >
                {service.img}
                <Box width={isMdView ? "100%" : "67%"}>
                  <Typography
                    variant="count"
                    display={"block"}
                    textAlign={"left"}
                    marginTop={isMdView ? "80px" : "0px"}
                    fontWeight="500"
                    color="custom.white2"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="Caption"
                    display={"block"}
                    marginTop={isMdView ? "32px" : "72px"}
                    color="custom.white3"
                    gutterBottom
                  >
                    {service.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    rowGap={1}
                    mt={4}
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
      </OuterGrid>
    </Box>
  );
};

export default ServicesSolution;
