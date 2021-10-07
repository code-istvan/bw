import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Elsoalkalom() {
  return (
    <Layout>
      <Seo title="ELSŐ ALKALOM" />
      <Row>
        <Col>
          <h1>ELSŐ ALKALOM</h1>
        </Col>
      </Row>
    </Layout>
  )
}
