import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang = "hu", title, location, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const canonicalUrl = site.siteMetadata.siteUrl + location?.pathname
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const isIndexPage = location?.pathname === "/"
  const image = site.siteMetadata?.image
  const domain = site.siteMetadata?.siteUrl

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      {/* <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title> */}
      <title>
        {/* {!isIndexPage && defaultTitle ? `${title} | ${defaultTitle}` : title} */}
        {!isIndexPage && defaultTitle
          ? `${title} | ${defaultTitle}`
          : `${defaultTitle} | Astanga Mysore Budapest`}
      </title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={domain + image} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name={`robots`} content={`index, follow`} />
      {children}
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
