import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
// import { Link } from "gatsby"
import "../sass/pages/_hazirend.scss"

export default function Házirend() {
  return (
    <Layout>
      <Seo title="HÁZIREND" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>HÁZIREND</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12-xs col-6-md bal">bal</div>
          <div className="col-12-xs col-6-md jobb">jobb</div>
        </div>
      </div>
    </Layout>
  )
}
