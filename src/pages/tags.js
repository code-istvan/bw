import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Tags() {
  return (
    <LayoutBlog>
      <Seo title="RÓLUNK" />
      <div className="row">
        <h1>Tags Welcome</h1>
      </div>
    </LayoutBlog>
  )
}
