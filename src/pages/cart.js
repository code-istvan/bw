import React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import ProductRow from "../components/Shopify/ProductRow"
import useStore from "../components/Shopify/StoreContext"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import "../sass/pages/_cart.scss"

const Cart = () => {
  const { cart, checkout } = useStore()
  const hasItems = cart.length > 0

  let totalPrice = 0

  const total = cart.reduce((totalPrice, cartItem) => {
    const itemPrice =
      cartItem.product.priceRangeV2.maxVariantPrice.amount * cartItem.quantity
    totalPrice += itemPrice
    return totalPrice
  }, 0)

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
      <div className="cart--wrapper">
        {hasItems && (
          <>
            <div className="cart--header__button mt-20px">
              <Button
                type="button"
                disabled={!hasItems}
                text="Continue Shopping"
                buttonStyle="btn--plain--naked"
                onClick={() => navigate("/shop")}
              >
                Vásárlás folytatása
              </Button>
            </div>
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
          </>
        )}
        {hasItems ? (
          cart
            .sort((a, b) => a.product.title.localeCompare(b.product.title))
            .map((item, index) => (
              <ProductRow item={item} key={item.product.title} />
            ))
        ) : (
          <div className="cart--empty mt-40px mb-40px">
            <h3>A kosarad üres</h3>
            <Button
              type="button"
              disabled={!hasItems}
              text="Continue Shopping"
              buttonStyle="btn--secondary--solid"
              onClick={() => navigate("/shop")}
            >
              Vásárlás folytatása
            </Button>
          </div>
        )}
        {hasItems && (
          <>
            <div className="separator-horizontal mt-40px" />
            <div className="cart--footer row">
              <div className="col-12-xs col-7-md"></div>
              <div className="col-12-xs col-5-md">
                <div className="cart--footer__buttons">
                  <div>
                    <p className="cart--footer__total">
                      Végösszeg: {total} Ft.
                    </p>
                    <p className="mt-20px mb-20px cart--footer__text">
                      Tartalmazza a megrendeléskor kiszámított adót és
                      szállítási költséget.
                    </p>
                  </div>
                  <Button
                    type="button"
                    disabled={!hasItems}
                    text="Checkout"
                    buttonStyle="btn--primary--solid--full"
                    onClick={() => window.open(checkout.webUrl)}
                  >
                    Megrendelés
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Cart
