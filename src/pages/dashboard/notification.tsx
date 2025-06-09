import Layout  from "../../components/layout/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import {Card, CardContent, CardHeader, Grid} from '@mui/material'


function Content(){

  const notifications = [1,2,3,4,5,6,7,8,9,10,11,12]

  return(
    <>
      <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, backgroundColor: '#f7f9fc',}}
            >
             <Box display={'flex'} flexDirection={'column'} sx={{width: '100%'}} gap={10}>
                  <Card sx={{mt:10, backgroundColor: '#ffffff', // dark, flat background
                    borderRadius: 4,
                    p: 3,
                    boxShadow: '0 0 1px rgba(0, 0, 0, 0.6)', // subtle dark shadow
                    width: '100%',}}>
                    <CardHeader title={'Notifications'} />
                    <CardContent>
                        <Grid container>
                        {notifications.map(() => (
                            <Grid size={{xs:12, sm:12, md:6}}>
                            <Box display='flex' flexDirection={'column'} gap={2} padding={2}>
                              <Card
                                sx={{
                                position: 'relative',
                                backgroundColor: '#eef4ff', // light blue tint
                                  color: '#333',
                                  boxShadow: '0 0 7px 1px rgba(102, 126, 234, 0.5)', // soft blue glow
                                  border: '1px solid rgba(102, 126, 234, 0.3)',
                                  borderRadius: 2,
                                  padding: 2,
                                  transition: '0.3s ease-in-out',
                                  '&:hover': {
                                    boxShadow: '0 0 20px 2px rgba(102, 126, 234, 0.7)', // stronger glow
                                    transform: 'scale(1.015)',
                                  },
                              }}>
                                <CardHeader title="New Modules Added!"></CardHeader> 
                                <Box sx={{ position: 'absolute', top: 8, right: 12 }}>
                                <Typography variant="caption" color="text.secondary">
                                  Tue 10:45 AM
                                </Typography>
                              </Box>
                                <Typography>Kindly Visit the modules page to view the newly uploaded modules</Typography>
                              </Card>
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

function  Notification(){
  return(
    <>
      <Box sx={{ display: 'flex',  width:'100vw' }}>
          <CssBaseline />
      <Layout/>
      <Content/>
      </Box>
    </>
  )
}

export default Notification;