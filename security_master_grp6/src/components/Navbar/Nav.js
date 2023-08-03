import React from 'react';
import { useNavigate } from 'react-router';
import {AppBar,IconButton,Toolbar,Typography,Stack,Button} from "@mui/material"
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const Nav = () => {
  const navigate=useNavigate()
  return (
     //appbar is the default navbar in material ui
      <AppBar style={{background:'#21313A'}} position='static'>
           <Toolbar>
              <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                 <AddModeratorIcon/> 
              </IconButton>
              <Typography variant='h6' component='div' sx={{display: { xs: 'none', md: 'flex' }, mr:2 }}>
                SecMaster
              </Typography>
              <Stack direction='row' spacing={2}>
                  <Button onClick={()=>navigate('/')} color='inherit'>Home</Button>
                  <Button onClick={()=>navigate('/sec-upload')} color='inherit'>Upload CSV</Button>
                  <Button onClick={()=>navigate('/sec-view-equity')} color='inherit'>Equities</Button>
                  <Button onClick={()=>navigate('/sec-view-bond')} color='inherit'>Bonds</Button>
              </Stack>
           </Toolbar>
      </AppBar>
  );
}

export default Nav;
