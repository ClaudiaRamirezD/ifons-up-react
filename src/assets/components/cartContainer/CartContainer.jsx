
import { useCartContext } from '@/context/CartContext';
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const [formData, setFormData]  =useState({
    name: '',
    phone: '',
    email: '',
    repetirEmail: ""
  })
  const { cartList, deleteCartProduct, cartTotal, cantidadTotal, emptyCart} = useCartContext()
 
  const addOrder = (e) => {
    e.preventDefault()
    const order = {}
    // Se debe validar formData
    order.buyer = formData
    order.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
    order.total = 6933

   //Se debe insertar a firestore
   
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    
    //add in firestore
    addDoc(ordersCollection, order)
    .then(resp => console.log(resp))

    // update
    // const productUpdate = doc(db, "Productos", "3SZhWwMGtMOXly9T8Nbz");
    // updateDoc(productUpdate, {
    //   stock:4
    // })
    //   .then(() => console.log('Producto actualizado'))
    

  }

  const handleOnChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  return (
    <div className="card align-center max-w-3/4 mx-auto my-4  flex place-content-center items-center border-blue-500 text-center md:w-4/6 ">
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
          <div className="mb-4 items-center justify-evenly md:flex">
            <img
              src={producto.foto}
              alt={producto.name}
              className="mb-4 w-32 object-cover sm:mx-auto md:mx-0"
            ></img>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold">{producto.name}</h3>
              <span>
                Precio ${producto.price} x {producto.cantidad}
              </span>
              <span className="font-bold">
                Total: ${producto.price * producto.cantidad}mxn
              </span>
              <button
                className="btn"
                onClick={() => deleteCartProduct(producto.id)}
              >
                <AiOutlineDelete className="mx-auto text-xl hover:fill-red-500" />
              </button>
            </div>
          </div>
        </div>
      ))}
      {cartList.length !== 0 && (
        <div>
          <p className="mb-2 text-xl font-bold">
            {cartTotal() !== 0 && `Total Carrito: $${cartTotal()}mxn`}
          </p>
          <p className="mb-2 text-xl font-bold">
            {cartTotal() !== 0 && `Productos: ${cantidadTotal()}`}
          </p>

          <div className="align-center mb-2 flex justify-center gap-8">
            <Link className=" hover:text-blue-500" to="/">
              Volver a Inicio
            </Link>
          </div>
          <form onSubmit={addOrder} className="mb-3 text-center">
            <input
              type="text"
              name="name"
              placeholder="Ingrese el nombre"
              className="text-center"
              onChange={handleOnChange}
              value={formData.name}
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Ingrese el teléfono"
              className="text-center"
              onChange={handleOnChange}
              value={formData.phone}
            />
            <br />
            <input
              type="text"
              name="email"
              placeholder="Ingrese el e-mail"
              className="text-center"
              onChange={handleOnChange}
              value={formData.email}
            />
            <br />
            <input
              type="text"
              name="repetirEmail"
              placeholder="Repetir el e-mail"
              className="text-center"
              onChange={handleOnChange}
              value={formData.repetirEmail}
            />
            <br />
          </form>
          <div className='flex gap-3'>
            <button
              onClick={addOrder}
              className=" mb-4 rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-green-700 "
              type="submit"
            >
              Pagar ahora
            </button>
            <button
              onClick={emptyCart}
              className=" mb-4 rounded-lg bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700 "
              type="submit"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
