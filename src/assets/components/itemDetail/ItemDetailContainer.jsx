import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "@/assets/utils/gFetch.js";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    if (idProducto) {
      gFetch()
        .then((res) => {
          setProducto(res.find((producto) => producto.id === idProducto));
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      gFetch()
        .then((res) => {
          setProducto(res);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [idProducto]);

  return loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
