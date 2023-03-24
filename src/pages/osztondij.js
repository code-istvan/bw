import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Osztondij() {
  return (
    <LayoutBlog>
      <Seo title="ÖSZTÖNDÍJ" />
      <div className="row">
        <h1>ÖSZTÖNDÍJ</h1>
      </div>
    </LayoutBlog>
  )
}
