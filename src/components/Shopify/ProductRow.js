import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useStore from "./StoreContext"
import CartAmountToggle from "./CartAmountToggle"
import Icons from "../Icons/Icons"
import "../../sass/components/_productrow.scss"

const ProductRow = ({ item }) => {
  const { product, quantity } = item
  const { removeLineItem, addVariantToCart } = useStore()
  const [amount, setAmount] = useState(quantity)
  const totalPrice = product.priceRangeV2.maxVariantPrice.amount * amount

  const setDecrease = () => {
    amount > 1
      ? setAmount(amount - 1)
      : removeLineItem(product.variants[0]?.shopifyId)
    addVariantToCart(product, amount - 1)
  }

  const setIncrease = () => {
    setAmount(amount + 1)
    addVariantToCart(product, amount + 1)
  }

  const handleRemove = shopifyId => {
    removeLineItem(shopifyId)
  }

  return (
    <div className="product-row mt-40px row">
      <div className="product-row--left col-8-xs col-7-md">
        <div className="product-row--image">
          {/* <GatsbyImage
            image={
              product.featuredMedia.preview.image.localFile
                .childrenImageSharp[0].gatsbyImageData
            }
            alt={product.title}
          /> */}
        </div>
        <div className="product-row--title">
          <p>{product.title}</p>
          <p className="small">
            {product.priceRangeV2.maxVariantPrice.amount} Ft.
          </p>
          <div className="product-row--title__quantity-mobil mt-20px">
            <CartAmountToggle
              amount={amount}
              key={amount}
              setDecrease={setDecrease}
              setIncrease={setIncrease}
            />
            <button
              className="product-row--right__remove"
              onClick={() => handleRemove(product.variants[0]?.shopifyId)}
            >
              <Icons.Close color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className="product-row--right col-4-xs col-5-md">
        <div className="product-row--right__quantity">
          <CartAmountToggle
            key={amount}
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
          <button
            className="product-row--right__remove"
            onClick={() => handleRemove(product.variants[0]?.shopifyId)}
          >
            <Icons.Close color="white" />
          </button>
        </div>
        <div className="product-row--right__price">
          <p>{totalPrice} Ft.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductRow
