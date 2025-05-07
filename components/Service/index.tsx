"use client"

import { Grid, Stack, Typography } from "@mui/material";
import { OuterGrid, OuterSection, SmallFullStop, TooSmallFullStop } from "@/app/styles/MUI/common.styled";
import { motion } from "framer-motion";

export const industries = [
  {
    id: 1,
    name: 'Business Intelligence & Data Analytics',
  },
  {
    id: 2,
    name: 'Application Development',
  },
  {
    id: 3,
    name: 'IT Infrastructure',
  },
  {
    id: 4,
    name: 'User Experience & Visual Design',
  },
  {
    id: 5,
    name: 'Website Development',
  },
  {
    id: 6,
    name: 'Mobile Development',
  },
];


export const Service = () => {
  return (
    <Stack>
      <OuterGrid container spacing={5} justifyContent={'space-between'}>
        <Grid size={{ xs: 12, lg: 11, xl: 9 }} offset={{ xs: 0, lg: 1, xl: 2 }}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography color='custom.black3' variant='body_4' marginBottom={2} display={'block'} fontWeight={600} letterSpacing={'2.4px'} textTransform={'uppercase'}>SERVICES <SmallFullStop /></Typography>
                <Typography color='custom.black' variant='body_6' display={'block'} marginBottom={'24px'}>Web and App Services</Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} gap={5}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Stack gap={8}>
                  <Typography color='custom.black' margin={'16px 0 0'} display={'block'} variant='body_3'>
                    Building solutions for individuals, mid-size companies and global corporations ranging from small websites to complex web applications, as well as IT infrastructure support services in sectors such as finance, shipping, retail, consulting services and more, who require tailored technology solutions and personalized attention.
                  </Typography>
                  <Stack flexDirection={'row'} flexWrap={'wrap'} rowGap={5}>
                    {industries.map((industries) => (
                      <Stack width={'50%'} key={industries.id}>
                        <Stack flexDirection={'row'} alignItems={'baseline'} gap={1}>
                          <Typography minWidth={'30px'} color='custom.black' variant="body_3" display={'block'}>{industries.id} <TooSmallFullStop /></Typography>
                          <Typography color='custom.black' variant="body_3" display={'block'}>{industries.name}</Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </Stack>
  );
};

