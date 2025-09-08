"use client";

import Image from "next/image";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  SmallFullStop,
  OutlineBtn,
  OuterGrid1,
  SubTitlemarginBottom1,
} from "@/styles/MUI/common.styled";
import BusinessOffice from "../../../public/assets/img/newoffice1.jpg";
import TotalYears from "../../../public/assets/img/water-mark.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ArrowRightBlack from "../SVGIcons/arrowRightBlack";

const WhoWeAre = () => {
  const router = useRouter();
  const isTabletView = useMediaQuery(`(max-width:991px)`);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletView1 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <OuterGrid1 container spacing={2} paddingBottom={"0 !important"}>
        <Grid
          size={{ xs: 12, lg: 8, xl: 7.4 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container alignItems={"flex-start"}>
            <Grid size={{ xs: 12, lg: 12, xl: 12 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Box marginBottom={isTabletView ? "60px" : "0"}>
                  <Typography color="custom.black3" variant="body_4_600">
                    who we are
                    <SmallFullStop />
                  </Typography>
                  <SubTitlemarginBottom1
                    color="custom.black"
                    variant="body_6"
                    display="block"
                  >
                    How we think & build
                  </SubTitlemarginBottom1>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 6.5 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Box marginBottom={isTabletView ? "60px" : "0"}>
                  <Typography
                    color="custom.black"
                    margin={isMobileView ? "0px 0 20px" : "0px 0 28px"}
                    display="block"
                    variant="body_3"
                  >
                    For over two decades, Pi Techniques has been helping
                    businesses unlock the full potential of technology.
                  </Typography>
                  <Typography
                    color="custom.black"
                    margin={isMobileView ? "0px 0 20px" : "0px 0 28px"}
                    display="block"
                    variant="body_3"
                  >
                    Driven by innovation, grounded in simplicity, and committed
                    to client success, is how we’ve built lasting partnerships
                    with a loyal and diverse client base.
                  </Typography>
                  <Typography
                    color="custom.black"
                    margin={isMobileView ? "0px 0 20px" : "0px 0 28px"}
                    display="block"
                    variant="body_3"
                  >
                    At Pi Techniques, “always keep it simple” isn’t just a line,
                    it’s a discipline. We cut through complexity to design
                    technology that works intuitively, scales seamlessly, and
                    solves real business challenges.
                  </Typography>
                  <OutlineBtn
                    onClick={() => router.push("/about")}
                    marginTop={"54px"}
                  >
                    ABOUT US <ArrowRightBlack />
                  </OutlineBtn>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src={BusinessOffice}
                  alt="teamBusinessOffice"
                  style={{
                    marginLeft: isTabletView1 ? 0 : "40px",
                    height: "auto",
                    width: "100%",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Image
              src={TotalYears}
              className="img-fluid"
              alt="teamBusinessOffice"
              style={{
                height: "auto",
                width: "100%",
              }}
            />
          </Box>
        </Grid>
      </OuterGrid1>
    </>
  );
};

export default WhoWeAre;
