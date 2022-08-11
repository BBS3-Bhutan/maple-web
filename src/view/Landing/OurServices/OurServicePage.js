import React, {useEffect} from 'react';
import {Container, Grid, Paper, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {Images} from '../../../common/Assets/Images';
import {useLocation} from 'react-router-dom';

const bgPaper = {
  width: 300,
  height: 250,
  boxShadow: 'none',
  backgroundColor: '#0673F2',
  borderRadius: 0,
};

const titleServices = {
  fontSize: {md: 20, xs: 18},
  mb: 2,
};

const containerRelative = {
  position: 'relative',
  display: {xs: 'none', md: 'block'},
};

const serviceImage = {
  position: 'absolute',
  top: '10%',
  left: '10%',
};

export default function OurServicePage() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth', left: 0});
  }, [pathname]);

  return (
    <div>
      <Container>
        <Stack sx={{width: 50, height: 4, backgroundColor: '#0673F2', borderRadius: 20, mb: 1, mt: 4}}/>
        <Typography sx={{fontSize: {md: 30, xs: 20}, color: '#575656'}} fontWeight={500}>We Offer A Wide Range
          Of</Typography>
        <Typography sx={{fontSize: {md: 38, xs: 25}, mt: -1}} fontWeight={700}>Cleaning Services</Typography>
        <Grid container sx={{mt: 6}}>
          <Grid item md={5} xs={12} sx={{...containerRelative}}>
            <Paper sx={{...bgPaper}}/>
            <Stack sx={{...serviceImage}}>
              <img draggable={'false'} width={300} height={250} src={Images.homeCleaning} alt="home cleaning"/>
            </Stack>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography sx={{...titleServices}} fontWeight={500}>
              Home Cleaning Maid Services
            </Typography>
            <Typography color={'secondary'} sx={{fontSize: 14}}>
              Spending time with family or friends could be more valuable than spending time on cleaning. Do not fret
              over the mess or general cleanliness of your house , we got you covered with our general home cleaning
              service where our professional cleaners will ensure your house will be in pristine condition.
            </Typography>
            <Typography sx={{mt: 2}} fontWeight={500}>
              Services included in Home Cleaning
            </Typography>
            <Stack flexDirection={'row'} sx={{my: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>Cleaning rooms, kitchen, bathroom, vacuuming,
                and dusting</Typography>
            </Stack>
            <Stack flexDirection={'row'}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>Additionally we offer add-ons like washing,
                ironing, tidying, deep cleaning,
                etc.</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 6}}>
          <Grid item md={5} xs={12} sx={{...containerRelative}}>
            <Paper sx={{...bgPaper}}/>
            <Stack sx={{...serviceImage}}>
              <img draggable={'false'} width={300} height={250} src={Images.officeCleaning} alt="home cleaning"/>
            </Stack>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography sx={{...titleServices}} fontWeight={500}>
              Commercial Office Cleaning
            </Typography>
            <Typography color={'secondary'} sx={{fontSize: 14}}>
              Every office or commercial space requires different cleaning and hygiene solutions. When you engage in our
              cleaning services, we first comprehend what your office requires and offer cleaning services that helps to
              protect the health of you, your employees, and your workplace sanitation.
            </Typography>
            <Typography sx={{mt: 2}} fontWeight={500}>
              Services included in Commercial Office Cleaning
            </Typography>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Dry and wet mopping, scrubbing and cleaning of floors and ceiling
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Vacuuming for surface dust/dirt removal
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Disinfection and sanitization of high-touch areas like switchboards, door handles, taps, tables, desks,
                keyboards, chairs, etc.,
              </Typography>
            </Stack>
            <Stack flexDirection={'row'}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Cleaning common areas, window, doors, and bathrooms
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 6}}>
          <Grid item md={5} xs={12} sx={{...containerRelative}}>
            <Paper sx={{...bgPaper}}/>
            <Stack sx={{...serviceImage}}>
              <img draggable={'false'} width={300} height={250} src={Images.moveInOut} alt="home cleaning"/>
            </Stack>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography sx={{...titleServices}} fontWeight={500}>
              Move-In/Move-Out Cleaning
            </Typography>
            <Typography color={'secondary'} sx={{fontSize: 14}}>
              Moving is exciting. It is also a lot of work. Nothing is worse than getting the keys to your new home and
              finding that it needs a thorough cleaning before you feel comfortable moving in. Maple cleaning company
              offer all the move in and out cleaning and sanitizing for you, so you have a spotless space to put your
              furniture and belongings.
            </Typography>
            <Typography sx={{mt: 2}} fontWeight={500}>
              Services included in Move-In/Move-out Cleaning
            </Typography>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Dusting every surface, including window frames, light fixtures, and ceiling fans
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Spot cleaning doors and door frames
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Vacuuming all floors and cleaning all wood, vinyl, tile, and other flooring
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Cleaning and sanitizing countertops, sinks, bathtubs, showers, and more
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 6}}>
          <Grid item md={5} xs={12} sx={{...containerRelative}}>
            <Paper sx={{...bgPaper}}/>
            <Stack sx={{...serviceImage}}>
              <img draggable={'false'} width={300} height={250} src={Images.stataCleaning} alt="home cleaning"/>
            </Stack>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography sx={{...titleServices}} fontWeight={500}>
              Strata Cleaning
            </Typography>
            <Typography color={'secondary'} sx={{fontSize: 14}}>
              We clean strata properties to your specifications. Our professional cleaning staff will make sure that
              every area of your property is completely cared for. Our cleaning solutions are comprehensive, but they
              are also priced to work with your budget.
            </Typography>
            <Typography sx={{mt: 2}} fontWeight={500}>
              Services included in Strata Cleaning
            </Typography>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Clearing of cobwebs in common halls and areas
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Wiping, disinfection and sanitization of high-touch points like switchboards, doorknobs, common faucets,
                park benches, handrails, etc.
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Disposal of garbage
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Vacuuming, Carpet cleaning, and common bathroom cleaning
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 6}}>
          <Grid item md={5} xs={12} sx={{...containerRelative}}>
            <Paper sx={{...bgPaper}}/>
            <Stack sx={{...serviceImage}}>
              <img draggable={'false'} width={300} height={250} src={Images.constructionCleaning} alt="home cleaning"/>
            </Stack>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography sx={{...titleServices}} fontWeight={500}>
              Post-Construction Cleaning
            </Typography>
            <Typography color={'secondary'} sx={{fontSize: 14}}>
              Home construction can be stressful enough without having to deal with the post-job mess it leaves behind.
              Maple’s post-construction clean-up services will help your house make the transition from construction
              site to homestead.
            </Typography>
            <Typography sx={{mt: 2}} fontWeight={500}>
              Services included in Post-Construction Cleaning
            </Typography>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Remove dust, dirt, smudges, and scuffs from walls
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Dust all surfaces, woodwork, and fixtures, including ceiling fans
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Clean trim, baseboards, window frames, and door frames
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Remove stickers from windows and glass
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Clean window blinds, inside cabinets, and inside closets
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 6, mb: 6}}>
          <Grid item md={5} xs={12} sx={{...containerRelative}}>
            <Paper sx={{...bgPaper}}/>
            <Stack sx={{...serviceImage}}>
              <img draggable={'false'} width={300} height={250} src={Images.medicalCleaning} alt="home cleaning"/>
            </Stack>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography sx={{...titleServices}} fontWeight={500}>
              Medical Center Cleaning
            </Typography>
            <Typography color={'secondary'} sx={{fontSize: 14}}>
              Geared with updated equipment and utter compliance with the safety protocols we offer the extra steps like
              disinfection, sanitization, and sterilization.
            </Typography>
            <Typography sx={{mt: 2}} fontWeight={500}>
              Services included in Medical center Cleaning
            </Typography>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Comprehensive surface vacuuming, scrubbing, and cleaning
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Bed, mattress, bed frame, footboard and rails cleaning
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                High-contact areas including phones, armchairs, doorknobs, cabinet handles, faucets
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Surface disinfection from corner to corner and sanitization of every equiptments
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} sx={{mt: 1}}>
              <CheckCircleRoundedIcon color={'primary'}/>
              <Typography fontSize={14} color={'secondary'} sx={{ml: 1}}>
                Deep cleaning wherever necessary
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
