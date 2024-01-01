"use client"

import NavigationBar from "../components/Navbar";
import Bio_section from "@/components/about";
import {Work} from "@/components/Work";
import {Awards} from "@/components/award_section/awards";
import {Skill_and_contact} from "@/components/skill_and_contact/skill_and_contact";
import {Footer} from "@/components/footer";
import {HeaderMenu} from "@/components/menu_header/menu_header";
import {Button, Divider, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {Skills} from "@/components/skills/skills";
import {History} from "@/components/history/history";
import {Contact} from "@/components/contact/contact";
import {useEffect} from "react";
import {options} from "@/components/menu_header/header_options";

export default function Home() {
    const router = useRouter()


    useEffect(() => {
        const hash = window.location.hash;
        if(hash){
            const element = document.querySelector(hash);
            if (element){
                element.scrollIntoView({behavior: "smooth"})
            }
        }

    }, []);


  return (
        <main className="main" id={"home"}>
            <HeaderMenu options={options}/>
            <Bio_section />
            <Work/>
            <div id={"background"} className={"md:flex space-y-3 md:space-y-0 md:space-x-3 py-8 px-8 "} style={{ backgroundColor: "#0A4DA6" }}>
                <Skills />
                <History />
            </div>
            <div className={"py-6 flex justify-center"} style={{ backgroundColor: "#042959" }}>
                <div className={"mx-12 md:w-1/2"}>
                    <Typography variant={"body1"}  style={{ color: "white"}}>
                        Thank you for visiting My website! This web site wes build by Next.js with Material UI.It's been a
                        journey of passion and creativity, and I'm thrilled to share it with you.

                        you have any thoughts or questions, feel free to reach out. I'm always open to discussions,
                        collaborations, or just a good creative chat.

                        Best wishes and keep creating!
                    </Typography>
                </div>
            </div>
            <Contact />
            <Footer/>
        </main>


  )
}
