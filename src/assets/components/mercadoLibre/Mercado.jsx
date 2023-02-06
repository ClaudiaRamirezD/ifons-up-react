import React from 'react'

export default function App() {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1051")
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach((celulares) => {
                console.log(celulares.title);
            });
        
        });
    return (
        <div>
            <h1>hI ITS ME</h1>
        </div>
    )
}

//oTRA OPCION USANDO SUGAR SYNTAX CON ASYNC Y AWAIT:

const useFetch = async () => {
    const resp = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1051")
    const respParse = await resp.json()
    console.log(respParse)
}

useFetch()