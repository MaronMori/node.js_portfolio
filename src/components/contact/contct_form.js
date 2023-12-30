import ReCAPTCHA from "react-google-recaptcha"
import {useRef} from "react";
import { useReCaptcha } from "next-recaptcha-v3";
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
        <form onSubmit={handleSubmit}>
            <input className={"border border-black"}/>
            <button type={"submit"}>Submit</button>
        </form>
    )
}