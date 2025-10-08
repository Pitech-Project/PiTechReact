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

export default function ProjectTopSection({ project }: any) {
  const img = project.topSection.projectLogo;
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <TopBox>
      <Container maxWidth={false} disableGutters>
        <Grid container justifyContent={{xs: "start", lg: "center"}}>
          <Grid size={{ xs: 12, md: 9, lg: 5 }}>
            <ClientImage
              src={img}
              height={40}
              width={100}
              alt="Chanakya"
            />
            <Typography
              variant="body_6"
              display="block"
              color="custom.black2"
              mb={1.5}
            >
              {project.topSection.title}
            </Typography>
            <Typography variant="body_9" display="block" color="#68686A" mb={5}>
              {project.topSection.shortDesc}
            </Typography>
            <Box display="flex" flexWrap="wrap" gap="12px">
              <WhiteChip textcolor={theme.palette.custom?.white4}>
                Microsoft MVC / .NET Framework v4.6 / C#
              </WhiteChip>
              <WhiteChip textcolor={theme.palette.custom?.white4}>
                JavaScript / jQuery
              </WhiteChip>
              <WhiteChip textcolor={theme.palette.custom?.white4}>
                Entity Framework + MSSQL
              </WhiteChip>
              <WhiteChip textcolor={theme.palette.custom?.white4}>
                Android / Xamarin
              </WhiteChip>
            </Box>
            <Box display={isTabletView ? "block" : "none"}>
              <ProjectInfo project={project} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <LaptopImage
              src={project.topSection.img}
              height={558}
              width={859}
              alt="Chanakya"
            />
            {/* <LaptopImage src={laptop1} alt="Chanakya" /> */}
          </Grid>
        </Grid>
      </Container>
    </TopBox>
  );
}
