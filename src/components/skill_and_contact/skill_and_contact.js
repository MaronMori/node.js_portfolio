import {Skill} from "@/components/skill_and_contact/skill";
import {Contact} from "@/components/skill_and_contact/contact";

export const Skill_and_contact = () => {
    return (
        <div className="row my-4">
            <div className="col">
                <Skill/>
            </div>
            <div className="col">
                <Contact />
            </div>
        </div>
    )
}