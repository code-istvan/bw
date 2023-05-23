import React from "react"
import Layout from "../Layouts/Layout"
import ProductRow from "./ProductRow"
import useStore from "./StoreContext"

const Cart = () => {
  const { cart, checkout } = useStore()

  return (
    <Layout>
      <div>
        <div>
          <p>Termék</p>
          <p>Mennyiség</p>
          <p>Remove Item</p>
        </div>

        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <p>Üres a kosarad</p>
        )}

        <div>
          <button
            disabled={cart.length === 0}
            text="Checkout"
            onClick={() => window.open(checkout.webUrl)}
          >
            Buy
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
