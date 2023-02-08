import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import BlogRoll from "../components/Blog/BlogRoll"
import BlogTags from "../components/Blog/BlogTags"
import SearchBar from "../components/SearchBar"
import "../sass/pages/_blog.scss"

export default function Blog() {
  return (
    <LayoutBlog>
      <Seo title="BLOG" />
      <div className="blog-hero-container">
        <div className="row blog--desktop--container">
          <div className="col">
            <h1 className="blog-title">BLOG</h1>
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
      <div className="row mt-20px">
        <div className="col">
          <SearchBar id="" type="text" name="serach" placeholder="Keresés" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>CIMKÉK</h4>
        </div>
      </div>
      <BlogTags />
      <div className="separator-full mt-40px"></div>
      <BlogRoll />
    </LayoutBlog>
  )
}
