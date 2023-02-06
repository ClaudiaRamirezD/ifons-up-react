let productos = [
  { id: 1, categoria: "playeras", name: "producto 1", price: 37 },
  { id: 2, categoria: "pantalon", name: "producto 2", price: 17 },
  { id: 3, categoria: "gorra", name: "producto 3", price: 27 },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 1000);
  });
};
