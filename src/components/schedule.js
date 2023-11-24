import React from "react"
import { CustomLink } from "./CustomLink"
import Layout from "./Layouts/Layout"
import Seo from "./seo"
import Accordion from "./Accordions/Accordion"
import Icons from "./Icons/Icons"
import Button from "../components/Buttons/Button"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../sass/components/_orarend.scss"

const sortByDate = (a, b) => {
  const dateA = new Date(a.node.date)
  const dateB = new Date(b.node.date)
  return dateA - dateB
}

const Schedule = ({ data }) => {
  const {
    allScheduleJson: { edges },
  } = data
  const sortedEdges = edges.sort(sortByDate)
  const breakpoints = useBreakpoint()

  console.log("macika", data)

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">SCHEDULE</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/orarend_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/orarend_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="mt-40px">
        <ul>
          {sortedEdges.map(({ node }) => {
            const {
              date,
              class1English,
              class2English,
              class3English,
              class4English,
              description1English,
              description2English,
              description3English,
              description4English,
              signup1,
              signup2,
              signup3,
              signup4,
              time1,
              time2,
              time3,
              time4,
              teacher1,
              teacher2,
              teacher3,
              teacher4,
              teacherlink1,
              teacherlink2,
              teacherlink3,
              teacherlink4,
              fullmoon,
              newmoon,
              ekadashi,
            } = node

            if (new Date(date).getTime() >= new Date().setHours(0, 0, 0, 0)) {
              let daysArray = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ]
              let day = new Date(date).getDay()
              let dayName = daysArray[day].toUpperCase()
              let monthDay = new Date(date)
                .toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                })
                .toUpperCase()

              console.log("class1English", class1English)

              return (
                <div className="schedule-wrapper">
                  <div className="bg-shades-darkGray container-fluid">
                    <div className="container">
                      <div className="schedule-date-line clr-shades-gray tight--desktop--container">
                        <div>
                          <p>{dayName}</p>
                          <div title="Telihold">
                            {fullmoon && <Icons.Fullmoon />}
                          </div>
                          <div title="Újhold">
                            {newmoon && <Icons.Newmoon />}
                          </div>
                          <div title="Ékadashi">
                            {ekadashi && <Icons.Ekadasi />}
                          </div>
                        </div>
                        <p>{monthDay}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper tight--desktop--container">
                    <div className="schedule-card">
                      <div className="schedule-main-row">
                        <div className="schedule-class">
                          <p>{time1}</p>
                          <div className="schedule-class-second-line">
                            <div className="signup-line">
                              <h3>{class1English}</h3>
                              <CustomLink
                                link={signup1}
                                classNames="body clr-brand-orange link-decoration-remove"
                                title="Tickets"
                              />
                            </div>
                            <CustomLink
                              link={teacherlink1}
                              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                              title={teacher1}
                            />
                          </div>
                          <div className="schedule-details">
                            <Accordion
                              content={description1English}
                              text="Details"
                              className="clr-shades-white span"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {class2English !== "null" && (
                      <div
                        className={
                          class2English === "null"
                            ? "hide-class"
                            : "schedule-card"
                        }
                      >
                        <div>
                          <div className="schedule-main-row">
                            <div className="schedule-class">
                              <p>{time2}</p>
                              <div className="schedule-class-second-line">
                                <div className="signup-line">
                                  <h3>{class2English}</h3>
                                  <CustomLink
                                    link={signup2}
                                    classNames="body clr-brand-orange link-decoration-remove"
                                    title="Tickets"
                                  />
                                </div>
                                <div className="vertical-separator" />
                                <CustomLink
                                  link={teacherlink2}
                                  classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                                  title={teacher2}
                                />
                              </div>
                              <div className="schedule-details">
                                <Accordion
                                  content={description2English}
                                  text="Details"
                                  className="clr-shades-white span"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {class3English !== "null" && (
                      <div
                        className={
                          class3English === "null"
                            ? "hide-class"
                            : "schedule-card"
                        }
                      >
                        <div className="schedule-main-row">
                          <div className="schedule-class">
                            <p>{time3}</p>
                            <div className="schedule-class-second-line">
                              <div className="signup-line">
                                <h3>{class3English}</h3>
                                <CustomLink
                                  link={signup3}
                                  classNames="body clr-brand-orange link-decoration-remove"
                                  title="Tickets"
                                />
                              </div>
                              <div className="vertical-separator" />
                              <CustomLink
                                link={teacherlink3}
                                classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                                title={teacher3}
                              />
                            </div>
                            <div className="schedule-details">
                              <Accordion
                                content={description3English}
                                text="Details"
                                className="clr-shades-white span"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {class4English !== "null" && (
                      <div className="schedule-card">
                        <div className="schedule-main-row">
                          <div className="schedule-class">
                            <p>{time4}</p>
                            <div className="schedule-class-second-line">
                              <div className="signup-line">
                                <h3>{class4English}</h3>
                                <CustomLink
                                  link={signup4}
                                  classNames="body clr-brand-orange link-decoration-remove"
                                  title="Tickets"
                                />
                              </div>
                              <div className="vertical-separator" />
                              <CustomLink
                                link={teacherlink4}
                                classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                                title={teacher4}
                              />
                            </div>
                            <div className="schedule-details">
                              <Accordion
                                content={description4English}
                                text="Details"
                                className="clr-shades-white span"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            }
            return null
          })}
        </ul>
      </div>
      {breakpoints.md ? (
        <>
          <div className="separator-horizontal-full"></div>
          <div className="row mt-40px">
            <Button
              type="button"
              buttonStyle="btn--secondary--solid--full"
              onClick={() => {
                navigate("/programok")
              }}
            >
              Egyéb programjaink
            </Button>
          </div>
        </>
      ) : null}
    </Layout>
  )
}

export default Schedule

export const Head = ({ data, location }) => {
  if (!data) {
    return null
  }

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Seo
      title="Schedule | Bandha Works Shala"
      lang="en"
      description="The schedule of Bandha Works Shala"
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}

export const combinedQuery = graphql`
  query CombinedQuery {
    allScheduleJson(sort: { date: ASC }) {
      edges {
        node {
          date
          class1English
          class2English
          class3English
          class4English
          description1English
          description2English
          description3English
          description4English
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
    file(relativePath: { eq: "osztondij_desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1200)
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
