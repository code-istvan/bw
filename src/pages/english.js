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
      <Seo title="English" />
      <Hero />
      <div className="container">
        <div className="row tight--desktop--container">
          <div className="col index-namaste mt-20px mb-20px">
            <Icons.Namaste />
            <h3>Our English language site is under development.</h3>
          </div>
        </div>
        <br />
        <div className="row tight--desktop--container mb-40px">
          <div className="col">
            {" "}
            <p>
              In the meantime, if you have any questions, please send us a
              message. If you would like to join our astanga mysore program,
              please fill out the application form below.
            </p>
          </div>
        </div>{" "}
        <br />
        <div className="row tight--desktop--container mt-40px">
          <CustomLink
            link="/mysore-programme-application"
            classNames="heading heading--3  link-decoration-remove clr-brand-orange schedule-teacher"
            title="Mysore Program Application"
          />{" "}
        </div>
        <div className="row tight--desktop--container mt-40px">
          <CustomLink
            link="/kapcsolat"
            classNames="heading heading--3  link-decoration-remove clr-brand-orange schedule-teacher"
            title="Send us a message"
          />
        </div>
      </div>
    </Layout>
  )
}
