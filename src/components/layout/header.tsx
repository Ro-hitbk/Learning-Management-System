import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useAuth } from '../../pages/auth/authcontext';
import { useNavigate } from 'react-router-dom';

export default function Header(){

  const {logout} = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    //navigate("/");
  }


  return(
  <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: `240px` },
          backgroundColor: 'black',
        }}
      >
        <Toolbar sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
          <Button variant='contained' onClick={handleClick}>
          Logout
        </Button>
        </Toolbar>
      </AppBar>
  )
}