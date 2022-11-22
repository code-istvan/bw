import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import { useTagsRoll } from "../hooks/useTagsRoll"
import BlogRoll from "../components/BlogRoll"
import "../sass/pages/_blog.scss"

export default function Blog() {
  const tags = useTagsRoll()

  return (
    <LayoutBlog>
      <Seo title="BLOG" />

      <div className="blog-hero-container">
        <div className="row hirlevel--desktop--container">
          <div className="col">
            <h1 className="hirlevel-title">BLOG</h1>
            <StaticImage
              className="container-fluid blog-hero-image hero-big-image"
              src="../images/blog_hero.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
            <StaticImage
              className="container-fluid blog-hero-image hero-mobil-image"
              src="../images/blog_hero.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
      {tags?.map(tag => {
        return <div>{tag}</div>
      })}

      <BlogRoll />
    </LayoutBlog>
  )
}
