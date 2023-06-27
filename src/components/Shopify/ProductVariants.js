// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { useShopify } from "../../hooks/useShopifyQuery"

// const ProductVariants = () => {
//   const data = useShopify()

//     const variants = data
//       .map(item => item.node.variants)
//       .filter(variants => {
//         return variants.length >= 2
//       })

//     variants.forEach(variants => {
//       variants.forEach(variant => {
//         const options = variant.product.options
//         if (options && options.length > 0) {
//           const variantNames = options.map(option => option.name)
//           console.log("Variation names:", variantNames)
//         }
//       })
//     })

//     console.log("Ezaz", variants)

//   return (
//     <div>
//       <h3>ProductVariants</h3>
//     </div>
//   )
// }

// export default ProductVariants
