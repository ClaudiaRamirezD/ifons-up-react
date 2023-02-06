

let productos = [
  {
    id: 1,
    categoria: "iphone",
    name: "iPhone 11 Pro Max",
    price: 37,
    foto: "src/assets/images/phoneImages/iphone/iPhone-11-Pro-Max.jpg",
  },
  {
    id: 2,
    categoria: "iphone",
    name: "iPhone 11 Pro",
    price: 17,
    foto: "src/assets/images/phoneImages/iphone/iPhone-11-Pro.jpg",
  },
  {
    id: 3,
    categoria: "iphone",
    name: "iPhone 11",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-11.jpg",
  },
  {
    id: 4,
    categoria: "iphone",
    name: "iPhone 12 Pro Max 5G",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-12-pro-Max-5G.jpg",
  },
  {
    id: 5,
    categoria: "iphone",
    name: "iPhone 12 Pro Max",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-12-pro-max.jpg",
  },
  {
    id: 6,
    categoria: "iphone",
    name: "iPhone 13 Pro Max",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-13-pro-max.jpg",
  },
  {
    id: 7,
    categoria: "iphone",
    name: "iPhone 13 Pro",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-13-pro.jpg",
  },
  {
    id: 8,
    categoria: "iphone",
    name: "iPhone 13",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-13.jpg",
  },
  {
    id: 9,
    categoria: "iphone",
    name: "iPhone 14",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-14.jpg",
  },
  {
    id: 10,
    categoria: "iphone",
    name: "iPhone XR",
    price: 27,
    foto: "src/assets/images/phoneImages/iphone/iPhone-XR-azul.jpg",
  },
  {
    id: 11,
    categoria: "Samsung",
    name: "A32",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/a23.jpg",
  },
  {
    id: 12,
    categoria: "Samsung",
    name: "Note 10 Plus",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/note-10-plus.jpg",
  },
  {
    id: 13,
    categoria: "Samsung",
    name: "Note 20 Ultra",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/note-20-ultra.jpg",
  },
  {
    id: 14,
    categoria: "Samsung",
    name: "Note 20",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/note-20.jpg",
  },
  {
    id: 15,
    categoria: "Samsung",
    name: "S10 plus",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/s10-plus.jpg",
  },
  {
    id: 16,
    categoria: "Samsung",
    name: "S10E",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/s10E.jpg",
  },
  {
    id: 17,
    categoria: "Samsung",
    name: "S20 FE",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/S20-FE.jpg",
  },
  {
    id: 18,
    categoria: "Samsung",
    name: "S20 Plus",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/s20-plus.jpg",
  },
  {
    id: 19,
    categoria: "Samsung",
    name: "S22 Plus",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/s22-plus.jpg",
  },
  {
    id: 20,
    categoria: "Samsung",
    name: "S22 Ultra",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/s22-ultra.jpg",
  },
  {
    id: 21,
    categoria: "Samsung",
    name: "Z Flip 4",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/Z-flip-4.jpg",
  },
  {
    id: 22,
    categoria: "Samsung",
    name: "Z Fold 2",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/Z-fold-2.jpg",
  },
  {
    id: 23,
    categoria: "Samsung",
    name: "Z Fold 3",
    price: 27,
    foto: "src/assets/images/phoneImages/Samsung/Z-fold-3.jpg",
  },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 1000);
  });
};
