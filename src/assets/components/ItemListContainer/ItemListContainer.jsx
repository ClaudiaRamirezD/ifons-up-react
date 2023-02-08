import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "@/assets/utils/gFetch.js";
import ItemList from "@/assets/components/ItemList/ItemList.jsx";

export const ItemListContainer = ({ }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams()

  useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then((res) => {
          setProductos(res.filter(producto => producto.categoria ===idCategoria));
          //cada then debe de hacer 1 sola cosa
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((res) => {
          setProductos(res);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      
    }
  }, [idCategoria]);

  //FETCH ES UNA PROMESA    

  return loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />;
};
