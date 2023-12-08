import Link from "next/link";
import {Work_card} from "@/components/work_cord";

export default function Work() {
    return (
        <div className="my-4">
            <h1>My Work</h1>
            <Work_card/>
            <Link href="...">more my works...</Link>
        </div>


    )
}