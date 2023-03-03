import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "@/assets/components/itemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [product, setProducto] = useState({});
  const { idProduct } = useParams();

  //traer un product
  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, "Productos", idProduct);
    getDoc(query).then((resp) => setProducto({ id: resp.id, ...resp.data() }));
  }, []);

  return (
    <>{product ? <ItemDetail product={product} /> : <h1>Cargando...</h1>}</>
  );
};

export default ItemDetailContainer;
