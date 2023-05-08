import { useStaticQuery, graphql } from "gatsby"

export const useShopify = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query getShopifyProducts {
        allShopifyProduct {
          edges {
            node {
              descriptionHtml
              title
              productType
              tags
              featuredImage {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )

  return allShopifyProduct.edges
}
