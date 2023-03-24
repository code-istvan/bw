import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Tanfolyam() {
  return (
    <LayoutBlog>
      <Seo title="TANFOLYAMOK" />
      <div className="row">
        <h1>TANFOLYAMOK</h1>
      </div>
    </LayoutBlog>
  )
}
