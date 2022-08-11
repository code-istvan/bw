import * as React from "react"
import FooterMobil from "./FooterMobil"
// import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Footer = () => {
  // const breakpoints = useBreakpoint()

  return (
    <div className="container fluid">
      {/* {breakpoints.md ? <FooterMobil /> : <FooterMobil />} */}
      <FooterMobil />
    </div>
  )
}

export default Footer

// when the desktop menu is ready

{
  /* <div className="row">{breakpoints.md ? <NavbarMobil /> : <NavbarDesktop />}</div> */
}
