import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const ruta = useParams()
  console.log(ruta)
  return (
    <div>
      <h1>Hola desde ItemDetailContainer!!!</h1>
    </div>
  )
}

export default ItemDetailContainer