import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BlogTags from "../components/Blog/BlogTags"

export default function Tags() {
  return (
    <Layout>
      <div className="blog-hero-container tight--desktop--container">
        <h1 className="blog-title">BLOG CÍMKÉK</h1>
        <div className="row blog--desktop--container">
          <StaticImage
            className="container-fluid blog-hero-image hero-big-image"
            src="../images/blog_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid blog-hero-image hero-mobil-image"
            src="../images/blog_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="tight--desktop--container">
        <div className="row  mt-40px">
          <h3 className="mb-20px">Itt találod blogbejegyzéseink címkéit</h3>
          <BlogTags />
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "blog_desktop.jpg" }) {
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
  const pageTitle =
    "Bandha Blog Cimkék oldala | " + data.site.siteMetadata.title
  const pageDescription =
    "A Bandha Works blogon astanga jóga és jógikus életmód témájában olvashatsz érdekes cikkeket, interjúkat, és a jóga világában történt érdekességeket."

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
