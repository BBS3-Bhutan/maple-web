import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import {Container, Grid, Stack} from '@mui/material';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GetStarted from '../GetStarted';
import {Images} from '../../../common/Assets/Images';

export default function Footer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAction = (result) => {
    setOpen(false);
  };
  return (
    <div>
      <div style={{backgroundColor: '#08458D', paddingTop: '6%', paddingBottom: '6%'}}>
        <Container>
          <img draggable={'false'} width={55} height={50} src={Images.logo} alt="logo" />
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Typography fontSize={17} fontWeight={700} sx={{color: '#fff', pb: 2}}>
                About
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', width: '90%', lineHeight: 1.5}}>
                Maple Cleaning Services is a fully integrated cleaning company that provides comprehensive, high
                quality, reliable cleaning solutions to commercial, corporate, industrial and residential clients. We’ve
                full public liability insurance.
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography fontSize={17} fontWeight={700} sx={{color: '#fff', pb: 2}}>
                Services
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', mb: 1}}>
                Home Cleaning Maid Services
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', mb: 1}}>
                Move-In/Move-Out Cleaning
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', mb: 1}}>
                Post-Construction Cleaning
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', mb: 1}}>
                Condo & Apartment Cleaning
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', mb: 1}}>
                Deep Cleaning
              </Typography>
              <Typography fontSize={14} sx={{color: '#fff', mb: 1}}>
                Commercial Office Cleaning
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography fontSize={17} fontWeight={700} sx={{color: '#fff', pb: 2}}>
                Find us on
              </Typography>
              <FacebookRoundedIcon sx={{color: '#fff'}} fontSize={'medium'} />
              <InstagramIcon sx={{color: '#fff', mx: 1}} fontSize={'medium'} />
              <TwitterIcon sx={{color: '#fff'}} fontSize={'medium'} />
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography fontSize={17} fontWeight={700} sx={{color: '#fff', pb: 2}}>
                Contact us
              </Typography>
              <Stack flexDirection={'row'}>
                <MailOutlineRoundedIcon fontSize={'small'} sx={{color: '#fff'}} />
                <Typography fontSize={14} sx={{color: '#fff', ml: 1}}>
                  beesonduty@gmail.com
                </Typography>
              </Stack>
              <Stack flexDirection={'row'} sx={{mt: 2, mb: 2}}>
                <PhoneRoundedIcon fontSize={'small'} sx={{color: '#fff'}} />
                <Typography fontSize={14} sx={{color: '#fff', ml: 1}}>
                  +61 449 611 989
                </Typography>
              </Stack>
              <Button onClick={handleOpen} variant={'outlined'} sx={{textTransform: 'none', color: '#fff', border: '1px solid #fff'}}>
                Book a service now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{backgroundColor: '#06356B'}}>
        <Typography fontSize={14} sx={{color: '#fff', py: 2}} align={'center'}>
          © Copyright 2021 bees on duty. All rights reserved.
        </Typography>
      </div>
      <GetStarted open={open} handleClose={handleCloseAction}/>
    </div>
  );
}
