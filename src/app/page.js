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

export default function Home() {
    const router = useRouter()


  return (
        <main className="main" >
            {/*<NavigationBar/>*/}
            <HeaderMenu />
            <Button variant={"outlined"} onClick={() => router.push("/submit_work")}>Publish Work</Button>
            <Bio_section />
            <Work/>
            <Awards/>
            <Skill_and_contact/>
            <Footer/>
        </main>


  )
}
