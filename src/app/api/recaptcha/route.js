import {NextResponse} from "next/server";

export const POST = async (req) => {
    try{
        const res = await req.json();
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${secretKey}&response=${res.token}`,
        })
        const data = await response.json();
        console.log("Hello" + data.success)

        return NextResponse.json({data})
    }catch (error){
        console.log(error);
        NextResponse.json({error: "サーバーエラー"})
    }



}