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
      <div className="container">
        <div className="row tight--desktop--container">
          <div className="col index-namaste">
            <Icons.Namaste />
            <h3>Our English language site is under development.</h3>
          </div>
        </div>
        <br />
        <div className="row tight--desktop--container">
          <div className="col">
            {" "}
            <p className="mb-20px">
              In the meantime, if you have any questions, please send us a
              message. If you would like to join our astanga mysore program,
              please fill out the application form below.
            </p>
          </div>
        </div>
        <div className="row tight--desktop--container">
          <CustomLink
            link="/contact"
            classNames="heading heading--3  link-decoration-remove clr-brand-orange schedule-teacher"
            title="Shala location"
          />{" "}
        </div>
        <div className="row tight--desktop--container">
          <CustomLink
            link="/contact"
            classNames="heading heading--3  link-decoration-remove clr-brand-orange schedule-teacher"
            title="Send us a message"
          />
        </div>
        <div className="row tight--desktop--container">
          <CustomLink
            link="/mysore-programme-application"
            classNames="heading heading--3  link-decoration-remove clr-brand-orange schedule-teacher"
            title="Mysore Program Application"
          />{" "}
        </div>
        <div className="row tight--desktop--container mt-20px">
          <p className="mt-20px">We welcome you to our yoga shala!</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="English" />
