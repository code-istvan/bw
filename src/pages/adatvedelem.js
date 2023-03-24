import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"

export default function Adatvedelem() {
  return (
    <LayoutBlog>
      <Seo title="Adatvédelem" />
      <div className="row">
        <h1>Adatvédelem</h1>
      </div>
    </LayoutBlog>
  )
}
