import React from "react"
import useStore from "./StoreContext"

const ProductRow = ({ item }) => {
  const { product, quantity } = item
  const { removeLineItem } = useStore()

  return (
    <div>
      <div>
        {/* <Image src={product.images[0]?.src} alt={product.title} /> */}
        <p>{product.title}</p>
      </div>
      <p>{quantity}</p>
      <button onClick={() => removeLineItem(product.variants[0]?.shopifyId)}>
        Remove
      </button>
    </div>
  )
}

export default ProductRow
