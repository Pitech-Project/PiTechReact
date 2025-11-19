"use client";

import ObservedSection from "@/components/common/ObservedSection";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import { termsofuse } from "@/lib/termsData";
import { OuterGrid6, ListUI } from "@/styles/MUI/common.styled";
import { Grid, Box, Typography, ListItem } from "@mui/material";
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
                Terms of Use
              </Typography>
              {termsofuse.map((terms, index) => (
                <Box key={index} marginBottom={{ xs: "40px", sm: "72px" }}>
                  {terms.title && (
                    <Typography
                      color="custom.black"
                      display="block"
                      variant="body_3_600"
                    >
                      {terms.title}
                    </Typography>
                  )}
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                    whiteSpace="pre-line"
                  >
                    {terms.info}
                  </Typography>
                  {terms.list && (
                    <ListUI>
                      {terms.list.map((item, index) => (
                        <ListItem key={index}>
                          <Typography
                            color="custom.black"
                            display="block"
                            variant="body_3_400"
                          >
                            {item}
                          </Typography>
                        </ListItem>
                      ))}
                    </ListUI>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </OuterGrid6>
      </ObservedSection>
    </SectionObserverProvider>
  );
}
