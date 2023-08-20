// import React from "react"
// import { navigate } from "gatsby"
// import useStore from "./StoreContext"
// import Button from "../Buttons/Button"
// import Icons from "../Icons/Icons"
// import "../../sass/components/_modal.scss"

// const ModalAddToCart = ({ isOpen, onClose, children }) => {
//   const { cart, checkout } = useStore()
//   if (!isOpen) return null

//   const handleCartClick = () => {
//     onClose() // Modal bezárása
//     navigate("/cart") // "/cart" oldalra navigálás
//   }

//   const handleCheckOut = () => {
//     onClose() // Modal bezárása
//     const newWindow = window.open(checkout.webUrl, "_blank")
//     newWindow.focus()
//   }

//   const handleContinueShopping = () => {
//     onClose() // Modal bezárása
//     navigate("/shop") // "/shop" oldalra navigálás
//   }

//   return (
//     <div className="modal--overlay">
//       <div className="modal--content">
//         <div className="modal--content__icon mb-20px">
//           <Icons.BwSymbol color="darkGrey" />
//         </div>
//         <div className="modal--header">{children}</div>
//         <div className="modal--buttons">
//           <Button
//             type="button"
//             buttonStyle="btn--third--outline"
//             onClick={handleCartClick}
//           >
//             Kosár megtekintése
//           </Button>
//           <Button
//             type="button"
//             disabled={cart.length === 0}
//             text="Checkout"
//             buttonStyle="btn--third--solid"
//             onClick={handleCheckOut}
//           >
//             Megrendelés
//           </Button>
//           <div className="mt-20px modal--content__last-button">
//             <Button
//               type="button"
//               text="Checkout"
//               buttonStyle="btn--plain--naked"
//               onClick={handleContinueShopping}
//             >
//               Vásárlás folytatása
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ModalAddToCart
