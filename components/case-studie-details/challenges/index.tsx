"use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { OuterGrid } from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";

export const Challenges = () => {
  const isMdView = useMediaQuery(`(max-width:768px)`);
  return (
    <Box bgcolor={"custom.black"}>
      <OuterGrid container spacing={5} justifyContent={"space-between"}>
        <Grid size={{ xs: 12, lg: 11, xl: 9 }} offset={{ xs: 0, lg: 1, xl: 2 }}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Typography
                    marginBottom={isMdView ? "32px" : "64px"}
                    color="custom.white5"
                    width={"max-content"}
                    variant="body_6"
                    display={"block"}
                  >
                    The challenges<br></br>
                    we solved
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  color="custom.white3"
                  display={"block"}
                  variant="body_3"
                >
                  Some description regarding challenges that we were began as a
                  small support services firm catering to individuals and home
                  offices.
                  <br></br>
                  <br></br>
                  Over time, we have expanded to encompass multiple divisions
                  specializing in software and web development, as well as IT
                  infrastructure and support services.
                  <br></br>
                  <br></br>
                  They are characterized by their passion for technology,
                  simplicity in approach and commitment to providing customized
                  solutions to their clients.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </Box>
  );
};
