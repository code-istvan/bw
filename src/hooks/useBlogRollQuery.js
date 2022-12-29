import { useStaticQuery, graphql } from "gatsby"

export const useBlogRoll = () => {
  const data = useStaticQuery(
    graphql`
      query BlogRoll {
        allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            excerpt
            fields {
              slug
              timeToRead {
                minutes
              }
            }
            frontmatter {
              date(formatString: "YYYY. MM. DD.")
              description
              title
              author
              tags
            }
          }
        }
      }
    `
  )

  return data.allMdx.nodes
}
