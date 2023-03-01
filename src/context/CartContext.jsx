import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  // estados y funciones globales
  const [cartList, setCartList] = useState([]);

  // isInCart

  const addCart = (newProducto) => {
    // Validar si está el producto
    setCartList([
      ...cartList,
      newProducto
    ]);
  };

  // cantidad total
  // precio total

  // eliminar item por id

  const emptyCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;