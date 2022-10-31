import React from "react";
import "../App.css"
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useCartContext } from "../CartContext";
import { Link } from "react-router-dom";


export const ItemDetail = ({data}) => {
    const [goToCart , setGoToCart]= useState (false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) =>{
        setGoToCart(true); 
        addProduct (data,quantity);
    }
  
    return(
        <div className="container">
            <div className="detail">
                <img className="detail__image " src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    
                    {
                        goToCart
                        ? <Link to='/cart '> Ir al carrito </Link> 
                        : <ItemCount inital={3} stock= {4} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;