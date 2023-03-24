import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function English() {
  return (
    <LayoutBlog>
      <Seo title="English" />
      <div className="row">
        <h1>ENGLISH</h1>
      </div>
    </LayoutBlog>
  )
}
