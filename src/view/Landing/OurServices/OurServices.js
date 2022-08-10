import React from 'react';
import Typography from '@mui/material/Typography';
import {Container, Grid, Hidden, Stack} from '@mui/material';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';

export default function OurServices() {
  return (
    <Container>
      <Typography align={'center'} sx={{letterSpacing: 3, color: '#7C7C7C', mt: 3, mb: {md: 3, xs: 2}}}>OUR
        SERVICES</Typography>
      <Typography align={'center'} sx={{mb: 2, fontSize: {md: 36, xs: 24}}}>
        Because cleanliness matters the most
      </Typography>
      <Hidden smDown={true}>
        <Typography color={'secondary'} sx={{fontSize: {md: 18, xs: 14}}} align={'center'}>
          We offer all types of cleaning services at affordable prices
        </Typography>
      </Hidden>
      <Hidden smUp={true}>
        <Typography color={'secondary'} sx={{fontSize: {md: 18, xs: 14}}} align={'center'}>
          We offer all types of cleaning services
        </Typography>
        <Typography color={'secondary'} sx={{fontSize: {md: 18, xs: 14}}} align={'center'}>
          at affordable prices
        </Typography>
      </Hidden>
      <Grid container spacing={3} sx={{my: {md: 10, xs: 2}}}>
        <Grid item md={4} xs={12}>
          <Stack flexDirection={'row'}>
            <BoyOutlinedIcon fontSize={'large'} color={'secondary'} />
            <Stack flexDirection={'column'}>
              <Typography color={'secondary'} fontSize={17} fontWeight={700} sx={{ml: 1}}>Home Cleaning Maid
                Services</Typography>
              <Typography sx={{color: '#7C7C7C', mt: 3}}>
                Residential cleaning services includes cleaning rooms, kitchen bathroom, vacuuming, and dusting and
                additionally we offer add-ons like washing, ironing, tidying, deep cleaning, etc.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
          <Stack flexDirection={'row'}>
            <ApartmentOutlinedIcon fontSize={'large'} color={'secondary'} />
            <Stack flexDirection={'column'}>
              <Typography color={'secondary'} fontSize={17} fontWeight={700} sx={{ml: 1}}>Commercial office
                Cleaning</Typography>
              <Typography sx={{color: '#7C7C7C', mt: 3}}>
                Your choice of office cleaning service is not only important it is crucial to make – and maintain – a
                great impression. We offer cleaning services that will give your premises that extra ‘pop’ it deserves.
                We’ll leave it clean, tidy, ready for the next day.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
          <Stack flexDirection={'row'}>
            <SwapHorizontalCircleOutlinedIcon fontSize={'large'} color={'secondary'} />
            <Stack flexDirection={'column'}>
              <Typography color={'secondary'} fontSize={17} fontWeight={700} sx={{ml: 1}}>Move-In / Move-Out
                Cleaning</Typography>
              <Typography sx={{color: '#7C7C7C', mt: 3}}>
                Moving out of a rental? A clean home will help you get your deposit back. Selling your home? We’ll get
                it in tip top shape for showing. Moving into a new home? We’ll get it clean and sanitized before your
                move-in date.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
          <Stack flexDirection={'row'}>
            <CleaningServicesOutlinedIcon fontSize={'large'} color={'secondary'} />
            <Stack flexDirection={'column'}>
              <Typography color={'secondary'} fontSize={17} fontWeight={700} sx={{ml: 1}}>Strata Cleaning</Typography>
              <Typography sx={{color: '#7C7C7C', mt: 3}}>
                We clean strata properties to your specifications. Our professional cleaning staff will make sure that
                every area of your property is completely cared for. Our cleaning solutions are comprehensive, but they
                are also priced to work with your budget.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
          <Stack flexDirection={'row'}>
            <EngineeringOutlinedIcon fontSize={'large'} color={'secondary'} />
            <Stack flexDirection={'column'}>
              <Typography color={'secondary'} fontSize={17} fontWeight={700} sx={{ml: 1}}>Post-Construction
                Cleaning</Typography>
              <Typography sx={{color: '#7C7C7C', mt: 3}}>
                Home construction can be stressful enough without having to deal with the post-job mess it leaves
                behind. Maple’s post-construction clean-up services will help your house make the transition from
                construction site to homestead.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
          <Stack flexDirection={'row'}>
            <MedicationLiquidOutlinedIcon fontSize={'large'} color={'secondary'} />
            <Stack flexDirection={'column'}>
              <Typography color={'secondary'} fontSize={17} fontWeight={700} sx={{ml: 1}}>Medical Center
                Cleaning</Typography>
              <Typography sx={{color: '#7C7C7C', mt: 3}}>
                Geared with updated equipment and utter compliance with the safety protocols we offer the extra steps
                like disinfection, sanitization, and sterilization.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
