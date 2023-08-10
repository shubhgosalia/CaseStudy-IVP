import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import {AppBar,IconButton,Toolbar,Typography,Stack,Button} from "@mui/material"
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const Nav = () => {
  const navigate=useNavigate()
  const location = useLocation(); 

  return (
     //appbar is the default navbar in material ui
      <AppBar style={{background:'#21313A'}} position='sticky'>
           <Toolbar>
              <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                 <AddModeratorIcon/> 
              </IconButton>
              <Typography variant='h6' component='div' sx={{display: { xs: 'none', md: 'flex' }, mr:2 }}>
                SecMaster
              </Typography>
              <Stack direction='row' spacing={2}>
                  <Button onClick={()=>navigate('/')} color={location.pathname === '/' ? 'primary' : 'inherit'}>Home</Button>
                  <Button onClick={()=>navigate('/sec-upload')} color={location.pathname === '/sec-upload' ? 'primary' : 'inherit'}>Upload CSV</Button>
                  <Button onClick={()=>navigate('/sec-view-equity')} color={location.pathname === '/sec-view-equity' ? 'primary' : 'inherit'}>Equities</Button>
                  <Button onClick={()=>navigate('/sec-view-bond')} color={location.pathname === '/sec-view-bond' ? 'primary' : 'inherit'}>Bonds</Button>
              </Stack>
           </Toolbar>
      </AppBar>
  );
}

export default Nav;
