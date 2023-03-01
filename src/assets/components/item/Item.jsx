import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className="card m-10 w-64 border-blue-500 text-center">
      <Link to={`/detalle/${producto.id}`}>
        <div key={producto.id}>
          <div className="card-header bg-blue-500">
            <h2 className="card-title font-bold text-white hover:text-purple-700 ">{producto.name}</h2>
          </div>
          <div className="card-body mx-auto p-4">
            <img
              src={producto.foto}
              alt={producto.name}
              className="mx-auto h-64"
            ></img>
          </div>
          <div className="card-footer border-blue-500">
            <p className="p-3.5">Precio: ${producto.price}mxn</p>
            <button className="btn btn-outline-primary transition-all w-100">Detalles</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item