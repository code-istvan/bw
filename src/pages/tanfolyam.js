import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Tanfolyam() {
  return (
    <Layout>
      <Seo title="TANFOLYAMOK" />
      <Row>
        <Col>
          <h1>TANFOLYAMOK</h1>
        </Col>
      </Row>
    </Layout>
  )
}
