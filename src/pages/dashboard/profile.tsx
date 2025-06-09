import Layout  from "../../components/layout/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import {Grid, Card, Avatar, TextField, CardContent, CardHeader} from '@mui/material'


function Content(){

  const fields = ['Name', 'Username', 'Email', 'Old Password', 'New Password', 'Confirm Password']

  return(
    <>
      <Box
              component="main"
              sx={{ display:'flex', justifyContent:'center' , p: 3, width: { sm: `calc(100% - 240px)` } }} 
            >
              <Box display={'flex'} flexDirection={'column'} sx={{width: '100%'}} gap={10}>
                  <Card>
                    <CardHeader title={'Profile'} />
                    <CardContent>
                      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
                        <Avatar sx={{height: 104, width: 104, fontSize: 50}}>H</Avatar>
                      </Box>
                      <Grid container sx={{width: '100%'}}>
                        {fields.map((item) => (
                          <Grid size={{xs:12, sm:12, md:6 }}>
                            <Box display='flex' flexDirection={'column'} gap={2} padding={2}>
                              <Typography>{item}:</Typography>
                              <TextField label={`${item}`}></TextField>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
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