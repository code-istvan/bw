import { useStaticQuery, graphql } from "gatsby"

export const useEventsRoll = () => {
  const { allEventsJson } = useStaticQuery(
    graphql`
      query EventsRoll {
        allEventsJson(sort: { date: ASC }) {
          nodes {
            date(formatString: "YYYY. MM. DD.")
            day
            eventlink
            eventteacher
            title
            Shortdescription
          }
        }
      }
    `
  )

  return allEventsJson.nodes
}
