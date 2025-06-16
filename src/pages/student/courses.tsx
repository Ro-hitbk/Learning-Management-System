import { Box, Card, CardContent, CardHeader, CssBaseline, Divider, Grid, Typography } from "@mui/material";
import Layout from "../../components/layout/layout";



function Content(){


  const enmodules = [1,2,3,4,5,6,7,8,9,10,11,12]



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
                    <CardHeader title={'Courses'} />
                    <CardContent>
                      <Typography variant="h6">Enrolled Courses</Typography>
                        <Box height={250} overflow="scroll"
                         sx={{
                          overflow: 'scroll',
                          maxHeight: '300px',
                          '&::-webkit-scrollbar': {
                            width: '8px',
                          },
                          '&::-webkit-scrollbar-track': {
                            //backgroundColor: '#f0f0f0',
                            //borderRadius: '4px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '4px',
                          },
                          '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                          },
                        }}
                        >
                        <Grid container>
                        {enmodules.map((index) => (
                            <Grid size={{xs:12, sm:12, md:3}}>
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
                                <CardHeader title={"Module " + `${index}`}></CardHeader> 
                                <Box sx={{ position: 'absolute', top: 8, right: 12 }}>
                                <Typography variant="caption" color="text.secondary">
                                  76% Completed
                                </Typography>
                              </Box>
                                <Typography>Introduction to marine technology </Typography>
                              </Card>
                            </Box>
                            </Grid>
                        ))}
                         </Grid>
                        </Box>
                        <Grid size={{xs:12}}>
                          <Divider sx={{ my: 4 }} />
                          <Typography variant="h6">Available Courses</Typography>
                        </Grid>
                        <Box height={300} overflow="scroll"
                        sx={{
                          overflow: 'scroll',
                          maxHeight: '300px',
                          '&::-webkit-scrollbar': {
                            width: '8px',
                          },
                          '&::-webkit-scrollbar-track': {
                            //backgroundColor: '#f0f0f0',
                            //borderRadius: '4px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '4px',
                          },
                          '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                          },
                        }}
                        >
                        <Grid container>
                        {enmodules.map((index) => (
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
                                <CardHeader title={"Module " + `${index + 12}`}></CardHeader> 
                                <Box sx={{ position: 'absolute', top: 8, right: 12 }}>
                                <Typography variant="caption" color="text.secondary">
                                  New
                                </Typography>
                              </Box>
                                <Typography>Introduction to marine technology </Typography>
                              </Card>
                            </Box>
                            </Grid>
                        ))}
                        </Grid>
                        </Box>
                    </CardContent>
                  </Card>
              </Box>
            </Box>
    </>
  )
}


function  Courses(){
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

export default Courses;


