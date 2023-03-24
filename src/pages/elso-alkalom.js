import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Elsoalkalom() {
  return (
    <LayoutBlog>
      <Seo title="ELSŐ ALKALOM" />
      <div className="row">
        <h1>ELSŐ ALKALOM</h1>
      </div>
    </LayoutBlog>
  )
}
