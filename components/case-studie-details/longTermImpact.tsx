import { GridBox, ImpactBox, ImpactGrid } from "@/styles/MUI/common.styled";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function LongTermImpact({ project }: any) {
  const termimpact = project.longTermImpact.impact;
  return (
    <ImpactBox>
      <Container maxWidth={false} disableGutters>
        <Grid container columnGap="100px">
          <Grid size={{ xs: 12, lg: 11 }} offset={{ xs: 0, lg: 2 }}>
            <Typography
              variant="mediumFont"
              color="custom.black2"
              display="block"
              mb={0.5}
            >
              Long-term impact
            </Typography>
            <Typography
              variant="font_19_500"
              color="custom.black2"
              display="block"
            >
              {project.longTermImpact.title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container columnGap="100px">
          <Grid size={{ xs: 12, lg: 11 }} offset={{ xs: 0, lg: 2 }}>
            <ImpactGrid>
              {termimpact.map((impact: any, index: any) => (
                <GridBox key={index}>
                  <Image
                    src={impact.img}
                    height={60}
                    width={60}
                    alt="Long term impact"
                  />
                  <Typography
                    variant="body_3"
                    color="custom.black2"
                    display="block"
                    mt={2.5}
                  >
                    {impact.title}
                  </Typography>
                  <Typography
                    variant="font_subtitle"
                    color="#68686A"
                    display="block"
                    mt={2}
                  >
                    {impact.subTitle}
                  </Typography>
                </GridBox>
              ))}
            </ImpactGrid>
          </Grid>
        </Grid>
      </Container>
    </ImpactBox>
  );
}
