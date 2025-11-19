"use client";

import {
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ArrowDesign,
  ChipUI2,
  GridContainerUI,
  IconButtonUI,
  OuterGrid1,
  RightTopArrow,
  ServiceGrid,
  SmallFullStop,
  SubTitlemarginBottom,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { LOTTIEANIMATION, SERVICES } from "@/lib/constanst";
import { LottiePlayer } from "../lottiePlayer";
import ScrollLottieHandler from "@/components/common/scroll-lottie-handler";
import arrowRight from "@/public/assets/img/newRightArrow.svg";
import Image from "next/image";

export const products = [
  {
    id: 1,
    name: SERVICES.SERVICES1,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer1}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Custom application development tailored to meet your unique business needs. Our team of experienced developers combines technical expertise with creative problem-solving to deliver innovative and user-centric applications.",
    tags: [
      "MERN",
      "MEAN",
      "Enterprise .NET + SQL",
      "Java Solutions",
      "AI & Automation",
      "Data & Messaging",
    ],
  },
  {
    id: 7,
    name: SERVICES.SERVICES7,
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
          color="custom.white2"
          variant="body_12"
          mb={2}
          display={"block"}
        >
          We design and build intelligent solutions powered by leading
          generative AI models—both open-source and enterprise-grade. From
          conversational chatbots that streamline customer interactions to
          agentic AI agents that automate complex workflows, our team turns the
          latest AI capabilities into practical business tools.
        </Typography>
        <Typography color="custom.white2" variant="body_12">
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
  },
  {
    id: 2,
    name: SERVICES.SERVICES2,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer2}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "High performance mobile applications, leveraging the latest technologies for seamless user experiences. Our end-to-end mobile development services ensure robust, scalable, and innovative solutions for both iOS and Android platforms.",
    tags: [
      "ETL & Data Pipelines",
      "PowerBI",
      "SQLBI",
      "DevExpress",
      "Database Integration & API",
    ],
  },
  {
    id: 3,
    name: SERVICES.SERVICES3,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer3}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Website development services, creating custom, high quality websites that enhance your online presence and drive business growth. Our expert team ensures responsive and user friendly designs tailored to our client needs.",
    tags: ["Figma", "Axure"],
  },
  {
    id: 4,
    name: SERVICES.SERVICES4,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer4}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Intuitive and visually stunning interfaces that captivate and engage users. Our expert team prioritizes usability and aesthetics, ensuring that every design enhances your brands digital presence and delivers a seamless, enjoyable user experience.",
    tags: [
      "Native iOS",
      "Native Android",
      "Xamarin",
      "React Native",
      "App Store & Play Store Deployment",
    ],
  },
  {
    id: 5,
    name: SERVICES.SERVICES5,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer5}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Transforming complex data into actionable insights for your business. Our solutions enable you to make informed decisions, optimize operational performance and identify growth opportunities, helping you stay ahead in a competitive market.",
    tags: [
      "Angular JS",
      "Next.js",
      "MVC",
      "HTML5 & CSS3",
      "Wordpress",
      "Woo Commerce",
      "SEO & Performance Optimization",
    ],
  },
  {
    id: 6,
    name: SERVICES.SERVICES6,
    img: (
      <LottiePlayer
        src={LOTTIEANIMATION.LottiePlayer6}
        className="scrollLottie"
        autoplay={true}
      />
    ),
    description:
      "Secure and efficient management solutions tailored to your business needs. Our expert team ensures seamless operation and reliability, empowering your business to thrive in the digital landscape.",
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
  },
  {
    id: 8,
    name: SERVICES.SERVICES8,
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
  },
];

export const Services = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("md"));
  const isMdView1 = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack bgcolor={"custom.black7"}>
      <OuterGrid1 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 8.2, xl: 7.4 }}
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
              <Stack
                width={isMdView ? "100%" : "80%"}
                marginBottom={isMdView ? "40px" : 0}
              >
                <Typography color="custom.grey_700" variant="body_4_600">
                  OUR SERVICES
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
              <RightTopArrow onClick={() => router.push("/services")}>
                <Typography variant="font_21" color="custom.white2">
                  View all
                </Typography>
                <ArrowDesign>
                  <Image src={arrowRight} alt="Right Arrow" />
                </ArrowDesign>
              </RightTopArrow>
            </SubTitlemarginBottom>
          </motion.div>
          <GridContainerUI container spacing={1}>
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
                    >
                      <ArrowDesign>
                        <Image src={arrowRight} alt="Right Arrow" />
                      </ArrowDesign>
                    </IconButtonUI>
                    <Typography
                      color="custom.white2"
                      variant="body_12"
                      display={"block"}
                      className="servicesName"
                      margin={isMdView1 ? "60px 0 24px" : "72px 0 24px"}
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
          </GridContainerUI>
        </Grid>
      </OuterGrid1>
    </Stack>
  );
};
