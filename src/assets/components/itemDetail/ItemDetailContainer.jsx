import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetchOne } from "@/assets/utils/gFetch.js";
import ItemDetail from "@/assets/components/itemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams();


useEffect(() => {
  gFetchOne(idProducto) 
    .then((response) => setProducto(response))
    .catch((error) => setProducto(error));
}, []);


  return (
    <>
      {producto ? <ItemDetail producto={producto}/> :
      <h1>Cargando...</h1>}
    </>
  )
};

console.log('llegue aqui')
export default ItemDetailContainer;
