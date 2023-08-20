import * as React from 'react';
import {
    TimelineConnector,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

const EnglishEducations = () => {

    return (

        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    <Typography variant="h6">
                        2018
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">
                        school (Mathematics)
                    </Typography>

                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    <Typography variant="h6">
                        2018-2022
                    </Typography>

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
}
export default EnglishEducations;