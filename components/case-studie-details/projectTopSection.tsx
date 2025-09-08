"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { LaptopImage, TopBox, WhiteChip } from "@/styles/MUI/common.styled";


export default function ProjectTopSection({ project }: any) {
  const img = project.topSection.projectLogo;
  return (
    <TopBox>
      <Container maxWidth="xl" disableGutters>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Image
              src={img}
              height={40}
              width={100}
              style={{ width: "auto !important" }}
              alt="Chanakya"
            />
            <Typography
              variant="body_6"
              display="block"
              color="black2"
              mb={1.5}
            >
              {project.topSection.title}
            </Typography>
            <Typography variant="body_9" display="block" color="#68686A" mb={5}>
              {project.topSection.shortDesc}
            </Typography>
            <Box display="flex" flexWrap="wrap">
              <WhiteChip>Microsoft MVC / .NET Framework v4.6 / C#</WhiteChip>
              <WhiteChip>JavaScript / jQuery</WhiteChip>
              <WhiteChip>Entity Framework + MSSQL</WhiteChip>
              <WhiteChip>Android / Xamarin</WhiteChip>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
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
