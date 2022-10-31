import React, {useContext, useState} from "react";
export const CartContext = React.createContext([]);


export const useCartContext = ()=> useContext (CartContext);



console.log ('CartContext', CartContext);

const CartProvider =({children}) => {
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter (prod=>prod.id !== item.id);
        newCart.push ({...item, quantity: newQuantity})
        setCart(newCart); 
    }



    const [cart, setCart ] = useState([]);

    const clearCart= ()=> setCart ([]);

    const isinCart =(id)=> cart.find (product => product.id === id) ? true : false ;

    const removeProduct = (id) => setCart(cart.filter (product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isinCart,
            removeProduct,
            addProduct
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;