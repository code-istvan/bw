import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useShopify } from "../hooks/useShopifyQuery"
import ProductCard from "../components/Cards/ProductCard"
import ProductsTags from "../components/Shopify/ProductsTags"

export default function Shop() {
  const products = useShopify()

  return (
    <Layout>
      <Seo title="WEBSHOP" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">WEBSHOP</h1>
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
      <div className="mt-40px">
        <ProductsTags />
      </div>

      <div className="row mt-20px gap-1">
        {products?.map(product => {
          return (
            <div className="col-12-xs col-6-md col-4-lg" key={product.node.id}>
              <article>
                <ProductCard
                  productName={product.node.title}
                  productPrice={
                    product.node.priceRangeV2.maxVariantPrice.amount
                  }
                  productImg={
                    product.node.featuredMedia.preview.image.localFile
                      .childrenImageSharp[0].gatsbyImageData
                  }
                  productHandle={`/shop/products/${product.node.handle}`}
                />
              </article>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
