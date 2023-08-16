import Grid from '@mui/material/Grid';
import BasicTimeline from './Component/BasicTimeline';
// import BoxSx from './Component/BoxSx';
import { Container,Divider } from '@mui/material';
import Box from '@mui/material/Box';
// import ScrollDialog from './Component/ScrollDialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 0,
  width: '5rem',
  height: '5rem',
};

function App() {
  return (
    <Box>
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar> */}
    <Container>
      <Grid container spacing={12}>
        <Grid item xs={7}>
        {/* <Divider>Recently Changelog</Divider> */}
          {/* <BasicTimeline/> */}
        <Box sx={{ ...commonStyles, borderRadius: '15px',width: '100%', height: 700, boxShadow: 3}}/>
        </Grid>
        <Grid item xs={5}>
          <Divider>Recently Changelog</Divider>
          <BasicTimeline/>
        </Grid>
      </Grid>
      </Container>
      </Box>
  );
}

export default App;
