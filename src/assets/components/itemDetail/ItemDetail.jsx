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

  const { addCart } = useCartContext();

  const onAdd = (cant) => {
    console.log(cant);
    // agragar al carrito
    addCart({ ...producto, cantidad: cant });
    setIsCount(false);
  };

  // console.log(cartList)
  const handleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="card mx-auto my-12 max-w-md border-blue-500 text-center">
      <div className="card-header bg-blue-500">
        <h2 className="card-title text-white font-bold"> {producto.name} </h2>
      </div>
      <div className="card-body mx-auto mb-4">
        <img
          src={producto.foto}
          alt={producto.name}
          className="max-w-44 mx-auto mt-6 max-h-60 "
        ></img>
        <p className="card-text mt-7">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ul className="border-blue-500 list-group list-group-flush ">
          <li className="list-group-item border-blue-500">Precio ${producto.price}mxn</li>
          <li className="list-group-item border-blue-500">A second item</li>
          <li className="list-group-item border-blue-500">A third item</li>
        </ul>
        <button
          onClick={handleCart}></button>
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
        {cart && <Componente />}
      </div>
    </div>
  );
};

export default ItemDetail;

