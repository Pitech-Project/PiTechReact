"use client";

import ObservedSection from "@/components/common/ObservedSection";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import { tabledata } from "@/lib/termsData";
import {
  OuterGrid6,
  ListUI,
  StyledTableContainer,
  CookieStack,
} from "@/styles/MUI/common.styled";
import {
  Grid,
  Box,
  Typography,
  ListItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

export default function Page() {
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <ObservedSection id="home6" bg="light">
        <OuterGrid6 container>
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
                Data Protection & <br />
                Cookie Statement
              </Typography>
              <Typography
                color="custom.black"
                display="block"
                variant="body_3_400"
              >
                Pi Techniques uses cookies and similar technologies to:
              </Typography>
              <ListUI>
                <ListItem>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                  >
                    Recognize your device and browser
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                  >
                    Monitor website performance and analytics
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                  >
                    Personalize your browsing experience
                  </Typography>
                </ListItem>
              </ListUI>

              <StyledTableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body_10_1" fontWeight={600}>
                          Type of Cookie
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body_10_1" fontWeight={600}>
                          Purpose
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body_10_1" fontWeight={600}>
                          Examples
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tabledata.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell scope="row">
                          <Typography variant="body_10_1" fontWeight={600}>
                            {data.coockie}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body_10_1">
                            {data.purpose}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body_10_1">
                            {data.examples}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </StyledTableContainer>

              <CookieStack>
                {tabledata.map((data, index) => (
                  <Box key={index}>
                    <Typography
                      variant="body_10_1"
                      display="block"
                      fontWeight={700}
                    >
                      {data.coockie}
                    </Typography>
                    <Typography
                      variant="body_10_1"
                      display="block"
                      fontWeight={700}
                    >
                      Purpose
                    </Typography>
                    <Typography
                      variant="body_10_1"
                      display="block"
                      fontWeight={400}
                    >
                      {data.purpose}
                    </Typography>
                    <Typography
                      variant="body_10_1"
                      display="block"
                      fontWeight={700}
                    >
                      Examples
                    </Typography>
                    <Typography
                      variant="body_10_1"
                      display="block"
                      fontWeight={400}
                    >
                      {data.examples}
                    </Typography>
                  </Box>
                ))}
              </CookieStack>

              <Typography
                color="custom.black"
                display="block"
                variant="body_3_600"
              >
                Cookie Controls
              </Typography>
              <Typography
                color="custom.black"
                display="block"
                variant="body_3_400"
                marginBottom={{ xs: "40px", lg: "75px" }}
              >
                You can modify cookie settings through your browser or consent
                manager. Disabling cookies may affect functionality.
              </Typography>

              <Typography
                color="custom.black"
                display="block"
                variant="body_3_600"
              >
                Data Protection Practices
              </Typography>
              <Typography
                color="custom.black"
                display="block"
                variant="body_3_400"
              >
                We align data protection controls with recognized standards,
                including but not limited to:
              </Typography>
              <ListUI>
                <ListItem>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                  >
                    Secure hosting
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                  >
                    Encryption and access control
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    color="custom.black"
                    display="block"
                    variant="body_3_400"
                  >
                    Regular audits and monitoring
                  </Typography>
                </ListItem>
              </ListUI>

              <Typography
                color="custom.black"
                display="block"
                variant="body_3_600"
              >
                Analytics & Third-Party Tracking
              </Typography>
              <Typography
                color="custom.black"
                display="block"
                variant="body_3_400"
              >
                We may use tools like Google Analytics for anonymized traffic
                insights. These providers follow their own privacy policies.
              </Typography>
            </Box>
          </Grid>
        </OuterGrid6>
      </ObservedSection>
    </SectionObserverProvider>
  );
}
