import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"

export default function Ajanlottolvasmanyok() {
  return (
    <LayoutBlog>
      <Seo title="Ajánlott olvasmányok" />
      <div className="row">
        <h1>Ajánlott olvasmányok</h1>
      </div>
    </LayoutBlog>
  )
}
