import React from "react"
import { Link, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../seo"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import { getSrc } from "gatsby-plugin-image"
import "../../sass/components/_tags.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} poszt${
    totalCount === 1 ? "" : ""
  } lett "${tag}" címkével ellátva:`

  return (
    <Layout>
      <div className="blog-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="blog-title">BLOG</h1>
        </div>
        <div className="row blog--desktop--container">
          <StaticImage
            className="container-fluid blog-hero-image hero-big-image"
            src="../../images/blog_desktop.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid blog-hero-image hero-mobil-image"
            src="../../images/blog_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
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
        <ButtonIcon
          buttonType="icon-text"
          className="mt-20px"
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

export const Head = ({ location, data }) => {
  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    name: "Blog cimkék szerinti szűrése",
    description: "A Bandha Works Blog cimkék szerinti szűrése",
    url: `${siteUrl}${location.pathname}`,
    logo: "https://mula.bandha.works/images/bw_logo.png",
  }

  return (
    <Seo
      title="Blog cimkék | Bandha Works Jógaiskola"
      description="A Bandha Works Blog cimkék szerinti szűrése"
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      fbAppId="162565676946134"
      location={location}
      schemaMarkup={schema}
    />
  )
}

export const combinedQuery = graphql`
  query CombinedPageQuery($tag: String) {
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
    file(relativePath: { eq: "blog_desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1200)
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
