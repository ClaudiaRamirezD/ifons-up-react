import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where} from 'firebase/firestore'
import { gFetch } from "@/assets/utils/gFetch.js";
import ItemList from "@/assets/components/ItemList/ItemList.jsx";

const Loading = () => {

  useEffect(() => {
    return () => {
      console.log('Dismounting Loading...')
    }
  })
  return <h2>Cargando...</h2>
}

export const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams()

  //traer un producto
  // useEffect(() => {
  //   const db = getFirestore()
  //   const query = doc(db, 'Productos', 'Z9NNebOPxWYkAvjsOf3c')
  //   getDoc(query)
  //   .then(resp => setProducto({id: resp.id, ...resp.data()}))
  // }, [])
  
  // console.log('ItemListContainer-1-producto:',producto)

  // useEffect(() => {
  //   if (idCategoria) {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(res.filter(producto => producto.categoria === idCategoria));
  //         //cada then debe de hacer 1 sola cosa
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   } else {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(res);
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
      
  //   }
  // }, [idCategoria]);

//traer todos
    // useEffect(() => {
    //   const db = getFirestore();
    //   const queryCollections = collection(db, 'Productos')
    //   getDocs(queryCollections)
    //     .then(resp => setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() })))) 
    //     .catch(err => console.error(err))
    //   .finally(()=> setLoading(false))
    // }, []);
  
  //traer de todos filtrado
    useEffect(() => {
      const db = getFirestore();
      const queryCollections = collection(db, "Productos");
      const queryFilter = query(queryCollections, where('categoria','==', idCategoria))
  
      getDocs(queryFilter)
        .then((resp) =>
          setProductos(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }, []);
  

  return(
      <>
        {productos ?
         ( <div className="flex flex-row flex-wrap      justify-center"><ItemList productos={productos} />
        </div>) : <Loading />
         }
    </> 
  );
      
  
};
