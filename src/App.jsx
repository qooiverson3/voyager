import Grid from '@mui/material/Grid';
import BasicTimeline from './Component/BasicTimeline';
import BoxSx from './Component/BoxSx';
import { Container,Divider } from '@mui/material';

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={7}>
          <Container>
          <Divider>Changelogs</Divider>
          <BoxSx/>
          </Container>
        </Grid>
        <Grid item xs={5}>
          <Container>
          <Divider>Changelogs</Divider>
          <BasicTimeline/>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
