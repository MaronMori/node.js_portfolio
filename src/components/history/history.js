import {Button, Divider, Paper, Typography} from "@mui/material";
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
        <Paper elevation={4} style={{ backgroundColor: "#c7e3f0" }} >
            <Typography variant={"h5"} className={"text-center pt-4"}>My Education</Typography>
            <Button ></Button>
            <div className={"overflow-auto h-102"}>
                <div className={"md:hidden"}>
                    {education_history_list.map((history)=> {
                            return (
                                <Paper elevation={2} className={"mb-4 mx-2 p-2"} style={{ backgroundColor: "#2c7ce6", color: "white"}}>
                                    <Typography variant={"caption"}>{history.date}</Typography>
                                    <Divider/>
                                    <Typography variant={"subtitle2"} className={"font-bold"}>{history.title}</Typography>
                                    <Typography variant={"caption"} className={""}> - {history.location}</Typography>
                                    <Typography variant={"body2"} className={""}>{history.detail}</Typography>
                                </Paper>
                            )
                        }
                    )}
                </div>
                <Timeline position={"alternate"} className={"hidden md:flex"}>
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
                            <TimelineItem key={index} className={"w-full"}>
                                <TimelineOppositeContent variant={"body2"} color="text.secondary">
                                    {history.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={2} className={"p-3 text-left flex-shrink"} >
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
            <style jsx>
                {`
                .timeline{
                  width: 50%;
                }
                `}
            </style>
        </Paper>
    )
}