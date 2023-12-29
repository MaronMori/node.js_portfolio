"use client"

import {Work_card} from "@/components/work_cord";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getDocs, doc, collection} from "firebase/firestore"
import {firestorage, firestore} from "../../FirebaseConfig";
import {data} from "autoprefixer";
import {getDownloadURL, ref} from "firebase/storage";

export const Work = () =>  {
    const [ dataList, setDataLit ] = useState([])

    useEffect(  () => {
        async function  getData () {
            const querySnapshot = await getDocs(collection(firestore, "works"))
            const allData = querySnapshot.docs.map(doc => doc.data())
            const getPictureUrlData = await Promise.all(allData.map( async (data) => {
                const url =  await getDownloadURL(ref(firestorage, data.picture))
                return { ...data, picture: url}
                }))
            setDataLit(getPictureUrlData)
        }

        getData();
    }, []);

    dataList.map((data) => {
        console.log(data.picture)
    })
    return (
        <div id={"work"} className="pt-3">
            <Typography className={"text-center"} variant={"h3"}>My Projects</Typography>
            <Grid container spacing={3} justifyContent={"center"}>
                {dataList && dataList.map((data, index) => (
                    <Grid item key={index} className={""}>
                        <Card sx={{maxWidth: 345, height: 350}} className={""}>
                            <CardActionArea>
                                <CardMedia className={"object-fill h-52 w-full"} component={"img"} image={data.picture} title={data.title}/>
                                <CardContent className={"overflow-hidden"}>
                                    <Typography variant={"h5"} component={"div"}>{data.title}</Typography>
                                    <Typography className={"overflow-ellipsis overflow-hidden whitespace-nowrap"} variant={"body2"}
                                                color={"text.secondary"}>{data.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}