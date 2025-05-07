// // components/ClientLogos.tsx

// import dynamic from 'next/dynamic';
// import { Typography, Box, Stack, Grid, useTheme, useMediaQuery } from '@mui/material';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Image from 'next/image';
// import { motion } from "framer-motion";
// import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

// import OurWork from '../../public/assets/img/Our-Work/vchat.png';
// import OurWork2 from '../../public/assets/img/Our-Work/work2.png';
// import { DirectionLink, OwlCarouselBox, OwlCarouselOuterBox, SmallFullStop } from '@/app/styles/MUI/common.styled';

// // Proper typing for OwlCarousel
// interface OwlCarouselProps {
//   children?: React.ReactNode;
//   loop?: boolean;
//   margin?: number;
//   nav?: boolean;
//   dots?: boolean;
//   autoplay?: boolean;
//   autoplayTimeout?: number;
//   navText?: string[];
//   responsive?: {
//     [key: number]: {
//       items: number;
//     };
//   };
// }

// const OwlCarousel = dynamic<OwlCarouselProps>(() => import('react-owl-carousel3'), { ssr: false });


// const logos = [
//   {
//     id: '1',
//     img: OurWork,
//     title: 'V.Chat',
//     description: 'V.Ships | Ship Management',
//   },
//   {
//     id: '2',
//     img: OurWork2,
//     title: 'Inspection Manager',
//     description: 'V.Ships | Ship Management',
//   },
//   {
//     id: '3',
//     img: OurWork,
//     title: 'V.Chat',
//     description: 'V.Ships | Ship Management',
//   },
//   {
//     id: '4',
//     img: OurWork2,
//     title: 'Inspection Manager',
//     description: 'V.Ships | Ship Management',
//   },
// ];

// const options: OwlCarouselProps = {
//   loop: false,
//   margin: 30,
//   nav: true,
//   dots: true,
//   autoplay: false,
//   autoplayTimeout: 3000,
//   navText: [
//     `<div class='nav-btn prev-slide'>
//       <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M6.66846 12L7.91164 10.8491L3.40689 6.79593L24 6.5V5.20407H3.40689L7.91164 1.15092L6.66846 0L-5.53131e-05 6L6.66846 12Z" fill="#1F1F1F"/>
//       </svg>
//     </div>`,
//     `<div class='nav-btn next-slide'>
//       <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M17.3315 12L16.0884 10.8491L20.5931 6.79593L0 6.5V5.20407H20.5931L16.0884 1.15092L17.3315 0L24.0001 6L17.3315 12Z" fill="#1F1F1F"/>
//       </svg>
//     </div>`,
//   ],
//   responsive: {
//     0: { items: 1 },
//     600: { items: 2 },
//     1366: { items: 3 },
//   },
// };

// export default function OurWorkCarousel() {
//   const theme = useTheme();
//   const isMdView = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Grid container spacing={2} sx={{ py: isMdView ? '80px' : '140px', px: isMdView ? '20px' : 0 }}>
//       <Grid size={{xs:12, sm:10, xl:10}} sx={{ mx: 'auto' }}>
//         <OwlCarouselOuterBox sx={{ position: 'relative' }}>
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <Stack>
//               <Typography
//                 color='custom.black3'
//                 variant='body_4'
//                 mb={2}
//                 fontWeight={600}
//                 display='block'
//                 letterSpacing='2.4px'
//                 textTransform='uppercase'
//               >
//                 our work <SmallFullStop />
//               </Typography>
//               <Typography
//                 color='custom.black'
//                 variant='body_6'
//                 display='block'
//                 className='SubTitlemarginBottom'
//               >
//                 Dive into our case studies
//               </Typography>
//             </Stack>
//           </motion.div>

//           <OwlCarousel {...options}>
//             {logos.map((e, index) => (
//               <Box key={e.id}>
//                 <Image
//                   src={e.img}
//                   alt={`Client Logo ${index + 1}`}
//                   style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
//                 />
//                 <OwlCarouselBox>
//                   <Box>
//                     <Typography variant='body_5' display='block' color='custom.white2' mb={1}>
//                       {e.title}
//                     </Typography>
//                     <Typography variant='body_4' fontWeight={400} color='custom.white3'>
//                       {e.description}
//                     </Typography>
//                   </Box>
//                   <DirectionLink onClick={() => console.log("Clicked!")}>
//                     <CallMadeOutlinedIcon />
//                   </DirectionLink>
//                 </OwlCarouselBox>
//               </Box>
//             ))}
//           </OwlCarousel>
//         </OwlCarouselOuterBox>
//       </Grid>
//     </Grid>
//   );
// }
