"use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {
  SmallFullStop,
  SubTitlemarginBottom1,
  OuterGrid1,
  AboutImage,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";

const OurStory = () => {
  const isTabletView = useMediaQuery(`(max-width:991px)`);
  return (
    <>
      <OuterGrid1 container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 6, xl: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Box marginBottom={isTabletView ? "60px" : "0"}>
                  <Typography color="custom.black3" variant="body_4_600">
                    ABOUT US
                    <SmallFullStop />
                  </Typography>

                  <SubTitlemarginBottom1
                    color="custom.black"
                    variant="body_6"
                    display="block"
                  >
                    Rooted in experience.<br></br> Driven by innovation.
                  </SubTitlemarginBottom1>
                  <Typography
                    color="custom.black"
                    margin="0 0 28px"
                    display="block"
                    variant="body_3"
                  >
                    At Pi Techniques, we've been solving problems with tech
                    since 1992. Beginning as a small support firm for
                    individuals and home offices, and growing into a trusted,
                    full-spectrum technology partner for modern businesses.
                  </Typography>
                  <Typography
                    color="custom.black"
                    margin="0 0 28px"
                    display="block"
                    variant="body_3"
                  >
                    Over the years, we’ve expanded into software development,
                    web technologies, and IT infrastructure services, delivering
                    tailored, reliable, and future-ready solutions. Many of our
                    clients have been with us for decades, a testament to our
                    clear, simple, and client-first approach. No jargon, just
                    measurable results.
                  </Typography>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3"
                  >
                    Backed by decades of experience, we create technology shaped
                    around your business needs — reliable, scalable, and
                    future-ready. Solution that help grow with your business and
                    keep pace with a fast-moving tech world.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ height: "100%" }}
              >
                <AboutImage />
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid1>
    </>
  );
};

export default OurStory;
