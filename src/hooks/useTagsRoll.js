import { useStaticQuery, graphql } from "gatsby"

export const useTagsRoll = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query MyQuery {
        allMdx {
          nodes {
            frontmatter {
              tags
            }
          }
        }
      }
    `
  )

  const tags = []
  allMdx.nodes.forEach(({ frontmatter }) => {
    tags.push(...frontmatter.tags)
  })

  return Array.from(new Set(tags))
}
