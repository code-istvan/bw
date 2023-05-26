import React from "react"
import "../../sass/components/_cartamounttoggle.scss"

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <p>-</p>
        </button>
        <div className="amount-style">
          <p>{amount}</p>
        </div>
        <button onClick={() => setIncrease()}>
          <p>+</p>
        </button>
      </div>
    </div>
  )
}

export default CartAmountToggle
