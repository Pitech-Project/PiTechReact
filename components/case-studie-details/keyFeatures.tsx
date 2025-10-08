import { FeatureGrid, KeyFeatureBox } from "@/styles/MUI/common.styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function KeyFeatures({ project }: any) {
  return (
    <KeyFeatureBox>
      <Container maxWidth={false} disableGutters>
        <Grid container columnGap="100px">
          <Grid size={{ sm: 12, lg: 9 }} offset={{ xs: 0, lg: 2 }}>
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
                    color="custom.gray_txt"
                    display="block"
                    mt={"12px"}
                  >
                    {feature.feature}
                  </Typography>
                </Box>
              ))}
            </FeatureGrid>
          </Grid>
        </Grid>
      </Container>
    </KeyFeatureBox>
  );
}
