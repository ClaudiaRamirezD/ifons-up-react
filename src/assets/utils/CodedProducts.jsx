import { addDoc, collection, getFirestore } from "firebase/firestore";

const codedProducts = async () => {
  const db = getFirestore();
  const productsCollection = collection(db, "Productos");
  const products = [
    {
      category: "iphone",
      name: "iPhone 11 Pro Max",
      price: 9000,
      picture: "/phoneImages/iphone/iPhone-11-Pro-Max.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 11 Pro",
      price: 8700,
      picture: "/phoneImages/iphone/iPhone-11-Pro.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 11",
      price: 7000,
      picture: "/phoneImages/iphone/iPhone-11.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 12 Pro Max 5G",
      price: 12000,
      picture: "/phoneImages/iphone/iPhone-12-pro-Max-5G.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 12 Pro Max",
      price: 17000,
      picture: "/phoneImages/iphone/iPhone-12-pro-max.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 13 Pro Max",
      price: 20000,
      picture: "/phoneImages/iphone/iPhone-13-pro-max.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 13 Pro",
      price: 19700,
      picture: "/phoneImages/iphone/iPhone-13-pro.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 13",
      price: 17500,
      picture: "/phoneImages/iphone/iPhone-13.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone 14",
      price: 20000,
      picture: "/phoneImages/iphone/iPhone-14.jpg",
      stock: 9,
    },
    {
      category: "iphone",
      name: "iPhone XR",
      price: 6000,
      picture: "/phoneImages/iphone/iPhone-XR-azul.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "A32",
      price: 3800,
      picture: "/phoneImages/Samsung/a23.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "Note 10 Plus",
      price: 8000,
      picture: "/phoneImages/Samsung/note-10-plus.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "Note 20 Ultra",
      price: 13200,
      picture: "/phoneImages/Samsung/note-20-ultra.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "Note 20",
      price: 8300,
      picture: "/phoneImages/Samsung/note-20.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "S10 plus",
      price: 6500,
      picture: "/phoneImages/Samsung/s10-plus.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "S10E",
      price: 4000,
      picture: "/phoneImages/Samsung/s10E.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "S20 FE",
      price: 4300,
      picture: "/phoneImages/Samsung/S20-FE.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "S20 Plus",
      price: 7400,
      picture: "/phoneImages/Samsung/s20-plus.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "S22 Plus",
      price: 12200,
      picture: "/phoneImages/Samsung/s22-plus.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "S22 Ultra",
      price: 23800,
      picture: "/phoneImages/Samsung/s22-ultra.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "Z Flip 4",
      price: 18700,
      picture: "/phoneImages/Samsung/Z-flip-4.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "Z Fold 2",
      price: 17600,
      picture: "/phoneImages/Samsung/Z-fold-2.jpg",
      stock: 9,
    },
    {
      category: "Samsung",
      name: "Z Fold 3",
      price: 21600,
      picture: "/phoneImages/Samsung/z-fold-3.jpg",
      stock: 9,
    },
    {
      category: "Huawei",
      name: "Y9 Prime",
      price: 3000,
      picture: "/phoneImages/Huawei/Y9-prime.jpg",
      stock: 9,
    },
    {
      category: "Huawei",
      name: "P30 Lite",
      price: 3000,
      picture: "/phoneImages/Huawei/P30-lite.jpg",
      stock: 9,
    },
    {
      category: "Huawei",
      name: "Nova 5T",
      price: 3900,
      picture: "/phoneImages/Huawei/nova-5t.jpg",
      stock: 9,
    },
    {
      category: "Huawei",
      name: "Honor X7",
      price: 3800,
      picture: "/phoneImages/Huawei/honor-x7.jpg",
      stock: 9,
    },
    {
      category: "Motorola",
      name: "Edge 20 Pro",
      price: 8300,
      picture: "/phoneImages/Motorola/Moto-edge-20pro.jpg",
      stock: 9,
    },
    {
      category: "Motorola",
      name: "G9 Plus",
      price: 3200,
      picture: "/phoneImages/Motorola/Moto-g9-plus.jpg",
      stock: 9,
    },
    {
      category: "Motorola",
      name: "G31",
      price: 2900,
      picture: "/phoneImages/Motorola/Moto-G31.jpg",
      stock: 9,
    },
    {
      category: "Motorola",
      name: "G50",
      price: 3100,
      picture: "/phoneImages/Motorola/Moto-g50.jpg",
      stock: 9,
    },
    {
      category: "Motorola",
      name: "G60",
      price: 3200,
      picture: "/phoneImages/Motorola/Moto-g60.jpg",
      stock: 9,
    },
    {
      category: "Motorola",
      name: "G60s",
      price: 3700,
      picture: "/phoneImages/Motorola/Moto-g60s.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "Google Pixel 6Pro",
      price: 6200,
      picture: "/phoneImages/Otros/Google-pixel6pro.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "One Plus 7T McLaren",
      price: 6600,
      picture: "/phoneImages/Otros/One-plus-7T-Mclaren.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "One Plus 8T",
      price: 8600,
      picture: "/phoneImages/Otros/One-plus-8T.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "Sony 5 III",
      price: 9000,
      picture: "/phoneImages/Otros/Sony5-III.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "Xiaomi Mi Note 10",
      price: 5000,
      picture: "/phoneImages/Otros/Xiaomi-miNote10.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "Xiaomi Redmi Note 11",
      price: 3900,
      picture: "/phoneImages/Otros/Xiaomi-note11.jpg",
      stock: 9,
    },
    {
      category: "Otros",
      name: "Xiaomi Redmi 10",
      price: 3300,
      picture: "/phoneImages/Otros/Xiaomi-redmi10.jpg",
      stock: 9,
    },
  ];
  // MI CODIGO///////////////
  for (const product of products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Added product with product.id} to Firestore`);
    } catch (e) {
      console.error(`Error adding product with product.id}: ${e}`);
    }
  }
};

codedProducts();




  /////CODER ASK CODE////////////////
  // try {
  //   for (const product of products) {
  //     await addDoc(productsCollection, product);
  //     console.log(`Agregado el producto "${product.name}" a la colección.`);
  //   }
  //   console.log("Todos los productos han sido agregados a la colección.");
  // } catch (error) {
  //   console.error("Error al agregar productos a la colección:", error);
  // }
// MI CODIGO///////////////
  // for (const product of products) {
  //   try {
  //     await addDoc(productsCollection, product);
  //     console.log(`Added product with product.id} to Firestore`);
  //   } catch (e) {
  //     console.error(`Error adding product with product.id}: ${e}`);
  //   }
  // }


export default codedProducts;
