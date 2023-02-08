import React from 'react'
import Item from '@/assets/components/item/Item.jsx';

console.log("ItemList check");
const ItemList = ({productos}) => {
  return (
    <>
        <Item productos ={productos}/>
    </>
  );
}

export default ItemList