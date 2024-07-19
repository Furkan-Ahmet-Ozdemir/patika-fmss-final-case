// import moduleStyle from './page.module.scss';
// import ProductItem from './ProductItem';

// const fetchProducts = async () => {
//   // await new Promise(r => setTimeout(r, 2000));
//   const res = await fetch('https://fakestoreapi.com/products')
//   const resData = await res.json();
//   return resData;
// }

// export default async function Products() {
//   const data = await fetchProducts();
//   return (
//     <div className={moduleStyle.main}>
//       <div>Filter Part</div>
//       <div className={moduleStyle.products}>
//         {data.map(product => (
//           <ProductItem key={product.id} product={product} />
          
//         ))}
//       </div>

//     </div>
//   )
// }
//-------------------------------------------
// "use client";
// import { useState, useEffect } from 'react';
// import moduleStyle from './page.module.scss';
// import ProductItem from './ProductItem';

// const fetchProducts = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const resData = await res.json();
//   return resData;
// }

// export default function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const data = await fetchProducts();
//       setProducts(data);
//     };
//     getData();
//   }, []);

//   const handleDelete = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   return (
//     <div className={moduleStyle.main}>
//       <div>Filter Part</div>
//       <div className={moduleStyle.products}>
//         {products.map(product => (
//           <ProductItem key={product.id} product={product} onDelete={() => handleDelete(product.id)} />
//         ))}
//       </div>
//     </div>
//   );
// }
//-------------------------------------------

// src/app/announcements/page.js
import Link from 'next/link';
import properties from './data.json';
import PropertyCard from './ProductItem'; // Ensure the path is correct
import styles from './page.module.css';

const AnnouncementsPage = () => {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.propertyList}>
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AnnouncementsPage;
