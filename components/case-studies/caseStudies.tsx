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
  RightTopArrow,
  ArrowDesign,
  CaseStudyGrid,
} from "@/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import { caseStudy } from "@/lib/constanst";
import ObservedSection from "../common/ObservedSection";
import Image from "next/image";
import arrowRight from "@/public/assets/img/newRightArrow.svg";
import { motion } from "framer-motion";

export const CaseStudies = () => {
  const router = useRouter();
  const isSmView = useMediaQuery(`(max-width:767px)`);
  const isTabletView = useMediaQuery(`(max-width:1199px)`);
  return (
    <>
      <Grid container>
        {caseStudy.map((project) => (
          <CaseStudyGrid
            key={project.id}
            size={{ xs: 12, lg: 6 }}
            order={{ xs: project.id == "citiusTech" ? 4 : 0, lg: 0 }}
          >
            <ObservedSection
              id={project.id}
              bg={"light"}
              className="customheight"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  // x: {isLgView ? 100, lg: project.id == "chanakya" || project.id == "citiusTech" ? -100 : 100 }
                  x: isTabletView
                    ? project.id == "chanakya" ||
                      project.id == "tajGroupofHotels"
                      ? -100
                      : 100
                    : project.id == "chanakya" || project.id == "citiusTech"
                      ? -100
                      : 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ height: "100%" }}
              >
                <Link
                  onClick={() =>
                    router.push(
                      `/case-studie-details?project=${encodeURIComponent(project.id)}`,
                    )
                  }
                  href={`/case-studie-details?project=${encodeURIComponent(project.id)}`}
                  sx={{
                    backgroundColor: project.isBgBlack
                      ? "custom.black7"
                      : "custom.white2",
                  }}
                >
                  <CaseBox>
                    <OnHoverArrowBox>
                      <RightTopArrow disableRipple disableElevation>
                        <ArrowDesign>
                          <Image src={arrowRight} alt="Right Arrow" />
                        </ArrowDesign>
                      </RightTopArrow>
                    </OnHoverArrowBox>
                    <Typography
                      color={project.isBgBlack ? "custom.grey_700" : "#68686A"}
                      variant="body_4_600"
                      marginBottom={1.5}
                    >
                      {project.title}
                      <SmallFullStop />
                    </Typography>
                    <Typography
                      marginBottom={isSmView ? "48px" : "52px"}
                      color={
                        project.isBgBlack ? "custom.white2" : "custom.black2"
                      }
                      variant="font_38"
                      width="95%"
                      minHeight={{ xs: "auto", lg: "78px" }}
                      display={"block"}
                      className="caseStudieDetail"
                    >
                      {project.subTitle}
                    </Typography>
                    <Typography
                      color={
                        project.isBgBlack ? "custom.white2" : "custom.black2"
                      }
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
                    <ImageBox
                      projectimg={
                        project.id === "tajGroupofHotels"
                          ? "taj"
                          : project.id === "citiusTech"
                            ? "citius"
                            : project.id === "chanakya"
                              ? "chanakya"
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
                  </CaseBox>
                </Link>
              </motion.div>
            </ObservedSection>
          </CaseStudyGrid>
        ))}
      </Grid>
    </>
  );
};
