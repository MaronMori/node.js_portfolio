"use client"

import {useEffect, useState} from "react";
import {Button, FormControl, LinearProgress} from "@mui/material";
import {Send} from "@mui/icons-material";
import {Skills_work} from "@/app/submit_work/component/skills_work";
import {Title_work} from "@/app/submit_work/component/title_work";
import {Picture_work} from "@/app/submit_work/component/picture_work";
import {Desc_work} from "@/app/submit_work/component/desc_work";
import {TextField_with_state} from "@/app/submit_work/component/textfield_with_state";
import {Login_dialog} from "@/app/submit_work/component/login_dialog";
import {Logout_button} from "@/app/submit_work/component/logout_button";
import {auth, firestorage, firestore} from "/FirebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {useRouter} from "next/navigation";

export default function Submit_work_form(){
    const [ title, setTitle ] = useState("");
    const [ picture, setPicture ] = useState();
    const [ picturePreview, setPicturePreview ] = useState()
    const [ description, setDesc ] = useState("");
    const [ skillTextFields, setSkillTextFields ] = useState([""])
    const [ github, setGithub ] = useState("");
    const [ link, setLink ] = useState("");
    const [ loading, setLoading ] = useState(false)
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    const router = useRouter()

    // to show current validation
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // ユーザーがログインしている場合
                console.log("Current Authentication Status: Signing in" );
                setIsAuthenticated(true)
            } else {
                // ユーザーがログインしていない場合
                console.log("Current Authentication Status: Signing Out" );
                setIsAuthenticated(false)
            }
        });

        // コンポーネントのアンマウント時にリスナーを解除
        return unsubscribe;
    }, []);

    const Submit_work = async (e) => {
        e.preventDefault()

        setLoading(true)

        // store picture
        const pictureRef = ref(firestorage, `pictures/${picture.name}`);
        try {
            await uploadBytes(pictureRef, picture).then((snapshot) => {
                console.log("Uploaded a picture!")
            });
        }catch (e) {
            setLoading(false)
            console.error("Failed upload")
            return;
        }

        // アップロードした写真のURLを取得
        let pictureURL = "";
        try {
            pictureURL = await getDownloadURL(pictureRef);
        } catch (e) {
            setLoading(false)
            console.error("Failed to retrieve picture URL:", e);
            return; // URLの取得に失敗した場合、ここで処理を終了
        }

        try {
            await addDoc(collection(firestore, "works"),{
                title: title,
                picture: pictureURL,
                description: description,
                skills: skillTextFields,
                github: github,
                link: link
            })
            setLoading(false)
            console.log("Document successfully written!");
            alert("Uploaded successfully!")
            setTitle("");
            setPicture();
            setPicturePreview();
            setDesc("");
            setSkillTextFields([""])
            setGithub("")
            setLink("")

        }catch (e) {
            setLoading(false)
            console.error("Error adding document: ", e)
        }
    }

    return (
        <div className={"mx-16 mt-12"}>
            <h1 className={"text-center text-3xl text-black"}>Publish Work</h1>
            <form onSubmit={(e) => Submit_work(e)}>
                <FormControl fullWidth={true} margin={"dense"} >
                    <Title_work title={title} setTitle={setTitle}/>
                    <Picture_work picture={picture} setPicture={setPicture} picturePreview={picturePreview}
                                  setPicturePreview={setPicturePreview}/>
                    <Desc_work description={description} setDesc={setDesc}/>
                    <Skills_work skillTextFields={skillTextFields} setSkillTextFields={setSkillTextFields}/>
                    <TextField_with_state label={"Github"} type={"url"} state={github} setState={setGithub}/>
                    <TextField_with_state label={"Link"} type={"url"} state={link} setState={setLink}/>
                    <Button disabled={!isAuthenticated} className={"mt-4"} type={"submit"} color={"secondary"} variant="contained" endIcon={<Send/>}>
                        Send
                    </Button>
                </FormControl>
            </form>
            {loading && <div>
                <LinearProgress color="secondary" />
            </div>}
            <div className={"flex justify-center space-x-4 mt-4"}>
                <Login_dialog />
                <Logout_button />
                <Button variant={"contained"} color={"secondary"} onClick={() => router.push("/")}>Back</Button>
            </div>
        </div>
    )
}