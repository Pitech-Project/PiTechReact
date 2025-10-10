import { ChallengeBox } from "@/styles/MUI/common.styled";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ChallengeSec({ project }: any) {
  const challengeList = project.challenges.lists;
  return (
    <ChallengeBox>
      <Container maxWidth={false} disableGutters>
        <Grid container columnGap="100px">
          <Grid
            size={{ xs: 12, md: 12, lg: 4, xl: 3 }}
            offset={{ xs: 0, lg: 2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
                <List>
                  <ListItem>
                    Swatches were tracked manually, often lost or unaccounted
                    for.
                  </ListItem>
                  <ListItem>
                    Sample orders required 24–48 hour turnaround but had no
                    unified system.
                  </ListItem>
                  <ListItem>
                    Production tracking lacked visibility into procurement and
                    job order status.
                  </ListItem>
                  <ListItem>
                    Excel-based systems were prone to errors and inefficiencies.
                  </ListItem>
                </List>
              )}
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 4, xl: 3 }}>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                variant="mediumFont"
                color="custom.white3"
                display="block"
                mb={2.5}
              >
                What we did
              </Typography>
              <Typography variant="font_19_500" color="custom.white2">
                {project.challenges.background}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </ChallengeBox>
  );
}
