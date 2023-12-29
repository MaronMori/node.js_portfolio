import {Button} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "/FirebaseConfig"


export const Logout_button = () => {
    const Logout = (e) => {
        e.preventDefault();

        signOut(auth).then(() => {
            alert("Logout!")
        }).catch((error) => {
            console.log(error.message)
            alert("Logout Failure")
        })
    }

    return (
        <div>
            <Button size={"large"} color={"secondary"} variant={"outlined"} onClick={(e) => Logout(e)}>Logout</Button>
        </div>
    )
}