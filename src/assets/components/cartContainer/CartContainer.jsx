
import { useCartContext } from '@/context/CartContext';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cartList, emptyCart } = useCartContext()
  return (
    <div className="card  align-center mx-auto my-4  flex w-3/4 place-content-center items-center text-center md:w-2/6 ">
      <h4 className="card-header mb-4 w-full bg-blue-500 font-bold text-white ">
        Carrito de Compras
      </h4>
      {cartList.map((producto) => (
        <div
          key={producto.id}
          className="w-full rounded-md border-blue-500 text-center"
        >
          <div className="mb-4">
            <div>
              <img
                src={producto.foto}
                alt={producto.name}
                className="mx-auto mb-4 w-40 object-cover"
              ></img>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{producto.name}</h3>
              <p>Precio: ${producto.price}mxn</p>
              <p>Cantidad: {producto.cantidad}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex align-center items-center">
        <Link className=" hover:text-blue-500" to="/">
          Volver a Inicio
        </Link>
        <button className="btn" onClick={emptyCart}>
          <AiOutlineDelete className="mx-auto text-xl hover:fill-red-500" />
        </button>
      </div>
      <button className=" mb-4 rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-green-700 ">
        Pagar ahora
      </button>
    </div>
  );
};

export default CartContainer;
