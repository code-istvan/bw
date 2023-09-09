import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero"
import Icons from "../components/Icons/Icons"
import SectionRolunk from "../components/Sections/SectionRolunk"
import SectionParampara from "../components/Sections/SectionParampara"
import SectionEvents from "../components/Sections/SectionEvents"
import SectionMysoreProgram from "../components/Sections/SectionMysoreProgram"
import Counter from "../components/Counter"
import "../sass/pages/_index.scss"

const IndexPage = () => (
  <>
    <Layout>
      <Hero />
      <div className="row index-namaste">
        <div className="col mt-20px mb-20px">
          <Icons.Namaste />
        </div>
      </div>
      <SectionRolunk />
      <SectionParampara />
      <SectionMysoreProgram />
      <SectionEvents />
      <div className="row">
        <div className="col">
          <Counter tag="p" />
        </div>
      </div>
      <div className="row"></div>
    </Layout>
  </>
)

export default IndexPage

export const Head = () => <Seo title="FŐOLDAL" />
