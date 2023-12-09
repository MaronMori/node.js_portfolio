import {Work_card} from "@/components/work_cord";

export default function Work() {
    return (
        <div id={"work"} className="pt-3" style={{backgroundColor: "rgb(158, 200, 185, 0.3)"}}>
            <h2 className="text-center" style={{color: "rgb(158, 200, 185)"}}>My Work</h2>
            <Work_card/>
            {/*<Link href="...">more my works...</Link>*/}
        </div>
    )
}