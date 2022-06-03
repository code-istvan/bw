import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"
// import { Helmet } from "react-helmet"
// import { ElfsightWidget } from "react-elfsight-widget"
// import Calendar from "../components/Calendar"

export default function Orarend() {
  return (
    <Layout>
      <Seo title="ÓRAREND" />
      <Row>
        <Col>
          <h1>ÓRAREND</h1>
          {/* <ElfsightWidget widgetID="elfsight-app-fb5099a3-5f9f-48b6-944a-44e4eaad58cf" /> */}
          {/* <Calendar /> */}
        </Col>
      </Row>
    </Layout>
  )
}
