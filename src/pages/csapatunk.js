import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import TeachersCard from "../components/Cards/TeachersCard"
import { CustomHead } from "../components/CustomHead"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { useTeachers } from "../hooks/useTeachersQuery"
import "../sass/pages/_oktatok.scss"

const Csapatunk = () => {
  const teachers = useTeachers()
  // Meghatározott tanárok kiválasztása
  const fixedTeachers = ["István", "Kisanna", "Janka", "Rózsa", "Andris"]

  // Kiválasztott tanárok és a többiek szétválasztása
  const prioritizedTeachers = fixedTeachers
    .map(name => teachers.find(teacher => teacher.name === name))
    .filter(teacher => teacher !== undefined) // Eltávolítja az undefined
  const otherTeachers = teachers.filter(
    item =>
      !fixedTeachers.includes(item.name) &&
      (item.name === "Temu" || item.name === "Noémi")
  )

  // Tanárok újrarendezése
  const filterTeachers = [...prioritizedTeachers, ...otherTeachers]
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">CSAPATUNK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/oktatok_desktop.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/oktatok_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="oktatok-wrapper">
        <div className="row mt-40px gap-1">
          {filterTeachers.map(
            ({ name: teacherName, link, style, title, fullname }) => {
              const currentTeacher = filterTeachers.find(
                name => name.name === teacherName
              )
              return (
                <div className="col-12-xs col-6-lg">
                  <TeachersCard
                    teacherName={fullname}
                    teacherImg={
                      currentTeacher.teacherimage.childImageSharp
                        .gatsbyImageData
                    }
                    title={title}
                    yogaStyle={style}
                    slug={link}
                    key={teacherName}
                  />
                </div>
              )
            }
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Csapatunk

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "oktatok_desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const pageTitle = "Csapatunk | " + data.site.siteMetadata.title
  const pageDescription = "Itt olvashatsz oktatóinkról és admin kollégáinkról"

  return (
    <CustomHead
      canonical={siteUrl + location.pathname}
      title={pageTitle}
      description={pageDescription}
      image={ogImage}
      schemaData={{
        "@type": "WebPage",
        name: pageTitle,
        description: pageDescription,
        url: `${siteUrl}${location.pathname}`,
        logo: "https://mula.bandha.works/images/bw_logo.png",
      }}
    />
  )
}
