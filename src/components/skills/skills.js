import {Paper, Typography} from "@mui/material";

export const Skills = () => {
    const skillsList = ["HTML", "CSS", "Javascript","Python", "Bootstrap", "Tailwind", "React",
    "Next.js", "Django", "Flask", "Tkinter", "pandas", "SQL", "Firebase", "Git", "Github", "Linux", "Network Infrastructure",
    "SEO"]

    return (
        <Paper className={"h-56"} elevation={1}>
            <div className={"p-4"}>
                <Typography variant={"h5"} className={"pl-8"}>Skills</Typography>
                <div className={"flex flex-wrap w-full"}>
                    {skillsList.map((skill, index) => {
                        return (
                            <p key={index} className={"shadow ml-2 mt-2 bg-cyan-200 rounded-xl px-2 py-0.5"}>
                                {skill}
                            </p>
                        )
                    })}
                </div>
            </div>
        </Paper>
    )
}