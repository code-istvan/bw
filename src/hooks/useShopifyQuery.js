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
              handle
              featuredMedia {
                preview {
                  image {
                    localFile {
                      childrenImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
              priceRangeV2 {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `
  )

  return allShopifyProduct.edges
}
