import * as React from "react"
import Seo from "../components/seo"
// import { Link } from "gatsby"

export default function Developmentpage() {
  return (
    <div className="container">
      <Seo title="Developer page" />
      <div className="row">
        <h1 className="mb-2">Development-page</h1>
        <h3 className="mb-2">Tags challenge</h3>
        <p className="span">Span - Nunito Sans</p>
        <p className="span span--bold">SpanBold - Nunito Sans</p>
      </div>
    </div>
  )
}
