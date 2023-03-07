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
      <div className="row blog-frame gap-2">
        <div className="col-12-xs col-4-md col-4-xl blog-right-column">
          <SearchBar id="" type="text" name="serach" placeholder="Keresés" />
          <h4>CIMKÉK</h4>
          <BlogTags />
          <div className="separator-horizontal-full mt-40px"></div>
          <div className="blogposts-only-desktop">
            <h4>LEGKEDVELTEBB BEJEGZÉSEK</h4>
          </div>
        </div>
        <div className="col-12-xs col-8-md col-8-xl">
          <BlogRoll />
        </div>
      </div>
    </LayoutBlog>
  )
}
