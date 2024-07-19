// import Image from 'next/image';
// import styles from './page.module.scss';
// import Link from 'next/link';

// const ProductItem = ({
//   product
// }) => {
//   return (
//     <div className={styles.product}>
//       <Image src={product.image} width={100} height={100} />
//       <div>
//         <Link href={`/products/${product.id}`}>{product.title}</Link>
//         <p>{product.price}$</p>

//         <Link href={`/products/${product.id}`}> <button> Edit </button> </Link>

//         <button> Delete </button>
//         {/* <button> Delete </button> */}
//       </div>
//     </div>
//   );
// };

// export default ProductItem;
//-----------------------------


// import Image from 'next/image';
// import styles from './page.module.css';
// // import Link from 'next/link';

// const ProductItem = ({ product, onDelete }) => {
//   return (
//       <>
//          <li>
//               <div className={styles.main}>

//                 <figure style="--width: 800; --height: 533;">
//                   <Image src={product.image} width={800} height={533} loading="lazy"
//                     alt="59345 STONEWALL DR, Plaquemine, LA 70764, USA" className="img-cover"/>
//                 </figure>

//                 {/* <div class="card-content">

//                   <h3 class="h3">
//                     <a href="#" class="card-title">59345 STONEWALL DR, Plaquemine, LA 70764, USA</a>
//                   </h3>

//                   <ul class="card-list">

//                     <li class="card-item">
//                       <div class="item-icon">
//                         <ion-icon name="cube-outline"></ion-icon>
//                       </div>

//                       <span class="item-text">8000sqf</span>
//                     </li>

//                     <li class="card-item">
//                       <div class="item-icon">
//                         <ion-icon name="bed-outline"></ion-icon>
//                       </div>

//                       <span class="item-text">4 Beds</span>
//                     </li>

//                     <li class="card-item">
//                       <div class="item-icon">
//                         <ion-icon name="man-outline"></ion-icon>
//                       </div>

//                       <span class="item-text">4 Baths</span>
//                     </li>

//                   </ul>

//                   <div class="card-meta">

//                     <div>
//                       <span class="meta-title"> Kiralık Satılık </span>
              

//                       <span class="meta-text">$5000</span>
//                     </div>

//                     <div>
//                       <span class="meta-title">Rating</span>

//                       <span class="meta-text">

//                         <div class="rating-wrapper">
//                           <ion-icon name="star"></ion-icon>
//                           <ion-icon name="star"></ion-icon>
//                           <ion-icon name="star"></ion-icon>
//                           <ion-icon name="star"></ion-icon>
//                           <ion-icon name="star"></ion-icon>
//                         </div>

//                         <span>5.0(30)</span>

//                       </span>
//                     </div>

//                   </div>

//                 </div> */}

//               </div>
//             </li>

//       </>


//     // <div className={styles.product}>
//     //   <Image src={product.image} width={100} height={100} alt={product.title} />
//     //   <div>
//     //     <Link href={`/products/${product.id}`}>{product.title}</Link>
//     //     <p>{product.price}$</p>
//     //     <Link href={`/announcements/${product.id}`}>
//     //       <button>Edit</button>
//     //     </Link>
//     //     <button onClick={onDelete}>Delete</button>
//     //   </div>
//     // </div>

//   );
// };

// export default ProductItem;
//------------------------------------------

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'

const ProductItem = ({ property }) => {
  if (!property) return null; // Check for undefined property

  return (
    <li className={styles.startGrid}>
      <div className={styles.propertyCard}>

        <figure className={`${styles.imgHolder}`} style={{ '--width': 600, '--height': 233 }}>
          {/* <Image src={property.image}
          width={800} height={533}
            alt={property.title}
            className={styles.imgCover}
          /> */}

        <Image src={"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-lBNjJR.png"}
        	     width={800} height={533}
               alt={property.title}
               className={styles.imgCover}/>

        </figure>

        <div className={styles.cardContent}>
          <h3 className={styles.h3}>
            <Link href={`/announcements/${property.id}`}>
              <h3 className={styles.cardTitle}>{property.title}</h3>
            </Link>
          </h3>

          <ul className={styles.cardList}>
            <li className={styles.cardItem}>
              <div className={styles.itemIcon}>
                <ion-icon name="cube-outline"></ion-icon>
              </div>
              <span className={styles.itemText}>{property.size}</span>
            </li>
            <li className={styles.cardItem}>
              <div className={styles.itemIcon}>
                <ion-icon name="bed-outline"></ion-icon>
              </div>
              <span className={styles.itemText}>{property.beds} Beds</span>
            </li>
            <li className={styles.cardItem}>
              <div className={styles.itemIcon}>
                <ion-icon name="man-outline"></ion-icon>
              </div>
              <span className={styles.itemText}>{property.baths} Baths</span>
            </li>
          </ul>

          <div className={styles.cardMeta}>
            <div>
              <span className={styles.metaTitle}>Kiralık Satılık</span>
              <span className={styles.metaText}>${property.price}</span>
            </div>

            <div>
              <span className={styles.metaTitle}>Rating</span>
              <span className={styles.metaText}>
                <div className={styles.ratingWrapper}>
                  {[...Array(5)].map((_, index) => (
                    <ion-icon key={index} name="star"></ion-icon>
                  ))}
                </div>
                <span>{property.rating} ({property.reviews})</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;

