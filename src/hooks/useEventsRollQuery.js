import { useStaticQuery, graphql } from "gatsby"

export const useEventsRoll = () => {
  const { allEventsJson } = useStaticQuery(
    graphql`
      query EventsRoll {
        allEventsJson {
          nodes {
            date(formatString: "YYYY. MM. DD.")
            day
            eventlink
            teacher
            title
            Shortdescription
            teacherlink
            teacherimage {
              childrenImageSharp {
                fixed(height: 100) {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `
  )

  return allEventsJson.nodes
}
