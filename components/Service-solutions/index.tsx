import React from 'react';
import {
  Box,
  Typography,
  Stack,
  useMediaQuery,
  Grid
} from '@mui/material';
import { ChipUI2, OuterGrid, OuterSection } from '@/app/styles/MUI/common.styled';
import Service1 from '../../public/assets/img/Services/service1.png'
import Service2 from '../../public/assets/img/Services/service2.png'
import Service3 from '../../public/assets/img/Services/service3.png'
import Service4 from '../../public/assets/img/Services/service4.png'
import Service5 from '../../public/assets/img/Services/service5.png'
import Service6 from '../../public/assets/img/Services/service6.png'
import Image from 'next/image';
import { motion } from "framer-motion";

const services = [
  {
    title: 'Application Development',
    img: <Image src={Service1} alt='service' />,
    description: 'Pi Techniques provides comprehensive application development services, crafting innovative and user-centric software solutions tailored to your specific business requirements. Our expert team leverages the latest technologies to deliver scalable, robust, and efficient applications that enhance your operational efficiency and drive business growth.',
    tags: ['.NET C#', 'JAVA FX', 'WPF with MVM'],
  },
  {
    title: 'Business Intelligence & Data Analytics',
    img: <Image src={Service2} alt='service' />,
    description: 'Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.',
    tags: ['Database Integration & API', 'DevExpress', 'SQL BI'],
  },
  {
    title: 'IT Infrastructure',
    img: <Image src={Service3} alt='service' />,
    description: 'Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.',
    tags: ['Networking', 'Hardware', 'Firewall', 'Security', 'Hosting'],
  },
  {
    title: 'User Experience & Visual Design',
    img: <Image src={Service4} alt='service' />,
    description: 'Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.',
    tags: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    title: 'Mobile Development',
    img: <Image src={Service5} alt='service' />,
    description: 'Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.',
    tags: ['Native iOS', 'Native Android', 'Xamarin'],
  },
  {
    title: 'Website Development',
    img: <Image src={Service6} alt='service' />,
    description: 'Every business has unique requirements, which is why we offer custom mobile app development services. Whether you need a native app for iOS or Android, a cross-platform solution, or a progressive web app, our experienced developers can build applications that align perfectly with your business objectives and user expectations.',
    tags: ['MERN', 'Angular JS', 'MVC', 'HTML 5', 'Wordpress', 'Woo Commerce'],
  },
];

const ServicesSolution = () => {
  const isMdView = useMediaQuery(`(max-width:768px)`);
  return (
    <Box bgcolor={'custom.black2'}>
      <OuterGrid container spacing={5} sx={{
        "& .serviceSolution": { marginTop: '96px' }
      }} justifyContent={'space-between'}>
        <Grid size={{ xs: 12, lg: 11, xl: 9 }} offset={{ xs: 0, lg: 1, xl: 2 }}>
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
              >
                <Stack className='serviceSolution' flexDirection={isMdView ? 'column' : 'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
                  {service.img}
                  <Box width={isMdView ? '100%' : '67%'}>
                    <Typography variant="count" display={'block'} textAlign={'left'} marginTop={isMdView ? '80px' : '0px'} fontWeight="500" color='custom.white2' gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="Caption" display={'block'} marginTop={isMdView ? '32px' : '72px'} color="custom.white3" gutterBottom>
                      {service.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1} mt={4}>
                      {service.tags.map((tag, idx) => (
                        <ChipUI2 key={idx}>{tag}</ChipUI2>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </motion.div>
            ))}
        </Grid>
      </OuterGrid>
    </Box>
  );
};

export default ServicesSolution;
