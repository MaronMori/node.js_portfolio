import {Skill} from "@/components/skill_and_contact/skill";
import {Contact} from "@/components/skill_and_contact/contact";

export const Skill_and_contact = () => {
    return (
        <div id={"contact"} className="row my-4 container">
            <div className="col">
                <Skill/>
            </div>
            <div className="col">
                <Contact />
            </div>
        </div>
    )
}