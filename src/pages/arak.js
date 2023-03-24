import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Arak() {
  return (
    <LayoutBlog>
      <Seo title="ÁRAK" />
      <div className="row">
        <h1>ÁRAK</h1>
      </div>
    </LayoutBlog>
  )
}
