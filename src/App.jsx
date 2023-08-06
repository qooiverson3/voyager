import { color } from '@mui/system';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BasicTimeline from './Component/BasicTimeline';

function App() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
      <Grid item xs={8}>
      1234
      </Grid>
      <Grid item xs={2}>
      <BasicTimeline/>
      </Grid>
      </Grid>
    </Container>
  );
}

export default App;
