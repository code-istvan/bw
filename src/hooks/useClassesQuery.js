import { useStaticQuery, graphql } from "gatsby"

export const useClasses = () => {
  const data = useStaticQuery(
    graphql`
      query getClasses {
        allClassesJson {
          nodes {
            shortdescription
            signup
            class
          }
        }
      }
    `
  )

  return data.allClassesJson.nodes
}
