import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "@/assets/utils/gFetch.js";

import ItemDetail from "@/assets/components/itemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

useEffect(() => {
  gFetch(idProducto)
    .then((response) => setProducto(response))
    .catch((error) => setProducto(error));
  setLoading(false);
}, []);


  return loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
