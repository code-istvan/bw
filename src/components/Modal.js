import React from "react"
import { navigate } from "gatsby"
import useStore from "./Shopify/StoreContext"
import Button from "./Buttons/Button"
import "../sass/components/_modal.scss"

const Modal = ({ isOpen, onClose, children }) => {
  const { cart, checkout } = useStore()
  if (!isOpen) return null

  const handleCartClick = () => {
    onClose() // Modal bezárása
    navigate("/cart") // "/cart" oldalra navigálás
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header mb-20px">{children}</div>

        <div className="modal-buttons">
          <Button
            type="button"
            buttonStyle="btn--third--outline"
            onClick={handleCartClick}
          >
            Kosár megtekintése
          </Button>

          {/* <button
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleCartClick}
        >
          Kosár megtekintése
        </button> */}
          <br />

          <Button
            type="button"
            disabled={cart.length === 0}
            text="Checkout"
            buttonStyle="btn--third--solid"
            onClick={() => window.open(checkout.webUrl)}
          >
            Megrendelés
          </Button>

          {/* <button
          disabled={cart.length === 0}
          text="Checkout"
          onClick={() => window.open(checkout.webUrl)}
        >
          Megrendelés
        </button> */}
          <br />

          {/* <button
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Vásárlás folytatása
        </button> */}

          <Button
            type="button"
            text="Checkout"
            buttonStyle="btn--third--naked-orange"
            onClick={onClose}
          >
            Vásárlás folytatása
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
