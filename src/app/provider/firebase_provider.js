"use client"

import {createContext, useContext, useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {firestorage, firestore} from "../../../FirebaseConfig";
import {getDownloadURL, ref} from "firebase/storage";

const FirebaseContext = createContext([]);

export const FirebaseProvider = ({children}) => {

    const [ dataList, setDataLit ] = useState([])

    useEffect(  () => {
        async function  getData () {
            const querySnapshot = await getDocs(collection(firestore, "works"))
            const allData = querySnapshot.docs.map(doc =>{
                return {
                    id:doc.id,
                    ...doc.data()
                };
            })
            const getPictureUrlData = await Promise.all(allData.map( async (data) => {
                const url =  await getDownloadURL(ref(firestorage, data.picture))
                return { ...data, picture: url}
            }))
            setDataLit(getPictureUrlData)
        }

        getData();
    }, []);


    return (
        <FirebaseContext.Provider value={dataList}>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebaseData = () =>  useContext(FirebaseContext)