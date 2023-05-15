import React from "react"
import { Link, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../seo"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import "../../sass/components/_tags.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} poszt${
    totalCount === 1 ? "" : ""
  } lett "${tag}" címkével ellátva`

  return (
    <Layout>
      <Seo title="Cimkék" />
      <div className="blog-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="blog-title">BLOG</h1>
        </div>
        <div className="row blog--desktop--container">
          <StaticImage
            className="container-fluid blog-hero-image hero-big-image"
            src="../../images/blog_hero_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid blog-hero-image hero-mobil-image"
            src="../../images/blog_hero.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="tight--desktop--container">
        <h3 className="mt-40px mb-20px">{tagHeader}</h3>
        <div className="row unordered-list-style tags__page">
          <ul>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={`/blog${slug}`}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/tags">Összes tag</Link>
        <ButtonIcon
          buttonType="icon-text"
          className=""
          text="Vissza az összes bejegyzéshez"
          icon={<Icons.ArrowLeft color="orange" />}
          onClick={() => navigate("/blog")}
        />
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(limit: 2000, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
