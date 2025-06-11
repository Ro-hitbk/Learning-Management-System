import { Box, Card, CardContent, CardHeader, CssBaseline, Divider, Grid, Typography } from "@mui/material";
import Layout from "../../components/layout/layout";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



function Content(){


  const data = [
  { name: 'Week 1', assignments: 3, quizzes: 2, studyHours: 12 },
  { name: 'Week 2', assignments: 4, quizzes: 1, studyHours: 10 },
  { name: 'Week 3', assignments: 2, quizzes: 3, studyHours: 14 },
  { name: 'Week 4', assignments: 5, quizzes: 2, studyHours: 15 },
  { name: 'Week 5', assignments: 4, quizzes: 2, studyHours: 13 },
  { name: 'Week 6', assignments: 3, quizzes: 3, studyHours: 11 },
 ];



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
                    <CardHeader title={'Progress'} />
                    <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <Line type="monotone" dataKey="studyHours" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

                </CardContent>
                  </Card>
              </Box>
            </Box> 
    </>
  )
}



function  Progress(){
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

export default Progress;


