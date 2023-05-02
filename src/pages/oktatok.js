import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import TeachersCard from "../components/Cards/TeachersCard"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { useTeachers } from "../hooks/useTeachersQuery"

const Oktatok = ({ data }) => {
  const oki = useTeachers()
  console.log(oki)

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
      <div className="row">
        <h1>valami</h1>
        {oki.map(({ name: teacherName, link, style, title }) => {
          return (
            <TeachersCard
              teacherName={teacherName}
              title={title}
              yogaStyle={style}
              slug={link}
              key={teacherName}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Oktatok
