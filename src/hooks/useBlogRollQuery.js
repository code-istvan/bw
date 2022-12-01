import { useStaticQuery, graphql } from "gatsby"

export const useBlogRoll = () => {
  const data = useStaticQuery(
    graphql`query BlogRoll {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      timeToRead
      excerpt
      slug
      frontmatter {
        date(formatString: "YYYY. MM. DD.")
        description
        title
        author
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 500
              height: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
    }
  }
}`
  )

  return data.allMdx.nodes
}
