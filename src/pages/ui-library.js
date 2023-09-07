import React from "react"
import Seo from "../components/seo"
import useBreakpoint from "../components/useBreakpoint"

// import { Link } from "gatsby"

export default function Uilibrary() {
  const { breakpoint } = useBreakpoint()

  // const [isOpen, setIsOpen] = useState(false)

  // const openModal = () => {
  //   setIsOpen(true)
  // }

  // const closeModal = () => {
  //   setIsOpen(false)
  // }

  // const openModal2 = () => {
  //   // Itt végezheted el a szükséges műveleteket
  //   console.log("Modális ablak megnyitva!")
  // }

  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">BANDHA WORKS - UI Library</h1>
        <div className="row">
          <p>The current breakpoint is: {breakpoint}</p>
        </div>
        <div className="row">
          {breakpoint === "xs" ? (
            <p>You are on an extra small screen!</p>
          ) : (
            <p>You are on a screen bigger than extra small!</p>
          )}
        </div>
        <div className="row">
          {breakpoint === "xs" ? <p>pici</p> : <p>nagy</p>}
        </div>
        <br /> <br />
        <div className="row">
          <h3 className="mb-3">Fonts</h3>
          <h1>H1 - Abril Fatface</h1>
          <h2>H2 - Abril Fatface</h2>
          <h3>H3 - Nunito Sans</h3>
          <h4>H4 - Abril Fatface</h4>
          <h5>H5 - Nunito Sans</h5>
          <p>Body - Nunito Sans</p>
          <p className="span">Span - Nunito Sans</p>
          <p className="span span--bold">SpanBold - Nunito Sans</p>
        </div>
        <div className="row gap-1">
          <div className="col-12-xs col-6-md col-4-xl">
            <div className="a">1</div>
          </div>
          <div className="col-12-xs col-6-md col-4-xl">
            <div className="a">2</div>
          </div>
          <div className="col-12-xs col-6-md col-4-xl">
            <div className="a">3</div>
          </div>
        </div>
        <div className="row gap-1">
          <div className="col-12-xs col-8-md col-8-xl">
            <div className="a">BLOG</div>
          </div>
          <div className="col-12-xs col-4-md col-4-xl">
            <div className="a">TAGS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="UI Library" />
