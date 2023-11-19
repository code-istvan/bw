import React, { useState } from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import CustomSelect from "../components/CustomSelect"
import "../sass/pages/_mysoreprogramjelentkezes.scss"

export default function MysoreprogramJelentkezes() {
  const [email, setEmail] = useState("")
  const [emailConfirm, setEmailConfirm] = useState("")
  const [selectedValue, setSelectedValue] = useState("")
  const handleSelectChange = selectedValue => {
    setSelectedValue(selectedValue)
  }

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">MYSORE PROGRAMME APPLICATION</h1>
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
          <h3>APPLICATION FORM</h3>
        </div>
        <div className="row">
          <div className="col">
            <form
              name="mysore english bandhaworks"
              action="/mysore-application-english"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="form-name"
                value="mysore english bandhaworks"
              />
              <input type="hidden" name="Tapasztalat" value={selectedValue} />

              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="row gap-five">
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="familyname"
                    placeholder="Family name"
                    pattern="^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="surnamename"
                    placeholder="Last name"
                    pattern="^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                    required="required"
                    className="form-style col-12-xs col-6-md mb-20px"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    id="email2"
                    type="email"
                    name="email2"
                    placeholder="Email once again"
                    pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                    required="required"
                    className="form-style col-12-xs col-6-md mb-20px"
                    value={emailConfirm}
                    onChange={e => setEmailConfirm(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <CustomSelect
                  options={[
                    "I am a complete beginner",
                    "I've been on the Astanga",
                    "I have experience of Mysore practice",
                  ]}
                  onChange={handleSelectChange}
                  placeholder="Choose experience level"
                />
              </div>

              <div className="row massage-wrapper mb-2">
                <TextArea
                  className="kapcsolat__textarea"
                  name="comments"
                  rows="6"
                  placeholder="If you have experience in astanga yoga, please describe how long you have been
                  and how regularly you practice. Who have you learned from so far,
                  how long? Do you have any experience of practicing Mysore?
                  Can you practice on your own without outside help?"
                ></TextArea>
              </div>
              <div className="row">
                <div className="col contact_checkbox">
                  <label className="form-style span span--bold clr-shades-lightGray custom-checkbox orange">
                    <input type="checkbox" name="checkbox" required />
                    <span>
                      I have read and accept
                      <Link to="/adatvedelmi-tajekoztato">
                        {" "}
                        the privacy policy
                      </Link>
                      , and consent to the processing of my name and email
                      address.
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
                        alert("Az email címek nem egyeznek!")
                      }
                    }}
                  >
                    SEND
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

export const Head = ({ location }) => (
  <Seo title="MYSORE PROGRAMME APPLICATION" location={location} />
)
