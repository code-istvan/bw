import { useStaticQuery, graphql } from "gatsby"

/* Explanation: I all the authors in a separate static Query. Why? Because I think it separates concerns and logics.
 In that way, you can reuse and get the authors from anywhere in the app. If I put this query in the useBlogRollQuery.js, I'm sticking business logic meaning
 that always I get all the blogs, I also get the authors. If this is ALWAYS what you need, you can combine them but either way you can still calling both hooks if needed to combine
*/

export const useSchedule = () => {
  const data = useStaticQuery(
    graphql`
      query getSchedule {
        allScheduleJson {
          nodes {
            date
            class1
            class2

            description1
            description2

            signup1
            signup2

            time1
            time2

            teacher1
            teacher2

            teacherlink1
            teacherlink2
          }
        }
      }
    `
  )
  //   /* EXPLANATION: we just return from data the allAuthorsJson (is the node name we are querying) and from there, the nodes (the array of authors).
  //      This means that when we are calling useAuthors() we will get an array of authors (data.allAuthorsJson.nodes)
  //     */
  return data.allScheduleJson.nodes
}
