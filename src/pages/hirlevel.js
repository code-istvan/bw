import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import Button from "../components/Buttons/Button"
import InputField from "../components/InputField"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/pages/_hirlevel.scss"

const Hirlevel = () => (
  <Layout>
    <div className="hirlevel-wrapper">
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">Feliratkozás hírlevélre</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row tight--desktop--container">
        <div className="col mt-20px mb-20px">
          <p>
            Iratkozz fel hírlevelünkre, hogy elsőként értesülj jógaiskolánkat
            érintő történésekről. Havonta max. egy hírlevelet küldünk. Harmadik
            fél számára nem adjuk ki a feliratkozók nevét és email címét.
          </p>
        </div>
        <form
          name="newsletter bandhaworks"
          action="/subscription-sent"
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
          <div className="row tight--desktop--container gap-1">
            <div className="col-12-xs col-6-md hirlevel-input-name">
              <InputField
                type="text"
                name="name"
                placeholder="Név"
                pattern="^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$"
                required="required"
              />
            </div>
            <div className="col-12-xs col-6-md hirlevel-input-email">
              <InputField
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                required="required"
              />
            </div>
          </div>
          <div className="row tight--desktop--container">
            <div className="col">
              <label className="form-style hirlevel-acceptance custom-checkbox orange">
                <input type="checkbox" name="checkbox" required />
                <span>
                  Megismertem és elfogadom az
                  <Link href="/adatvedelmi-tajekoztato">
                    {" "}
                    adatvédelmi tájékoztatót
                  </Link>
                  , hozzájárulok a megadott adataim kezeléséhez.
                </span>
              </label>
            </div>
          </div>

          <div className="hirlevel-button">
            <Button type="submit" buttonStyle="btn--secondary--solid">
              Feliratkozás
            </Button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default Hirlevel

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hirlevel_desktop.jpeg" }) {
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
  const pageTitle = "Hírlevél | " + data.site.siteMetadata.title
  const pageDescription = "Itt tudsz feliratkozni hírlevelünkre."

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
