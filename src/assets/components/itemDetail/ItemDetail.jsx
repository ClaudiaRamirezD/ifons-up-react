import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";
import ItemCoutn from "@/assets/components/itemCount/ItemCount.jsx";

const Componente = () => {
  return (
    <div>carrito
      <Link to="/cart">Completar la compra</Link>
    </div>
  );
};

const ItemDetail = ({ producto }) => {
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
    <div>
      <div className="row">
        <div className="col-6">
          <img src={producto.foto} className="w-50" />
          <h2>Nombre: {producto.name}</h2>
          <h4>Categoría {producto.categoria}</h4>
          <h4>Precio {producto.price}</h4>
        </div>
        <div className="col-6">
          <button onClick={handleCart}>carrito</button>
          {isCount ? (
            <ItemCoutn initial={1} stock={30} onAdd={onAdd} />
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
      {/* <ItemCount onAdd={onAdd} initial={1} stock={10} /> */}
    </div>
  );
};

export default ItemDetail;
