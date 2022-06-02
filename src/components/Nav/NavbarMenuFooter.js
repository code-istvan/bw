import * as React from "react"
import "../../sass/components/_navbarmenufooter.scss"
import Button from "../Button"
import { navigate } from "gatsby"

const NavbarMenuFooter = () => (
  <div className="menuFooter--box">
    <ul>
      {/* <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--solid--menu"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/english")
          }}
        >
          ENGLISH
        </Button>
      </li>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--solid--menu"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/english")
          }}
        >
          日本語
        </Button>
      </li> */}
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu"
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
          buttonStyle="btn--mobil--secondary--outline--menu"
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
          buttonStyle="btn--mobil--secondary--outline--menu"
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
