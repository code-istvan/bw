import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "../components/Button"
import { Link } from "gatsby"

const Hirlevel = () => (
  <>
    <Layout>
      <Seo title="Hírlevél" />
      <h1>Feliratkozás hírlevélre</h1>
      <p>Test hírlevél</p>
      <Row>
        <Col>
          <form
            name="newsletter bandhaworks"
            action="/mantra"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="newsletter bandhaworks"
            />
            <div hidden>
              <input name="bot-field" />
            </div>
            <Row>
              <Col md={6}>
                <input type="text" name="name" placeholder="Név" required />
                <br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-grid gap-2 contact_checkbox">
                <Button
                  type="submit"
                  buttonStyle="btn--mobil--secondary--solid"
                  buttonSize="btn--small"
                >
                  FELIRATKOZÁS
                </Button>

                <label className="form-control">
                  <input type="checkbox" name="checkbox" required />
                  Megismertem és elfogadom az
                  <Link href="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
                  hozzájárulok e-mail címem kezeléséhez.
                </label>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Layout>
  </>
)

export default Hirlevel
