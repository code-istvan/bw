import * as React from "react"
import Seo from "../components/seo"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import GoogleMap from "../components/GoogleMap/GoogleMap"
import Layout from "../components/Layouts/Layout"
import SocialBlock from "../components/Icons/SocialBlock"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Icons from "../components/Icons/Icons"
import "../sass/pages/_kapcsolat.scss"

export default function Contact() {
  const breakpoints = useBreakpoint()
  const dialogRef = React.useRef(null)

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=47.51416,19.03734", "_blank")
  }

  const openWaze = () => {
    window.open(
      "https://waze.com/ul?ll=47.51416,19.51416&navigate=yes",
      "_blank"
    )
  }

  return (
    <Layout>
      <GoogleMap />

      <div className="row gap-1 kapcsolat-navigation">
        <div className="col-6-xs kapcsolat-navigation-button">
          <Button
            type="submit"
            buttonStyle="btn--secondary--outline"
            onClick={openGoogleMaps}
          >
            Google Maps
          </Button>
        </div>
        <div className="col-6-xs kapcsolat-navigation-button">
          <Button
            type="submit"
            buttonStyle="btn--secondary--outline"
            onClick={openWaze}
          >
            Waze
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="kapcsolat-title mb-20px">Contact</h1>
        </div>
      </div>
      <div className="row gap-2">
        <div className="col-12-xs col-6-md contact-body">
          <address>
            <h3 className="mb-0">Bandha Works Yoga School</h3>
            <div className="kapcsolat-address">
              <p>Address: </p>
              <p className="clr-brand-orange">
                1027 Budapest, Frankel Leó út 18.
              </p>
            </div>
          </address>
          <p className="clr-shades-lightGray span span--bold mt-20px contact-text">
            The entrance is from the street front, through the brown door on the
            left side of the building entrance.
          </p>
          <p className="clr-shades-lightGray span span--bold mt-20px">
            Parking zone code on the street: 0201. Parking is required (you have
            to pay for parking) from Monday to Friday between 8:30 AM and 10:00
            PM.
          </p>
          <div className="kapcsolat-modal-box">
            <dialog ref={dialogRef} className="kapcsolat-modal-open">
              <div>
                <h3 className="mb-20px">Where is our email address?</h3>
                <p>
                  On our website, security and data protection are of high
                  priority. In order to avoid unwanted spam messages and
                  phishing attempts, we have decided not to publish our email
                  address.
                </p>
                <br />
                <p>
                  Send us a message through the contact form on the website.
                  Once we receive your message, you will receive an automated
                  confirmation email.
                </p>
              </div>
              <button
                onClick={() => {
                  if (dialogRef.current) {
                    dialogRef.current.close()
                  }
                }}
              >
                <Icons.Close color="darkGrey" />
              </button>
            </dialog>
            <Button
              type="submit"
              buttonStyle="btn--third--naked-orange"
              onClick={() => {
                if (dialogRef.current) {
                  dialogRef.current.showModal()
                }
              }}
            >
              Where is our email address?
            </Button>
          </div>

          {breakpoints.md ? null : <SocialBlock language="english" />}
        </div>
        <div className="col-12-xs col-6-md contact-message">
          <div className="row">
            <h3 className="mb-20px">Send us a message</h3>
          </div>
          <form
            name="contact english bandhaworks"
            action="/message-sent-english/"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact english bandhaworks"
            />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className="row gap-five">
              <div className="col-12-xs col-6-md">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Name"
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
                  required="required"
                  className="form-style col-12-xs col-6-md mb-20px"
                  pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                />
              </div>
            </div>
            <div className="row massage-wrapper mb-2">
              <TextArea
                className="kapcsolat__textarea"
                name="comments"
                rows="4"
                placeholder="Message"
                required
              ></TextArea>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-style span span--bold clr-shades-lightGray custom-checkbox orange">
                  <input type="checkbox" name="checkbox" required />
                  <span>
                    I have read and accept the{" "}
                    <Link to="/adatvedelmi-tajekoztato/">privacy policy</Link>,
                    and I consent to the handling of my name and email address.
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12-xs col-4-md mb-2 contact-button mt-20px">
                <Button type="submit" buttonStyle="btn--secondary--solid">
                  SEND
                </Button>
              </div>
            </div>
          </form>
          {breakpoints.md ? <div className="separator-horizontal"></div> : null}
          {breakpoints.md ? <SocialBlock language="english" /> : null}
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Seo
      title="Contact | Bandha Works Shala"
      lang="en"
      description="Here you can find our contacts"
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
