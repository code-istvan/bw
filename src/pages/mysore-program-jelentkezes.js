import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import Button from "../components/Buttons/Button"
import { CustomLink } from "../components/CustomLink"
import { Link } from "gatsby"
import Icons from "../components/Icons/Icons"
import Counter from "../components/Counter"
import "../sass/pages/_mysoreprogramjelentkezes.scss"

export default function MysoreprogramJelentkezes() {
  return (
    <Layout>
      <Seo title="MYSORE PROGRAM" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">MYSORE-PROGRAM JELENTKEZÉS</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="mysore-program-jelentkezes--wrapper tight--desktop--container">
        <div className="row mt-40px mb-20px">
          <h3>JELENTKEZÉSI LAP</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <h3 className="mb-20px">Valami</h3>
            </div>
            <form
              name="mysore bandhaworks"
              action="/mysore-application"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="form-name"
                value="mysore bandhaworks"
              />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="row gap-five">
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="familyname"
                    placeholder="Családi név"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="surnamename"
                    placeholder="Utónév"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required="required"
                    className="form-control col-12-xs col-6-md mb-20px"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="phone"
                    placeholder="Telefonszám"
                    required="required"
                    pattern="\+?[0-9]+"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col contact_checkbox">
                  <label className="form-control span span--bold clr-shades-lightGray bw-checkbox">
                    <input type="checkbox" name="kezdo" />
                    <span>
                      Teljesen kezdő vagyok, még nem gyakoroltam astanga jógát
                    </span>
                  </label>
                  <label className="form-control span span--bold clr-shades-lightGray bw-checkbox">
                    <input type="checkbox" name="astangaztam" />
                    <span>Astangáztam már</span>
                  </label>
                  <label className="form-control span span--bold clr-shades-lightGray bw-checkbox">
                    <input type="checkbox" name="mysoretapasztalt" />
                    <span>Van Mysore-gyakorlás tapasztalatom</span>
                  </label>
                </div>
              </div>
              <div className="row massage-wrapper mb-2">
                <TextArea
                  className="kapcsolat__textarea"
                  name="comments"
                  rows="6"
                  placeholder="Ha már van tapasztalatod astanga jógában, kérlek írd le, mióta
                  és milyen rendszeresen gyakorolsz. Kitől tanultál eddig,
                  mennyi időt? Van-e tapasztalatod Mysore-gyakorlás terén?
                  Tudsz-e külső segítség nélkül egyedül gyakorolni?"
                  required
                ></TextArea>
              </div>
              <div className="row">
                <div className="col contact_checkbox">
                  <label className="form-control span span--bold clr-shades-lightGray bw-checkbox">
                    <input type="checkbox" name="checkbox" required />
                    <span>
                      Megismertem és elfogadom az
                      <Link to="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
                      hozzájárulok nevem és e-mail címem kezeléséhez.
                    </span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-12-xs col-4-md mb-2 kapcsolat-button mt-20px">
                  <Button type="submit" buttonStyle="btn--secondary--solid">
                    KÜLDÉS
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
