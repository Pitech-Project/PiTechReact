import { SolutionBox } from "@/styles/MUI/common.styled";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";

export default function Pisolution({ project }: any) {
  const solutionList = project.piSolution.solutions;
  return (
    <SolutionBox>
      <Container maxWidth={false} disableGutters>
        <Grid container columnGap="100px">
          <Grid size={{ sm: 12, md: 12, lg: 9 }} offset={{ xs: 0, lg: 2 }}>
            <Typography
              variant="mediumFont"
              color="custom.black2"
              display="block"
              mb={2}
            >
              The Pi Solution
            </Typography>
            <Typography
              variant="font_19_500"
              color="custom.black2"
              display="block"
            >
              {project.piSolution.details}
            </Typography>
          </Grid>
        </Grid>
        {solutionList && (
          <Grid container gap={5} mt={{xs: "40px", md: "60px"}}>
            <Grid size={{ sm: 12, lg: 3 }} offset={{ xs: 0, lg: 2 }}>
              <Typography
                variant="body_9_600"
                color="custom.black2"
                display="block"
              >
                NEO
              </Typography>
              <Typography
                variant="font_19_500"
                color="custom.black2"
                display="block"
                mb={2}
              >
                (Swatch Management System)
              </Typography>
              <List component="nav">
                <ListItem>Tracks 100,000+ swatches</ListItem>
                <ListItem>Smart search with mood tagging</ListItem>
                <ListItem>
                  Real-time swatch location across global offices and clients
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ sm: 12, lg: 3 }}>
              <Typography
                variant="body_9_600"
                color="custom.black2"
                display="block"
              >
                TRINITY
              </Typography>
              <Typography
                variant="font_19_500"
                color="custom.black2"
                display="block"
                mb={2}
              >
                (Sampling Management System)
              </Typography>
              <List component="nav">
                <ListItem>
                  Manages sampling life cycle from order to invoicing
                </ListItem>
                <ListItem>24–48 hr sample turnaround tracking</ListItem>
                <ListItem>Labor + raw material consumption insights</ListItem>
                <ListItem>
                  Central style repository with dynamic pricing
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ sm: 12, lg: 3 }}>
              <Typography
                variant="body_9_600"
                color="custom.black2"
                display="block"
              >
                MORPHEUS
              </Typography>
              <Typography
                variant="font_19_500"
                color="custom.black2"
                display="block"
                mb={2}
              >
                (Production Management System)
              </Typography>
              <List component="nav">
                <ListItem>
                  Tracks procurement, job orders, delivery schedules
                </ListItem>
                <ListItem>QR code–based inventory tracking</ListItem>
                <ListItem>Weekly status reports for management</ListItem>
                <ListItem>Real-time stage-wise production insights</ListItem>
              </List>
            </Grid>
          </Grid>
        )}
      </Container>
    </SolutionBox>
  );
}
