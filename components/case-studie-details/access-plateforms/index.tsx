"use client";

import Image from "next/image";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { OuterGrid } from "@/styles/MUI/common.styled";
import ShipManagementImg from "../../../public/assets/img/case-studies/mobile-left.png";
import { motion } from "framer-motion";

export const AccessPlateforms = () => {
  const isMdView = useMediaQuery(`(max-width:767px)`);
  return (
    <>
      <OuterGrid container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={5} alignItems={"center"}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box marginBottom={isMdView ? "52px" : "0"}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={ShipManagementImg}
                    alt="ShipManagementImg"
                    style={{
                      borderRadius: "8px",
                      width: isMdView ? "-webkit-fill-available" : "auto",
                      height: "auto",
                    }}
                  />
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
                <Box>
                  <Typography
                    marginBottom={isMdView ? "32px" : "64px"}
                    color="custom.black"
                    variant="body_6"
                    display={"block"}
                  >
                    Accessible across web, desktop & mobile platforms
                  </Typography>
                  <Typography
                    color="custom.black"
                    margin={"16px 0 0"}
                    display={"block"}
                    variant="body_3"
                  >
                    An all-in-one communication and collaboration hub designed
                    for seamless interaction among ship vessel crews and office
                    personnel.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </>
  );
};
