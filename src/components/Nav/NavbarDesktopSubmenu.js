import * as React from "react"
import "../../sass/components/_navbarmenulanguageoptions.scss"
import Button from "../Button"
import { navigate } from "gatsby"

const NavbarDesktopSubmenu = () => {
  const desktopSubmenuItems = [
    { link: "/admin", label: "LOG_IN" },
    { link: "/english", label: "ENGLISH" },
    // { link: "/english", label: "日本語" },
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
  ]

  return (
    <div className="menuLanguage--box">
      <ul>
        {desktopSubmenuItems.map(({ label, link }) => (
          <li key={label}>
            <Button
              type="button"
              buttonStyle="btn--mobil--secondary--outline--menu--small"
              buttonSize="btn--small"
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
  )
}

export default NavbarDesktopSubmenu
