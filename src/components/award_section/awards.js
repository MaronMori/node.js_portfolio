import {Award} from "@/components/award_section/each_award";

export const Awards = () => {
    return (
        <div className="row my-4">
            <div className="col">
                <h2>My Award</h2>
            </div>
            <div className="col">
                <Award/>
            </div>

        </div>
    )
}