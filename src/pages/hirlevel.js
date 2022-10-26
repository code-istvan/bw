import * as React from "react"
import LayoutPage from "../components/Layouts/LayoutPage"
import Seo from "../components/seo"
import Button from "../components/Button"
import InputField from "../components/InputField"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/pages/_hirlevel.scss"

const Hirlevel = () => (
  <LayoutPage>
    <Seo title="Hírlevél" />

    <div className="hirlevel-hero-container">
      <div className="row hirlevel--desktop--container">
        <div className="col">
          <h1 className="hirlevel-title">Feliratkozás hírlevélre</h1>
          <StaticImage
            className="container-fluid hirlevel-hero-image hero-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid hirlevel-hero-image hero-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
    </div>

    <div className="row hirlevel--desktop--container">
      <div className="col">
        <p>
          Iratkozz fel hírlevelünkre, hogy elsőként értesülj jógaiskolánkat
          érintő történésekről. Havonta max. egy hírlevelet küldünk. Harmadik
          fél számára nem adjuk ki a feliratkozók e-mail címét.
        </p>
      </div>
    </div>
    <form
      name="newsletter bandhaworks"
      action="/mantra"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="newsletter bandhaworks" />
      <div hidden>
        <input name="bot-field" />
      </div>
      <div className="row hirlevel--desktop--container">
        <div className="col-12-xs col-6-md hirlevel-input-name">
          <InputField
            type="text"
            name="name"
            placeholder="Név"
            required="required"
          />
        </div>
        <div className="col-12-xs col-6-md hirlevel-input-email">
          <InputField
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            required="required"
          />
        </div>
      </div>
      <div className="row hirlevel--desktop--container">
        <div className="col">
          {/* <div className="col d-grid gap-2 contact_checkbox"> */}
          <label className="form-control hirlevel-acceptance bw-checkbox">
            <input type="checkbox" name="checkbox" required />
            <span>
              Megismertem és elfogadom az
              <Link href="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
              hozzájárulok e-mail címem kezeléséhez.
            </span>
          </label>
        </div>
      </div>

      <div className="row hirlevel--desktop--container">
        <div className="col hirlevel-button">
          <Button type="submit" buttonStyle="btn--secondary--solid">
            Feliratkozás
          </Button>
        </div>
      </div>
    </form>
  </LayoutPage>
)

export default Hirlevel
