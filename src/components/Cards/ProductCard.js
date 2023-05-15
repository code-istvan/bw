import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../../sass/components/_productcard.scss"

const ProductCard = ({
  productName,
  productPrice,
  productImg,
  productHandle,
}) => {
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
        <Link to={productHandle}>
          <h3>{productName}</h3>
        </Link>

        <p className="clr-brand-orange">{productPrice} Ft</p>
      </div>
    </div>
  )
}

export default ProductCard
