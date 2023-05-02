import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import TeachersCard from "../components/Cards/TeachersCard"
import Seo from "../components/seo"
import { useTeachers } from "../hooks/useTeachersQuery"

const Oktatok = ({ data }) => {
  const teachers = useTeachers()
  const filterTeachers = teachers.filter(
    item => item.name === "István" || item.name === "Noémi"
  )

  return (
    <Layout>
      <Seo title="OKTATÓK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">OKTATÓK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="oktatok-wrapper">
        <div className="row mt-40px gap-1">
          {filterTeachers.map(({ name: teacherName, link, style, title }) => {
            const currentTeacher = filterTeachers.find(
              name => name.name === teacherName
            )
            return (
              <div className="col-12-xl col-6-md">
                <TeachersCard
                  teacherName={teacherName}
                  teacherImg={
                    currentTeacher.teacherimage.childImageSharp.gatsbyImageData
                  }
                  title={title}
                  yogaStyle={style}
                  slug={link}
                  key={teacherName}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Oktatok
