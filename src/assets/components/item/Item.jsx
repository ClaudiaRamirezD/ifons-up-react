import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className="card text-center m-10 w-64">
      <Link to={`/detalle/${producto.id}`}>
        <div key={producto.id}>
          <div className="card-header">
            <h2 className="card-title">{producto.name}</h2>
          </div>
          <div className="card-body mx-auto p-4">
            <img src={producto.foto} alt={producto.name} className="mx-auto h-64"></img>
          </div>
          <div className="card-footer">
            <p className="p-3.5">Precio: ${producto.price}mxn</p>
            <button className="btn btn-outline-primary w-100">Detalles</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item