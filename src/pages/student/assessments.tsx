import { Box, Button, Card, CardContent, CardHeader, CssBaseline, Divider, Grid, Typography } from "@mui/material";
import Layout from "../../components/layout/layout";
import { useState } from "react";


function Content(){


  const enmodules = [1,2,3,4,5,6,7,8,9,10,11,12]

  const [index, setIndex] = useState(false)


  const handleClickPending = () =>{
    setIndex(false)
  }

  const handleClickUpcoming = () =>{
    setIndex(true)
  }


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
                    <CardHeader title={'Assessment'} />
                    <CardContent>
                      <Button variant={!index? "contained": "outlined"} sx={{m:2}} onClick={handleClickPending}>Pending Assessments</Button>
                      <Button variant={index? "contained": "outlined"} onClick={handleClickUpcoming}>Upcoming Assessments</Button>
                        <Grid container>
                        {!index && enmodules.map((index) => (
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
                                <CardHeader title={"Test " + `${index}`}></CardHeader> 
                                <Box sx={{ position: 'absolute', top: 8, right: 12 }}>
                                <Typography variant="caption" color="text.secondary">
                                  Pending
                                </Typography>
                              </Box>
                                <Typography>Introduction to marine technology </Typography>
                              </Card>
                            </Box>
                            </Grid>
                        ))}
                        <Grid size={{xs:12}}>
                          {/*<Divider sx={{ my: 4 }} />*/}
                        </Grid>

                        {index && enmodules.map((index) => (
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
                                <CardHeader title={"Test " + `${index + 12}`}></CardHeader> 
                                <Box sx={{ position: 'absolute', top: 8, right: 12 }}>
                                <Typography variant="caption" color="text.secondary">
                                  Fri 8:30 PM
                                </Typography>
                              </Box>
                                <Typography>Introduction to marine technology </Typography>
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


function  Assessment(){
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

export default Assessment;


