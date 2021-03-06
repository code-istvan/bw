import * as React from "react"
import "../../sass/components/_navbarmenufooter.scss"
import Button from "../Button"
import { navigate } from "gatsby"

const NavbarMenuFooter = () => {
  const menuItemsFooter = [
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
    { link: "/orarend", label: "ÓRAREND" },
  ]

  return (
    <div className="menuFooter--box">
      <hr className="solid"></hr>
      <ul>
        {menuItemsFooter.map(({ label, link }) => (
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
    </div>
  )
}

export default NavbarMenuFooter
