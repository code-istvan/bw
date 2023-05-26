import React, { useState } from "react"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../Layouts/Layout"
import Seo from "../seo"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
// import useInput from "../../hooks/useInput"
import useStore from "./StoreContext"
import Button from "../Buttons/Button"
import CartAmountToggle from "./CartAmountToggle"
import "../../sass/components/_product.scss"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  // const bind = useInput(1)
  const { addVariantToCart } = useStore()
  const [amount, setAmount] = useState(1)

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () => {
    setAmount(amount + 1)
  }

  console.log(amount)

  return (
    <Layout>
      <Seo title={product.title} />
      <div className="row shopify--product">
        <div className="col-12-xs col-7-md">
          <GatsbyImage
            image={
              product.featuredMedia.preview.image.localFile
                .childrenImageSharp[0].gatsbyImageData
            }
            alt={product.title}
          />
        </div>
        <div className="col-12-xs col-5-md shopify--product--right-side">
          <h1 className="shopify--product--title">{product.title}</h1>

          <div className="row blogtags tag-button mt-20px">
            {product.tags?.map((tag, index) => {
              return <p key={index}>{tag}</p>
            })}
          </div>

          <div className="shopify--product--price mt-20px mb-20px">
            <p>Ára: </p>
            <p className="clr-brand-orange">
              {product.priceRangeV2.maxVariantPrice.amount} Ft
            </p>
          </div>

          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />

          {/* <form>
            <p>
              <label htmlFor="qty">Quantity:</label>
            </p>
            <input placeholder="1" id="qty" type="number" {...bind} />
          </form> */}
          <div className="row mb-20px mt-20px">
            <Button
              type="button"
              buttonStyle="btn--primary--outline-full"
              onClick={() => addVariantToCart(product, amount)}
            >
              Hozzáadás a kosárhoz
            </Button>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: product.descriptionHtml,
            }}
          />

          {/* 
          <button onClick={() => addVariantToCart(product, bind.value)}>
            {" "}
            Hozzáadás a kosárhoz
          </button> */}

          <ButtonIcon
            buttonType="icon-text"
            className="mt-40px mb-40px"
            text="Vissza az összes termékhez"
            icon={<Icons.ArrowLeft color="orange" />}
            onClick={() => navigate("/shop")}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
