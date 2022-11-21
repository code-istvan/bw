import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Elsoalkalom() {
  return (
    <Layout>
      <Seo title="ELSŐ ALKALOM" />
      <div className="row">
        <h1>ELSŐ ALKALOM</h1>
      </div>
    </Layout>
  )
}
