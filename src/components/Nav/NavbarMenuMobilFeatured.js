import * as React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import "../../sass/components/_navbarmenumobilfeatured.scss"

const NavbarMenuMobilFeatured = () => {
  const mobilFeaturedItems = [
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
    // { link: "/admin", label: "LOG_IN" },
    // { link: "/english", label: "日本語" },
  ]

  return (
    <div className="navbar-menu-mobil-featured">
      <div className="navbar-menu-mobil-featured-container">
        {mobilFeaturedItems.map(({ label, link }) => (
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

export default NavbarMenuMobilFeatured
