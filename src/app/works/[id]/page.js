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
            <div className={"py-12 px-8 md:px-52 bg-[#F5F6F7]"}>
                <h1 className={"pt-4 text-3xl md:text-6xl"}>{data[0].title}</h1>
                <div className={"flex justify-center pt-6"}>
                    <img src={data[0].picture} alt={"project picture"} className={"h-50 md:h-80 shadow-2xl"}/>
                </div>
                <h2 className={"py-4 text-2xl md:text-4xl"}>Detail</h2>
                <p>{data[0].description}</p>
                <h2 className={"py-4 text-2xl md:text-4xl"}>Skills</h2>
                <ul className={"flex flex-wrap justify-between"}>
                    {data[0].skills.map((skill, index) => <li key={index} className={"bg-cyan-200 rounded-2xl mt-2 mr-2.4 py-1 px-2 shadow-lg"}>{skill}</li>)}
                </ul>
                <div className={"flex justify-center space-x-2 mt-4 py-4"}>
                    <Link href={data[0].github}>
                        <Button variant={"contained"} className={"w-24 h-12"}>
                            <GitHubIcon />
                        </Button>
                    </Link>
                    {data[0].link &&
                    <Link href={data[0].link}>
                        <Button  variant={"contained"} className={"w-24 h-12"}>
                            Link
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