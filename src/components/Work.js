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
    Typography, useTheme
} from "@mui/material";
import {useEffect, useState} from "react";
import {getDocs, doc, collection} from "firebase/firestore"
import {firestorage, firestore} from "../../FirebaseConfig";
import {data} from "autoprefixer";
import {getDownloadURL, ref} from "firebase/storage";
import Link from "next/link";
import {useFirebaseData} from "@/app/provider/firebase_provider";

export const Work = () =>  {
    const theme = useTheme()

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
                <h2 className={"h-20 text-3xl md:text-5xl px-3 pb-8 text-center"}>My Projects</h2>
            <Grid container spacing={3} justifyContent={"center"} >
                {dataList && dataList.map((data, index) => (
                        <Grid item key={index} >
                            <CardActionArea >
                                <Link href={"/works/" + data.id}>
                                    <Card sx={{[theme.breakpoints.up('md')]:{maxWidth: 345}, maxWidth: 325, height: 350, backgroundColor: "#042959",transition: "transform 0.3s ease-in-out",
                                        '&:hover': {
                                            transform: "scale(1.05)"
                                        }}}>
                                        <img className={"object-fill h-52 w-full"} src={data.picture}
                                                   alt={data.title}/>
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
                  .card-action{
                    transition: transform 0.3s;
                  }
                  .card-action:hover{
                    transform: scale(1.2);
                  }
                  
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