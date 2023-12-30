"use client"

import {Work_card} from "@/components/work_cord";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material";
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

    return (
        <div id={"work"} className="pt-3">
            <Divider className={"mx-20 mb-8"}>
                <Typography variant={"h3"}>My Projects</Typography>
            </Divider>
            <Grid container spacing={3} justifyContent={"center"}>
                {dataList && dataList.map((data, index) => (
                    <Grid item key={index} className={""}>
                        <CardActionArea>
                            <Card sx={{maxWidth: 345, height: 350}} className={""}>
                                <CardMedia className={"object-fill h-52 w-full"} component={"img"} image={data.picture}
                                           title={data.title}/>
                                <CardContent >
                                    <h4 className={"font-bold text-xl title-limit"}>{data.title}</h4>
                                    <p className={"text-limit "}>{data.description}</p>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
            <style jsx>
                {`
                  .title-limit{
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                  }
                .text-limit {
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                }
                `}
            </style>
        </div>
    )
}