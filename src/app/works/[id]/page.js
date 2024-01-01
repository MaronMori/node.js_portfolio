"use client"

import {useRouter} from "next/navigation";
import {useState} from "react";
import {HeaderMenu} from "@/components/menu_header/menu_header";
import {Footer} from "@/components/footer";
import {useFirebaseData} from "@/app/provider/firebase_provider";
import {Button, List, ListItem, Typography} from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import {optionsForAnotherPage} from "@/components/menu_header/header_options";

export default function Work_page({params}) {
    const dataList = useFirebaseData()

    if (!dataList) {
        return <div>Loading</div>
    }

    const data = dataList.filter((data) => data.id === params.id)

    const options = optionsForAnotherPage

    return (
        <main>
            <HeaderMenu options={options}/>
            <div className={"py-12 px-8 md:px-52"}>
                <Typography className={"pt-4 text-3xl md:text-6xl"}>{data[0].title}</Typography>
                <div className={"flex justify-center pt-6"}>
                    <img src={data[0].picture} alt={"project picture"} className={"h-80 shadow-2xl"}/>
                </div>
                <Typography className={"pt-4 text-2xl md:text-4xl"}>Detail</Typography>
                <Typography variant={"body1"}>{data[0].description}</Typography>
                <Typography className={"pt-4 text-2xl md:text-4xl"}>Skills</Typography>
                <List className={"flex w-44 space-x-2"}>
                    {data[0].skills.map((skill) => <ListItem className={"bg-cyan-200 rounded-2xl py-1"}>{skill}</ListItem>)}
                </List>
                <div className={"flex justify-center space-x-2 pt-4"}>
                    <Link href={data[0].github}>
                        <Button variant={"contained"} className={"w-24 h-12"}>
                            <GitHubIcon />
                        </Button>
                    </Link>
                    {data[0].link &&
                    <Link href={data[0].link}>
                        <Button  variant={"contained"} className={"w-24 h-12"}>
                            Go to Website
                        </Button>
                    </Link>
                    }
                    <Link href={"/"}>
                        <Button variant={"contained"} className={"w-24 h-12"}>
                            Back
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}