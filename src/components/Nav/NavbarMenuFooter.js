import * as React from "react"
import "../../sass/components/_navbarmenufooter.scss"
import Button from "../Button"
import { navigate } from "gatsby"

const NavbarMenuFooter = () => (
  <div className="menuFooter--box">
    <hr className="solid"></hr>
    <ul>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu--small"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/mysore-program")
          }}
        >
          MYSORE PROGRAM
        </Button>
      </li>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu--small"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/tanfolyam")
          }}
        >
          TANFOLYAMOK
        </Button>
      </li>
      <li>
        {" "}
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu--small"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/orarend")
          }}
        >
          ÓRAREND
        </Button>
      </li>
    </ul>
  </div>
)

export default NavbarMenuFooter
