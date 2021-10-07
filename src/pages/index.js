import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../sass/pages/_index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="FŐOLDAL" />
    <Row>
      <Col>
        <h1>FŐOLDAL</h1>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
