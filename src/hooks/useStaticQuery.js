import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetadata {
        file(relativePath: { eq: "hero_desktop.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `
  )

  return {
    heroImage: data.file.childImageSharp.gatsbyImageData,
    siteMetadata: data.site.siteMetadata,
  }
}
