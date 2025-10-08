import React, { useState } from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import {
  ChipUI2,
  ClientsServed,
  LogoGroup,
  OuterGrid4,
  StackServicesSetions,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { LOTTIEANIMATION, SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "@/components/home/lottiePlayer";
import ScrollLottieHandler from "@/components/common/scroll-lottie-handler";
import vGroup from "../../../public/assets/img/Services/v-logo.png";
import TajLogo from "../../../public/assets/img/Services/Taj-logo.png";
import ChankyaLogo from "../../../public/assets/img/Services//chanakya-logo.png";
import Image from "next/image";
import ArrowRightWhite from "@/components/common/SVGIcons/arrowRightWhite";

const services = [
  {
    title: SERVICES.SERVICES1,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer1}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Our application development is focused on solving real business challenges. With a sharp eye for usability and a passion for performance, we build streamlined, scalable apps that move with your business—fast, smart, and future-ready.",
    tags: [
      "MERN",
      "MEAN",
      "Enterprise .NET + SQL",
      "Java Solutions",
      "AI & Automation",
      "Data & Messaging",
    ],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES7,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer7}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description: (
      <>
        <Typography
          variant="body_10_1"
          color="custom.grey_700"
          mb={2}
          display={"block"}
        >
          We design and build intelligent solutions powered by leading
          generative AI models—both open-source and enterprise-grade. From
          conversational chatbots that streamline customer interactions to
          agentic AI agents that automate complex workflows, our team turns the
          latest AI capabilities into practical business tools.
        </Typography>
        <Typography variant="body_10_1" color="custom.grey_700">
          Whether it’s enhancing customer experience, boosting operational
          efficiency, or enabling smarter decision-making, we make AI work for
          you.
        </Typography>
      </>
    ),
    tags: [
      "OpenAI (GPT Models)",
      "Ollama",
      "LangChain",
      "Llama 2",
      "RAG",
      "Hugging Face",
    ],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES2,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer2}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Harness the power of advanced analytics to drive measurable business outcomes. Our BI solutions deliver precision, visibility, and control — giving leaders the confidence to act with speed and accuracy in an evolving market.",
    tags: [
      "ETL & Data Pipelines",
      "PowerBI",
      "SQLBI",
      "DevExpress",
      "Database Integration & API",
    ],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES3,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer3}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "We design IT infrastructure that evolves with your business. From cloud-native architecture to seamless network performance, we ensure a reliable, secure, and always-on environment built for scale and speed.",
    tags: ["Networking", "Hardware", "Firewall", "Security", "Hosting"],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES4,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer4}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "We craft intuitive digital experiences that don’t just look good—they feel right. Every pixel is placed with purpose, blending aesthetic brilliance with seamless functionality. Your application deserves design that’s as bold as your vision.",
    tags: [
      "Native iOS",
      "Native Android",
      "Xamarin",
      "React Native",
      "App Store & Play Store Deployment",
    ],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES5,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer5}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "We craft sleek, high-impact mobile apps that don’t just function—they flow. Built with cutting-edge tech and serious design chops, our iOS and Android apps are smooth, scalable, and ready to wow. Whether it's a bold startup or a big idea, we turn screens into seamless experiences.",
    tags: [
      "Angular JS",
      "Next.js",
      "MVC",
      "HTML5 & CSS3",
      "Wordpress",
      "Woo Commerce",
      "SEO & Performance Optimization",
    ],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES6,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer6}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "We don’t just build websites — we craft digital playgrounds that look stunning, work flawlessly, and convert effortlessly. Whether you're a startup or scaling up, our team blends design, tech, and strategy to deliver custom, high-performance web experiences that set you apart. Fully responsive, mobile-first, and built for tomorrow.",
    tags: [
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "Containerization & Orchestration",
      "Networking",
      "Hardware",
      "Firewall",
      "Security",
      "Hosting",
    ],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
  {
    title: SERVICES.SERVICES8,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer8}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Your applications work better when they work together. We unify them into an intelligent ecosystem that reduces friction, enhances collaboration, and helps your business move with greater speed and agility.",
    tags: ["Zoho", "Salesforce", "Shopify", "SAP"],
    logos: [
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
      { src: TajLogo, width: 36.5, height: 32 },
      { src: vGroup, width: 43.5, height: 28 },
      { src: ChankyaLogo, width: 160.5, height: 20 },
    ],
  },
];

const ServicesSolution = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Box bgcolor={"custom.black2"}>
      <OuterGrid4
        container
        spacing={5}
        paddingTop={"0 !important"}
        justifyContent={"space-between"}
      >
        <Grid
          size={{ xs: 12, lg: 8.3, xl: 6.5 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
          sx={{
            "& .service-motion:first-of-type .mt--0": {
              marginTop: 0,
            },
          }}
        >
          <ScrollLottieHandler />
          {services.map((service, index) => {
            const isOpen = openIndex === index; // check if current service is open

            return (
              <motion.div
                className="service-motion"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
              >
                <StackServicesSetions id={`service-${index}`}>
                  <Box>{service.img}</Box>
                  <Box>
                    <Typography
                      variant="body_11_1"
                      display={"block"}
                      color="custom.white2"
                      gutterBottom
                      marginBottom={0}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body_10_1"
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
                      rowGap={"12px"}
                      columnGap={"12px"}
                    >
                      {service.tags.map((tag, idx) => (
                        <ChipUI2 key={idx}>{tag}</ChipUI2>
                      ))}
                    </Stack>

                    {/* Toggle Section */}
                    <ClientsServed>
                      <Box width="68%">
                        <Typography
                          variant="small_typography1"
                          color="custom.white2"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          clients served
                        </Typography>

                        {/* <Stack> */}
                        {isOpen && (
                          <LogoGroup>
                            {service.logos?.map((logo, idx) => (
                              <Image
                                key={idx}
                                src={logo.src}
                                alt={`Client logo ${idx + 1}`}
                                width={logo.width}
                                height={logo.height}
                                style={{ objectFit: "contain" }}
                              />
                            ))}
                          </LogoGroup>
                        )}
                        {/* </Stack> */}
                      </Box>

                      <Box>
                        <Typography
                          variant="small_typography1"
                          color="custom.white2"
                          display={"flex"}
                          alignItems="center"
                          gap={"8px"}
                        >
                          view case study <ArrowRightWhite />
                        </Typography>
                      </Box>
                    </ClientsServed>
                  </Box>
                </StackServicesSetions>
              </motion.div>
            );
          })}
        </Grid>
      </OuterGrid4>
    </Box>
  );
};

export default ServicesSolution;
