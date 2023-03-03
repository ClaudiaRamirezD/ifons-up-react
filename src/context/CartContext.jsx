import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  // estados y funciones globales
  const [cartList, setCartList] = useState([]);

  // isInCart
  // Validar si está el product
  const addCart = (newProduct) => {
    const idxProd = cartList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (idxProd !== -1) {
      cartList[idxProd].quantity += newProduct.quantity;
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

  const cartTotal = () =>
    cartList.reduce(
      (count, product) => (count += product.quantity * product.price),
      0
    );

  //Cantidad Productos
  const totalQuantity = () =>
    cartList.reduce((count, product) => (count += product.quantity), 0);

  //Eliminar TODO el carrito
  const emptyCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        deleteCartProduct,
        cartTotal,
        totalQuantity,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
