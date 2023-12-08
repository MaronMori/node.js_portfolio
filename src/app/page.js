import Image from 'next/image'
import {Card, Col, Row} from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Bio_section from "@/components/about";
import Work from "@/components/Work";
import {Awards} from "@/components/award_section/awards";
import {Skill_and_contact} from "@/components/skill_and_contact/skill_and_contact";
import {Footer} from "@/components/footer";

export default function Home() {
  return (
        <main className="main">
            <NavigationBar/>
            <Bio_section/>
            <Work/>
            <Awards/>
            <Skill_and_contact/>
            <Footer/>
        </main>


  )
}
