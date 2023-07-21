import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import BlogTags from "../components/Blog/BlogTags"

export default function Tags() {
  return (
    <Layout>
      <Seo title="TAGS" />
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
