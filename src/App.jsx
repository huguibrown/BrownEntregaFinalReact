import NavBar from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartWidget } from './components/CartWidget';
import React from 'react';
import CartProvider from './CartContext';



function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
      <Route path='/categoria/:categoriaId' element= {<ItemListContainer/>}/>
      <Route path='/cart' element= {<CartWidget/>}/>
      <Route path='/detalle/:detalleId' element= {<ItemDetailContainer/>}/>
    </Routes> 
    </CartProvider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
