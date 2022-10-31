import "../App.css"
import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { CartContext } from "../CartContext";

const Item = ({info})=>{
 
    
    return (
        <Link to={`/detalle/${info.id}`} className="producto">
            <div className="carts">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.price}</p>
            </div>
        </Link>
    )
}

export default Item;