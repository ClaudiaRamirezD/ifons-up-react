import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '@/assets/components/navbar/Navbar'
import {ItemListContainer} from '@/assets/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '@/assets/components/itemDetail/ItemDetailContainer'
import CartContainer from '@/assets/components/cartContainer/CartContainer';
import { CartContextProvider } from './context/CartContext';
import '@/App.css'



function App() {
    return (
      <BrowserRouter>
        <CartContextProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting="Soy el item list container!" />
                }
              />
              <Route
                path="/categoria/:idCategoria"
                element={
                  <ItemListContainer greeting="Soy el item list container!" />
                }
              />
              <Route
                path="/producto/:idProducto"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </CartContextProvider>
      </BrowserRouter>
    ); 
}


export default App;
