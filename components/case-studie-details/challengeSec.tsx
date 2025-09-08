import { ChallengeBox } from "@/styles/MUI/common.styled";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";

export default function ChallengeSec({ project }: any) {
  const challengeList = project.challenges.lists;
  return (
    <ChallengeBox>
      <Container maxWidth="xl">
        <Grid container columnGap="100px">
          <Grid size={{ md: 4, lg: 4, xl: 4 }} offset={{ xs: 0, md: 2 }}>
            <Typography
              variant="mediumFont"
              color="custom.white3"
              display="block"
              mb={2.5}
            >
              The challenge
            </Typography>
            <Typography variant="font_19_500" color="custom.white2">
              {project.challenges.shortInfo}
            </Typography>
            {challengeList != "" && (
              <List component="nav">
                <ListItem>
                  Swatches were tracked manually, often lost or unaccounted for.
                </ListItem>
                <ListItem>
                  Sample orders required 24–48 hour turnaround but had no
                  unified system.
                </ListItem>
                <ListItem>
                  Production tracking lacked visibility into procurement and job
                  order status.
                </ListItem>
                <ListItem>
                  Excel-based systems were prone to errors and inefficiencies.
                </ListItem>
              </List>
            )}
          </Grid>
          <Grid size={{ md: 4, lg: 4, xl: 4 }}>
            <Typography
              variant="mediumFont"
              color="custom.white3"
              display="block"
              mb={2.5}
            >
              The background
            </Typography>
            <Typography variant="font_19_500" color="custom.white2">
              {project.challenges.background}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ChallengeBox>
  );
}
