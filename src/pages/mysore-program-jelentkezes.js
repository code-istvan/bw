import React, { useState } from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import CustomSelect from "../components/CustomSelect"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
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
              <input type="hidden" name="Tapasztalat" value={selectedValue} />

              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="row gap-five">
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="familyname"
                    placeholder="Családi név"
                    pattern="^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$"
                    required="required"
                  />
                </div>
                <div className="col-12-xs col-6-md">
                  <InputField
                    type="text"
                    name="surnamename"
                    placeholder="Utónév"
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
                    placeholder="Email mégegyszer"
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
                    "Teljesen kezdő vagyok",
                    "Astangáztam már",
                    "Van Mysore-gyakorlás tapasztalatom",
                  ]}
                  onChange={handleSelectChange}
                  placeholder="Válassz tapasztalati szintet"
                />
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
                      <Link to="/adatvedelmi-tajekoztato">
                        {" "}
                        adatvédelmi tájékoztatót
                      </Link>
                      , hozzájárulok nevem és email címem kezeléséhez.
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

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mysore_desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const pageTitle =
    "Mysore-program jelentkezés | " + data.site.siteMetadata.title
  const pageDescription = "Mysore-program jelentkezési felület"

  return (
    <CustomHead
      canonical={siteUrl + location.pathname}
      title={pageTitle}
      description={pageDescription}
      image={ogImage}
      schemaData={{
        "@type": "WebPage",
        name: pageTitle,
        description: pageDescription,
        url: `${siteUrl}${location.pathname}`,
        logo: "https://mula.bandha.works/images/bw_logo.png",
      }}
    />
  )
}
