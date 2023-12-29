import {Award} from "@/components/award_section/each_award";

export const Awards = () => {
    return (
        <div id={"award"} className="row py-5">
            <div className="col d-flex align-items-center justify-content-center">
                    <h2>My Award</h2>
            </div>
            <div className="col">
                <Award/>
            </div>
        </div>
    )
}