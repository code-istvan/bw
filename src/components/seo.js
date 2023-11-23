import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({
  description,
  lang = "hu",
  title,
  location,
  children,
  ogFeaturedImage,
  schemaMarkup,
  fbAppId,
}) {
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
  // const defaultTitle = site.siteMetadata?.title
  // const isIndexPage = location?.pathname === "/"
  // const domain = site.siteMetadata?.siteUrl

  return (
    <Helmet htmlAttributes={{ lang }} title={title}>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogFeaturedImage} />
      <meta name="twitter:card" content="summary" />
      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}
      {/* <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} /> */}
      <meta name={`robots`} content={`index, follow`} />
      {children}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}

Seo.defaultProps = {
  // lang: `en`,
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
