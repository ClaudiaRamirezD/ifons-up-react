import { useEffect, useState } from "react";
import { gFetch } from "../../utils/gFetch";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //FETCH ES UNA PROMESA
  useEffect(() => {
    gFetch()
      .then((res) => {
        setProductos(res);
        //cada then debe de hacer 1 sola cosa
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  //EJEMPLO PARA LLAMAR A UNA API
  // fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
  //   .then(resp => resp.json())
  //   .then((data) => {
  //     data.results.forEach((pokemonName) => {
  //       console.log(pokemonName.name);

  //     });
  //   })

  //ASYNC Y AWAIT ES SUGAR SINTAX, ES MAS NUEVA
  const useFetch = async () => {
    const resp = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1051"
    );
    const respParse = await resp.json();
    console.log(respParse);
    return respParse;
  };

  useFetch();

  console.log(productos);

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {productos.map((producto) => (
        <div key={producto.id} className="card mx-auto mt-6 w-64 text-center">
          <div className="card-header">
            <h2 className="card-title">{producto.name}</h2>
          </div>
          <div className="card-body mx-auto">
            <img
              src={producto.foto}
              alt={producto.name}
              className="max-h-60 max-w-44 "
            ></img>
          </div>
          <div className="card-footer">
            <p>Precio:{ producto.price}</p>
            <button className="btn btn-outline-primary w-100">Detalles</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemListContainer;
