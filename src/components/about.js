import {Avatar, Button, List, ListItem, ListItemText, ListSubheader, Typography} from "@mui/material";

export default function Bio_section () {
    return (
        <div style={{ backgroundColor: "#c7e3f0"}}>
            <div className="md:flex justify-evenly py-4" >
                <div className="mt-12 py-12 md:py-36 text-center">
                    <h1 className={"text-6xl md:text-8xl"}>RYOGA MORI</h1>
                    <h2 className={"text-4xl md:text-6xl"}>Software Engineer</h2>
                </div>
                <div className="md:py-36 px-16 flex justify-center" >
                    <Avatar className={"animate-slow-bounce shadow-2xl"} src={"/mypic/E19530FE-44EA-49D8-B974-EB5F5A2D2DC1.JPG"}
                            sx={{ width: 350, height: 350 }} alt={"My Pic"}/>
                </div>
            </div>
            <div className={"mt-2 flex flex-col-reverse md:grid grid-cols-2 space-x-6 mx-8 pb-4"}>
                <div>
                    <List >
                        <ListItem key={"birthDay"} className={"space-x-3 md:space-x-6"} divider={true} >
                            <Typography className={"w-24 md:w-40"} variant={"h6"}>Birthday</Typography>
                            <Typography variant={"body1"}>May/6/1999</Typography>
                        </ListItem>
                        <ListItem key={"position"} className={"space-x-3 md:space-x-6"} divider={true} dense={true}>
                            <Typography className={"w-24 md:w-40"} variant={"h6"}>Current Position</Typography>
                            <Typography variant={"body1"}>Diploma Computer Science Student at
                                George Brown College <br />in Toronto</Typography>
                        </ListItem>
                        <ListItem key={"living"} className={"space-x-3 md:space-x-6"} divider={true} dense={true}>
                            <Typography className={"w-24 md:w-40"} variant={"h6"}>Living</Typography>
                            <Typography variant={"body1"}>Toronto</Typography>
                        </ListItem>
                        <ListItem key={"nationality"} className={"space-x-3 md:space-x-6"} divider={true} dense={true}>
                            <Typography className={"w-24 md:w-40"} variant={"h6"}>Born</Typography>
                            <Typography variant={"body1"}>Japan</Typography>
                        </ListItem>
                    </List>
                </div>
                <div className={"px-6 py-8 md:px-12 md:py-10"}>
                    <Typography variant={"body1"} paragraph={true}>Hello! My name is Ryoga! I am from Japan. I enjoy making web applications with Python,
                        React, Node.Js. My goal is to become Software Engineer!</Typography>
                </div>
            </div>
        </div>

    )
}