import React, {useContext} from "react";
import { CartContext } from "../CartContext";

export const CartWidget = () => {
    const nombre = useContext(CartContext);
    console.log ('CartWidget', nombre)
    return(
        <i className="bi bi-basket3"></i>
    );
}