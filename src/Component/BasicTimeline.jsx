import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ScrollDialog from './ScrollDialog';
import CheckIcon from '@mui/icons-material/Check';
import HistoryIcon from '@mui/icons-material/History';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import "@fontsource/open-sans"; // Defaults to weight 400.
// import "@fontsource/open-sans/500.css"; // Weight 500.

export default function BasicTimeline() {
  return (
    <Timeline
    sx={{
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0.2,
      },
    }}
    >

      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'gray.main' }} />
          <TimelineDot>
          <HistoryIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '18px', px: 3 }}>
        <Typography variant="overline" component="span">Previous
          </Typography>
          <ScrollDialog/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
          <TimelineDot color="success">
          <CheckIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'success.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '18px', px: 3 }}>
        <Typography variant="overline" component="span">
          Change

        </Typography>
        <ScrollDialog/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'success.main' }}/>
        <TimelineDot color="primary">
          <FmdGoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '18px', px: 3 }}>
        <Typography variant="overline" component="span" sx={{fontSize: 15}}>
          Current
        </Typography>

        <ScrollDialog/>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}