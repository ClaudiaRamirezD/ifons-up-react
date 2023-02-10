import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext.jsx";
import ItemCount from "@/assets/components/itemCount/ItemCount.jsx";

const Componente = () => {
  return (
    <div>carrito
      <Link to="/cart">Completar la compra</Link>
    </div>
  );
};

const ItemDetail = ({ producto }) => {
  console.log("ItemDetail: ",producto)
  //onAdd
  const [isCount, setIsCount] = useState(true);
  const [cart, setCart] = useState(false);

  const { agregarCarrito } = useCartContext();

  const onAdd = (cant) => {
    console.log(cant);
    // agragar al carrito
    agregarCarrito({ ...producto, cantidad: cant });
    setIsCount(false);
  };

  // console.log(cartList)
  const handleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="card max-w-md text-center mx-auto">
      <div className="card-header">
        <h2 className="card-title"> {producto.name} </h2>
      </div>
      <div className="card-body mx-auto">
        <img
          src= {producto.foto}
          alt= {producto.name}
          className="max-w-44 max-h-60 "
        ></img>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio ${producto.price}mxn</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <button onClick={handleCart}></button>
        {isCount ? (
          <ItemCount initial={1} stock={30} onAdd={onAdd} />
        ) : (
          <>
            <Link className="btn btn-outline-success" to="/cart">
              Ir a Cart
            </Link>
            <Link className="btn btn-outline-primary" to="/">
              Ir a Home
            </Link>
          </>
        )}
        {cart && <Componente />}
      </div>
    </div>
  );
};

export default ItemDetail;

