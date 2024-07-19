// "use client"

// import { useParams } from "next/navigation";
//-------------------------------------------
// import User from "./user";
// import ProductComponent from "./product";
// import { Suspense } from "react";

// export default function Product({
//   params
// }) {
//   console.log(params);
//   // const params = useParams(); // For client side rendering
//   return (
//     <div>
//       <Suspense fallback={<p>Loading product...</p>}>
//         <ProductComponent params={params} />
//       </Suspense>
//       <Suspense fallback={<p>User loading...</p>}>
//         <User />
//       </Suspense>
//     </div>
//   )
// }
//-------------------------------------------

// src/app/announcements/[announcementsId]/page.js
import properties from '../data.json'; // Adjust the path as needed
import Link from 'next/link';
// import Image from 'next/image';
// import '../../globals.css';
// import  './page.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



const AnnouncementDetail = ({ params }) => {
  const property = properties.find(prop => prop.id === parseInt(params.announcementsId));

  if (!property) return <div>Announcement not found</div>;

  return (

  <>
  <div className="ml-auto mr-auto grid w-[1350px] grid-cols-2 gap-5 bg-white p-5 text-white shadow-md">
    <div className="mx-auto w-full bg-white p-5">
      <div className="w-full border text-center">
        <img src="https://cdn.discordapp.com/attachments/870403363886473271/1263576961327042560/big.webp?ex=669abd3f&is=66996bbf&hm=31f8dab1d68cf56f3f2772b65aee4d654b1f961783a119ca4585c38c380b57c3&" className="mx-auto" />
      </div>
    </div>
    <div className="w-full bg-white p-5 text-black">
      <h2 className="font-3xl text-3xl">Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</h2>
      <p className="pb-4 text-lg font-medium text-green-700">in stock</p>
      <p className="pb-4 text-3xl font-semibold text-black">$75,00</p>
      <p className="mt-5 pb-8">
        <span className="rounded-lg border bg-slate-500 px-3 py-4 text-lg font-bold text-white"><span>Kiralık</span> / Satılık</span>
      </p>

      <div className="grid grid-cols-2 py-4">
        <table className="block w-full">
          <tr >
            <td className="font-bold">Type:</td>
            <td>Regular</td>
          </tr>
          <tr>
            <td className="font-bold">Color:</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td className="font-bold">Material:</td>
            <td>Cotton, Jeans</td>
          </tr>
          <tr>
            <td className="font-bold">Brand:</td>
            <td>Reebook</td>
          </tr>
        </table>
        <table className="block">
          <tr className="text-lg text-black">
            <td className="font-bold">Type:</td>
            <td>Regular</td>
          </tr>
          <tr>
            <td className="font-bold">Color:</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td className="font-bold">Material:</td>
            <td>Cotton, Jeans</td>
          </tr>
          <tr>
            <td className="font-bold">Brand:</td>
            <td>Reebook</td>
          </tr>
        </table>
      </div>
      <div>
        <button className="rounded border bg-yellow-500 px-4 py-3 text-black transition hover:bg-yellow-400">Buy NOW</button>
        <button className="rounded border bg-blue-500 px-4 py-3 text-white transition hover:bg-blue-400">Add to Cart</button>
        <button className="bg-grey-500 rounded border px-5 py-3 text-black transition hover:bg-gray-300">Save</button>
      </div>
    </div>
  </div>
  <div className="ml-auto mr-auto mt-20 w-[1350px] gap-5 bg-white">
    <h2 className="mb-4 border-b border-black pb-2 text-2xl">Açıklama</h2>
    <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>
  </div>
  </>


    //-------------------------
// <div>
//   <section classNameNameName={`${s.py-5}`}>
//     <div classNameNameName={`${s.container}`}>
//       <div classNameNameName={`${s.row} ${s.gx-5}`}>
//         <aside classNameNameName={`${s.colLg6}`}>
//           <div classNameNameName={`${s.border} ${s.rounded4} ${s.mb3} ${s.dFlex} ${s.justifyContentCenter}`}>
//             <a data-fslightbox="mygalley" classNameNameName={`${s.rounded4}`} target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
//               <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} classNameNameName={`${s.rounded4} ${s.fit}`} src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
//             </a>
//           </div>
//           <div classNameNameName={`${s.dFlex} ${s.justifyContentCenter} ${s.mb3}`}>
//             <a data-fslightbox="mygalley" classNameNameName={`${s.border} ${s.mx1} ${s.rounded2} ${s.itemThumb}`} target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
//               <img width="60" height="60" classNameNameName={`${s.rounded2}`} src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
//             </a>
//             <a data-fslightbox="mygalley" classNameNameName={`${s.border} ${s.mx1} ${s.rounded2} ${s.itemThumb}`} target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp">
//               <img width="60" height="60" classNameNameName={`${s.rounded2}`} src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
//             </a>
//             <a data-fslightbox="mygalley" classNameNameName={`${s.border} ${s.mx1} ${s.rounded2} ${s.itemThumb}`} target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp">
//               <img width="60" height="60" classNameNameName={`${s.rounded2}`} src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
//             </a>
//             <a data-fslightbox="mygalley" classNameNameName={`${s.border} ${s.mx1} ${s.rounded2} ${s.itemThumb}`} target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp">
//               <img width="60" height="60" classNameNameName={`${s.rounded2}`} src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
//             </a>
//             <a data-fslightbox="mygalley" classNameNameName={`${s.border} ${s.mx1} ${s.rounded2} ${s.itemThumb}`} target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
//               <img width="60" height="60" classNameNameName={`${s.rounded2}`} src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
//             </a>
//           </div>
//         </aside>
//         <main classNameNameName={`${s.colLg6}`}>
//           <div classNameNameName={`${s.psLg3}`}>
//             <h4 classNameNameName={`${s.title} ${s.textDark}`}>Quality Men's Hoodie for Winter, Men's Fashion <br /> Casual Hoodie</h4>
//             <div classNameNameName={`${s.dFlex} ${s.flexRow} ${s.my3}`}>
//               <div classNameNameName={`${s.textWarning} ${s.mb1} ${s.me2}`}>
//                 <i classNameNameName="fa fa-star"></i>
//                 <i classNameNameName="fa fa-star"></i>
//                 <i classNameNameName="fa fa-star"></i>
//                 <i classNameNameName="fa fa-star"></i>
//                 <i classNameNameName="fas fa-star-half-alt"></i>
//                 <span classNameNameName={`${s.ms1}`}>4.5</span>
//               </div>
//               <span classNameNameName={`${s.textMuted}`}><i classNameNameName="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
//               <span classNameNameName={`${s.textSuccess} ${s.ms2}`}>In stock</span>
//             </div>
//             <div classNameNameName={`${s.mb3}`}>
//               <span classNameNameName={`${s.h5}`}>$75.00</span>
//               <span classNameNameName={`${s.textMuted}`}>/per box</span>
//             </div>
//             <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>
//             <div classNameNameName={`${s.row}`}>
//               <dt classNameNameName={`${s.col3}`}>Type:</dt>
//               <dd classNameNameName={`${s.col9}`}>Regular</dd>
//               <dt classNameNameName={`${s.col3}`}>Color</dt>
//               <dd classNameNameName={`${s.col9}`}>Brown</dd>
//               <dt classNameNameName={`${s.col3}`}>Material</dt>
//               <dd classNameNameName={`${s.col9}`}>Cotton, Jeans</dd>
//               <dt classNameNameName={`${s.col3}`}>Brand</dt>
//               <dd classNameNameName={`${s.col9}`}>Reebook</dd>
//             </div>
//             <hr />
//             <div classNameNameName={`${s.row} ${s.mb4}`}>
//               <div classNameNameName={`${s.colMd4} ${s.col6}`}>
//                 <label classNameNameName={`${s.mb2}`}>Size</label>
//                 <select classNameNameName={`${s.formSelect} ${s.border} ${s.borderSecondary}`} style={{ height: '35px' }}>
//                   <option>Small</option>
//                   <option>Medium</option>
//                   <option>Large</option>
//                 </select>
//               </div>
//               <div classNameNameName={`${s.colMd4} ${s.col6} ${s.mb3}`}>
//                 <label classNameNameName={`${s.mb2} ${s.dBlock}`}>Quantity</label>
//                 <div classNameNameName={`${s.inputGroup} ${s.mb3}`} style={{ width: '170px' }}>
//                   <button classNameNameName={`${s.btn} ${s.btnWhite} ${s.border} ${s.borderSecondary} ${s.px3}`} type="button" id="button-addon1" data-mdb-ripple-color="dark">
//                     <i classNameNameName="fas fa-minus"></i>
//                   </button>
//                   <input type="text" classNameNameName={`${s.formControl} ${s.textCenter} ${s.border} ${s.borderSecondary}`} placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
//                   <button classNameNameName={`${s.btn} ${s.btnWhite} ${s.border} ${s.borderSecondary} ${s.px3}`} type="button" id="button-addon2" data-mdb-ripple-color="dark">
//                     <i classNameNameName="fas fa-plus"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <a href="#" classNameNameName={`${s.btn} ${s.btnWarning} ${s.shadow0}`}> Buy now </a>
//             <a href="#" classNameNameName={`${s.btn} ${s.btnPrimary} ${s.shadow0}`}><i classNameNameName={`${s.me1} fa fa-shopping-basket`}></i> Add to cart </a>
//             <a href="#" classNameNameName={`${s.btn} ${s.btnLight} ${s.border} ${s.borderSecondary} ${s.py2} ${s.iconHover} ${s.px3}`}><i classNameNameName={`${s.me1} fa fa-heart fa-lg`}></i> Save </a>
//           </div>
//         </main>
//       </div>
//     </div>
//   </section>
//   <section classNameNameName={`${s.bgLight} ${s.borderTop} ${s.py4}`}>
//     <div classNameNameName={`${s.container}`}>
//       <div classNameNameName={`${s.row} ${s.gx4}`}>
//         <div classNameNameName={`${s.colLg8} ${s.mb4}`}>
//           <div classNameNameName={`${s.border} ${s.rounded2} ${s.px3} ${s.py2} ${s.bgWhite}`}>
//             <ul classNameNameName={`${s.nav} ${s.navPills} ${s.navJustified} ${s.mb3}`} id="ex1" role="tablist">
//               <li classNameNameName={`${s.navItem} ${s.dFlex}`} role="presentation">
//                 <a classNameNameName={`${s.navLink} ${s.dFlex} ${s.alignItemsCenter} ${s.justifyContentCenter} ${s.w100} ${s.active}`} id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
//               </li>
//               <li classNameNameName={`${s.navItem} ${s.dFlex}`} role="presentation">
//                 <a classNameNameName={`${s.navLink} ${s.dFlex} ${s.alignItemsCenter} ${s.justifyContentCenter} ${s.w100}`} id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
//               </li>
//               <li classNameNameName={`${s.navItem} ${s.dFlex}`} role="presentation">
//                 <a classNameNameName={`${s.navLink} ${s.dFlex} ${s.alignItemsCenter} ${s.justifyContentCenter} ${s.w100}`} id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
//               </li>
//               <li classNameNameName={`${s.navItem} ${s.dFlex}`} role="presentation">
//                 <a classNameNameName={`${s.navLink} ${s.dFlex} ${s.alignItemsCenter} ${s.justifyContentCenter} ${s.w100}`} id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Reviews</a>
//               </li>
//             </ul>
//             <div classNameNameName="tab-content" id="ex1-content">
        
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>

 //--------------------------
    //oldu boostrap
  // <div>
  //   <section classNameNameName="py-5">
  //     <div classNameNameName="container">
  //       <div classNameNameName="row gx-5">
  //         <aside classNameNameName="col-lg-6">
  //           <div classNameNameName="border rounded-4 mb-3 d-flex justify-content-center">
  //             <a data-fslightbox="mygalley" classNameNameName="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
  //               <img style={{maxWidth: '100%', maxHeight: '100vh', margin: 'auto'}} classNameNameName="rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
  //             </a>
  //           </div>
  //           <div classNameNameName="d-flex justify-content-center mb-3">
  //             <a data-fslightbox="mygalley" classNameNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" classNameNameName="item-thumb">
  //               <img width="60" height="60" classNameNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
  //             </a>
  //             <a data-fslightbox="mygalley" classNameNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" classNameNameName="item-thumb">
  //               <img width="60" height="60" classNameNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
  //             </a>
  //             <a data-fslightbox="mygalley" classNameNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" classNameNameName="item-thumb">
  //               <img width="60" height="60" classNameNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
  //             </a>
  //             <a data-fslightbox="mygalley" classNameNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" classNameNameName="item-thumb">
  //               <img width="60" height="60" classNameNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
  //             </a>
  //             <a data-fslightbox="mygalley" classNameNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" classNameNameName="item-thumb">
  //               <img width="60" height="60" classNameNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
  //             </a>
  //           </div>
  //         </aside>
  //         <main classNameNameName="col-lg-6">
  //           <div classNameNameName="ps-lg-3">
  //             <h4 classNameNameName="title text-dark">Quality Men's Hoodie for Winter, Men's Fashion <br /> Casual Hoodie</h4>
  //             <div classNameNameName="d-flex flex-row my-3">
  //               <div classNameNameName="text-warning mb-1 me-2">
  //                 <i classNameNameName="fa fa-star"></i>
  //                 <i classNameNameName="fa fa-star"></i>
  //                 <i classNameNameName="fa fa-star"></i>
  //                 <i classNameNameName="fa fa-star"></i>
  //                 <i classNameNameName="fas fa-star-half-alt"></i>
  //                 <span classNameNameName="ms-1">4.5</span>
  //               </div>
  //               <span classNameNameName="text-muted"><i classNameNameName="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
  //               <span classNameNameName="text-success ms-2">In stock</span>
  //             </div>
  //             <div classNameNameName="mb-3">
  //               <span classNameNameName="h5">$75.00</span>
  //               <span classNameNameName="text-muted">/per box</span>
  //             </div>
  //             <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>
  //             <div classNameNameName="row">
  //               <dt classNameNameName="col-3">Type:</dt>
  //               <dd classNameNameName="col-9">Regular</dd>
  //               <dt classNameNameName="col-3">Color</dt>
  //               <dd classNameNameName="col-9">Brown</dd>
  //               <dt classNameNameName="col-3">Material</dt>
  //               <dd classNameNameName="col-9">Cotton, Jeans</dd>
  //               <dt classNameNameName="col-3">Brand</dt>
  //               <dd classNameNameName="col-9">Reebook</dd>
  //             </div>
  //             <hr />
  //             <div classNameNameName="row mb-4">
  //               <div classNameNameName="col-md-4 col-6">
  //                 <label classNameNameName="mb-2">Size</label>
  //                 <select classNameNameName="form-select border border-secondary" style={{height: '35px'}}>
  //                   <option>Small</option>
  //                   <option>Medium</option>
  //                   <option>Large</option>
  //                 </select>
  //               </div>
  //               <div classNameNameName="col-md-4 col-6 mb-3">
  //                 <label classNameNameName="mb-2 d-block">Quantity</label>
  //                 <div classNameNameName="input-group mb-3" style={{width: '170px'}}>
  //                   <button classNameNameName="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
  //                     <i classNameNameName="fas fa-minus"></i>
  //                   </button>
  //                   <input type="text" classNameNameName="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
  //                   <button classNameNameName="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
  //                     <i classNameNameName="fas fa-plus"></i>
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //             <a href="#" classNameNameName="btn btn-warning shadow-0"> Buy now </a>
  //             <a href="#" classNameNameName="btn btn-primary shadow-0"><i classNameNameName="me-1 fa fa-shopping-basket"></i> Add to cart </a>
  //             <a href="#" classNameNameName="btn btn-light border border-secondary py-2 icon-hover px-3"><i classNameNameName="me-1 fa fa-heart fa-lg"></i> Save </a>
  //           </div>
  //         </main>
  //       </div>
  //     </div>
  //   </section>
  //   <section classNameNameName="bg-light border-top py-4">
  //     <div classNameNameName="container">
  //       <div classNameNameName="row gx-4">
  //         <div classNameNameName="col-lg-8 mb-4">
  //           <div classNameNameName="border rounded-2 px-3 py-2 bg-white">
  //             <ul classNameNameName="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  //               <li classNameNameName="nav-item d-flex" role="presentation">
  //                 <a classNameNameName="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
  //               </li>
  //               <li classNameNameName="nav-item d-flex" role="presentation">
  //                 <a classNameNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
  //               </li>
  //               <li classNameNameName="nav-item d-flex" role="presentation">
  //                 <a classNameNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
  //               </li>
  //               <li classNameNameName="nav-item d-flex" role="presentation">
  //                 <a classNameNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Reviews</a>
  //               </li>
  //             </ul>
  //             <div classNameNameName="tab-content" id="ex1-content">
  //               <div classNameNameName="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
  //                 <p classNameNameName="text-muted">With supporting text below as a natural lead-in to additional content.</p>
  //                 <ul classNameNameName="list-unstyled">
  //                   <li classNameNameName="mb-2">Dimension: 24 x 16 x 13 inches</li>
  //                   <li classNameNameName="mb-2">Weight: 32.6 pounds</li>
  //                   <li classNameNameName="mb-2">Manufacturer: Reebook</li>
  //                   <li classNameNameName="mb-2">Item model number: F2350</li>
  //                   <li classNameNameName="mb-2">Batteries: 2 Lithium Ion batteries required.</li>
  //                   <li classNameNameName="mb-2">Is Discontinued By Manufacturer: No</li>
  //                   <li classNameNameName="mb-2">Date First Available: February 14, 2022</li>
  //                   <li classNameNameName="mb-2">Color: Brown</li>
  //                 </ul>
  //               </div>
  //               <div classNameNameName="tab-pane fade" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
  //                 <p classNameNameName="text-muted">Warranty info content.</p>
  //               </div>
  //               <div classNameNameName="tab-pane fade" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
  //                 <p classNameNameName="text-muted">Shipping info content.</p>
  //               </div>
  //               <div classNameNameName="tab-pane fade" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
  //                 <p classNameNameName="text-muted">Reviews content.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div classNameNameName="col-lg-4 mb-4">
  //           <div classNameNameName="px-0 border rounded-2 bg-white shadow-0">
  //             <div classNameNameName="d-flex align-items-center p-2 border-bottom">
  //               <a href="#" classNameNameName="me-3">
  //                 <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/avatars/avatar2.jpg" classNameNameName="img-sm img-avatar" />
  //               </a>
  //               <div classNameNameName="info">
  //                 <Link href="#" classNameNameName="nav-link">
  //                   <strong>Richard Ford</strong>
  //                 </Link>
  //                 <span classNameNameName="text-muted">United States, 2:32 PM</span>
  //               </div>
  //             </div>
  //             <div classNameNameName="p-3">
  //               <h5 classNameNameName="title">Interesting offer right here</h5>
  //               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos sapiente consectetur nulla quo, modi adipisci eum impedit aspernatur reprehenderit.</p>
  //               <a href="#" classNameNameName="btn btn-primary w-100 shadow-0">Send message</a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // </div>
 //----------------------------------------------
/* <div>
    <section classNameName="py-5">
  <div classNameName="container">
    <div classNameName="row gx-5">
       <aside classNameName="col-lg-6">
        <div classNameName="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" classNameName="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
            <img style="max-width: 100%; max-height: 100vh; margin: auto;" classNameName="rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
          </a>
        </div>
        <div classNameName="d-flex justify-content-center mb-3">
          <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" classNameName="item-thumb">
            <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
          </a>
          <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" classNameName="item-thumb">
            <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
          </a>
          <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" classNameName="item-thumb">
            <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
          </a>
          <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" classNameName="item-thumb">
            <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
          </a>
          <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" classNameName="item-thumb">
            <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
          </a>
        </div>

      </aside> 
      <main classNameName="col-lg-6">
        <div classNameName="ps-lg-3">
          <h4 classNameName="title text-dark">
            Quality Men's Hoodie for Winter, Men's Fashion <br />
            Casual Hoodie
          </h4>
          <div classNameName="d-flex flex-row my-3">
            <div classNameName="text-warning mb-1 me-2">
              <i classNameName="fa fa-star"></i>
              <i classNameName="fa fa-star"></i>
              <i classNameName="fa fa-star"></i>
              <i classNameName="fa fa-star"></i>
              <i classNameName="fas fa-star-half-alt"></i>
              <span classNameName="ms-1">
                4.5
              </span>
            </div>
            <span classNameName="text-muted"><i classNameName="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span classNameName="text-success ms-2">In stock</span>
          </div>

          <div classNameName="mb-3">
            <span classNameName="h5">$75.00</span>
            <span classNameName="text-muted">/per box</span>
          </div>

          <p>
            Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
            men.
          </p>

          <div classNameName="row">
            <dt classNameName="col-3">Type:</dt>
            <dd classNameName="col-9">Regular</dd>

            <dt classNameName="col-3">Color</dt>
            <dd classNameName="col-9">Brown</dd>

            <dt classNameName="col-3">Material</dt>
            <dd classNameName="col-9">Cotton, Jeans</dd>

            <dt classNameName="col-3">Brand</dt>
            <dd classNameName="col-9">Reebook</dd>
          </div>

          <hr />

          <div classNameName="row mb-4">
            <div classNameName="col-md-4 col-6">
              <label classNameName="mb-2">Size</label>
              <select classNameName="form-select border border-secondary" style={{height: "35px"}}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            <div classNameName="col-md-4 col-6 mb-3">
              <label classNameName="mb-2 d-block">Quantity</label>
              <div classNameName="input-group mb-3" style="width: 170px;">
                <button classNameName="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i classNameName="fas fa-minus"></i>
                </button>
                <input type="text" classNameName="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button classNameName="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i classNameName="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <a href="#" classNameName="btn btn-warning shadow-0"> Buy now </a>
          <a href="#" classNameName="btn btn-primary shadow-0"> <i classNameName="me-1 fa fa-shopping-basket"></i> Add to cart </a>
          <a href="#" classNameName="btn btn-light border border-secondary py-2 icon-hover px-3"> <i classNameName="me-1 fa fa-heart fa-lg"></i> Save </a>
        </div>
      </main>
    </div>
  </div>
</section>


<section classNameName="bg-light border-top py-4">
  <div classNameName="container">
    <div classNameName="row gx-4">
      <div classNameName="col-lg-8 mb-4">
        <div classNameName="border rounded-2 px-3 py-2 bg-white">

          <ul classNameName="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li classNameName="nav-item d-flex" role="presentation">
              <a classNameName="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
            </li>
            <li classNameName="nav-item d-flex" role="presentation">
              <a classNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
            </li>
            <li classNameName="nav-item d-flex" role="presentation">
              <a classNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
            </li>
            <li classNameName="nav-item d-flex" role="presentation">
              <a classNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
            </li>
          </ul>

          <div classNameName="tab-content" id="ex1-content">
            <div classNameName="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
              <p>
                With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
              <div classNameName="row mb-2">
                <div classNameName="col-12 col-md-6">
                  <ul classNameName="list-unstyled mb-0">
                    <li><i classNameName="fas fa-check text-success me-2"></i>Some great feature name here</li>
                    <li><i classNameName="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                    <li><i classNameName="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                    <li><i classNameName="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                  </ul>
                </div>
                <div classNameName="col-12 col-md-6 mb-0">
                  <ul classNameName="list-unstyled">
                    <li><i classNameName="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                    <li><i classNameName="fas fa-check text-success me-2"></i>Some great feature name here</li>
                    <li><i classNameName="fas fa-check text-success me-2"></i>Modern style and design</li>
                  </ul>
                </div>
              </div>
              <table classNameName="table border mt-3 mb-2">
                <tr>
                  <th classNameName="py-2">Display:</th>
                  <td classNameName="py-2">13.3-inch LED-backlit display with IPS</td>
                </tr>
                <tr>
                  <th classNameName="py-2">Processor capacity:</th>
                  <td classNameName="py-2">2.3GHz dual-core Intel Core i5</td>
                </tr>
                <tr>
                  <th classNameName="py-2">Camera quality:</th>
                  <td classNameName="py-2">720p FaceTime HD camera</td>
                </tr>
                <tr>
                  <th classNameName="py-2">Memory</th>
                  <td classNameName="py-2">8 GB RAM or 16 GB RAM</td>
                </tr>
                <tr>
                  <th classNameName="py-2">Graphics</th>
                  <td classNameName="py-2">Intel Iris Plus Graphics 640</td>
                </tr>
              </table>
            </div>
            <div classNameName="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
              Tab content or sample information now <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </div>
            <div classNameName="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
              Another tab content or sample information now <br />
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </div>
            <div classNameName="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
              Some other tab content or sample information now <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>

        </div>
      </div>
      <div classNameName="col-lg-4">
        <div classNameName="px-0 border rounded-2 shadow-0">
          <div classNameName="card">
            <div classNameName="card-body">
              <h5 classNameName="card-title">Similar items</h5>
              <div classNameName="d-flex mb-3">
             
                  <Image src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp" style="min-width: 96px; height: 96px;" classNameNameName="img-md img-thumbnail" />

                  {/* <Image src={"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-lBNjJR.png"}
             width={800} height={233}
             alt={property.title}
             classNameNameName={styles.imgCover}/>
                }
                <div classNameName="info">
                  <a href="#" classNameName="nav-link mb-1">
                    Rucksack Backpack Large <br />
                    Line Mounts
                  </a>
                  <strong classNameName="text-dark"> $38.90</strong>
                </div>
              </div>

               <div classNameName="d-flex mb-3">
                <a href="#" classNameName="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/9.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                </a>
                <div classNameName="info">
                  <a href="#" classNameName="nav-link mb-1">
                    Summer New Men's Denim <br />
                    Jeans Shorts
                  </a>
                  <strong classNameName="text-dark"> $29.50</strong>
                </div>
              </div>

              <div classNameName="d-flex mb-3">
                <a href="#" classNameName="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/10.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                </a>
                <div classNameName="info">
                  <a href="#" classNameName="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                  <strong classNameName="text-dark"> $120.00</strong>
                </div>
              </div>

              <div classNameName="d-flex">
                <a href="#" classNameName="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/11.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                </a>
                <div classNameName="info">
                  <a href="#" classNameName="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                  <strong classNameName="text-dark"> $339.90</strong>
                </div>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div> */

    //----------------------------------------------
/* <div>
  <section classNameName="py-5">
    <div classNameName="container">
      <div classNameName="row gx-5">
        <aside classNameName="col-lg-6">
          <div classNameName="border rounded-4 mb-3 d-flex justify-content-center">
            <a data-fslightbox="mygalley" classNameName="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
              <img style="max-width: 100%; max-height: 100vh; margin: auto;" classNameName="rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
            </a>
          </div>
          <div classNameName="d-flex justify-content-center mb-3">
            <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" classNameNameName="item-thumb">
              <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
            </a>
            <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" classNameNameName="item-thumb">
              <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
            </a>
            <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" classNameNameName="item-thumb">
              <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
            </a>
            <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" classNameNameName="item-thumb">
              <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
            </a>
            <a data-fslightbox="mygalley" classNameName="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" classNameNameName="item-thumb">
              <img width="60" height="60" classNameName="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
            </a>
          </div>
      
        </aside>
        <main classNameName="col-lg-6">
          <div classNameName="ps-lg-3">
            <h4 classNameName="title text-dark">
              Quality Men's Hoodie for Winter, Men's Fashion <br />
              Casual Hoodie
            </h4>
            <div classNameName="d-flex flex-row my-3">
              <div classNameName="text-warning mb-1 me-2">
                <i classNameName="fa fa-star"></i>
                <i classNameName="fa fa-star"></i>
                <i classNameName="fa fa-star"></i>
                <i classNameName="fa fa-star"></i>
                <i classNameName="fas fa-star-half-alt"></i>
                <span classNameName="ms-1">
                  4.5
                </span>
              </div>
              <span classNameName="text-muted"><i classNameName="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
              <span classNameName="text-success ms-2">In stock</span>
            </div>

            <div classNameName="mb-3">
              <span classNameName="h5">$75.00</span>
              <span classNameName="text-muted">/per box</span>
            </div>

            <p>
              Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
              men.
            </p>

            <div classNameName="row">
              <dt classNameName="col-3">Type:</dt>
              <dd classNameName="col-9">Regular</dd>

              <dt classNameName="col-3">Color</dt>
              <dd classNameName="col-9">Brown</dd>

              <dt classNameName="col-3">Material</dt>
              <dd classNameName="col-9">Cotton, Jeans</dd>

              <dt classNameName="col-3">Brand</dt>
              <dd classNameName="col-9">Reebook</dd>
            </div>

            <hr />

            <div classNameName="row mb-4">
              <div classNameName="col-md-4 col-6">
                <label classNameName="mb-2">Size</label>
                <select classNameName="form-select border border-secondary" style="height: 35px;">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
    
              <div classNameName="col-md-4 col-6 mb-3">
                <label classNameName="mb-2 d-block">Quantity</label>
                <div classNameName="input-group mb-3" style="width: 170px;">
                  <button classNameName="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                    <i classNameName="fas fa-minus"></i>
                  </button>
                  <input type="text" classNameName="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <button classNameName="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                    <i classNameName="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <a href="#" classNameName="btn btn-warning shadow-0"> Buy now </a>
            <a href="#" classNameName="btn btn-primary shadow-0"> <i classNameName="me-1 fa fa-shopping-basket"></i> Add to cart </a>
            <a href="#" classNameName="btn btn-light border border-secondary py-2 icon-hover px-3"> <i classNameName="me-1 fa fa-heart fa-lg"></i> Save </a>
          </div>
        </main>
      </div>
    </div>
  </section>

  <section classNameName="bg-light border-top py-4">
    <div classNameName="container">
      <div classNameName="row gx-4">
        <div classNameName="col-lg-8 mb-4">
          <div classNameName="border rounded-2 px-3 py-2 bg-white">

            <ul classNameName="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li classNameName="nav-item d-flex" role="presentation">
                <a classNameName="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
              </li>
              <li classNameName="nav-item d-flex" role="presentation">
                <a classNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
              </li>
              <li classNameName="nav-item d-flex" role="presentation">
                <a classNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
              </li>
              <li classNameName="nav-item d-flex" role="presentation">
                <a classNameName="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
              </li>
            </ul>

            <div classNameName="tab-content" id="ex1-content">
              <div classNameName="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                <p>
                  With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
                <div classNameName="row mb-2">
                  <div classNameName="col-12 col-md-6">
                    <ul classNameName="list-unstyled mb-0">
                      <li><i classNameName="fas fa-check text-success me-2"></i>Some great feature name here</li>
                      <li><i classNameName="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                      <li><i classNameName="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                      <li><i classNameName="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                    </ul>
                  </div>
                  <div classNameName="col-12 col-md-6 mb-0">
                    <ul classNameName="list-unstyled">
                      <li><i classNameName="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                      <li><i classNameName="fas fa-check text-success me-2"></i>Some great feature name here</li>
                      <li><i classNameName="fas fa-check text-success me-2"></i>Modern style and design</li>
                    </ul>
                  </div>
                </div>
                <table classNameName="table border mt-3 mb-2">
                  <tr>
                    <th classNameName="py-2">Display:</th>
                    <td classNameName="py-2">13.3-inch LED-backlit display with IPS</td>
                  </tr>
                  <tr>
                    <th classNameName="py-2">Processor capacity:</th>
                    <td classNameName="py-2">2.3GHz dual-core Intel Core i5</td>
                  </tr>
                  <tr>
                    <th classNameName="py-2">Camera quality:</th>
                    <td classNameName="py-2">720p FaceTime HD camera</td>
                  </tr>
                  <tr>
                    <th classNameName="py-2">Memory</th>
                    <td classNameName="py-2">8 GB RAM or 16 GB RAM</td>
                  </tr>
                  <tr>
                    <th classNameName="py-2">Graphics</th>
                    <td classNameName="py-2">Intel Iris Plus Graphics 640</td>
                  </tr>
                </table>
              </div>
              <div classNameName="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                Tab content or sample information now <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              </div>
              <div classNameName="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                Another tab content or sample information now <br />
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </div>
              <div classNameName="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                Some other tab content or sample information now <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </div>
            </div>

          </div>
        </div>
        <div classNameName="col-lg-4">
          <div classNameName="px-0 border rounded-2 shadow-0">
            <div classNameName="card">
              <div classNameName="card-body">
                <h5 classNameName="card-title">Similar items</h5>
                <div classNameName="d-flex mb-3">
                  <a href="#" classNameName="me-3">
                    <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                  </a>
                  <div classNameName="info">
                    <a href="#" classNameName="nav-link mb-1">
                      Rucksack Backpack Large <br />
                      Line Mounts
                    </a>
                    <strong classNameName="text-dark"> $38.90</strong>
                  </div>
                </div>

                <div classNameName="d-flex mb-3">
                  <a href="#" classNameName="me-3">
                    <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/9.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                  </a>
                  <div classNameName="info">
                    <a href="#" classNameName="nav-link mb-1">
                      Summer New Men's Denim <br />
                      Jeans Shorts
                    </a>
                    <strong classNameName="text-dark"> $29.50</strong>
                  </div>
                </div>

                <div classNameName="d-flex mb-3">
                  <a href="#" classNameName="me-3">
                    <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/10.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                  </a>
                  <div classNameName="info">
                    <a href="#" classNameName="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                    <strong classNameName="text-dark"> $120.00</strong>
                  </div>
                </div>

                <div classNameName="d-flex">
                  <a href="#" classNameName="me-3">
                    <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/11.webp" style="min-width: 96px; height: 96px;" classNameName="img-md img-thumbnail" />
                  </a>
                  <div classNameName="info">
                    <a href="#" classNameName="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                    <strong classNameName="text-dark"> $339.90</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>    */

    //----------------------------------------------
  // <div classNameNameName={styles.detailContainer} >
  //   <div classNameNameName={styles.propertyCard}>

  //     <figure classNameNameName={`${styles.imgHolder}`} style={{ '--width': 800, '--height': 233 }}>
  //       {/* <Image src={property.image}
  //       width={800} height={533}
  //         alt={property.title}
  //         classNameNameName={styles.imgCover}
  //       /> */}

  //     <Image src={"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-lBNjJR.png"}
  //            width={800} height={233}
  //            alt={property.title}
  //            classNameNameName={styles.imgCover}/>

  //     </figure>

  //     <div classNameNameName={styles.cardContent}>
  //       <h3 classNameNameName={styles.h3}>
  //         <Link href={`/announcements/${property.id}`}>
  //           <h3 classNameNameName={styles.cardTitle}>{property.title}</h3>
  //         </Link>
  //       </h3>

  //       <ul classNameNameName={styles.cardList}>
  //         <li classNameNameName={styles.cardItem}>
  //           <div classNameNameName={styles.itemIcon}>
  //             <ion-icon name="cube-outline"></ion-icon>
  //           </div>
  //           <span classNameNameName={styles.itemText}>{property.size}</span>
  //         </li>
  //         <li classNameNameName={styles.cardItem}>
  //           <div classNameNameName={styles.itemIcon}>
  //             <ion-icon name="bed-outline"></ion-icon>
  //           </div>
  //           <span classNameNameName={styles.itemText}>{property.beds} Beds</span>
  //         </li>
  //         <li classNameNameName={styles.cardItem}>
  //           <div classNameNameName={styles.itemIcon}>
  //             <ion-icon name="man-outline"></ion-icon>
  //           </div>
  //           <span classNameNameName={styles.itemText}>{property.baths} Baths</span>
  //         </li>
  //       </ul>

  //       <div classNameNameName={styles.cardMeta}>
  //         <div>
  //           <span classNameNameName={styles.metaTitle}>Kiralık Satılık</span>
  //           <span classNameNameName={styles.metaText}>${property.price}</span>
  //         </div>

  //         <div>
  //           <span classNameNameName={styles.metaTitle}>Rating</span>
  //           <span classNameNameName={styles.metaText}>
  //             <div classNameNameName={styles.ratingWrapper}>
  //               {[...Array(5)].map((_, index) => (
  //                 <ion-icon key={index} name="star"></ion-icon>
  //               ))}
  //             </div>
  //             <span>{property.rating} ({property.reviews})</span>
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>



  );
};

export default AnnouncementDetail;
