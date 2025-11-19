"use client";

import ObservedSection from "@/components/common/ObservedSection";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import { privacypolicy } from "@/lib/termsData";
import { OuterGrid6, ListUI } from "@/styles/MUI/common.styled";
import { Grid, Box, Typography, ListItem } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <ObservedSection id="home7" bg="light">
        <OuterGrid6
          container
          paddingBottom={{ xs: "57px !important", sm: "75px !important" }}
        >
          <Grid
            size={{ xs: 12, lg: 7, xl: 7 }}
            offset={{ xs: 0, lg: 2, xl: 1.95 }}
          >
            <Box>
              <Typography
                color="custom.black"
                variant="body_6"
                display="block"
                marginBottom={{ xs: "52px", lg: "80px", xl: "100px" }}
              >
                Privacy Policy
              </Typography>
              {privacypolicy.map((privacy, index) => (
                <Box key={index} marginBottom={{ xs: "40px", sm: "72px" }}>
                  {privacy.title && (
                    <Typography
                      color="custom.black"
                      display="block"
                      variant="body_3_600"
                    >
                      {privacy.title}
                    </Typography>
                  )}
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                    whiteSpace="pre-line"
                  >
                    {privacy.info}
                  </Typography>
                  {privacy.list && (
                    <ListUI>
                      {privacy.list.map((item, index) => (
                        <ListItem key={index}>
                          {item.text1 && (
                            <Typography
                              color="custom.black"
                              variant="body_3_400"
                              fontWeight={600}
                            >
                              {item.text1}
                            </Typography>
                          )}
                          <Typography
                            color="custom.black"
                            variant="body_3_400"
                            dangerouslySetInnerHTML={{
                              __html: ` ${item.text2}`,
                            }}
                          />
                        </ListItem>
                      ))}
                    </ListUI>
                  )}
                </Box>
              ))}
              <Typography
                color="custom.black"
                display="block"
                variant="body_3_600"
              >
                Contact
              </Typography>
              <Typography
                color="custom.black"
                display="block"
                variant="body_3_400"
                whiteSpace="pre-line"
                marginBottom={{ xs: "40px", sm: "72px" }}
              >
                Email:{" "}
                <Link
                  href="mailto:privacy@pitechniques.com"
                  color="custom.black"
                >
                  privacy@pitechniques.com
                </Link>
              </Typography>
            </Box>
          </Grid>
        </OuterGrid6>
      </ObservedSection>
    </SectionObserverProvider>
  );
}
