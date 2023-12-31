import ReCAPTCHA from "react-google-recaptcha"
import {useRef} from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import {Button, FormControl, Paper, TextField, Typography} from "@mui/material";
export const Contact_Form = () => {
    // import "executeRecaptcha" using "useReCaptcha" hook
    const { executeRecaptcha } = useReCaptcha();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // Generate ReCaptcha token
            const token = await executeRecaptcha("form_submit");

            // request to server side
            const response = await fetch("/api/recaptcha",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({token:token}),
            });

            if (!response.ok){
                throw new Error("Server Error!");
            }

            const data = await response.json();

            // next process depends on response
            if (!data.data.success) {
                console.log(data)
                alert("reCAPTCHA Error!");
            }else {
                alert("OK")
            }
        }catch (error){
            alert(error.message)
        }
    }

    return (
        <Paper elevation={1} className={"w-full flex justify-center mx-8 p-4"}>
            <form onSubmit={handleSubmit} className={"w-full flex justify-center"}>
                <FormControl className={"w-2/3"}>
                    <Typography variant={"h4"} className={"text-center"}>Email Contact</Typography>
                    <TextField label={"Your Email Address"} required={true} margin={"dense"}/>
                    <TextField label={"Subject"} required={true} margin={"dense"}/>
                    <TextField multiline={true} rows={12} label={"Main Message"} required={true} margin={"dense"}/>
                    <Button type={"submit"} className={"my-4"} variant={"outlined"}>Send</Button>
                </FormControl>
            </form>
        </Paper>
    )
}