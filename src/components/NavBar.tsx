import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/panacealogo.png';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{background:"#3b8cae"}}>
        <Toolbar>
        <IconButton  component={Link} to="/home" sx={{  flexGrow:"" }}>
          <img src={Logo} width='130px'/>
          </IconButton>
          <Typography variant="h6" component={Link} to='/home' sx={{ flexGrow: 1, color:'white' }}>
  
  
          </Typography>
          <Button href='/login' variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}