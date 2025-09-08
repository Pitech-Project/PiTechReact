import { OrangeChip, ProjectInf } from "@/styles/MUI/common.styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import { IndustryIcon } from "../common/SVGIcons/industryIcon";
import { HeadquarterIcon } from "../common/SVGIcons/headquarterIcon";

export default function ProjectInfo({ project }: any) {
  return (
    <ProjectInf>
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={{ xs: 12, sm: 11 }} offset={{ xs: 0, sm: 1 }}>
            <OrangeChip>{project.projectInfo.name}</OrangeChip>
            <Box mt={1.5}>
              <Grid container gap={{ xs: 0, sm: 5 }}>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Box display="flex">
                    <IndustryIcon />
                    <Typography
                      variant="font_19_600"
                      color="custom.white4"
                      ml={0.5}
                    >
                      Industry
                    </Typography>
                  </Box>
                  <Typography
                    variant="font_19_600"
                    color="custom.black2"
                    ml={3.5}
                  >
                    {project.projectInfo.projectDetails.industry}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Box display="flex">
                    <HeadquarterIcon />
                    <Typography
                      variant="font_19_600"
                      color="custom.white4"
                      ml={0.5}
                    >
                      Headquarters
                    </Typography>
                  </Box>
                  <Typography
                    variant="font_19_600"
                    color="custom.black2"
                    ml={3.5}
                  >
                    {project.projectInfo.projectDetails.headquarters}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ProjectInf>
  );
}
