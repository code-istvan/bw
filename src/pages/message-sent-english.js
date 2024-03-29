import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function MessageSentEnglish() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">MESSAGE SENT</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/confirm_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga Yoga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobile-image"
            src="../images/confirm_mobile.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga Yoga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="message-sent--wrapper tight--desktop--container">
        <div className="row mt-40px">
          <div className="col">
            <h3 className="mb-20px">Thank you for getting in touch with us!</h3>
            <p>Your message has been received on our server!</p>
            <p className="mt-20px">
              Our team will process your message in the coming working days -
              usually within 24-48 hours. We will respond soon.
            </p>
            <p className="mt-20px">
              If you don't receive a response within 48 hours on working days,
              it's possible that you have provided an incorrect email address or
              our response might have landed in your{" "}
              <strong>
                <u>SPAM</u>
              </strong>{" "}
              folder!
            </p>
            <div className="separator-horizontal mt-20px"></div>
            <h3 className="clr-brand-orange">Where is our email address?</h3>
            <p className="mt-20px">
              Security and data protection are top priorities on our website. To
              avoid unwanted spam messages and phishing attempts, we have
              decided not to publish our email address.
            </p>
            <p className="mt-20px">
              This practice is an industry standard in today's digital world,
              aiming to create the safest environment possible for our users.
            </p>
            <p className="mt-20px">
              If you continue to encounter issues with contacting us through the
              website, please feel free to send us a Facebook message (see
              footer) or come visit us in person! This is the traditional way of
              contacting in the yoga world. Thank you!
            </p>
          </div>

          <div className="row mt-40px">
            <Button
              type="button"
              buttonStyle="btn--small--outline"
              onClick={() => {
                navigate("/english")
              }}
            >
              Back to Homepage
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "confirm_desktop.jpeg" }) {
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
  const pageTitle = "Message sent | " + data.site.siteMetadata.title
  const pageDescription = "Your message has been successfully sent."

  return (
    <CustomHead
      lang="en"
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
