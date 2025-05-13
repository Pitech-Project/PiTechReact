"use client"

import { Grid, Stack, Typography } from "@mui/material";
import { OuterGrid, OuterSection, SmallFullStop, TooSmallFullStop } from "@/app/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { OutlineBtn } from "@/app/styles/MUI/common.styled - Copy";
import { useRouter } from "next/navigation";
import ArrowRightBlack from "../SVGIcons/arrowRightBlack";

export const industries = [
  {
    id: 1,
    name: 'Business Intelligence & Data Analytics',
  },
  {
    id: 2,
    name: 'User Experience & Visual Design ',
  },
  {
    id: 3,
    name: 'Application Development',
  },
  {
    id: 4,
    name: 'Website Development',
  },
  {
    id: 5,
    name: 'IT Infrastructure',
  },
  {
    id: 6,
    name: 'Mobile Development',
  },
];


export const Service = () => {
  const router = useRouter()
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
                  <Stack flexDirection={'row'} flexWrap={'wrap'} rowGap={5} justifyContent="space-between">
                    {industries.map((industries) => (
                      <Stack width="calc(50% - 20px )" key={industries.id}>
                        <Stack flexDirection={'row'} alignItems={'baseline'} gap={1}>
                          <Typography minWidth={'30px'} color='custom.black' variant="body_3" display={'block'} fontWeight={600}>{industries.id} <TooSmallFullStop /></Typography>
                          <Typography color='custom.black' variant="body_3" display={'block'} fontWeight={600}>{industries.name}</Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                  <OutlineBtn onClick={() => router.push('/contact')}>GET IN TOUCH <ArrowRightBlack /></OutlineBtn>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid>
    </Stack>
  );
};

