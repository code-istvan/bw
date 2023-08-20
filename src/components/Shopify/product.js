// import React, { useState } from "react"
// import { navigate } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Layout from "../Layouts/Layout"
// import Seo from "../seo"
// import ButtonIcon from "../Buttons/ButtonIcon"
// import Icons from "../Icons/Icons"
// import useStore from "./StoreContext"
// import Button from "../Buttons/Button"
// import CartAmountToggle from "./CartAmountToggle"
// import ModalAddToCart from "./ModalAddToCart"
// import "../../sass/components/_product.scss"
// import { element } from "prop-types"

// const ProductTemplate = ({ pageContext }) => {
//   const { product } = pageContext
//   const { addVariantToCart, cart, removeCart, addNewVariantToCart } = useStore()
//   const [amount, setAmount] = useState(1)
//   const [modalOpen, setModalOpen] = useState(false)
//   const setDecrease = () => (amount > 1 ? setAmount(amount - 1) : setAmount(1))
//   const setIncrease = () => setAmount(amount + 1)
//   const openModal = () => setModalOpen(true)
//   const closeModal = () => setModalOpen(false)

//   const handleBuyNow = async () => {
//     const cart = await removeCart()

//     const checkout = await addNewVariantToCart(cart, product, amount)
//     window.open(checkout.webUrl)
//   }
//   const result = {}

//   const variantData = product.variants.forEach(object => {
//     const monthOption = object.product.options.find(
//       option => option.name === "Hónap"
//     )
//     const dayOption = object.product.options.find(
//       option => option.name === "Nap"
//     )

//     if (monthOption && dayOption) {
//       monthOption.values.forEach((month, monthIndex) => {
//         if (!result[month]) {
//           result[month] = new Array(31)
//         }

//         dayOption.values.forEach((day, dayIndex) => {
//           const dayOfMonth = dayIndex + 1
//           const shopifyId = product.variants[0].shopifyId
//           result[month][dayOfMonth - 1] = { shopifyId, month, dayOfMonth }
//         })
//       })
//     }
//   })
//   console.log("result", result)
//   console.log("variantData", variantData)
//   console.log("product", product)
//   return (
//     <Layout>
//       <Seo title={product.title} />
//       <div className="shopify--product--wrapper">
//         <div className="row shopify--product--header">
//           <div className="col-12-xs col-7-md">
//             {/* <GatsbyImage
//               image={
//                 product.featuredMedia.preview.image.localFile
//                   .childrenImageSharp[0].gatsbyImageData
//               }
//               alt={product.title}
//             /> */}
//             <div className="shopify--product--description--desktop">
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: product.descriptionHtml,
//                 }}
//               />
//             </div>
//           </div>
//           <div className="col-12-xs col-5-md shopify--product--right-side">
//             <h1 className="shopify--product--title">{product.title}</h1>
//             <div className="row blogtags tag-button mt-20px">
//               {product.tags?.map((tag, index) => {
//                 return <p key={index}>{tag}</p>
//               })}
//             </div>
//             <div className="shopify--product--price mt-20px mb-40px">
//               <p>Ára: </p>
//               <p className="clr-brand-orange">
//                 {product.priceRangeV2.maxVariantPrice.amount} Ft
//               </p>
//             </div>
//             {/* Termékkombinációk blokk ELEJE */}
//             {Object.keys(result).length > 0 && (
//               <div className="shopify--product--variants">
//                 <div>
//                   <h2>Hónapok</h2>
//                   {Object.keys(result).map(month => (
//                     <div key={month}>
//                       <h3>{month}</h3>
//                     </div>
//                   ))}
//                 </div>
//                 <div>
//                   <h2>Napok</h2>
//                   {Object.keys(result).map(day => (
//                     <div key={day}>
//                       <h3>{day}</h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {/* Termékkombinációk blokk VÉGE */}
//             <CartAmountToggle
//               amount={amount}
//               setDecrease={setDecrease}
//               setIncrease={setIncrease}
//             />
//             <div className="row product--buttons mb-20px mt-20px">
//               <Button
//                 type="button"
//                 buttonStyle="btn--primary--outline-full"
//                 onClick={() => {
//                   setModalOpen(true)
//                   addVariantToCart(product, amount)
//                 }}
//               >
//                 Hozzáadás a kosárhoz
//               </Button>
//               <Button
//                 type="button"
//                 buttonStyle="btn--primary--solid--full"
//                 onClick={handleBuyNow}
//               >
//                 Fizetés
//               </Button>
//             </div>
//             {modalOpen && (
//               <ModalAddToCart isOpen={modalOpen} onClose={closeModal}>
//                 <p> &#10003; Betettük a terméket a kosárba</p>
//               </ModalAddToCart>
//             )}
//             {/* <form>
//               <p>
//                 <label htmlFor="qty">Quantity:</label>
//               </p>
//               <input placeholder="1" id="qty" type="number" {...bind} />
//             </form>

//             <button onClick={() => addVariantToCart(product, bind.value)}>
//               {" "}
//               Hozzáadás a kosárhoz
//             </button> */}
//             <ButtonIcon
//               buttonType="icon-text"
//               className="mt-40px mb-40px"
//               text="Vissza az összes termékhez"
//               icon={<Icons.ArrowLeft color="orange" />}
//               onClick={() => navigate("/shop")}
//             />
//           </div>
//         </div>
//         <div className="row shopify--product--description--mobil">
//           <div className="col-12-xs col-7-md">
//             <p
//               dangerouslySetInnerHTML={{
//                 __html: product.descriptionHtml,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default ProductTemplate
