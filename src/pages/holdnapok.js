import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Holdnapok() {
  return (
    <LayoutBlog>
      <Seo title="HOLDNAPOK" />
      <div className="row">
        <h1>HOLDNAPOK</h1>
      </div>
    </LayoutBlog>
  )
}
