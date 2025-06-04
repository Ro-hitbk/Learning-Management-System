import {Box, Button, Card, CardMedia, TextField, Grid, Typography, InputAdornment, IconButton} from '@mui/material';
import {useState, useEffect} from 'react';
import loginimage from '../../assets/login.avif';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


type Form = {
  username: string;
  password: string;
};

function Login(){

  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    username: '',
    password: ''
  });

  const [userNameErr, setUserNameErr] = useState(false);
  const [passErr, setPassErr] = useState(false); 

  const[userNameHT, setUserNameHT] = useState('');
  const[passHT, setPassHT] = useState('');

  const[showPass, setShowPass] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setForm((prevform)=>({
      ...prevform,
      [name]:value
    }));
  };

  const handleClickPass = () => {
    setShowPass((prev) => !prev);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(form.username.trim().length === 0){
      setUserNameErr(true)
      setUserNameHT("*Required")
    }
    else if(!(form.username.includes("@"))){
        setUserNameErr(true)
        setUserNameHT("Email must contain '@")
        return;
    }else{
        setUserNameErr(false)
        setUserNameHT("")
    }
    if(form.password.length < 8){
      setPassErr(true)
      setPassHT("Password must contain atleast 8 characters")
      return;
    }else{
      setPassErr(false)
      setPassHT("")
    }
    if(!userNameErr && !passErr){
      fetch('https://683ee2fd1cd60dca33dd74f3.mockapi.io/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
          })
        }
      )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error', error));

      e.preventDefault();
      navigate("/dashboard");
    }
  };
  
  return(
    <>
        <Grid container spacing={2}display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{width: '100vw'}}>
          <Grid size={{md:6, lg:6, xl:6 }} sx={{width: '100%',display:{xs:'none',sm:'none', md:'block'}}}>
            <Box sx={{height: '100vh'}} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} gap={10} alignSelf={'center'} paddingY={17}>
                <Box display={'flex'} sx={{padding: 5, height: '5%'}}  justifyItems={'center'}>
                  <Typography color='#07C7F9' variant='h3' sx={{ WebkitTextStroke: '0.5px black'}}>Learning Management System</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '80%', width: '100%'}} >
                  <img src = {loginimage} height={400}></img>
                </Box>
              </Box>
              <Box sx={{padding: 2}}>
                <Typography justifySelf={'center'} color='black' sx={{fontSize: 12}}>© 2025 Learning Management System. All rights reserved.</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs:12, sm:12, md:6, lg:6, xl:6 }} display={'flex'} justifyContent={'center'}>
            <Card sx = {{height:'100vh', width:'100%', bgcolor: '#07C7F9'}}>
              <Box sx={{height: '100vh'}} display="flex" flexDirection={'column'} justifyContent={'space-between'} >
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx = {{height: '91.5%', width:'100%'}}>
                  <Card sx={{padding: 5, maxWidth: 350, width:'60%'}}>
                    <Typography variant='h4' paddingX={1} paddingY={1}>Hello!</Typography>
                    <Typography paddingX={1} paddingY={2}>Welcome back</Typography>
                    <form>
                      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3}>
                        <TextField
                          id="username"
                          label="Username"
                          name = "username"
                          value = {form.username}
                          error = {userNameErr}
                          helperText = {userNameHT}
                          onChange={handleChange}
                        />
                        <TextField
                          id="pswd"
                          label="Password"
                          type={showPass? 'text': 'password'}
                          name="password"
                          value = {form.password}
                          error = {passErr}
                          helperText = {passHT}
                          onChange={handleChange}
                          InputProps = {{
                            endAdornment:(
                              <InputAdornment position = "end">
                                <IconButton onClick={handleClickPass}>
                                  {showPass? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                        <Button onClick={handleSubmit} variant="contained" sx={{borderRadius: 10, height: 50}}>Submit</Button>
                      </Box>
                    </form>
                  </Card>
                </Box>
                <Box sx={{padding: 2}} justifySelf={'center'}>
                  <Typography justifySelf={'center'} alignSelf={'end'} color='black' sx={{fontSize: 12}}> Version 1.0</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      
    </>
  )
}



export default Login;