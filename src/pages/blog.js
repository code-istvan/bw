import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"
import BlogRoll from "../components/BlogRoll"

export default function Blog() {
  return (
    <LayoutBlog>
      <Seo title="BLOG" />
      <div className="row">
        <h1>BLOG</h1>
      </div>
      <BlogRoll />
    </LayoutBlog>
  )
}
