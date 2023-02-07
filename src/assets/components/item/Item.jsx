import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({productos}) => {
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      {productos.map((producto) => (
        <div key={producto.id} className="card m-8  mt-6 w-64 text-center">
          <div className="card-header">
            <h2 className="card-title">{producto.name}</h2>
          </div>
          <div className="card-body mx-auto">
            <img
              src={producto.foto}
              alt={producto.name}
              className="max-w-44 max-h-60 "
            ></img>
          </div>
          <div className="card-footer">
            <p>Precio: ${producto.price}mxn</p>
            <Link to={`/detalle/${producto.id}`}>
              <button className="btn btn-outline-primary w-100">
                Detalles
              </button>
            </Link>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Item