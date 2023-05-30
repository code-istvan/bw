import React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import ProductRow from "../components/Shopify/ProductRow"
import useStore from "../components/Shopify/StoreContext"
import { StaticImage } from "gatsby-plugin-image"
// import { navigate } from "gatsby"
// import { Link } from "gatsby"
import Button from "../components/Buttons/Button"
import "../sass/pages/_cart.scss"

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
        <div className="cart--header mt-40px row">
          <div className="col-8-xs col-7-md">
            <p className="small clr-shades-gray">TERMÉK</p>
          </div>
          <div className="col-0-xs col-3-md cart--quantity">
            <p className="small clr-shades-gray">MENNYISÉG</p>
          </div>
          <div className="col-4-xs col-2-md">
            <p className="small clr-shades-gray">VÉGÖSSZEG</p>
          </div>
        </div>

        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <p>Üres a kosarad</p>
        )}

        <div className="separator-horizontal mt-40px" />

        <div className="cart--footer row">
          <div className="col-8-xs col-7-md"></div>
          <div className="col-4-xs col-5-md">
            <div className="cart--footer__buttons">
              {/* <Link to="/shop">
                <button>Vissza a SHOP-ba</button>
              </Link> */}

              <div>
                <p className="cart--footer__text ">Végösszeg: ........Ft.</p>
                <p className="mt-20px mb-20px cart--footer__text">
                  Tartalmazza a megrendeléskor kiszámított adót és szállítási
                  költséget.
                </p>
              </div>

              <Button
                type="button"
                disabled={cart.length === 0}
                text="Checkout"
                buttonStyle="btn--primary--solid--full"
                onClick={() => window.open(checkout.webUrl)}
              >
                Megrendelés
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
