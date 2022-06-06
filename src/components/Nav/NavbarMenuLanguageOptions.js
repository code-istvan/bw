import * as React from "react"
import "../../sass/components/_navbarmenulanguageoptions.scss"
import Button from "../Button"
import { navigate } from "gatsby"
import Separator from "../Separator"

const NavbarMenuLanguageOptions = () => (
  <div className="menuLanguage--box">
    <ul>
      <li>
        <Button
          type="button"
          buttonStyle="btn--mobil--secondary--outline--menu--small"
          buttonSize="btn--small"
          onClick={() => {
            navigate("/admin")
          }}
        >
          LOG_IN
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
    </ul>
    <br /> <br />
    <hr className="solid"></hr>
  </div>
)

export default NavbarMenuLanguageOptions
