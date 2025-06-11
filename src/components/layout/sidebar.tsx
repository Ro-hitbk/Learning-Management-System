import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { Assessment } from '@mui/icons-material';
import { useAuth } from '../../pages/auth/authcontext';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const {user} = useAuth();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  /*const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };*/

  const handleClick = (text: string) => {
    console.log(text)
    navigate("/dashboard/" + `${text}`)

  }

  const student = {Courses: 'courses', Assessment: 'assessment', BatchOverview: 'batch', ProgressTracker: 'progress'}

  const teacher = {Batches: 'batches', Courses: 'courses', Assessment: 'assessment', Performance: 'performance'}


  let mapp = null;
  let base = ""
  if(user === 'student@'){
    mapp = student;
    base = "student/"
  }else{
    base = "teacher/"
    mapp = teacher;
  }

  const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List sx={{ px: 1 }}>
      {Object.entries({ Profile: 'profile', Notifications: 'notification' }).map(
        ([text, routename]) => (
          <ListItem key={text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => handleClick(base + routename)}
              sx={{
                borderRadius: 2,
                px: 2,
                py: 1,
                transition: 'background 0.3s, transform 0.2s',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#1976d2', minWidth: 40 }}>
                {text === 'Profile' ? <PersonIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
    <Divider />
    <List sx={{ px: 1 }}>
      {Object.entries(mapp).map(
        ([text, routename]) => (
          <ListItem key={text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => handleClick(base + routename)}
              sx={{
                borderRadius: 2,
                px: 2,
                py: 1,
                transition: 'background 0.3s, transform 0.2s',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#1976d2', minWidth: 40 }}>
                {text === 'Profile' ? <PersonIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
    <Divider/>
  </div>
);

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}

          // other props
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#f9fafc',
              boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
            },
          }}


          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#f9fafc',
              boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      </>
  );
}
