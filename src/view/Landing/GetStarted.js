import React from 'react';
import {Dialog, DialogContent, Grid, Radio, RadioGroup, Stack, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

export default function GetStarted({open, handleClose}) {
  return (
    <Dialog
      open={open}
      onClose={(e) => handleClose(false, e)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <Typography sx={{fontSize: {md: 24, xs: 20}}} fontWeight={700}>
          Now, about your request...
        </Typography>
        <Typography sx={{fontSize: {md: 14, xs: 12}}}>
          Tell us what you need and we will get it done
        </Typography>
        <RadioGroup sx={{my: 2}}>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <Stack flexDirection={'row'} alignItems={'center'}>
                <Radio value="home_cleaning" />
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
          </Grid>
        </RadioGroup>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <TextField fullWidth size={'small'} variant={'outlined'} label={'Your name'} />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField fullWidth size={'small'} variant={'outlined'} label={'Your email'} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt: 0.5}}>
          <Grid item md={6} xs={12}>
            <TextField fullWidth size={'small'} variant={'outlined'} label={'Your phone number'} />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField fullWidth size={'small'} variant={'outlined'} label={'Your address'} />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField fullWidth size={'small'} variant={'outlined'} label={'Message'} multiline rows={4} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Button fullWidth endIcon={<EastRoundedIcon fontSize={'small'} />} variant="contained"
                    onClick={(e) => handleClose(true, e)} color="primary"
                    sx={{borderRadius: 0, boxShadow: 'none', px: 8, my: 2, py: 1}}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
