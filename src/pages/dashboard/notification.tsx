import Layout  from "../../components/layout/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import {Card, CardContent, CardHeader} from '@mui/material'


function Content(){

  const notifications = [1,2,3,4,5,6,7,8,9,10,11,12,13]

  return(
    <>
      <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
            >
             <Box display={'flex'} flexDirection={'column'} sx={{width: '100%'}} gap={10}>
                  <Card sx={{mt:10}}>
                    <CardHeader title={'Notification center'} />
                    <CardContent>
                        {notifications.map(() => (
                            <Box display='flex' flexDirection={'column'} gap={2} padding={2}>
                              <Card sx={{padding:3}}>
                                <Typography>Welcome to Learning Management System. Let's get started!</Typography>
                              </Card>
                            </Box>
                        ))}
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