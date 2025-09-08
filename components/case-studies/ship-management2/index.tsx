"use client";

import Image from "next/image";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import {
  SmallFullStop,
  OutlineWhiteBtn,
  ChipUI2,
  OuterGrid,
} from "@/styles/MUI/common.styled";
import ShipManagementImg from "../../../public/assets/img/case-studies/mobile.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ArrowRightWhite from "../../common/SVGIcons/arrowRightWhite";

export const ShipManagement2 = () => {
  const router = useRouter();
  const isMdView = useMediaQuery(`(max-width:767px)`);
  return (
    <Box bgcolor={"custom.black"}>
      <OuterGrid container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={10}>
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
                      width: "-webkit-fill-available",
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
                <Typography
                  color="custom.white4"
                  variant="body_4"
                  display={"block"}
                  letterSpacing={"2.4px"}
                  textTransform={"uppercase"}
                >
                  V.SHIPS | Ship Management
                  <SmallFullStop />
                </Typography>
                <Typography
                  marginBottom={isMdView ? "32px" : "64px"}
                  color="custom.white5"
                  variant="body_6"
                  display={"block"}
                >
                  Inspection Manager
                </Typography>
                <Typography
                  color="custom.white2"
                  margin={"16px 0 0"}
                  display={"block"}
                  variant="body_3"
                >
                  An all-in-one communication and collaboration hub designed for
                  seamless interaction among ship vessel crews and office
                  personnel.
                </Typography>
                <Stack
                  flexDirection={"row"}
                  gap={2}
                  margin={"20px 0 50px"}
                  flexWrap={"wrap"}
                >
                  <ChipUI2>Mobile</ChipUI2>
                  <ChipUI2>Tablet</ChipUI2>
                </Stack>
                <OutlineWhiteBtn
                  onClick={() => router.push("/case-studie-details")}
                >
                  VIEW CASE STUDY <ArrowRightWhite />
                </OutlineWhiteBtn>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </Box>
  );
};
