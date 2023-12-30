import {Button, Paper, Typography} from "@mui/material";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {education_history_list} from "@/components/history/education_history_list";


export const History = () => {
    return (
        <Paper elevation={1}>
            <Typography variant={"h5"} className={"text-center"}>My Education</Typography>
            <Button ></Button>
            <div className={"overflow-auto h-102"}>
                <Timeline position={"alternate"}>
                    <h3 className={"text-center"}>Now</h3>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent />
                    </TimelineItem>
                    {education_history_list.map((history, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent variant={"body2"} color="text.secondary">
                                    {history.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={2} className={"p-3 text-left"}>
                                        <Typography variant={"subtitle2"}>{history.title}</Typography>
                                        <Typography variant={"caption"}>{history.detail}</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>)
                    })}
                    <TimelineItem >
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent />
                    </TimelineItem>
                    <h3 className={"text-center"}>Past</h3>
                </Timeline>
            </div>
        </Paper>
    )
}