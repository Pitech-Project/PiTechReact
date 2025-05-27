import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  OuterSection,
  SmallFullStop,
  SubTitlemarginBottom,
  WhyPIGrid,
} from "@/styles/MUI/common.styled";

import WhyPI1 from "../../../public/assets/img/about-us/whypi1.jpg";
import WhyPI2 from "../../../public/assets/img/about-us/whypi2.jpg";
import WhyPI3 from "../../../public/assets/img/about-us/whypi3.jpg";
import WhyPI4 from "../../../public/assets/img/about-us/whypi4.jpg";
import WhyPI5 from "../../../public/assets/img/about-us/whypi5.jpg";
import WhyPI6 from "../../../public/assets/img/about-us/whypi6.jpg";
import WhyPIIcon1 from "../../../public/assets/img/about-us/skill.png";
import WhyPIIcon2 from "../../../public/assets/img/about-us/business.png";
import WhyPIIcon3 from "../../../public/assets/img/about-us/hunger.png";
import WhyPIIcon4 from "../../../public/assets/img/about-us/cost.png";
import WhyPIIcon5 from "../../../public/assets/img/about-us/compactsize.png";
import WhyPIIcon6 from "../../../public/assets/img/about-us/challenges.png";

const reasons = [
  {
    id: 1,
    name: "Strong skill sets",
    image: WhyPI1,
    icon: WhyPIIcon1,
  },
  {
    id: 2,
    name: "Business domains knowledge",
    image: WhyPI2,
    icon: WhyPIIcon2,
  },
  {
    id: 3,
    name: "Hunger for knowledge",
    image: WhyPI3,
    icon: WhyPIIcon3,
  },
  {
    id: 4,
    name: "Cost conscious & competitive",
    image: WhyPI4,
    icon: WhyPIIcon4,
  },
  {
    id: 5,
    name: "Advantage of a compact size",
    image: WhyPI5,
    icon: WhyPIIcon5,
  },
  {
    id: 6,
    name: "Ready for challenges",
    image: WhyPI6,
    icon: WhyPIIcon6,
  },
];

const descriptionText =
  "Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.";

export const WhyPI = () => {
  return (
    <Stack bgcolor="custom.black2">
      <OuterSection sx={{ gap: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SubTitlemarginBottom textAlign="center">
            <Typography
              color="custom.white4"
              variant="body_4_600"
              marginBottom={2}
              display="block"
            >
              WHY PI <SmallFullStop />
            </Typography>
            <Typography color="custom.white2" variant="body_6" display="block">
              Each one of us is always a big part of the solution
            </Typography>
          </SubTitlemarginBottom>
        </motion.div>

        <Grid container spacing={5}>
          {reasons.map((item) => (
            <WhyPIGrid size={{ xs: 12, md: 6 }} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  className="bgImg"
                  src={item.image}
                  alt={item.name}
                  layout="intrinsic"
                />
                <Stack
                  className="WhyPIHoverEffect"
                  flexDirection="row"
                  alignItems="flex-start"
                  gap={2}
                >
                  <Image src={item.icon} alt={`${item.name} icon`} layout="intrinsic" />
                  <Stack>
                    <Typography
                      color="custom.black"
                      variant="body_5"
                      display="block"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      className="description"
                      color="custom.black1"
                      variant="body_4_400"
                      display="block"
                    >
                      {descriptionText}
                    </Typography>
                  </Stack>
                </Stack>
              </motion.div>
            </WhyPIGrid>
          ))}
        </Grid>
      </OuterSection>
    </Stack>
  );
};
