import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleRemove = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <div className="card w-50 mx-auto  border-transparent  text-center ">
      <div className="row items-center">
        <div className="col  border-blue-500">
          <button
            className="btn btn-outline-primary text-lg font-bold"
            onClick={handleRemove}
          >
            {" "}
            -{" "}
          </button>
        </div>
        <div className="col">
          <center>
            <label>{count}</label>
          </center>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary text-lg font-bold"
            onClick={handleAdd}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <div className="card-footer border-transparent p-2 ">
        <button
          className="btn btn-outline-primary w-full flex items-center gap-2 "
          onClick={handleOnAdd}>
          <p>Agregar a carrito</p>
          <AiOutlineShoppingCart className=" text-2xl " />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
