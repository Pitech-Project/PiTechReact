"use client"

import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import CallMadeIcon from '@mui/icons-material/CallMade';
import Service1 from '../../public/assets/img/Services/service1.png'
import Service2 from '../../public/assets/img/Services/service2.png'
import Service3 from '../../public/assets/img/Services/service3.png'
import Service4 from '../../public/assets/img/Services/service4.png'
import Service5 from '../../public/assets/img/Services/service5.png'
import Service6 from '../../public/assets/img/Services/service6.png'
import { OuterSection, OutlineWhiteBtn, ServiceGrid, SmallFullStop } from "@/app/styles/MUI/common.styled";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
    transformup?: boolean
}

export const products = [
    {
        id: 1,
        name: 'Application Development',
        img: <Image src={Service1} alt='teamBusinessOffice' />,
        description: 'Custom application development tailored to meet your unique business needs. Our team of experienced developers combines technical expertise with creative problem-solving to deliver innovative and user-centric applications.',
    },
    {
        id: 2,
        name: 'Mobile Development',
        img: <Image src={Service2} alt='teamBusinessOffice' />,
        description: 'High performance mobile applications, leveraging the latest technologies for seamless user experiences. Our end-to-end mobile development services ensure robust, scalable, and innovative solutions for both iOS and Android platforms.',
    },
    {
        id: 3,
        name: 'Website Development',
        img: <Image src={Service3} alt='teamBusinessOffice' />,
        description: 'Website development services, creating custom, high quality websites that enhance your online presence and drive business growth. Our expert team ensures responsive and user friendly designs tailored to our client needs.',
    },
    {
        id: 4,
        name: 'User Experience & Visual Design',
        img: <Image src={Service4} alt='teamBusinessOffice' />,
        description: 'Intuitive and visually stunning interfaces that captivate and engage users. Our expert team prioritizes usability and aesthetics, ensuring that every design enhances your brands digital presence and delivers a seamless, enjoyable user experience.',
    },
    {
        id: 5,
        name: 'Business Intelligence & Data Analytics',
        img: <Image src={Service5} alt='teamBusinessOffice' />,
        description: 'Transforming complex data into actionable insights for your business. Our solutions enable you to make informed decisions, optimize operational performance and identify growth opportunities, helping you stay ahead in a competitive market.',
    },
    {
        id: 6,
        name: 'IT Infrastructure',
        img: <Image src={Service6} alt='teamBusinessOffice' />,
        description: 'Secure and efficient management solutions tailored to your business needs. Our expert team ensures seamless operation and reliability, empowering your business to thrive in the digital landscape.',
    },
];


export const Services = ({transformup}: Props) => {
    const router = useRouter()
    const isMdView = useMediaQuery(`(max-width:768px)`);

    return (
        <Stack bgcolor={'custom.black2'}>
            <OuterSection sx={{ gap: 0 }}>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Stack flexDirection={isMdView ? 'column' : 'row'} justifyContent={'space-between'} alignItems={isMdView ? 'flex-start' : 'center'} className="SubTitlemarginBottom">
                        <Stack width={isMdView ? '100%' : '560px'}>
                            <Typography color='custom.white4' variant='body_4' marginBottom={2} letterSpacing={'2.4px'} fontWeight={600} display={'block'}>SERVICES <SmallFullStop /></Typography>
                            <Typography color='custom.white2' variant='body_6' display={'block'}>Technology solutions offered</Typography>
                        </Stack>
                        <OutlineWhiteBtn sx={{ marginTop: isMdView ? '48px' : '0' }} onClick={() => router.push('/about')} transformup={transformup}>ABOUT US <CallMadeIcon sx={{ marginLeft: '8px', height: 16 }} /></OutlineWhiteBtn>
                    </Stack>
                </motion.div>

                <Grid container className='' spacing={isMdView ? 3 : 5}>
                    {products.map((product) => (
                        <ServiceGrid size={{ xs: 12, md: 6, lg: 6 }} key={product.id}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: product.id % 2 === 0 ? -100 : 100,
                                        y: 50,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,  
                                        y: 0, 
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                >
                                    {product.img}
                                    <Typography color='custom.white2' variant="body_5" display={'block'} margin={isMdView ? '30px 0 16px' : '50px 0 24px'}>{product.name}</Typography>
                                    <Typography color='custom.white2'>{product.description}</Typography>
                                </motion.div>
                        </ServiceGrid>
                    ))}
                </Grid>
            </OuterSection>
        </Stack >
    );
};

