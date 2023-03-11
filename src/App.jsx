import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from "@/context/CartContext";
import { ItemListContainer } from "@/assets/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "@/assets/components/itemDetail/ItemDetailContainer";
// import codedProducts from "./assets/utils/codedProducts";
import Navbar from "@/assets/components/navbar/Navbar";
import "@/App.css";
import CartContainer from "./assets/components/cartContainer/CartContainer";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer  />} />
          <Route path="/product/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
