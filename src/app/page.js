"use client"

import NavigationBar from "../components/Navbar";
import Bio_section from "@/components/about";
import {Work} from "@/components/Work";
import {Awards} from "@/components/award_section/awards";
import {Skill_and_contact} from "@/components/skill_and_contact/skill_and_contact";
import {Footer} from "@/components/footer";
import {HeaderMenu} from "@/components/menu_header";
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";
import {Skills} from "@/components/skills/skills";
import {History} from "@/components/history/history";
import {Contact} from "@/components/contact/contact";

export default function Home() {
    const router = useRouter()


  return (
        <main className="main" >
            {/*<NavigationBar/>*/}
            <HeaderMenu />
            <Button variant={"outlined"} onClick={() => router.push("/submit_work")}>Publish Work</Button>
            <Bio_section />
            <Work/>
            <div className={"md:flex space-y-3 md:space-y-0 md:space-x-3 my-8 mx-8 "}>
                <Skills />
                <History />
            </div>
            <Contact />
            <Footer/>
        </main>


  )
}
