import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useShopify } from "../hooks/useShopifyQuery"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Shop() {
  const products = useShopify()

  console.log("prod", products)
  return (
    <Layout>
      <Seo title="ÖSZTÖNDÍJ" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">Shop</h1>
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
      <div className="row">
        <h1>valami</h1>
        {products.map(product => (
          <p>{product.node.tags}</p>
        ))}

        {products.map(product => {
          return (
            <article>
              <h2>{product.node.title}</h2>
              <GatsbyImage
                image={product.node.featuredImage?.gatsbyImageData}
                alt={product.node.title}
              />

              <p
                dangerousl
                ySetInnerHTML={{
                  __html: product.node.descriptionHtml,
                }}
              />
              {product.node.tags?.map(tag => {
                return <p>{tag}</p>
              })}
            </article>
          )
        })}
      </div>
    </Layout>
  )
}
