import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '@/assets/components/navbar/Navbar'
import ItemListContainer from '@/assets/components/ItemListContainer/ItemListContainer'
import ItemCount from '@/assets/components/itemCount/ItemCount';
import ItemDetailContainer from '@/assets/components/itemDetail/ItemDetailContainer'

import '@/App.css'
import CartContainer from '@/assets/components/cartContainer/CartContainer';



function App(props) {
    return (
      <BrowserRouter>
        <Navbar/>
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
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<CartContainer/>} />
              <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        <ItemCount />
      </BrowserRouter>
    ); 
}


export default App;
