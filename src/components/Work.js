"use client"

import {Work_card} from "@/components/work_cord";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {getDocs, doc, collection} from "firebase/firestore"
import {firestorage, firestore} from "../../FirebaseConfig";
import {data} from "autoprefixer";
import {getDownloadURL, ref} from "firebase/storage";
import Link from "next/link";
import {useFirebaseData} from "@/app/provider/firebase_provider";

export const Work = () =>  {

        const dataList = useFirebaseData()

    if (!dataList || dataList.length === 0){
        return (
            <div className={"flex py-12 justify-center"} style={{ backgroundColor: "#2c7ce6"}}>
                <CircularProgress className={"w-44"} style={{color: "white"}} />
            </div>
            )
    }

    return (
        <div id={"project"} className="py-12" style={{ backgroundColor: "#2c7ce6"}}>
            <Divider className={"mx-3 md:mx-20 mb-8"} >
                <Typography className={"text-3xl md:text-5xl"}>My Projects</Typography>
            </Divider>
            <Grid container spacing={3} justifyContent={"center"}>
                {dataList && dataList.map((data, index) => (
                    <Grid item key={index} className={"mx-6 md:mx-0"}>
                        <CardActionArea>
                            <Link href={"/works/" + data.id}>
                            <Card sx={{maxWidth: 345, height: 350}} className={""} style={{ backgroundColor: "#042959"}}>
                                <CardMedia className={"object-fill h-52 w-full"} component={"img"} image={data.picture}
                                           title={data.title}/>
                                <CardContent >
                                    <h4 className={"font-bold text-xl title-limit"} style={{ color: "white"}}>{data.title}</h4>
                                    <p className={"text-limit "}  style={{ color: "white"}}>{data.description}</p>
                                </CardContent>
                            </Card>
                            </Link>
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