import React from "react"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../Layouts/Layout"
import Seo from "../seo"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import "../../sass/components/_product.scss"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

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
            {product.tags?.map(tag => {
              return <p>{tag}</p>
            })}
          </div>
          <div className="shopify--product--price mt-20px mb-20px">
            <p>Ára: </p>
            <p className="clr-brand-orange">
              {product.priceRangeV2.maxVariantPrice.amount} Ft
            </p>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: product.descriptionHtml,
            }}
          />
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
