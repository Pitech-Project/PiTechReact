"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ClientImage,
  LaptopImage,
  TopBox,
  WhiteChip,
} from "@/styles/MUI/common.styled";
import ProjectInfo from "./projectInfo";
import ObservedSection from "../common/ObservedSection";
import { motion } from "framer-motion";

export default function ProjectTopSection({ project }: any) {
  const img = project.topSection.projectLogo;
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <ObservedSection id="home12" bg="light">
      <TopBox>
        <Container maxWidth={false} disableGutters>
          <Grid container justifyContent={{ xs: "start", lg: "center" }}>
            <Grid size={{ xs: 12, md: 9, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ClientImage
                  src={img}
                  height={40}
                  width={100}
                  alt={project.topSection.alt}
                />
                <Typography
                  variant="body_6"
                  display="block"
                  color="custom.black2"
                  mb={1.5}
                >
                  {project.topSection.title}
                </Typography>
                <Typography
                  variant="body_9"
                  display="block"
                  color="#68686A"
                  mb={5}
                >
                  {project.topSection.shortDesc}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap="12px">
                  {project.topSection.tags.map((tag: any, index: any) => (
                    <WhiteChip
                      key={index}
                      textcolor={theme.palette.custom?.white4}
                    >
                      {tag}
                    </WhiteChip>
                  ))}
                </Box>
                <Box display={isTabletView ? "block" : "none"}>
                  <ProjectInfo project={project} />
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <LaptopImage
                  src={project.topSection.img}
                  height={558}
                  width={859}
                  alt={project.topSection.title}
                />
              </motion.div>
              {/* <LaptopImage src={laptop1} alt="Chanakya" /> */}
            </Grid>
          </Grid>
        </Container>
      </TopBox>
    </ObservedSection>
  );
}
