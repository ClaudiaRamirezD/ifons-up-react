import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card m-10 w-64 border-blue-500 text-center">
      <Link to={`/product/${product.id}`}>
        <div key={product.id}>
          <div className="card-header bg-blue-500">
            <h2 className="card-title font-bold text-white hover:text-purple-700 ">
              {product.name}
            </h2>
          </div>
          <div className="card-body mx-auto p-4">
            <img
              src={product.picture}
              alt={product.name}
              className="mx-auto h-64"
            ></img>
          </div>
          <div className="card-footer border-blue-500">
            <p className="p-3.5">Precio: ${product.price}mxn</p>
            <button className="btn btn-outline-primary w-100 transition-all">
              Detalles
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
