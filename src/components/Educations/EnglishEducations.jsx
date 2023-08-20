import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";

const EnglishEducations = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
        my:"1cm"
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <Typography variant="h6">2018-2022</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">
            Bachelor of Computer engineering (software)
            <br />
            Jundishapur University of Dezful
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
export default EnglishEducations;
