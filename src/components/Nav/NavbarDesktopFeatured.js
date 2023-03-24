import * as React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import "../../sass/components/_navbardesktopfeatured.scss"

const NavbarDesktopFeatured = () => {
  const desktopSubmenuItems = [
    { link: "/english", label: "ENGLISH" },
    { link: "/english", label: "日本語" },
    { link: "/admin", label: "LOG_IN" },
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
  ]

  return (
    <div className="navbar-desktop-featured-wrapper">
      <div className="navbar-desktop-featured-container">
        <ul>
          {desktopSubmenuItems.map(({ label, link }) => (
            <li key={label}>
              <Button
                type="button"
                buttonStyle="btn--menu--outline"
                onClick={() => {
                  navigate(link)
                }}
              >
                {label}
              </Button>
            </li>
          ))}
        </ul>
        <br /> <br />
        <hr className="solid"></hr>
      </div>
    </div>
  )
}

export default NavbarDesktopFeatured
