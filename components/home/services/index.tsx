"use client";

import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {
  OuterSection,
  OutlineWhiteBtn,
  ServiceGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "../lottiePlayer";

interface Props {
  transformup?: boolean;
}

export const products = [
  {
    id: 1,
    name: SERVICES.SERVICES1,
    img:  <LottiePlayer src="https://lottie.host/e099a1fa-cc41-4a4c-b468-45d1efaabd08/ZI74c8HxKR.lottie" />,
    description:
      "Custom application development tailored to meet your unique business needs. Our team of experienced developers combines technical expertise with creative problem-solving to deliver innovative and user-centric applications.",
  },
  {
    id: 2,
    name: SERVICES.SERVICES2,
    img: <LottiePlayer src="https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie" />,
    description:
      "High performance mobile applications, leveraging the latest technologies for seamless user experiences. Our end-to-end mobile development services ensure robust, scalable, and innovative solutions for both iOS and Android platforms.",
  },
  {
    id: 3,
    name: SERVICES.SERVICES3,
    img: <LottiePlayer src="https://lottie.host/357aebd0-19ba-45bd-9058-dd4b9a2f8297/hr0mQTHeMm.lottie" />,
    description:
      "Website development services, creating custom, high quality websites that enhance your online presence and drive business growth. Our expert team ensures responsive and user friendly designs tailored to our client needs.",
  },
  {
    id: 4,
    name: SERVICES.SERVICES4,
    img: <LottiePlayer src="https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie" />,
    description:
      "Intuitive and visually stunning interfaces that captivate and engage users. Our expert team prioritizes usability and aesthetics, ensuring that every design enhances your brands digital presence and delivers a seamless, enjoyable user experience.",
  },
  {
    id: 5,
    name: SERVICES.SERVICES5,
    img: <LottiePlayer src="https://lottie.host/5ddf6e19-2253-4413-a68a-4395b41fafd9/PyspVcKRLz.lottie" />,
    description:
      "Transforming complex data into actionable insights for your business. Our solutions enable you to make informed decisions, optimize operational performance and identify growth opportunities, helping you stay ahead in a competitive market.",
  },
  {
    id: 6,
    name: SERVICES.SERVICES6,
    img: <LottiePlayer src="https://lottie.host/9274627e-7752-49fb-b054-f4d91750bf3e/sPhBzDgj8F.lottie" />,
    description:
      "Secure and efficient management solutions tailored to your business needs. Our expert team ensures seamless operation and reliability, empowering your business to thrive in the digital landscape.",
  },
];

export const Services = ({ transformup }: Props) => {
  const router = useRouter();
  const isMdView = useMediaQuery(`(max-width:768px)`);

  return (
    <Stack bgcolor={"custom.black2"}>
      <OuterSection sx={{ gap: 0 }}>
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
            <Stack width={isMdView ? "100%" : "560px"}>
              <Typography
                color="custom.white4"
                variant="body_4_600"
                marginBottom={2}
                letterSpacing={"2.4px"}
                display={"block"}
              >
                SERVICES <SmallFullStop />
              </Typography>
              <Typography
                color="custom.white2"
                variant="body_6"
                display={"block"}
              >
                Technology solutions offered
              </Typography>
            </Stack>
            <OutlineWhiteBtn
              sx={{ marginTop: isMdView ? "48px" : "0" }}
              onClick={() => router.push("/services")}
              transformup={transformup}
            >
              VIEW ALL <CallMadeIcon sx={{ marginLeft: "8px", height: 16 }} />
            </OutlineWhiteBtn>
          </SubTitlemarginBottom>
        </motion.div>

        <Grid container className="" spacing={isMdView ? 3 : 5}>
          {products.map((product) => (
            <ServiceGrid size={{ xs: 12, md: 6, lg: 6 }} key={product.id}>
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
                <Typography
                  color="custom.white2"
                  variant="body_5"
                  display={"block"}
                  margin={isMdView ? "30px 0 16px" : "50px 0 24px"}
                >
                  {product.name}
                </Typography>
             
                <Typography color="custom.white2">
                  {product.description}
                </Typography>
              </motion.div>
            </ServiceGrid>
          ))}
        </Grid>
      </OuterSection>
    </Stack>
  );
};
