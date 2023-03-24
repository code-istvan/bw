import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"

export default function Taplalkozas() {
  return (
    <LayoutBlog>
      <Seo title="Táplálkozás" />
      <div className="row">
        <h1>Táplálkozás</h1>
      </div>
    </LayoutBlog>
  )
}
