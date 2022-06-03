import * as React from "react"
import "../../sass/components/_navbarmenulanguageoptions.scss"
import Button from "../Button"
import { navigate } from "gatsby"

const NavbarMenuLanguageOptions = () => (
  <div className="menuLanguage--box">
    <ul>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu--small"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/english")
          }}
        >
          LOG_IN
        </Button>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu--small"
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
          buttonStyle="btn--mobil--secondary--outline--menu--small"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/english")
          }}
        >
          日本語
        </Button>
      </li>
      <br />
    </ul>
  </div>
)

export default NavbarMenuLanguageOptions
