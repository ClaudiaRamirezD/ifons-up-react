import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  // estados y funciones globales
  const [cartList, setCartList] = useState([]);

  // isInCart
  // Validar si está el producto
  const addCart = (newProduct) => {
    const idxProd = cartList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (idxProd !== -1) {
      cartList[idxProd].cantidad += newProduct.cantidad;
      setCartList([...cartList]);
      return;
    }

    setCartList([...cartList, newProduct]);

  };

  // eliminar item por id
  const deleteCartProduct = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  //Total carrito

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        deleteCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;