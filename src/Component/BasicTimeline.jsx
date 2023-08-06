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
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FileSystemNavigator from './FileSystemNavigator';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

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
        <TimelineSeparator>
          <HistoryIcon color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Previous
        <FileSystemNavigator/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <DoneAllIcon color='success'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Change
        <FileSystemNavigator/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <RadioButtonCheckedIcon />
        </TimelineSeparator>
        <TimelineContent>Current
        <FileSystemNavigator/>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}