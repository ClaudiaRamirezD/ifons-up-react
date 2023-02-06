import { useEffect,useState } from "react"
import { gFetch } from "../../utils/gFetch"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)


  // useEffect(() => {
  //   gFetch()
  //     .then(res => {
  //       setProductos(res)
  //       //cada then debe de hacer 1 sola cosa
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false) )
  // }, [])

  fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(resp => resp.json())
    .then((data) => {
      data.results.forEach((pokemonName) => {
        console.log(pokemonName.name);
        
      });
    })
  
  // console.log(productos)

  return (
    <div>

    </div>
    // <center>
    //   {loading ? <h2>Cargando...</h2>
    //     :productos.map(producto =>
    //     <div key={producto.id} className='card w-25 mt-2'>
    //       <div className="card-header">
    //         Nombre:{producto.name}
    //       </div>
    //       <div className="card-body">
    //         <h2>Aqui ira la imagen</h2> 
    //       </div>
    //         <div className="card-footer">
    //           Categoria:{producto.categoria}<br />
    //           Precio:{producto.price}  
    //           <button className="btn btn-outline-primary w-100">Detalles</button>
    //       </div>
    //     </div>)}
    // </center>
  )
}
export default ItemListContainer