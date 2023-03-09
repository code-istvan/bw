import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import BlogRoll from "../components/Blog/BlogRoll"
import BlogTags from "../components/Blog/BlogTags"
import BlogSidebar from "../components/Blog/BlogSidebar"
import SearchBar from "../components/SearchBar"
import "../sass/pages/_blog.scss"

export default function Blog() {
  const breakpoints = useBreakpoint()

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
        <div className="col-12-xs col-3-md col-3-xl blog-right-column">
          <div className="blog-header-only-mobil">
            <SearchBar id="" type="text" name="serach" placeholder="Keresés" />
            <h4>CIMKÉK</h4>
            <BlogTags />
          </div>

          <div className="separator-horizontal-full"></div>
          {breakpoints.sm ? null : <BlogSidebar />}
        </div>
        <div className="col-12-xs col-9-md col-9-xl blogroll-desktop">
          <BlogRoll />
        </div>
      </div>
    </LayoutBlog>
  )
}
