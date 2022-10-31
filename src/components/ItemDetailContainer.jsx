import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc , getDoc} from 'firebase/firestore'



export const ItemDetailContainer = () => {
    const [data,setData] = useState ({});
    const {detalleId} = useParams();
    
    useEffect(() => {
        getDoc(doc(getFirestore(), 'products' , detalleId))
        .then(res=>setData({id: res.id,...res.data()}))
    },[detalleId])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;