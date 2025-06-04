import {Box, Button, Card, CardMedia, TextField, Grid, Typography, InputAdornment, IconButton} from '@mui/material';
import {useState, useEffect} from 'react';
import signupimage from '../../assets/signup.avif';
import {Visibility, VisibilityOff} from '@mui/icons-material';

type Form = {
  email: string;
  password: string;
};

function Signup(){

  const [form, setForm] = useState<Form>({
    email: '',
    password: ''
  });

  const [cPass, setCPass] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [cPassErr, setCPassErr] = useState(false); 

  const[emailHT, setEmailHT] = useState('');
  const[passHT, setPassHT] = useState('');
  const [cPassHT, setCPassHT] = useState('');

  const[showPass, setShowPass] = useState(false);
  const[showCPass, setShowCPass] = useState(false);

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

  const handleClickCPass = () => {
    setShowCPass((prev) => !prev);
  };

  const cPassChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCPass(event.target.value);
  }

  const handleSubmit = () => {
    if(form.email.trim().length === 0){
      setEmailErr(true)
      setEmailHT("*Required")
    }
    else if(!(form.email.includes("@"))){
        setEmailErr(true)
        setEmailHT("Email must contain '@")
    }else{
        setEmailErr(false)
        setEmailHT("")
    }
    if(form.password.length < 8){
      setPassErr(true)
      setPassHT("Password must contain atleast 8 characters")
    }else{
      setPassErr(false)
      setPassHT("")
    }
    if(cPass !== form.password){
      setCPassErr(true)
      setCPassHT("Password doesn't match")
    }else{
      setCPassErr(false)
      setCPassHT("")
    }
    if(!emailErr && !passErr && !cPassErr){
      fetch('https://683ee2fd1cd60dca33dd74f3.mockapi.io/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: form.email,
            password: form.password,
          })
        }
      )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error', error));
  }
  };
  
  return(
    <>
        <Grid container spacing={2}display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{width: '100vw'}}>
          <Grid size={{md:6, lg:6, xl:6 }} sx={{width: '100%',display:{xs:'none',sm:'none', md:'block'}}}>
            <Box sx={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <Box alignContent={'end'} sx={{height: '15%'}}>
              <Typography justifySelf={'center'} color='#07C7F9' variant='h3' sx={{ WebkitTextStroke: '0.5px black',mt:25}}>Learning Management System</Typography>
              </Box>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '50%', width: '100%'}} >
                <img src = {signupimage} height={400}></img>
              </Box>
              <Box alignSelf={'center'} alignContent={'end'} sx={{ height: '5%', padding: 2}}>
                <Typography justifySelf={'center'} color='black' sx={{fontSize: 12}}>© 2025 Learning Management System. All rights reserved.</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs:12, sm:12, md:6, lg:6, xl:6 }} display={'flex'} justifyContent={'center'}>
            <Card sx = {{height:'100vh', width:'100%', bgcolor: '#07C7F9'}}>
              <Box sx={{height: '100%'}} display='flex' flexDirection={'column'} justifyContent={'space-between'}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx = {{height: '90.5%', width:'100%'}}>
                  <Card sx={{padding: 5, maxWidth: 350, width:'60%'}}>
                    <Typography variant='h4' padding={1}>Hello!</Typography>
                    <Typography paddingX={1} paddingY={2}>Sign up to get started</Typography>
                    <form>
                      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3}>
                        <TextField
                          id="email"
                          label="Email"
                          name = "email"
                          value = {form.email}
                          error = {emailErr}
                          helperText = {emailHT}
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
                        <TextField
                          id="cpswd"
                          label="Confirm Password"
                          type = {showCPass? 'text': 'password'}
                          name = "Confirm Password"
                          error = {cPassErr}
                          helperText = {cPassHT}
                          //value
                          onChange={cPassChange}
                          InputProps = {{
                            endAdornment:(
                              <InputAdornment position='end'>
                                <IconButton onClick = {handleClickCPass}>
                                  {showCPass? <Visibility/> : <VisibilityOff/>}
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
                <Box padding={2} display='flex' justifyContent=
                'center' alignSelf={'center'} alignContent="end">
                  <Typography justifySelf={'center'} alignSelf={'end'} color='black' sx={{fontSize: 12}}> Version 1.0</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      
    </>
  )
}



export default Signup;