import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Rolunk() {
  return (
    <LayoutBlog>
      <Seo title="RÓLUNK" />
      <div className="row">
        <h1>RÓLUNK</h1>
        {/* <div className="container-fluid bg-primary-orange">
            <div className="container">
              <p>
                mlorem5lorem5lorem5lorem5lorem5lorem5lorem5lorem5lorem5lorem5lorem5lorem5
              </p>
            </div>
          </div> */}
      </div>
    </LayoutBlog>
  )
}
