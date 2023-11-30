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

const Orarend = ({ data }) => {
  const {
    allScheduleJson: { edges },
  } = data
  const sortedEdges = edges.sort(sortByDate)
  const breakpoints = useBreakpoint()

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">ÓRAREND</h1>
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
      {breakpoints.md ? (
        <>
          <div className="separator-horizontal-full"></div>
          <div className="row mt-40px">
            <Button
              type="button"
              buttonStyle="btn--secondary--solid--full"
              onClick={() => {
                navigate("/osztondij")
              }}
            >
              Jóga ösztondíj 2024
            </Button>
          </div>
        </>
      ) : null}
      <div className="mt-40px">
        <ul>
          {sortedEdges.map(({ node }) => {
            const {
              date,
              class1,
              class2,
              class3,
              class4,
              description1,
              description2,
              description3,
              description4,
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
                "vasárnap",
                "hétfő",
                "kedd",
                "szerda",
                "csütörtök",
                "péntek",
                "szombat",
              ]
              let day = new Date(date).getDay()
              let dayName = daysArray[day].toUpperCase()
              let monthDay = new Date(date)
                .toLocaleDateString("hu-HU", {
                  month: "long",
                  day: "numeric",
                })
                .toUpperCase()

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
                              <h3>{class1}</h3>
                              {signup1 && signup1 !== "null" && (
                                <CustomLink
                                  link={signup1}
                                  classNames="body clr-brand-orange link-decoration-remove"
                                  title="Részvétel"
                                />
                              )}
                            </div>
                            <CustomLink
                              link={teacherlink1}
                              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                              title={teacher1}
                            />
                          </div>
                          <div className="schedule-details">
                            <Accordion
                              content={description1}
                              text="Részletek"
                              className="clr-shades-white span"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {class2 !== "null" && (
                      <div
                        className={
                          class2 === "null" ? "hide-class" : "schedule-card"
                        }
                      >
                        <div>
                          <div className="schedule-main-row">
                            <div className="schedule-class">
                              <p>{time2}</p>
                              <div className="schedule-class-second-line">
                                <div className="signup-line">
                                  <h3>{class2}</h3>
                                  {signup2 && signup2 !== "null" && (
                                    <CustomLink
                                      link={signup2}
                                      classNames="body clr-brand-orange link-decoration-remove"
                                      title="Részvétel"
                                    />
                                  )}
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
                                  content={description2}
                                  text="Részletek"
                                  className="clr-shades-white span"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {class3 !== "null" && (
                      <div
                        className={
                          class3 === "null" ? "hide-class" : "schedule-card"
                        }
                      >
                        <div className="schedule-main-row">
                          <div className="schedule-class">
                            <p>{time3}</p>
                            <div className="schedule-class-second-line">
                              <div className="signup-line">
                                <h3>{class3}</h3>
                                {signup3 && signup3 !== "null" && (
                                  <CustomLink
                                    link={signup3}
                                    classNames="body clr-brand-orange link-decoration-remove"
                                    title="Részvétel"
                                  />
                                )}
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
                                content={description3}
                                text="Részletek"
                                className="clr-shades-white span"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {class4 !== "null" && (
                      <div className="schedule-card">
                        <div className="schedule-main-row">
                          <div className="schedule-class">
                            <p>{time4}</p>
                            <div className="schedule-class-second-line">
                              <div className="signup-line">
                                <h3>{class4}</h3>
                                {signup4 && signup4 !== "null" && (
                                  <CustomLink
                                    link={signup4}
                                    classNames="body clr-brand-orange link-decoration-remove"
                                    title="Részvétel"
                                  />
                                )}
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
                                content={description4}
                                text="Részletek"
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

export default Orarend

export const Head = ({ data, location }) => {
  if (!data) {
    return null
  }

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Seo
      title="Órarend | Bandha Works Jógaiskola"
      description="A Bandha Works jógaiskola órarendje"
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}

export const scheduleListQuery = graphql`
  query CombinedQuery {
    allScheduleJson(sort: { date: ASC }) {
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
