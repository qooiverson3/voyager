import Grid from '@mui/material/Grid';
import BasicTimeline from './Component/BasicTimeline';
import BoxSx from './Component/BoxSx';
import { Container,Divider } from '@mui/material';
import Box from '@mui/material/Box';
import ScrollDialog from './Component/ScrollDialog';

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
      <Grid container>
        <Grid item xs={7}>
          <Container>
          <Box sx={{ ...commonStyles, borderRadius: '15px',width: '100%', height: 700, boxShadow: 3}}/>

          </Container>
        </Grid>
        <Grid item xs={5}>
          <Container>
          <Divider>Recently Changelog</Divider>
          <BasicTimeline/>
          </Container>
        </Grid>
      </Grid>
  );
}

export default App;
