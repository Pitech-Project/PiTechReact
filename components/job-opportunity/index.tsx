"use client"

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BannerBox, OuterSection, OutlineWhiteBtn, StyledCareersBanner } from '@/app/styles/MUI/common.styled';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useRouter } from 'next/navigation';
import ArrowRightBlack from '../SVGIcons/arrowRightBlack';

export const JobOpportunity = () => {
  const router = useRouter()
  const theme = useTheme();
  const isMdView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledCareersBanner className='bg-fixedImg' bgcolor={'custom.black'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <BannerBox >
          <Typography variant='count' fontWeight={500} color={'custom.white5'}>We’d love to hear from you</Typography>
          <Typography margin={'50px 0 40px'} display={'block'} width={'100%'} variant='body_3' fontWeight={400} color={'custom.white5'}>If you are passionate about innovating the future, we’d<br style={{display: isMdView ? 'none' : ''}}></br> love to hear from you!</Typography>
           <OutlineWhiteBtn onClick={()=> router.push('/contact')} >GET IN TOUCH <ArrowRightBlack  /></OutlineWhiteBtn>
        </BannerBox>
    </StyledCareersBanner>
  );
};

