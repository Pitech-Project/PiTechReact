"use client";

import { Grid, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import {
  ChipUI2,
  IconButtonUI,
  OuterGrid1,
  OutlineWhiteBtn,
  ServiceGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "../lottiePlayer";
import ArrowRightWhite from "@/components/common/SVGIcons/arrowRightWhite";
import ArrowForwardIcon from "@/components/common/SVGIcons/arrowForwardIcon";
import ScrollLottieHandler from "@/components/common/scroll-lottie-handler";

export const products = [
  {
    id: 1,
    name: SERVICES.SERVICES1,
    img: (
      <LottiePlayer src="https://lottie.host/e099a1fa-cc41-4a4c-b468-45d1efaabd08/ZI74c8HxKR.lottie" />
    ),
    description:
      "Custom application development tailored to meet your unique business needs. Our team of experienced developers combines technical expertise with creative problem-solving to deliver innovative and user-centric applications.",
    tags: [".NET C#", "JAVA FX", "WPF with MVM"],
  },
  {
    id: 2,
    name: SERVICES.SERVICES2,
    img: (
      <LottiePlayer src="https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie" />
    ),
    description:
      "High performance mobile applications, leveraging the latest technologies for seamless user experiences. Our end-to-end mobile development services ensure robust, scalable, and innovative solutions for both iOS and Android platforms.",
    tags: ["Database Integration & API", "DevExpress", "SQL BI"],
  },
  {
    id: 3,
    name: SERVICES.SERVICES3,
    img: (
      <LottiePlayer src="https://lottie.host/357aebd0-19ba-45bd-9058-dd4b9a2f8297/hr0mQTHeMm.lottie" />
    ),
    description:
      "Website development services, creating custom, high quality websites that enhance your online presence and drive business growth. Our expert team ensures responsive and user friendly designs tailored to our client needs.",
    tags: ["Networking", "Hardware", "Firewall", "Security", "Hosting"],
  },
  {
    id: 4,
    name: SERVICES.SERVICES4,
    img: (
      <LottiePlayer src="https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie" />
    ),
    description:
      "Intuitive and visually stunning interfaces that captivate and engage users. Our expert team prioritizes usability and aesthetics, ensuring that every design enhances your brands digital presence and delivers a seamless, enjoyable user experience.",
    tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: 5,
    name: SERVICES.SERVICES5,
    img: (
      <LottiePlayer src="https://lottie.host/5ddf6e19-2253-4413-a68a-4395b41fafd9/PyspVcKRLz.lottie" />
    ),
    description:
      "Transforming complex data into actionable insights for your business. Our solutions enable you to make informed decisions, optimize operational performance and identify growth opportunities, helping you stay ahead in a competitive market.",
    tags: ["Native iOS", "Native Android", "Xamarin"],
  },
  {
    id: 6,
    name: SERVICES.SERVICES6,
    img: (
      <LottiePlayer src="https://lottie.host/9274627e-7752-49fb-b054-f4d91750bf3e/sPhBzDgj8F.lottie" />
    ),
    description:
      "Secure and efficient management solutions tailored to your business needs. Our expert team ensures seamless operation and reliability, empowering your business to thrive in the digital landscape.",
    tags: ["MERN", "Angular JS", "MVC", "HTML 5", "Wordpress", "Woo Commerce"],
  },
];

export const Services = () => {
  const router = useRouter();
  const isMdView = useMediaQuery(`(max-width:767px)`);

  return (
    <Stack bgcolor={"custom.black2"}>
      <OuterGrid1 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 8, xl: 7.4 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SubTitlemarginBottom
              flexDirection={isMdView ? "column" : "row"}
              justifyContent={"space-between"}
              alignItems={isMdView ? "flex-start" : "center"}
            >
              <Stack width={"80%"}>
                <Typography color="custom.grey_700" variant="body_4_600">
                  SERVICES
                  <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.white2"
                  variant="body_6"
                  display={"block"}
                >
                  Strategy, design, and tech in action
                </Typography>
              </Stack>
              <OutlineWhiteBtn
                sx={{ marginTop: isMdView ? "48px" : "0" }}
                onClick={() => router.push("/services")}
              >
                VIEW ALL <ArrowRightWhite />
              </OutlineWhiteBtn>
            </SubTitlemarginBottom>
          </motion.div>
          <Grid
            container
            className=""
            spacing={isMdView ? 3 : 5}
            sx={{
              marginTop: "96px",
              "dotlottie-player": {
                height: "128px !important",
              },
            }}
          >
            <ScrollLottieHandler />
            {products.map((product, index) => (
              <ServiceGrid size={{ xs: 12, md: 6, lg: 6 }} key={product.id}>
                <Link onClick={() => router.push(`/services#service-${index}`)}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: product.id % 2 === 0 ? -100 : 100,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    {product.img}

                    <IconButtonUI
                      className="onHoverArrow"
                      aria-label="Go to Application Development"
                      onClick={() => router.push(`/services#service-${index}`)}
                    >
                      <ArrowForwardIcon />
                    </IconButtonUI>
                    <Typography
                      color="custom.white2"
                      variant="body_9_600"
                      display={"block"}
                      className="servicesName"
                      margin={isMdView ? "30px 0 16px" : "72px 0 24px"}
                    >
                      {product.name}
                    </Typography>

                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      rowGap={1}
                      columnGap={1}
                    >
                      {product.tags?.map((tag, idx) => (
                        <ChipUI2 key={idx}>{tag}</ChipUI2>
                      ))}
                    </Stack>
                  </motion.div>
                </Link>
              </ServiceGrid>
            ))}
          </Grid>
        </Grid>
      </OuterGrid1>
    </Stack>
  );
};
