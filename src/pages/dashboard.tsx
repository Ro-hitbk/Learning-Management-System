import { Box, Typography } from "@mui/material";

function Dashboard(){
  return(
  <>
    <Box display="flex" flexDirection="row" sx={{width: '100vw'}} justifyContent={'center'}>
      <Typography variant="h3" color="black">welcome to Dashboard</Typography>
    </Box>
  </>
  )
}

export default Dashboard;