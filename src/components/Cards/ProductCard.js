import React from "react"
import { CustomLink } from "../CustomLink"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../sass/components/_productcard.scss"

const ProductCard = ({ productName, productPrice, productImg }) => {
  return (
    <div className="product-card">
      <div className="product-card__header">
        <h3>{productName}</h3>
      </div>
      <div className="product-card__body">
        <GatsbyImage
          image={productImg}
          alt={productName}
          className="product-card__image"
        />
      </div>
      <div className="product-card__footer">{productPrice} Ft</div>
    </div>
  )
}

export default ProductCard
