import React from "react"
import { graphql } from "gatsby"
import { CustomLink } from "../CustomLink"
import Layout from "../../components/Layouts/Layout"
import Seo from "../../components/seo"

const Orarend = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/orarend" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const schedule = data.allScheduleJson.edges

  return (
    <Layout>
      <Seo title="ÓRAREND" />
      <div className="row mt-80px">
        <h1>ÓRAREND</h1>
      </div>
      <ul>
        {schedule.map(({ node }) => {
          const { class1, date } = node
          if (new Date(date).getTime() > new Date()) {
            return (
              <li className="clr-brand-orange">
                {date}, {class1}
              </li>
            )
          }
        })}
      </ul>
      {!isFirst && (
        <CustomLink
          link={prevPage}
          // classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
          title="Back"
        />
      )}
      {!isLast && (
        <CustomLink
          link={nextPage}
          // classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
          title="Next"
        />
      )}
    </Layout>
  )
}

export default Orarend

export const scheduleListQuery = graphql`
  query scheduleListQuery($skip: Int!, $limit: Int!) {
    allScheduleJson(sort: { date: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          date
          class1
          class2
          class3
          class4
          description1
          description2
          description3
          description4
          signup1
          signup2
          signup3
          signup4
          time1
          time2
          time3
          time4
          teacher1
          teacher2
          teacher3
          teacher4
          teacherlink1
          teacherlink2
          teacherlink3
          teacherlink4
          fullmoon
          newmoon
          ekadashi
        }
      }
    }
  }
`
