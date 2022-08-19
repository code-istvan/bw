import * as React from "react"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import { Link } from "gatsby"
import "../sass/components/_kapcsolat.scss"
import GoogleMap from "../components/GoogleMap/GoogleMap"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/Footer/Footer"

export default function Kapcsolat() {
  return (
    <>
      <Seo title="Kapcsolat" />
      <Navbar />
      <GoogleMap />
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h1>Bandha Works Jógaiskola</h1>
          </div>
        </div>
        <div className="row">
          <address>
            <h3 className="mb-0">1027. Budapest, Frankel Leó út. 18.</h3>
            <p className="clr-shades-lightGray span span--bold">
              A bejárat az utcafrontról nyílik, a társasházi főbejárattól balra
              található barna ajtón tudsz lejönni hozzánk.
            </p>
          </address>
        </div>
        <div className="row">
          <h3 className="mb-0">Üzenet</h3>
        </div>
        <form
          name="contact bandhaworks"
          action="/mantra"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact bandhaworks" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div className="row">
            <div className="col-4-md">
              <input type="text" name="name" placeholder="Név" required />
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="col-8-md mb-1">
              <textarea
                className="kapcsolat__textarea"
                name="comments"
                rows="2"
                placeholder="Üzenet"
                required
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-4-md mb-2">
              <Button
                type="submit"
                buttonStyle="btn--mobil--secondary--solid"
                buttonSize="btn--small"
              >
                KÜLDÉS
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col d-grid contact_checkbox">
              <label className="form-control span span--bold clr-shades-lightGray">
                <input type="checkbox" name="checkbox" required />
                Megismertem és elfogadom az
                <Link to="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
                hozzájárulok e-mail címem kezeléséhez.
              </label>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
