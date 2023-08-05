import React, { useState } from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import "../sass/pages/_mysoreprogramjelentkezes.scss"

export default function MysoreprogramJelentkezes() {
  const [email, setEmail] = useState("")
  const [emailConfirm, setEmailConfirm] = useState("")

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
            <form
              name="mysore bandhaworks"
              action="/mysore-application"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
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
                    pattern="[a-zA-Z]{1,20}"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="surnamename"
                    placeholder="Utónév"
                    pattern="[a-zA-Z]{1,20}"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                    required="required"
                    className="form-style col-12-xs col-6-md mb-20px"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    id="email"
                    type="email"
                    name="email2"
                    placeholder="E-mail mégegyszer"
                    pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                    required="required"
                    className="form-style col-12-xs col-6-md mb-20px"
                    value={emailConfirm}
                    onChange={e => setEmailConfirm(e.target.value)}
                  />
                </div>
              </div>
              <div className="row gap-1 ">
                <div className="col mysore-checkboxs">
                  <label className="form-style span span--bold clr-shades-lightGray custom-checkbox gray">
                    <input
                      type="checkbox"
                      name="tapasztalat[]"
                      value="kezdovagyok"
                    />
                    <p className="clr-shades-lightGray">
                      Teljesen kezdő vagyok,
                    </p>
                  </label>
                  <label className="form-style span span--bold clr-shades-lightGray custom-checkbox gray">
                    <input
                      type="checkbox"
                      name="tapasztalat[]"
                      value="astangaztammar"
                    />
                    <p>Astangáztam már,</p>
                  </label>
                  <label className="form-style span span--bold clr-shades-lightGray custom-checkbox gray">
                    <input
                      type="checkbox"
                      name="tapasztalat[]"
                      value="mysoreosvagyok"
                    />
                    <p>Van Mysore-gyakorlás tapasztalatom.</p>
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
                ></TextArea>
              </div>
              <div className="row">
                <div className="col contact_checkbox">
                  <label className="form-style span span--bold clr-shades-lightGray custom-checkbox orange">
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
                  <Button
                    type="submit"
                    buttonStyle="btn--secondary--solid"
                    onClick={e => {
                      if (email !== emailConfirm) {
                        e.preventDefault()
                        alert("Az e-mail címek nem egyeznek!")
                      }
                    }}
                  >
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
