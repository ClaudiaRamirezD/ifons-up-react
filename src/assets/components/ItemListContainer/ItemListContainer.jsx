import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "@/assets/components/ItemList/ItemList.jsx";

const Loading = () => {
  useEffect(() => {
    return () => {
      console.log("Dismounting Loading...");
    };
  });
  return <h2>Cargando...</h2>;
};

export const ItemListContainer = () => {
  const [products, setProductos] = useState();
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollections = collection(db, "Productos");
    const queryFilter = idCategory
      ? query(queryCollections, where("category", "==", idCategory))
      : queryCollections;

    getDocs(queryFilter)
      .then((resp) => {
        setProductos(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <>
      {products ? (
        <div className="flex flex-row flex-wrap      justify-center">
          <ItemList products={products} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
