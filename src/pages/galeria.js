import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Galeria() {
  return (
    <LayoutBlog>
      <Seo title="Galéria" />
      <div className="row">
        <h1>GALÉRIA</h1>
      </div>
    </LayoutBlog>
  )
}
