import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetchOne } from "@/assets/utils/gFetch.js";
import ItemDetail from "@/assets/components/itemDetail/ItemDetail.jsx";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams();

  //traer un producto
  useEffect(() => {
    const db = getFirestore()
    const query = doc(db, 'Productos', idProducto)
    getDoc(query)
    .then(resp => setProducto({id: resp.id, ...resp.data()}))
  }, [])

  return (
    <>{producto ? <ItemDetail producto={producto} /> : <h1>Cargando...</h1>}</>
  );
};

export default ItemDetailContainer;

