import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"
import BlogRoll from "../components/BlogRoll"

export default function Blog() {
  return (
    <Layout>
      <Seo title="BLOG" />
      <Row>
        <Col>
          <h1>BLOG</h1>
        </Col>
      </Row>
      <BlogRoll />
    </Layout>
  )
}
