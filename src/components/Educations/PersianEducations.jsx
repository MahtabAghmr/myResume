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
import { timelineContentClasses } from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';

const PersianEducations = () => {

    return (

        <Timeline
            sx={{
                [`& .${timelineContentClasses.root}`]: {
                    flex: 0.2,

                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent >
                    <Typography variant="h6">

                        مدرسه با رشته ی ریاضی فیزیک
                    </Typography>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" color="textSecondary">
                        1397
                    </Typography>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem >
                <TimelineOppositeContent >
                    <Typography variant="h6">

                        (لیسانس مهندسی کامپیوتر(نرم افزار

                        دانشگاه صنعتی جندی شاپور دزفول
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent color="textSecondary">
                    <Typography variant="h6">

                        1397-1401
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>

    );
}
export default PersianEducations;