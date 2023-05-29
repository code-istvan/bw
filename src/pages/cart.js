import React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import ProductRow from "../components/Shopify/ProductRow"
import useStore from "../components/Shopify/StoreContext"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import { Link } from "gatsby"

const Cart = () => {
  const { cart, checkout } = useStore()

  return (
    <Layout>
      <Seo title="KOSÁR" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">KOSÁR</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>

      <div>
        <div>
          <p>Termék</p>
          <p>Mennyiség</p>
          <p>Eltávolítás</p>
        </div>

        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <p>Üres a kosarad</p>
        )}

        <div>
          <Link to="/shop">
            <button>Vissza a SHOP-ba</button>
          </Link>

          <button
            disabled={cart.length === 0}
            text="Checkout"
            onClick={() => window.open(checkout.webUrl)}
          >
            Megrendelés
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
