import Image from "next/image";
import { notFound } from "next/navigation";
import './page.module.css'

// const fetchProduct = async (id) => {
//   // await new Promise(r => setTimeout(r, 200));
//   try {
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
//     const resData = await res.json();
//     return resData;
//   } catch (error) {
//     console.log('error is catched')
//     notFound();
//   }
// }

export default async function ProductComponent({
}) {
  // const product = await fetchProduct(params.productId);

  return (
    <div className="container">
    </div>
  )
}