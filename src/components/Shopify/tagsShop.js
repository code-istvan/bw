import React from "react"
import { Link, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../seo"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import slugify from "../../utils/slugifyes6"
import "../../sass/components/_tagsshop.scss"

function Tagsshopify({ pageContext, data }) {
  const { productTag } = pageContext
  const { edges, totalCount } = data.allShopifyProduct
  const tagHeader = `${totalCount} árucikk${
    totalCount === 1 ? "" : ""
  } lett "${productTag}" címkével ellátva:`

  return (
    <Layout>
      <Seo title="WEBSHOP TAGS" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">WEBSHOP</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../../images/hirlevel_mobil.jpg"
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
        <h3 className="mt-40px mb-20px">{tagHeader}</h3>
        <div className="row unordered-list-style tags__page">
          <ul>
            {edges.map(({ node }) => {
              return (
                <li
                  key={node.handle}
                  className="row unordered-list-style tags__page"
                >
                  <Link to={`/shop/products/${slugify(node.handle)}`}>
                    {node.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <ButtonIcon
          buttonType="icon-text"
          className="mt-20px"
          text="Vissza a webshopba"
          icon={<Icons.ArrowLeft color="orange" />}
          onClick={() => navigate("/shop")}
        />
      </div>
    </Layout>
  )
}

Tagsshopify.propTypes = {
  pageContext: PropTypes.shape({
    productTag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allShopifyProduct: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            handle: PropTypes.string.isRequired,
            tags: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.arrayOf(PropTypes.string),
            ]).isRequired,
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tagsshopify

export const pageQuery = graphql`
  query ($productTag: String) {
    allShopifyProduct(filter: { tags: { in: [$productTag] } }) {
      totalCount
      edges {
        node {
          tags
          handle
          title
        }
      }
    }
  }
`
