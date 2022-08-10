import React, {useState} from 'react';
import {Container, Grid, Paper, Radio, RadioGroup, Stack} from '@mui/material';
import {Images} from '../../../common/Assets/Images';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import GetStarted from '../GetStarted';

export default function CleaningService() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAction = (result) => {
    setOpen(false);
  };
  return (
    <div>
      <Stack sx={{backgroundColor: '#FCFCFC'}}>
        <Container sx={{mt: 4}}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={4.7} sx={{display: {xs: 'none', md: 'block'}}}>
              <img draggable={'false'} width={'75%'} height={'100%'} src={Images.laptopMan} alt="landing man" />
            </Grid>
            <Grid item lg={6} md={7.2} xs={12}>
              <Paper sx={{px: 4, py: 4, boxShadow: '1px 1px 28px 6px rgba(232,232,232,0.44)'}}>
                <Typography sx={{fontSize: {md: 48, xs: 30}}} fontWeight={700}>Request a cleaning </Typography>
                <Typography sx={{fontSize: {md: 48, xs: 30}, mt: {md: -2.5, xs: -1}}} fontWeight={700}>service
                  now</Typography>
                <Typography fontSize={20} fontWeight={700} sx={{mb: 2}}>You are looking for</Typography>
                <RadioGroup>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <Stack flexDirection={'row'} alignItems={'center'}>
                        <Radio value="home_cleaning" label={'Home cleaning maid service'} />
                        <Typography fontSize={14}>Home cleaning maid service</Typography>
                      </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Stack flexDirection={'row'} alignItems={'center'}>
                        <Radio value="connercial_cleaning" label={'Commercial Office Cleaning'} />
                        <Typography fontSize={14}>Commercial Office Cleaning</Typography>
                      </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Stack flexDirection={'row'} alignItems={'center'}>
                        <Radio value="move_in_out" label={'Move-In/Move-Out Cleaning'} />
                        <Typography fontSize={14}>Move-In/Move-Out Cleaning</Typography>
                      </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Stack flexDirection={'row'} alignItems={'center'}>
                        <Radio value="strata_cleaning" label={'Strata Cleaning Service'} />
                        <Typography fontSize={14}>Strata Cleaning Service</Typography>
                      </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Stack flexDirection={'row'} alignItems={'center'}>
                        <Radio value="post_construction_cleaning" label={'Post-Construction Cleaning'} />
                        <Typography fontSize={14}>Post-Construction Cleaning</Typography>
                      </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Stack flexDirection={'row'} alignItems={'center'}>
                        <Radio value="medical_cleaning" label={'Medical Center Cleaning'} />
                        <Typography fontSize={14}>Medical Center Cleaning</Typography>
                      </Stack>
                    </Grid>
                    <Grid item sm={5} xs={12} sx={{mt: 2}}>
                      <Button onClick={handleOpen} fullWidth endIcon={<EastRoundedIcon fontSize={'small'} />}
                              variant={'contained'}
                              sx={{
                                textTransform: 'none',
                                boxShadow: 'none',
                                borderRadius: 0,
                                fontSize: 18,
                                fontWeight: 500,
                              }}
                      >Get started</Button>
                    </Grid>
                  </Grid>
                </RadioGroup>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <GetStarted open={open} handleClose={handleCloseAction} />
      </Stack>
    </div>
  );
}
