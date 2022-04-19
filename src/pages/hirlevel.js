import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Hirlevel = () => (
  <>
    <Layout>
      <Seo title="Hírlevél" />
      <h1>Feliratkozás hírlevélre</h1>
      <p>Test hírlevél</p>
      <Row>
        <Col>
          {/* <script id="mcjs">
            !function(c,h,i,m,p)
            {
              ((m = c.createElement(h)),
              (p = c.getElementsByTagName(h)[0]),
              (m.async = 1),
              (m.src = i),
              p.parentNode.insertBefore(m, p))
            }
            (document,"script","https://chimpstatic.com/mcjs-connected/js/users/3836bf54ff487c47474950012/d8bbbb9c26d4c2c245e3f4a94.js");
          </script> */}
        </Col>
      </Row>
    </Layout>
  </>
)

export default Hirlevel
