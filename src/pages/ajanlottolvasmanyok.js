import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import RecommendedReadings from "../data/recommendedReadings.json"
import "../sass/pages/_olvasmanyok.scss"

export default function Ajanlottolvasmanyok() {
  return (
    <Layout>
      <Seo title="AJÁNLOTT OLVASMÁNYOK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">AJÁNLOTT OLVASMÁNYOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
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
      <div className="olvasmanyok-wrapper">
        <div className="row">
          <div className="col unordered-list-style">
            <h3>Astanga vinyásza jóga</h3>
            <br />
            <ul>
              {RecommendedReadings.olvasmanyokAstanga &&
                RecommendedReadings.olvasmanyokAstanga.map(
                  ({ author, title }) => (
                    <li key={title}>
                      <p>
                        <strong>{author}</strong>: {title}
                      </p>
                    </li>
                  )
                )}
            </ul>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col unordered-list-style">
            <h3>Vinyásza krama jóga</h3>
            <br />
            <ul>
              {RecommendedReadings.olvasmanyokKrama &&
                RecommendedReadings.olvasmanyokKrama.map(
                  ({ author, title }) => (
                    <li key={title}>
                      <p>
                        <strong>{author}</strong>: {title}
                      </p>
                    </li>
                  )
                )}
            </ul>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col unordered-list-style">
            <h3>Egyéb spirituális könyvek amiket előszeretettel forgatunk</h3>
            <br />
            <ul>
              {RecommendedReadings.olvasmanyokSpiri &&
                RecommendedReadings.olvasmanyokSpiri.map(
                  ({ author, title }) => (
                    <li key={title}>
                      <p>
                        <strong>{author}</strong>: {title}
                      </p>
                    </li>
                  )
                )}
            </ul>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col unordered-list-style">
            <h3>Táplálkozással, életvitellel kapcsolatos könyvek</h3>
            <br />
            <ul>
              {RecommendedReadings.olvasmanyokFood &&
                RecommendedReadings.olvasmanyokFood.map(({ author, title }) => (
                  <li key={title}>
                    <p>
                      <strong>{author}</strong>: {title}
                    </p>
                  </li>
                ))}
            </ul>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  )
}
