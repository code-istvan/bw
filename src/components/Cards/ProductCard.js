import React from "react"
import { CustomLink } from "../CustomLink"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../sass/components/_productcard.scss"

const ProductCard = ({ productName, productPrice, productImg }) => {
  return (
    <div className="product-card">
      <div className="product-card__body">
        <GatsbyImage
          image={productImg}
          alt={productName}
          className="product-card__image"
        />
      </div>
      <div className="product-card__footer">
        <h3>{productName}</h3>
        <p className="clr-brand-orange">{productPrice} Ft</p>
      </div>
    </div>
  )
}

export default ProductCard
