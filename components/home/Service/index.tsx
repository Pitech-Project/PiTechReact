"use client";

import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  OuterGrid,
  OutlineBtn,
  SmallFullStop,
  TooSmallFullStop,
} from "@/styles/MUI/common.styled";
import { motion } from "framer-motion";
import ArrowRightBlack from "../../common/SVGIcons/arrowRightBlack";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constanst";

const industries = [
  { id: 1, name: SERVICES.SERVICES5 },
  { id: 2, name: SERVICES.SERVICES4 },
  { id: 3, name: SERVICES.SERVICES1 },
  { id: 4, name: SERVICES.SERVICES3 },
  { id: 5, name: SERVICES.SERVICES6 },
  { id: 6, name: SERVICES.SERVICES2 },
];

export const Service = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack>
      <OuterGrid container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 11, xl: 8.2 }}
          offset={{ xs: 0, lg: 1, xl: 2.3 }}
        >
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  color="custom.black3"
                  variant="body_4_600"
                  marginBottom={2}
                  display={"block"}
                  letterSpacing={"2.4px"}
                  textTransform={"uppercase"}
                >
                  SERVICES
                  <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.black"
                  variant="body_6"
                  display={"block"}
                  marginBottom={"24px"}
                >
                  Web and App Services
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} gap={5}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Stack gap={8}>
                  <Typography
                    color="custom.black"
                    display={"block"}
                    variant="body_3"
                  >
                    Building solutions for individuals, mid-size companies and
                    global corporations ranging from small websites to complex
                    web applications, as well as IT infrastructure support
                    services in sectors such as finance, shipping, retail,
                    consulting services and more, who require tailored
                    technology solutions and personalized attention.
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    flexWrap={"wrap"}
                    rowGap={5}
                    justifyContent="space-between"
                  >
                    {industries.map((industries) => (
                      <Stack width={isMdView ? "100%" : "calc(50% - 20px )"} key={industries.id}>
                        <Stack
                          flexDirection={"row"}
                          alignItems={"baseline"}
                          gap={1}
                        >
                          <Typography
                            minWidth={"30px"}
                            color="custom.black"
                            variant="body_3_600"
                            display={"block"}
                          >
                            {industries.id}
                            <TooSmallFullStop />
                          </Typography>
                          <Typography
                            color="custom.black"
                            variant="body_3_600"
                            display={"block"}
                          >
                            {industries.name}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                  <OutlineBtn onClick={() => router.push("/contact")}>
                    GET IN TOUCH <ArrowRightBlack />
                  </OutlineBtn>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </Stack>
  );
};
