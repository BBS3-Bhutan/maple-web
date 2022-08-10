import React from 'react';
import {Container, Divider, Grid, Hidden, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';

export default function WhyChooseUs() {
  return (
    <div>
      <Container>
        <Typography align={'center'} sx={{letterSpacing: 3, color: '#7C7C7C', mt: 3}}>WHY CHOOSE US</Typography>
        <Typography align={'center'} sx={{fontSize: {md: 36, xs: 26}}}>Why bees on duty?</Typography>
        <Grid container sx={{my: 4}}>
          <Grid md={3} xs={12} />
          <Grid md={3} sm={4} xs={12}>
            <Stack flexDirection={'row'} alignItems={'center'}>
              <HailRoundedIcon sx={{fontSize: 30, mr: 2}} color={'primary'}/>
              <Stack flexDirection={'column'}>
                <Typography fontSize={15} fontWeight={500}>Reliable professionals</Typography>
                <Typography fontSize={15} sx={{color: '#7C7C7C'}}>We surpass expectation</Typography>
              </Stack>
            </Stack>
            <Stack flexDirection={'row'} alignItems={'center'} sx={{my: 3}}>
              <WorkspacePremiumRoundedIcon sx={{fontSize: 30, mr: 2}} color={'primary'}/>
              <Stack flexDirection={'column'}>
                <Typography fontSize={15} fontWeight={500}>Top notch quality</Typography>
                <Typography fontSize={15} sx={{color: '#7C7C7C'}}>You can rely on us</Typography>
              </Stack>
            </Stack>
            <Stack flexDirection={'row'} alignItems={'center'} sx={{mb: 3}}>
              <TouchAppOutlinedIcon sx={{fontSize: 30, mr: 2}} color={'primary'}/>
              <Stack flexDirection={'column'}>
                <Typography fontSize={15} fontWeight={500}>Fast and convenient</Typography>
                <Typography fontSize={15} sx={{color: '#7C7C7C'}}>Book services with a few click </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Hidden smUp={true}>
            <Stack sx={{width: '100%', mb: 3}}>
            <Divider/>
            </Stack>
          </Hidden>
          <Grid md={6} sm={8} xs={12}>
            <Stack flexDirection={'row'} sx={{mb: 1}}>
              <CheckCircleRoundedIcon color={'primary'} sx={{mr: 2}} />
              <Typography fontSize={14}>Get free qoute for service over phone call or email</Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mb: 1}}>
              <CheckCircleRoundedIcon color={'primary'} sx={{mr: 2}} />
              <Typography fontSize={14}>Competitive and Affordable rates</Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mb: 1}}>
              <CheckCircleRoundedIcon color={'primary'} sx={{mr: 2}} />
              <Typography fontSize={14}>Cleaners are fully trained, and referrenced checked</Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mb: 1}}>
              <CheckCircleRoundedIcon color={'primary'} sx={{mr: 2}} />
              <Typography fontSize={14}>We use eco-friendly solutions and detergents on request</Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mb: 1}}>
              <CheckCircleRoundedIcon color={'primary'} sx={{mr: 2}} />
              <Typography fontSize={14}>Our services come with a 100% satisfaction guarantee</Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mb: 1}}>
              <CheckCircleRoundedIcon color={'primary'} sx={{mr: 2}} />
              <Typography fontSize={14}>Top rated cleaning services</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
