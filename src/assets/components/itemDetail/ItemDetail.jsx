import React from 'react'
import { NavLink } from "react-router-dom";

const ItemDetail = (productos) => {
  return (
    <div>
      <div className="card-header text-center">{productos.name}</div>
        <div className="card-body text-center">
            <img
            src={productos.foto}
            alt="imagen"
            className="product-image w-100"
            />
        </div>
        <div className="card-body text-center">
            <p>{productos.description}</p>
        </div>
        <div className="card-body text-center">
            <strong>${productos.price}mxn</strong>
        </div>
        <div className="card-body text-center">
            <NavLink to={"/"} className="btn btn-dark btn-large">
            {" "}
            Atras{" "}
            </NavLink>
        </div>
    </div>
  );
}

export default ItemDetail