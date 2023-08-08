import Grid from '@mui/material/Grid';
import BasicTimeline from './Component/BasicTimeline';
import BoxSx from './Component/BoxSx';
import { Container,Divider } from '@mui/material';

function App() {
  return (
      <Grid container>
        <Grid item xs={7}>
          <Container>
          <BoxSx/>
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
