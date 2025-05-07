"use client"

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WhyPI1 from '../../public/assets/img/about-us/whypi1.jpg'
import WhyPI2 from '../../public/assets/img/about-us/whypi2.jpg'
import WhyPI3 from '../../public/assets/img/about-us/whypi3.jpg'
import WhyPI4 from '../../public/assets/img/about-us/whypi4.jpg'
import WhyPI5 from '../../public/assets/img/about-us/whypi5.jpg'
import WhyPI6 from '../../public/assets/img/about-us/whypi6.jpg'
import WhyPIIcon1 from '../../public/assets/img/about-us/skill.png'
import WhyPIIcon2 from '../../public/assets/img/about-us/business.png'
import WhyPIIcon3 from '../../public/assets/img/about-us/hunger.png'
import WhyPIIcon4 from '../../public/assets/img/about-us/cost.png'
import WhyPIIcon5 from '../../public/assets/img/about-us/compactsize.png'
import WhyPIIcon6 from '../../public/assets/img/about-us/challenges.png'
import { OuterSection, SmallFullStop, WhyPIGrid } from "@/app/styles/MUI/common.styled";
import { motion } from "framer-motion";

export const industries = [
  {
    id: 1,
    name: 'Strong skill sets',
    img: <Image className="bgImg" src={WhyPI1} alt='teamBusinessOffice' />,
    icon: <Image src={WhyPIIcon1} alt='teamBusinessOffice' />,
    description: 'Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.'
  },
  {
    id: 2,
    name: 'Business domains knowledge',
    img: <Image className="bgImg" src={WhyPI2} alt='teamBusinessOffice' />,
    icon: <Image src={WhyPIIcon2} alt='teamBusinessOffice' />,
    description: 'Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.'
  },
  {
    id: 3,
    name: 'Hunger for knowledge',
    img: <Image className="bgImg" src={WhyPI3} alt='teamBusinessOffice' />,
    icon: <Image src={WhyPIIcon3} alt='teamBusinessOffice' />,
    description: 'Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.'
  },
  {
    id: 4,
    name: 'Cost conscious & competitive',
    img: <Image className="bgImg" src={WhyPI4} alt='teamBusinessOffice' />,
    icon: <Image src={WhyPIIcon4} alt='teamBusinessOffice' />,
    description: 'Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.'
  },
  {
    id: 5,
    name: 'Advantage of a compact size',
    img: <Image className="bgImg" src={WhyPI5} alt='teamBusinessOffice' />,
    icon: <Image src={WhyPIIcon5} alt='teamBusinessOffice' />,
    description: 'Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.'
  },
  {
    id: 6,
    name: 'Ready for challenges',
    img: <Image className="bgImg" src={WhyPI6} alt='teamBusinessOffice' />,
    icon: <Image src={WhyPIIcon6} alt='teamBusinessOffice' />,
    description: 'Our detailed approach to building applications has given us extensive knowledge in sectors like finance, warehousing, retail, car rental, etc.'
  },
];


export const WhyPI = () => {
  return (
    <Stack bgcolor={'custom.black2'}>
      <OuterSection sx={{gap: 0}}>
      <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.3 }} 
                >
        <Stack className="SubTitlemarginBottom" textAlign={'center'}>
          <Typography color='custom.white4' variant='body_4' marginBottom={2} fontWeight={600} display={'block'}>WHY PI <SmallFullStop /></Typography>
          <Typography color='custom.white2' variant='body_6' display={'block'}>Each one us is always a big part of the solution</Typography>
        </Stack>
        </motion.div>
        <Grid container spacing={5}>
          {industries.map((industries) => (
            <WhyPIGrid size={{ xs: 12, md: 6}} key={industries.id}>
              <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.3 }} 
                >
              {industries.img}
              <Stack className="WhyPIHoverEffect" flexDirection={'row'} alignItems={'flex-start'} gap={2}>
                {industries.icon}
                <Stack>
                  <Typography color='custom.black' variant="body_5" display={'block'}>{industries.name}</Typography>
                  <Typography className="description" color='custom.black1' variant="body_4" display={'block'} fontWeight={400}>{industries.description}</Typography>
                </Stack>
              </Stack>
              </motion.div>
            </WhyPIGrid>
          ))}
        </Grid>
      </OuterSection>
      
    </Stack>
  );
};

