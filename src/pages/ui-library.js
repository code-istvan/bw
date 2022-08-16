import * as React from "react"
import Seo from "../components/seo"
// import { Link } from "gatsby"

export default function Uilibrary() {
  return (
    <div className="container">
      <Seo title="UI Library" />
      <div className="row">
        <h1 className="mb-5">BANDHA WORKS - UI Library</h1>
        <h3 className="mb-3">Fonts</h3>
        <h1>H1 - Abril Fatface</h1>
        <h2>H2 - Abril Fatface</h2>
        <h3>H3 - Nunito Sans</h3>
        <h4>H4 - Abril Fatface</h4>
        <h5>H5 - Nunito Sans</h5>
        <p>Body - Nunito Sans</p>
        <p className="span">Span - Nunito Sans</p>
        <p className="span span--bold">SpanBold - Nunito Sans</p>
      </div>
    </div>
  )
}
