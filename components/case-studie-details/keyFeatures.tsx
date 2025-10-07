import { FeatureGrid } from "@/styles/MUI/common.styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function KeyFeatures({ project }: any) {
  console.log(project.keyFeature.img);
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container columnGap="100px">
          <Grid size={{ sm: 12, md: 9 }} offset={{ xs: 0, md: 2 }}>
            <Typography
              variant="mediumFont"
              color="custom.black2"
              display="block"
              mb={2}
            >
              Key features
            </Typography>
            <FeatureGrid>
              {project.keyFeature.map((feature: any, index: any) => (
                <Box key={index}>
                  <Image
                    src={feature.img}
                    height={60}
                    width={60}
                    alt="Key feature"
                  />
                  <Typography
                    variant="font_subtitle"
                    color="#68686A"
                    display="block"
                    mt={2}
                  >
                    {feature.feature}
                  </Typography>
                </Box>
              ))}
            </FeatureGrid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
