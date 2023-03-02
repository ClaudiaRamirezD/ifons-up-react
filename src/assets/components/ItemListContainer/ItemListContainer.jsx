import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where} from 'firebase/firestore'
import ItemList from "@/assets/components/ItemList/ItemList.jsx";

const Loading = () => {

  useEffect(() => {
    return () => {
      console.log('Dismounting Loading...')
    }
  })
  return <h2>Cargando...</h2>
}

export const ItemListContainer = () => {
  const [productos, setProductos] = useState();
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams()


  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const queryCollections = collection(db, "Productos");

    if (idCategoria) {
      const queryFilter = query(queryCollections, where('categoria', '==', idCategoria))
      getDocs(queryFilter)
        .then(resp => {
          setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() })))
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    } else {
      getDocs(queryCollections)
        .then(resp => setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }
  },[idCategoria])

      return (
        <>
          {productos ?
            (<div className="flex flex-row flex-wrap      justify-center"><ItemList productos={productos} />
            </div>) : <Loading />
          }
        </>
      )
    }