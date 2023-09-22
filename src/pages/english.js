import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Icons from "../components/Icons/Icons"
import { CustomLink } from "../components/CustomLink"
import "../sass/pages/_english.scss"

export default function English() {
  return (
    <Layout>
      <Hero />
      <div className="tight--desktop--container">
        <div className="row index-namaste">
          <Icons.Namaste />
        </div>
        <div className="row">
          {" "}
          <h3 className="mt-40px">
            Our English language site is under development.
          </h3>
        </div>
        <br />
        <div className="row">
          {" "}
          <p className="mb-40px">
            In the meantime, if you have any questions, please send us a
            message. If you would like to join our astanga mysore program,
            please fill out the application form below.
          </p>
        </div>
        <div className="row mb-20px">
          <div className="english-menu">
            <div className="english-menu-items">
              {" "}
              <div className="english-page-index">
                <span className="english-page-index---number">1</span>
              </div>
              <CustomLink
                link="/contact"
                classNames="heading heading--3 clr-brand-orange schedule-teacher english-menu-item"
                title="Shala location"
              />
            </div>

            <div className="english-menu-items">
              <div className="english-page-index">
                <span className="english-page-index---number">2</span>
              </div>
              <CustomLink
                link="/contact"
                classNames="heading heading--3 clr-brand-orange schedule-teacher english-menu-item"
                title="Send us a message"
              />
            </div>
            <div className="english-menu-items">
              <div className="english-page-index">
                <span className="english-page-index---number">3</span>
              </div>
              <CustomLink
                link="/mysore-programme-application"
                classNames="heading heading--3 clr-brand-orange schedule-teacher english-menu-item"
                title="Mysore Program Application"
              />{" "}
            </div>
            <div className="english-menu-items">
              <div className="english-page-index">
                <span className="english-page-index---number">4</span>
              </div>
              <CustomLink
                link="/prices"
                classNames="heading heading--3 clr-brand-orange schedule-teacher english-menu-item"
                title="Prices"
              />{" "}
            </div>
          </div>
        </div>
        <div className="row mt-20px">
          <p className="mt-20px">We welcome you to our yoga shala!</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo title="English" location={location} />
)
