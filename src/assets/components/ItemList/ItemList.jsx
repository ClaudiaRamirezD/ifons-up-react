import Item from "@/assets/components/item/Item.jsx";

const ItemList = ({ products }) => {
  return products.map((product) => <Item key={product.id} product={product} />);
};

export default ItemList;
