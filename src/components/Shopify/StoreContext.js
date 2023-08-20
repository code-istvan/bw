// import React, { createContext, useState, useEffect, useContext } from "react"
// import fetch from "isomorphic-fetch"
// import Client from "shopify-buy"

// const client = Client.buildClient(
//   {
//     domain: process.env.GATSBY_MYSHOPIFY_URL,
//     storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
//   },
//   fetch
// )

// const defaultValues = {
//   cart: [],
//   loading: false,
//   addVariantToCart: () => {},
//   removeLineItem: () => {},
//   removeCart: () => {},
//   addNewVariantToCart: () => {},
//   client,
//   checkout: {
//     id: "",
//     lineItems: [],
//     webUrl: "",
//   },
// }

// const StoreContext = createContext(defaultValues)
// const isBrowser = typeof window !== `undefined`
// const localStorageKey = `shopify_checkout_id`

// export const StoreProvider = ({ children }) => {
//   const [cart, setCart] = useState(defaultValues.cart)
//   const [checkout, setCheckout] = useState(defaultValues.checkout)
//   const [loading, setLoading] = useState(false)
//   const setCheckoutItem = checkout => {
//     if (isBrowser) {
//       localStorage.setItem(localStorageKey, checkout.id)
//     }

//     setCheckout(checkout)
//   }

//   useEffect(() => {
//     const initializeCheckout = async () => {
//       const existingCheckoutID = isBrowser
//         ? localStorage.getItem(localStorageKey)
//         : null
//       const storedCart = isBrowser ? localStorage.getItem("cart") : null
//       if (storedCart) {
//         setCart(JSON.parse(storedCart))
//       }
//       if (existingCheckoutID) {
//         try {
//           const existingCheckout = await client.checkout.fetch(
//             existingCheckoutID
//           )
//           if (!existingCheckout.completedAt) {
//             setCheckoutItem(existingCheckout)
//             return
//           }
//         } catch (e) {
//           localStorage.setItem(localStorageKey, null)
//         }
//       }

//       const newCheckout = await client.checkout.create()
//       setCheckoutItem(newCheckout)
//     }

//     initializeCheckout()
//   }, [])

//   useEffect(() => {
//     if (isBrowser) {
//       localStorage.setItem("cart", JSON.stringify(cart))
//     }
//   }, [cart])

//   const addVariantToCart = async (product, quantity) => {
//     setLoading(true)

//     if (checkout.id === "") {
//       console.error("No checkout ID assigned.")
//       return
//     }

//     const checkoutID = checkout.id
//     const variantId = product.variants[0]?.shopifyId
//     const parsedQuantity = parseInt(quantity, 10)

//     const lineItemsToUpdate = [
//       {
//         variantId,
//         quantity: parsedQuantity,
//       },
//     ]

//     try {
//       const item = cart.find(
//         item => item.product.variants[0]?.shopifyId === variantId
//       )

//       const quantityToAdd = item
//         ? parsedQuantity - item.quantity
//         : parsedQuantity
//       const res = await client.checkout.addLineItems(checkoutID, {
//         variantId,
//         quantity: quantityToAdd,
//       })
//       setCheckout(res)

//       let updatedCart = []
//       if (cart.length > 0) {
//         const itemIsInCart = cart.find(
//           item => item.product.variants[0]?.shopifyId === variantId
//         )
//         if (itemIsInCart) {
//           const newProduct = {
//             product: { ...itemIsInCart.product },
//             quantity: parsedQuantity,
//           }
//           const otherItems = cart.filter(
//             item => item.product.variants[0]?.shopifyId !== variantId
//           )
//           updatedCart = [...otherItems, newProduct]
//         } else {
//           updatedCart = cart.concat([{ product, quantity: parsedQuantity }])
//         }
//       } else {
//         updatedCart = [{ product, quantity: parsedQuantity }]
//       }
//       setCart(updatedCart)

//       setLoading(false)
//       // navigate("/cart")
//     } catch (error) {
//       setLoading(false)
//       console.error(`Error in addVariantToCart: ${error}`)
//     }
//   }

