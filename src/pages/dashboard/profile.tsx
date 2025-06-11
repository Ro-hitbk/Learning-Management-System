import Layout  from "../../components/layout/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import {Grid, Card, Avatar, TextField, CardContent, CardHeader, Button} from '@mui/material';
import { useState } from "react";


type Form = {
  name: string;
  username: string;
  email: string;
  oldpassword: string;
  newpassword: string;
  confirmpassword: string;
};


function Content(){

  const[form, setForm] = useState<Form>({
    name: '',
    username: '',
    email: '',
    oldpassword: '',
    newpassword: '',
    confirmpassword: ''
  });


  const fields = {'Name':'Rohit', 'Username':'hitro','Email':'rohit@gmail.com','Old Password': 'Old Password', 'New Password': 'New Password', 'Confirm Password': 'Confirm Password'}

  const handleSubmit = () =>{
    if(!(form.username.includes("@"))){

    }
  }

  /*const fields = ['Name', 'Username', 'Email', 'Old Password', 'New Password', 'Confirm Password']*/

  return(
    <>
      <Box
              component="main"
              sx={{ display:'flex', justifyContent:'center' , p: 3, width: { sm: `calc(100% - 240px)` } }} 
            >
              <Box display={'flex'} flexDirection={'column'} sx={{width: '100%'}} gap={10}>
                  <Card sx={{mt:10, // dark, flat background
                    p: 3,
                    width: '100%',
                    position: 'relative',
                    backgroundColor: '#eef4ff', // light blue tint
                    color: '#333',
                    boxShadow: '0 0 7px 1px rgba(102, 126, 234, 0.5)', // soft blue glow
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: 2,
                    }}>
                    <CardHeader title={'Profile'} />
                    <CardContent>
                      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
                        <Avatar sx={{height: 104, width: 104, fontSize: 50, margin: 7}}>{fields['Name'][0]}</Avatar>
                      </Box>
                      <Card sx={{
                        p: 3,
                        width: '100%',
                        position: 'relative',
                        backgroundColor: '#f5f8ff', // light blue tint
                        color: '#333',
                        boxShadow: '0 0 7px 1px rgba(102, 126, 234, 0.5)', // soft blue glow
                        border: '1px solid rgba(102, 126, 234, 0.3)',
                        borderRadius: 2,
                      }}>
                      <Grid container sx={{width: '100%'}}>
                        {Object.entries(fields).map(([item, value]) => (
                          <Grid size={{xs:12, sm:12, md:6 }}>
                            <Box display='flex' flexDirection={'column'} gap={2} padding={2}>
                              <Typography>{item}:</Typography>
                              <TextField 
                                sx={{
                                  '& .MuiInputBase-root': {
                                    borderRadius: '12px',
                                    backgroundColor: '#f5f8ff',
                                    paddingX: 1.5,
                                    paddingY: 0.5,
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                                  },
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#d0d7de',
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#a0aacf',
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#4a6cf7',
                                    borderWidth: '2px',
                                  },
                                  '& .MuiInputBase-input': {
                                    fontSize: '1rem',
                                    color: '#1c1e21',
                                  },
                                  '& .MuiInputLabel-root': {
                                    fontSize: '0.95rem',
                                  },
                                }}
                               placeholder={value}></TextField>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                      <Button sx={{padding:2, paddingX: 3, m: 2, mt:4}} variant="contained">Update</Button>
                      </Card>
                    </CardContent>
                  </Card>
              </Box>
        </Box>
    </>
  )
}

function  Profile(){
  return(
    <>
      <Box sx={{ display: 'flex', width:'100vw'}}>
          <CssBaseline />
      <Layout/>
      <Content/>
      </Box>
    </>
  )
}

export default Profile;