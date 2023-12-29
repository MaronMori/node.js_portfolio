import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl} from "@mui/material";
import {TextField_with_state} from "@/app/submit_work/component/textfield_with_state";
import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "/FirebaseConfig"
import {error} from "next/dist/build/output/log";

export const Login_dialog = () => {
    const [openDialog, setOpenDialog ] =useState(false)
    const [ email, setEmail ] =useState()
    const [password, setPassword] = useState()

    const handleOpenDialog = () => {
        setOpenDialog(!openDialog)
    }

    const Login = (e) => {
        e.preventDefault()

        console.log("Login Process")
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                alert("Login Succuces")
            })
            .catch((error) => {
                alert("You couldn't log in.")
                console.log(error.message)
        })

    }

    return (
        <div>
            <Button size={"large"} color={"secondary"} variant={"outlined"} onClick={handleOpenDialog}>Login</Button>
            <Dialog open={openDialog} onClose={handleOpenDialog} fullWidth={true}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => Login(e)}>
                        <FormControl fullWidth={true} >
                            <TextField_with_state label={"Email"} state={email} setState={setEmail} type={"email"}/>
                            <TextField_with_state label={"Password"} state={password} setState={setPassword} type={"password"}/>
                            <DialogActions>
                                <Button type={"submit"} size={"large"}>Login</Button>
                                <Button onClick={handleOpenDialog} size={"large"}>Cancel</Button>
                            </DialogActions>
                        </FormControl>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}