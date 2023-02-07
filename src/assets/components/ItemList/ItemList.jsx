import React from 'react'
import Item from '../item/Item';

console.log("ItemList check");
const ItemList = ({productos}) => {
  return (
    <>
        <Item productos ={productos}/>
    </>
  );
}

export default ItemList