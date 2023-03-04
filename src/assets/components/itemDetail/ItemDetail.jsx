import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext.jsx";
import ItemCount from "@/assets/components/itemCount/ItemCount.jsx";

const Component = () => {
  return (
    <div>
      carrito
      <Link to="/cart">Completar la compra</Link>
    </div>
  );
};

const ItemDetail = ({ product }) => {
  
  //onAdd
  const [isCount, setIsCount] = useState(true);
  const [cart, setCart] = useState(false);

  const { addCart } = useCartContext();

  const onAdd = (qty) => {
    // agragar al carrito
    addCart({ ...product, quantity: qty });
    setIsCount(false);
  };

  // console.log(cartList)
  const handleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="card mx-auto my-12 max-w-md border-blue-500 text-center">
      <div className="card-header bg-blue-500">
        <h2 className="card-title font-bold text-white"> {product.name} </h2>
      </div>
      <div className="card-body mx-auto mb-4">
        <img
          src={product.picture}
          alt={product.name}
          className="max-w-44 mx-auto mt-6 max-h-60 "
        ></img>
        <p className="card-text mt-7">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ul className="list-group list-group-flush border-blue-500 ">
          <li className="list-group-item border-blue-500">
            Precio ${product.price}mxn
          </li>
          <li className="list-group-item border-blue-500">A second item</li>
          <li className="list-group-item border-blue-500">A third item</li>
        </ul>
        <button onClick={handleCart}></button>
        {isCount ? (
          <ItemCount initial={1} stock={30} onAdd={onAdd} />
        ) : (
          <>
            <Link className="btn btn-outline-success" to="/cart">
              Ir a Carrito
            </Link>
            <Link className="btn btn-outline-primary ml-2" to="/">
              Ir a Inicio
            </Link>
          </>
        )}
        {cart && <Component />}
      </div>
    </div>
  );
};

export default ItemDetail;
