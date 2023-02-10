import React from 'react'
import Item from '@/assets/components/item/Item.jsx';


const ItemList = ({productos}) => {
  return (
    
        productos.map(producto => <Item key={producto.id} producto={producto} />)

  );
}

export default ItemList