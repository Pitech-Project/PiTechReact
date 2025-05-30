"use client";

import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  OuterGrid,
  OuterGrid1,
  OuterSection,
  SubTitlemarginBottom1,
} from "@/styles/MUI/common.styled";
import MultiPlateform from "../../../public/assets/img/case-studies/mulitplatform-access.png";
import FileSharing from "../../../public/assets/img/case-studies/file-sharing.png";
import UnifiedCommunication from "../../../public/assets/img/case-studies/unified-communication.png";
import Mobile from "../../../public/assets/img/case-studies/mobile-left.png";
import ShipManagement from "../../../public/assets/img/case-studies/ship-management.png";
import Image from "next/image";

export const featuresPorject = [
  {
    id: 1,
    name: "Unified Communication",
    img: UnifiedCommunication,
    description:
      "Connect with your crew or office team through text-based messaging fostering instant communication for quick decision making and co-ordination.",
  },
  {
    id: 2,
    name: "Multi-platform Access",
    img: MultiPlateform,
    description:
      "It is available on the web, desktop and mobile devices, allowing to stay connected whether you’re on the ship, in the office or on the go.",
  },
  {
    id: 3,
    name: "File Sharing",
    img: FileSharing,
    description:
      "Share important documents, images and files effortlessly withing the chat interface. Information exchange and collaboration all on one platform",
  },
];

export const FeaturesOfProject = () => {
  const theme = useTheme();
  const isMdView = useMediaQuery(`(max-width:767px)`);
    const isIpadView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <OuterGrid1 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 10, xl: 7.4 }}
          offset={{ xs: 0, lg: 1, xl: 2.3 }}
        >
          <Box textAlign={"center"}>
            <Typography
              marginBottom={isMdView ? "32px" : "64px"}
              color="custom.black"
              variant="body_6"
              display={"block"}
            >
              Features of V.Chat
            </Typography>
            <SubTitlemarginBottom1
              color="custom.black"
              margin={"16px 0 0"}
              display={"block"}
              variant="body_3"
            >
              Some description regarding features of V.Chat that were
              <br></br> included began as a small support services firm catering
              to
              <br></br> individuals and home offices.
            </SubTitlemarginBottom1>
          </Box>
          <Stack flexDirection={isMdView ? "column" : "row"} gap={isMdView ? 5 : 3}>
            {featuresPorject.map((featuresPorject) => (
              <Stack key={featuresPorject.id} textAlign={"center"}>
                <Box display={"flex"} justifyContent={"center"}>
                  <Image src={featuresPorject.img} alt="teamBusinessOffice" />
                </Box>
                <Typography
                  minWidth={"30px"}
                  color="custom.black"
                  margin={"52px 0 12px"}
                  variant="body_3"
                  fontWeight={700}
                  display={"block"}
                >
                  {featuresPorject.name}{" "}
                </Typography>
                <Typography
                  color="custom.black1"
                  variant="overline_s_400"
                  display={"block"}
                >
                  {featuresPorject.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </OuterGrid1>
      <Box bgcolor={"custom.grey_200"}>
        <OuterGrid1 container spacing={5} justifyContent={"space-between"}>
          <Grid
            size={{ xs: 12, lg: 10, xl: 7.4 }}
            offset={{ xs: 0, lg: 1, xl: 2.3 }}
          >
            <Grid container spacing={12}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Image
                  src={Mobile}
                  alt="teamBusinessOffice"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Image
                  src={ShipManagement}
                  alt="teamBusinessOffice"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </OuterGrid1>
      </Box>
    </Box>
  );
};
