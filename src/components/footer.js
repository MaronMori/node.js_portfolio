import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

export const Footer = () => {
    const router = useRouter()
    const year = new Date().getFullYear(); // 現在の年を取得

    return (
        <footer className="text-center py-3 pb-5" style={{ backgroundColor: "#79C4F2"}}>
            <div className={"pb-4"}>
                <p className="mb-0">© {year} Ryoga Mori. All rights reserved.</p>
            </div>
            <Button variant={"outlined"} onClick={() => router.push("/submit_work")}>Publish Work</Button>
        </footer>
    );
}