import React, {useState} from 'react';
import {Container, Grid, Paper, Stack} from '@mui/material';
import {Images} from '../../../common/Assets/Images';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import GetStarted from '../GetStarted';

export default function BookingService() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAction = (result) => {
    setOpen(false);
  };
  return (
    <div>
      <Container>
        <Paper
          sx={{pl: {md: 20, xs: 5}, pr: {md: 10, xs: 2}, mb: 4, boxShadow: '1px 1px 28px 6px rgba(232,232,232,0.44)'}}>
          <Grid container>
            <Grid item md={4} sx={{display: {xs: 'none', md: 'block'}}}>
              <img draggable={'false'} width={100} height={'100%'} src={Images.hangingPhone} alt="hanging phone" />
            </Grid>
            <Grid item md={8} sx={{mt: {md: 10, xs: 2}, mb: {md: 0, xs: 3}}}>
              <Typography sx={{fontSize: {md: 32, xs: 20}}} fontWeight={700}>Booking a cleaning service</Typography>
              <Typography sx={{fontSize: {md: 32, xs: 20}}} fontWeight={700}>has never been easier</Typography>
              <Stack sx={{width: {md: '70%'}}}>
                <Typography sx={{color: '#636262', mt: 2, mb: 5}}>
                  Let us know which cleaning service you are looking for and we will get it delivered
                </Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid item md={5}>
                  <Button onClick={handleOpen} color={'secondary'} endIcon={<EastRoundedIcon />} variant={'outlined'}
                          sx={{textTransform: 'none', p: 1}} fullWidth>Get started</Button>
                </Grid>
                <Grid item md={4}>
                  <Button component={'a'} href={'tel: +61 449 611 989'} startIcon={<CallRoundedIcon />}
                          variant={'contained'}
                          sx={{textTransform: 'none', boxShadow: 'none', p: 1}} fullWidth>Call us</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <GetStarted open={open} handleClose={handleCloseAction} />
    </div>
  );
}
