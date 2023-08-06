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
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6">Previous
          <ScrollDialog/>
          </Typography>
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
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Change
        <ScrollDialog/>
        </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'success.main' }}/>
        <TimelineDot color="primary" variant="outlined">
          <FmdGoodIcon color='primary'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Current
        <ScrollDialog/>
        </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}