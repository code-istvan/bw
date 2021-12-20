import * as React from "react"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "react-bootstrap/Button"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "../sass/components/_kapcsolat.scss"
// import GoogleMap from '../components/GoogleMap'
import Navbar from "../components/navbarBW"
import SnazzyGoogleMap from "../components/SnazzyGoogleMap"

export default function Kapcsolat() {
  
  return (
    <>
    <Navbar />
    <SnazzyGoogleMap />
    <Container>
    <Seo title="Kapcsolat" />
   <Row>
     <Col>
    <h1>Kapcsolat</h1>
    </Col>
     </Row>
    <form
        // className="kapcsolat__inputfield"
        name="contact bandhaworks"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact bandhaworks" />
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
              placeholder="E-mail cím"
              required
            />
          </Col>
          <Col md={6}>
            <textarea
              // className="kapcsolat__textarea"
              name="comments"
              rows="2"
              placeholder="Üzenet"
              required
            ></textarea>
          </Col>
        </Row>

        <Row>
          <Col className="d-grid gap-2">
            <Button type="submit" className="kapcsolat__button">
              Küldés
            </Button>

            <label>
              <input type="checkbox" required /> Megismertem és elfogadom az
              <Link href="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
              hozzájárulok e-mail címem kezeléséhez.
            </label>
          </Col>
        </Row>
      </form>
    </Container>
  </>
  )
}