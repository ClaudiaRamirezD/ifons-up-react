import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  // estados y funciones globales
  const [cartList, setCartList] = useState([]);

  // isInCart

  const agregarCarrito = (newProducto) => {
    // VAlidar si está el producto
    setCartList([...cartList, newProducto]);
  };

  // cantidad total
  // precio total

  // eliminar item por id

  const vaciarCarrito = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext