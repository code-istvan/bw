// import { useStaticQuery, graphql } from "gatsby"

// export const useShopify = () => {
//   const { allShopifyProduct } = useStaticQuery(
//     graphql`
//       query getShopifyProducts {
//         allShopifyProduct {
//           edges {
//             node {
//               descriptionHtml
//               title
//               productType
//               tags
//               id
//               handle
//               featuredMedia {
//                 preview {
//                   image {
//                     localFile {
//                       childrenImageSharp {
//                         gatsbyImageData
//                       }
//                     }
//                   }
//                 }
//               }
//               priceRangeV2 {
//                 maxVariantPrice {
//                   amount
//                   currencyCode
//                 }
//               }
//               variants {
//                 product {
//                   options {
//                     name
//                     position
//                     shopifyId
//                     values
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   return allShopifyProduct.edges
// }
