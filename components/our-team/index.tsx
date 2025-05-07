"use client"

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WhyPI1 from '../../public/assets/img/about-us/shamal-swali.jpg'
import WhyPI2 from '../../public/assets/img/about-us/hiten-damania.jpg'
import WhyPI3 from '../../public/assets/img/about-us/tarun-kapadia.jpg'
import WhyPI4 from '../../public/assets/img/about-us/hemang-choski.jpg'
import WhyPI5 from '../../public/assets/img/about-us/sagar-shirke.jpg'
import WhyPI6 from '../../public/assets/img/about-us/firdaus.jpg'
import { OurTeamGrid, OuterSection, SmallFullStop } from "@/app/styles/MUI/common.styled";
import { motion } from "framer-motion";

export const industries = [
  {
    id: 1,
    name: 'Shyamal Swali',
    img: <Image className="bgImg" src={WhyPI1} alt='teamBusinessOffice' />,
    designation: 'Director'
  },
  {
    id: 2,
    name: 'Hiten Damania',
    img: <Image className="bgImg" src={WhyPI2} alt='teamBusinessOffice' />,
    designation: 'Head of Development'
  },
  {
    id: 3,
    name: 'Tarun Kapadia',
    img: <Image className="bgImg" src={WhyPI3} alt='teamBusinessOffice' />,
    designation: 'Sr. Project Manager'
  },
  {
    id: 4,
    name: 'Hemang Choksi',
    img: <Image className="bgImg" src={WhyPI4} alt='teamBusinessOffice' />,
    designation: 'Project Manager / Analyst'
  },
  {
    id: 5,
    name: 'Sagar Shirke',
    img: <Image className="bgImg" src={WhyPI5} alt='teamBusinessOffice' />,
    designation: 'Project Manager'
  },
  {
    id: 6,
    name: 'Firdaus Minocher',
    img: <Image className="bgImg" src={WhyPI6} alt='teamBusinessOffice' />,
    designation: 'Project Manager / Business Analyst'
  },
];


export const OurTeam = () => {
  return (
    <Stack>
      <OuterSection sx={{ gap: 0 }}>
        <Stack className="SubTitlemarginBottom">
          <Typography color='custom.black' variant='body_4' marginBottom={2} fontWeight={600} display={'block'}>OUR TEAM <SmallFullStop /></Typography>
          <Typography color='custom.black' variant='body_6' display={'block'}>Team of highly qualified leaders</Typography>
        </Stack>
        <Grid container spacing={2}>
          {industries.map((industries) => (
            <OurTeamGrid size={{ xs: 12, md: 4 }} key={industries.id}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {industries.img}
                <Stack className="infromation" flexDirection={'row'} alignItems={'flex-start'} gap={2}>
                  <Stack>
                    <Typography color='custom.white2' variant="Caption" display={'block'}>{industries.name}</Typography>
                    <Typography className="designation" fontSize={'20px'} color='custom.white3' variant="body_3" display={'block'} fontWeight={400}>{industries.designation}</Typography>
                  </Stack>
                </Stack>
              </motion.div>
            </OurTeamGrid>
          ))}
        </Grid>
      </OuterSection>
    </Stack>
  );
};

