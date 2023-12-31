import {IconButton, Paper, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Contact = () => {
    return (
        <div id={"contact"} className={"flex justify-center pb-8"} style={{ backgroundColor: "#042959"}}>
                <Paper className={"text-center"} style={{ backgroundColor : "#c7e3f0"}}>
                    <div className={"flex space-x-3 justify-between"} style={{ color: "white"}}>
                        <IconButton  component={"a"} href={"mailto:roga2714@icloud.com"}>
                            <EmailIcon sx={{ fontSize: 40}} color={"info"} />
                        </IconButton>
                        <IconButton component={"a"} href={"https://github.com/MaronMori"}>
                            <GitHubIcon sx={{ fontSize: 40}} color={"info"}/>
                        </IconButton>
                        <IconButton component={"a"} href={"https://www.linkedin.com/in/ryoga-mori-b890b5265/"}>
                            <LinkedInIcon sx={{ fontSize: 40}} color={"info"}/>
                        </IconButton>
                        <IconButton component={"a"} href={"https://x.com/roga93257459983?s=21"}>
                            <TwitterIcon sx={{ fontSize: 40}} color={"info"}/>
                        </IconButton>
                    </div>
                </Paper>
            <style jsx>
                {`
                .icon {
                  
                }
                `}
            </style>
        </div>
    )
}