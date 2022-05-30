import * as React from "react"
import "../../sass/components/_navbarmenufooter.scss"
import Button from "../Button"
import { navigate } from "gatsby"

const NavbarMenuFooter = () => (
  <div className="menuFooter--box">
    <ul>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--test"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/hirlevel")
          }}
        >
          ENGLISH
        </Button>
      </li>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--test"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/hirlevel")
          }}
        >
          日本語
        </Button>
      </li>

      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--test"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/hirlevel")
          }}
        >
          TANFOLYAMOK
        </Button>
      </li>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--test"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/hirlevel")
          }}
        >
          MYSORE PROGRAM
        </Button>
      </li>
      <li>
        {" "}
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--test"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/hirlevel")
          }}
        >
          ÓRAREND
        </Button>
      </li>
    </ul>
  </div>
)

export default NavbarMenuFooter
