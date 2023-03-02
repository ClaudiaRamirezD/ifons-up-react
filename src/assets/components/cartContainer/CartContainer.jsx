
import { useCartContext } from '@/context/CartContext';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cartList, deleteCartProduct, cartTotal, cantidadTotal} = useCartContext()
 
  return (
    <div className="card border-blue-500 align-center max-w-3/4 mx-auto  my-4 flex place-content-center items-center text-center md:w-2/6 ">
      <h4 className="card-header mb-4 w-full bg-blue-500 font-bold text-white ">
        Carrito de Compras
      </h4>
      {cartList.length === 0 && (
        <p className="text-center text-2xl">Tu carrito está vacío! 😓</p>
      )}
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
                className="mx-auto mb-4 w-32 object-cover"
              ></img>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{producto.name}</h3>
              <span>
                Precio ${producto.price} x {producto.cantidad}
              </span>
              <div>
                <span className="font-bold">
                  Total: ${producto.price * producto.cantidad}mxn
                </span>
                <span>
                  <button
                    className="btn"
                    onClick={()=>deleteCartProduct(producto.id)}>
                    <AiOutlineDelete
                      className="mx-auto text-xl hover:fill-red-500" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {cartList.length !== 0 && (
        <div>
          <p className='font-bold text-xl mb-2'>{cartTotal() !== 0 && `Total Carrito: $${cartTotal()}mxn`}</p>
          <p className='font-bold text-xl mb-2'>{cartTotal() !== 0 && `Productos: ${cantidadTotal()}`}</p>
          
          <div className="align-center mb-2 flex justify-center gap-8">
            <Link className=" hover:text-blue-500" to="/">
              Volver a Inicio
            </Link>
          </div>
          <button className=" mb-4 rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-green-700 ">
            Pagar ahora
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
