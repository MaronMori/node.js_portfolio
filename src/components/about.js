import {Avatar, Button, List, ListItem, ListItemText, ListSubheader, Typography} from "@mui/material";

export default function Bio_section () {
    return (
        <div className="mx-8">
            <div className="md:flex justify-evenly my-4">
                <div className="mt-12">
                    <Typography variant={"h1"}>RYOGA MORI</Typography>
                    <Typography variant={"h2"}>Software Engineer</Typography>
                </div>
                <div className="" >
                    <Avatar className={"animate-slow-bounce shadow-2xl"} src={"/mypic/E19530FE-44EA-49D8-B974-EB5F5A2D2DC1.JPG"} sx={{ width: 336, height: 336 }} alt={"My Pic"}/>
                </div>
            </div>
            <div className={"mt-8 md:grid grid-cols-2 space-x-6"}>
                <div>
                    <List >
                        <ListItem key={"birthDay"} className={"space-x-6"} divider={true} >
                            <Typography className={"w-40"} variant={"h6"}>Birthday</Typography>
                            <Typography variant={"body1"}>May/6/1999</Typography>
                        </ListItem>
                        <ListItem key={"position"} className={"space-x-6"} divider={true} dense={true}>
                            <Typography className={"w-40"} variant={"h6"}>Current Position</Typography>
                            <Typography variant={"body1"}>Diploma Computer Science Student at
                                George Brown College <br />in Toronto</Typography>
                        </ListItem>
                        <ListItem key={"living"} className={"space-x-6"} divider={true} dense={true}>
                            <Typography className={"w-40"} variant={"h6"}>Living</Typography>
                            <Typography variant={"body1"}>Toronto</Typography>
                        </ListItem>
                        <ListItem key={"nationality"} className={"space-x-6"} divider={true} dense={true}>
                            <Typography className={"w-40"} variant={"h6"}>Born</Typography>
                            <Typography variant={"body1"}>Japan</Typography>
                        </ListItem>
                    </List>
                </div>
                <div className={"px-12"}>
                    <Typography variant={"body1"} paragraph={true}>Hello! My name is Ryoga! I am from Japan. I enjoy making web applications with Python,
                        React, Node.Js. My goal is to become Software Engineer!</Typography>
                </div>
            </div>
        </div>

    )
}