import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <div>
      <GatsbyImage
        image={
          product.featuredMedia.preview.image.localFile.childrenImageSharp[0]
            .gatsbyImageData
        }
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <p>{product.priceRangeV2.maxVariantPrice.amount}</p>
      {product.tags?.map(tag => {
        return <p>{tag}</p>
      })}
      <p
        dangerouslySetInnerHTML={{
          __html: product.descriptionHtml,
        }}
      />
    </div>
  )
}

export default ProductTemplate
