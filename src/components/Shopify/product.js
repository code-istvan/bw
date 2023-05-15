import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  // console.log(product.featuredImage.gatsbyImageData)

  // const gatsbyImageData = getShopifyImage({
  //   image: product.featuredImage.images,
  //   width: product.featuredImage.width,
  //   height: product.featuredImage.height,
  //   layout: product.featuredImage.layout,
  // })

  // console.log(gatsbyImageData)
  return (
    <div>
      <h1>{product.title}</h1>
      {/* <p>{product.tag}</p> */}
      <GatsbyImage
        image={
          product.featuredMedia.preview.image.localFile.childrenImageSharp[0]
            .gatsbyImageData
        }
        alt=""
      />
    </div>
  )
}

export default ProductTemplate