//   const addNewVariantToCart = async (cart, product, quantity) => {
//     setLoading(true)

//     if (checkout.id === "") {
//       console.error("No checkout ID assigned.")
//       return
//     }

//     const checkoutID = checkout.id
//     const variantId = product.variants[0]?.shopifyId
//     const parsedQuantity = parseInt(quantity, 10)

//     const lineItemsToUpdate = [
//       {
//         variantId,
//         quantity: parsedQuantity,
//       },
//     ]

//     try {
//       const item = cart.find(
//           item => item.product.variants[0]?.shopifyId === variantId
//       )

//       const quantityToAdd = item
//           ? parsedQuantity - item.quantity
//           : parsedQuantity
//       const res = await client.checkout.addLineItems(checkoutID, {
//         variantId,
//         quantity: quantityToAdd,
//       })
//       setCheckout(res)

//       let updatedCart = []
//       if (cart.length > 0) {
//         const itemIsInCart = cart.find(
//             item => item.product.variants[0]?.shopifyId === variantId
//         )
//         if (itemIsInCart) {
//           const newProduct = {
//             product: { ...itemIsInCart.product },
//             quantity: parsedQuantity,
//           }
//           const otherItems = cart.filter(
//               item => item.product.variants[0]?.shopifyId !== variantId
//           )
//           updatedCart = [...otherItems, newProduct]
//         } else {
//           updatedCart = cart.concat([{ product, quantity: parsedQuantity }])
//         }
//       } else {
//         updatedCart = [{ product, quantity: parsedQuantity }]
//       }
//       setCart(updatedCart)

//       setLoading(false)
//       return res
//     } catch (error) {
//       setLoading(false)
//       console.error(`Error in addVariantToCart: ${error}`)
//     }
//   }
//   const removeCart = async () => {
//     setLoading(true)

//     if (checkout.id === "") {
//       console.error("No checkout ID assigned.")
//       return
//     }

//     try {
//       const lineItemIDs = checkout.lineItems.map(item => item.id)
//       const res = await client.checkout.removeLineItems(
//         checkout.id,
//         lineItemIDs
//       )
//       setCheckout(res)
//       setCart([])
//       setLoading(false)

//       return [];
//     } catch (error) {
//       setLoading(false)
//       console.error(`Error in clearCart: ${error}`)
//     }
//   }

//   const removeLineItem = async (variantId, all = false) => {
//     setLoading(true) // TODO: you have exposed the loading (you can do "const {loading} = useStore()" from any component and get the loading state (to add spiners or whatever you want :))
//     try {
//       let lineItemID = ""
//       checkout.lineItems?.forEach(item => {
//         const stringCheckout = item.id.split("?")[0]
//         const checkoutId = String(
//           Math.floor(
//             stringCheckout.substring(stringCheckout.lastIndexOf("/") + 1) / 10
//           )
//         )
//         const variantId2 = variantId.substring(variantId.lastIndexOf("/") + 1)
//         if (variantId2 === checkoutId) {
//           lineItemID = item?.id
//         }
//       })

//       if (!lineItemID) {
//         console.log("Product not in cart")
//         return
//       }

//       const res = await client.checkout.removeLineItems(checkout.id, [
//         lineItemID,
//       ])
//       setCheckout(res)

//       const updatedCart = cart.filter(
//         item => item.product.variants[0]?.shopifyId !== variantId
//       )
//       setCart(updatedCart)
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//       console.error(`Error in removeLineItem: ${error}`)
//     }
//   }

//   return (
//     <StoreContext.Provider
//       value={{
//         ...defaultValues,
//         addVariantToCart,
//         removeLineItem,
//         cart,
//         checkout,
//         removeCart,
//         addNewVariantToCart,
//         loading,
//       }}
//     >
//       {children}
//     </StoreContext.Provider>
//   )
// }

// const useStore = () => {
//   const context = useContext(StoreContext)

//   if (context === undefined) {
//     throw new Error("useStore must be used within StoreContext")
//   }

//   return context
// }

// export default useStore
