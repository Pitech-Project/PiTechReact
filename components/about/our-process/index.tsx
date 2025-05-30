"use client";

import { Grid, Stack, Typography } from "@mui/material";
import {
  OuterGrid,
  OuterGrid1,
  OuterSection,
  SmallFullStop,
  TooSmallFullStop,
} from "@/styles/MUI/common.styled";
import Image from "next/image";
import BoxImg from "../../../public/assets/img/about-us/box.jpg";
import { motion } from "framer-motion";

export const industries = [
  {
    id: 1,
    name: "Mapping Processes",
    description:
      "Mapping process to determine the starting point and actual state. Evaluation of the processes and current structure of the company.",
  },
  {
    id: 2,
    name: "Optimize a Process",
    description:
      "Suggestions for improvement and process optimization with right combination of technologies.",
  },
  {
    id: 3,
    name: "Application Design",
    description:
      "We choose technologies and review options with the client. The client is part of the project from the very beginning and feedback is vital.",
  },
  {
    id: 4,
    name: "Delivery of Developments",
    description:
      "Weekly delivery of development for the end user to operate and request for changes. It is ideal that end user is part of the process of development and testing.",
  },
  {
    id: 5,
    name: "Evaluation and Monitoring",
    description:
      "These determine KPIs, reports and other metrics per user in order to monitor that the process is working as agreed.",
  },
];

export const OurProcess = () => {
  return (
    <Stack bgcolor={"custom.white"}>
      <OuterGrid1 container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 10, xl: 7.4 }}
          offset={{ xs: 0, lg: 1, xl: 2.3 }}
        >
          <Grid container spacing={5} justifyContent={"space-between"}>
            <Grid size={{ xs: 12, md: 4.5 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  color="custom.black"
                  variant="body_4"
                  marginBottom={2}
                  display={"block"}
                  letterSpacing={"2.4px"}
                  textTransform={"uppercase"}
                >
                  OUR PROCESS
                  <SmallFullStop />
                </Typography>
                <Typography
                  color="custom.black"
                  variant="body_6"
                  display={"block"}
                  marginBottom={"24px"}
                >
                  Management Methodology
                </Typography>
                <Typography
                  color="custom.black"
                  margin={"16px 0 0"}
                  display={"block"}
                  variant="body_3"
                >
                  At Pi we realized we twist and turn all the time and so do our
                  client&apos;s requirements. To cope with the ever changing
                  world of business we have successfully adopted{" "}
                  <Typography color="custom.orange_600" variant="body_3">
                    AGILE
                  </Typography>{" "}
                  project management.
                </Typography>
                <Image
                  src={BoxImg}
                  alt="Box"
                  style={{ width: "-webkit-fill-available", height: "auto" }}
                />
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5.5 }} gap={5}>
              <Stack gap={7.5}>
                {industries.map((industries) => (
                  <Stack
                    flexDirection={"row"}
                    alignItems={"baseline"}
                    gap={1}
                    key={industries.id}
                  >
                    <Typography
                      color="custom.black"
                      minWidth={"40px"}
                      variant="body_5"
                      display={"block"}
                    >
                      {industries.id}
                      <TooSmallFullStop />
                    </Typography>
                    <Stack>
                      <Typography
                        color="custom.black"
                        marginBottom={1}
                        variant="body_5"
                        display={"block"}
                      >
                        {industries.name}
                      </Typography>
                      <Typography
                        color="custom.black"
                        variant="body_4_400"
                        display={"block"}
                      >
                        {industries.description}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid1>
    </Stack>
  );
};
