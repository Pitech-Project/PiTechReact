"use client";

import { Grid, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import {
  SmallFullStop,
  CaseBox,
  CaseImage,
  OnHoverArrowBox,
  WhiteChip,
  GreyChip,
  ImageBox,
} from "@/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import { caseStudy } from "@/lib/constanst";
import ArrowRightUpBlack from "../common/SVGIcons/arrowRightUpBlack";
import ObservedSection from "../common/ObservedSection";

export const CaseStudies = () => {
  const router = useRouter();
  const isMdView = useMediaQuery(`(max-width:767px)`);
  //   console.log(caseStudy.projects)
  return (
    <>
      <Grid container>
        {caseStudy.map((project) => (
            <Grid
              key={project.id}
              size={{ xs: 12, md: 6 }}
              bgcolor={project.isBgBlack ? "custom.black2" : "custom.white2"}
              order={{ xs: project.id == "citiusTech" ? 4 : 0, md: 0 }}
            >
              <ObservedSection id={project.id} bg={"light"}>
                <CaseBox>
                  <Link
                    onClick={() =>
                      router.push(
                        `/case-studie-details?project=${encodeURIComponent(project.id)}`,
                      )
                    }
                    href={`/case-studie-details?project=${encodeURIComponent(project.id)}`}
                  >
                    <OnHoverArrowBox>
                      <ArrowRightUpBlack />
                    </OnHoverArrowBox>
                    <Typography
                      color={project.isBgBlack ? "custom.grey_700" : "#68686A"}
                      variant="body_4_600"
                      marginBottom={1.5}
                    >
                      {project.title}
                      <SmallFullStop />
                    </Typography>
                    {/* <Link
                    onClick={() =>
                      router.push(
                        `/case-studie-details?project=${encodeURIComponent(project.id)}`,
                      )
                    }
                    href={`/case-studie-details?project=${encodeURIComponent(project.id)}`}
                  > */}
                    <Typography
                      marginBottom={isMdView ? "48px" : "52px"}
                      color={project.isBgBlack ? "custom.white2" : "custom.black2"}
                      variant="font_38"
                      width="95%"
                      minHeight="78px"
                      display={"block"}
                    >
                      {project.subTitle}
                    </Typography>
                    {/* </Link> */}
                    <Typography
                      color={project.isBgBlack ? "custom.white2" : "custom.black2"}
                      margin={"16px 0 0"}
                      display={"block"}
                      variant="para"
                    >
                      {project.info}
                    </Typography>
                    <Stack
                      flexDirection={"row"}
                      margin={"20px 0 0px"}
                      gap="12px"
                      flexWrap={"wrap"}
                    >
                      {project.tags.map((tag, index) =>
                        project.isBgBlack ? (
                          <GreyChip key={index}>{tag}</GreyChip>
                        ) : (
                          <WhiteChip key={index}>{tag}</WhiteChip>
                        ),
                      )}
                    </Stack>
                    {/* {project.img} */}
                    <ImageBox
                      projectimg={
                        project.id === "tajGroupofHotels"
                          ? "taj"
                          : project.id === "citiusTech"
                            ? "citius"
                            : undefined
                      }
                    >
                      <CaseImage
                        src={project.img.src}
                        layout="fill"
                        alt="case study"
                        sx={{ position: "relative !important" }}
                      />
                    </ImageBox>
                  </Link>
                </CaseBox>
              </ObservedSection>
            </Grid>
        ))}
      </Grid>
    </>
  );
};
