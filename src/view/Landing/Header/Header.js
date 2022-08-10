import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container, Stack} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import {useNavigate} from 'react-router-dom';
import GetStarted from '../GetStarted';
import {useState} from 'react';

const drawerWidth = 240;

export default function Header(props) {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAction = (result) => {
    setOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <Typography onClick={()=> navigate('/')} color={'primary'} fontWeight={700} sx={{my: 2}}>
        Maple
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{mt: -1}} onClick={() => navigate('/our-service-page')}>
            <ListItemText>Our services</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpen}>
            <Button fullWidth variant={'outlined'} color={'primary'} sx={{textTransform: 'none'}}>
              Book Now
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href={"tel: +61 449 611 989"}>
            <Button fullWidth variant={'contained'} startIcon={<CallIcon fontSize={'small'} />}
                    sx={{color: '#fff', textTransform: 'none'}}>
              Call Us
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar sx={{backgroundColor: '#fff', boxShadow: '1px 1px 28px 6px rgba(232,232,232,0.44)' }} component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: 'none'}}}
            >
              <Stack flexDirection={'row'} justifyContent={"space-between"} onClick={()=> navigate('/')}>
                <MenuIcon color={'primary'} />
                <Typography color={'primary'}>Maple</Typography>
              </Stack>
            </IconButton>
            <Typography
              variant="h6"
              color={'primary'}
              sx={{cursor: 'pointer',flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
              onClick={()=> navigate('/')}
            >
              Maple
            </Typography>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              <Button color={'secondary'} sx={{textTransform: 'none'}} onClick={() => navigate('/')}>
                Home
              </Button>
              <Button color={'secondary'} sx={{mr: 1, textTransform: 'none'}} onClick={() => navigate('/our-service-page')}>
                Our services
              </Button>
              <Button onClick={handleOpen} variant={'outlined'} color={'primary'} sx={{textTransform: 'none'}}>
                Book Now
              </Button>
              <Button component={'a'} href={"tel: +61 449 611 989"} variant={'contained'} startIcon={<CallIcon fontSize={'small'} />}
                      sx={{color: '#fff', textTransform: 'none', ml: 2}}>
                Call Us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <GetStarted open={open} handleClose={handleCloseAction}/>
    </Box>
  );
}
