import * as React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import "../../sass/components/_navbarmenumobilheader.scss"

const NavbarMenuMobilHeader = () => {
  const mobilHeaderItems = [
    { link: "/english", label: "ENGLISH" },
    { link: "/orarend", label: "ÓRAREND" },
  ]

  return (
    <div className="navbar-menu-mobil-header-wrapper">
      <div className="navbar-menu-mobil-header-container">
        {mobilHeaderItems.map(({ label, link }) => (
          <Button
            key={label}
            type="button"
            buttonStyle="btn--secondary--outline"
            onClick={() => {
              navigate(link)
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default NavbarMenuMobilHeader
