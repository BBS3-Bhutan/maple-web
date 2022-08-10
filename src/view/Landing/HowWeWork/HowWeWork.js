import React from 'react';
import {Container, Grid, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';
import {Images} from '../../../common/Assets/Images';

export default function HowWeWork() {
  return (
    <div style={{backgroundColor: '#FCFCFC'}}>
      <Container>
        <Grid container sx={{py: 3}}>
          <Grid item md={7}>
            <Typography sx={{letterSpacing: 3, mb: 1.5, color: '#908D8D'}}>How we work</Typography>
            <Typography sx={{fontSize: {md: 36, xs: 20}}}>How does bees on duty works</Typography>
            <Stack sx={{width: {lg: '76%'}}}>
              <Typography fontSize={14} sx={{color: '#7C7C7C'}}>
                Taking the stress out of any aspect of cleaning is what we specialise in. We will come to your premises
                and offer a free quote, so you know exactly what you’ll be spending
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} alignItems={'center'} sx={{mt: 5}}>
              <LocalLibraryOutlinedIcon sx={{fontSize: 30, mr: 2}} color={'primary'} />
              <Stack flexDirection={'column'}>
                <Typography fontSize={15} fontWeight={500}>Book online</Typography>
                <Stack sx={{width: {md: '80%'}}}>
                  <Typography fontSize={15} sx={{color: '#7C7C7C'}}>
                    Tell us what you need and book online. We’ll match you with a trusted, experienced house cleaner
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack flexDirection={'row'} alignItems={'center'} sx={{mt: 3}}>
              <PhotoFilterOutlinedIcon sx={{fontSize: 30, mr: 2}} color={'primary'} />
              <Stack flexDirection={'column'}>
                <Typography fontSize={15} fontWeight={500}>Get our star Cleaner</Typography>
                <Stack sx={{width: {md: '80%'}}}>
                  <Typography fontSize={15} sx={{color: '#7C7C7C'}}>
                    Our trusted cleaner will be at your home at your preferred time and finish the job as requested and
                    hassle free!
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack flexDirection={'row'} alignItems={'center'} sx={{mt: 3}}>
              <AirlineSeatReclineNormalOutlinedIcon sx={{fontSize: 30, mr: 2}} color={'primary'} />
              <Stack flexDirection={'column'}>
                <Typography fontSize={15} fontWeight={500}>Enjoy</Typography>
                <Stack sx={{width: {md: '80%'}}}>
                  <Typography fontSize={15} sx={{color: '#7C7C7C'}}>
                    That’s it! We guarantee your satisfaction for you to enjoy a healthy clean home.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={5} sx={{display: {xs: 'none', md: 'block'}}}>
            <img draggable={'false'} width={400} height={'100%'} src={Images.superHuman} alt="super human" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
