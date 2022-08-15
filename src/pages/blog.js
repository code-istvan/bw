import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"
import BlogRoll from "../components/BlogRoll"

export default function Blog() {
  return (
    <Layout>
      <Seo title="BLOG" />
      <div className="row">
        <h1>BLOG</h1>
      </div>
      <BlogRoll />
    </Layout>
  )
}
