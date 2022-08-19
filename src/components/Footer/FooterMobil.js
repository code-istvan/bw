import React from "react"
import "../../sass/components/_footermobil.scss"
// import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button"
import Icon from "../Icons/Icon"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

export default function FooterMobil() {
  return (
    <div className="container footer">
      <Helmet>
        {" "}
        <script
          src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
          defer
        ></script>
      </Helmet>
      <div className="row">
        <div className="col mt-4 mb-4">
          <Icon.Logo />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Astanga Jógaiskola Paramaguru Sharath Jois áldásával</p>
          <strong>IRATKOZZ FEL HÍRLEVELÜNKRE</strong>
          <p>
            Értesülj a legfrisebb eseményeinkről és egyéb jógás hírekről
            elsőkézből
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            type="button"
            buttonStyle="btn--mobil--secondary--outline"
            buttonSize="btn--small"
            onClick={() => {
              navigate("/hirlevel")
            }}
          >
            FELIRATKOZÁS
          </Button>
        </div>
      </div>
      <div className="row footer__social">
        <div className="col">
          <p>
            <strong>KÖZÖSSÉG</strong>
          </p>
          <Icon.Facebook url="https://www.facebook.com/bandhaworks" />
          <Icon.Instagram url="https://www.instagram.com/bandhaworks/" />
          <Icon.Twitter url="https://twitter.com/IstvnSzalai5/" />
          <Icon.Soundcloud url="https://soundcloud.com/bandhaworks-hu/" />
          <Icon.Messenger url="http://m.me/bandhawork" />
          <Icon.Telegram url="https://t.me/@istvan108" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <strong>KAPCSOLAT</strong>
          <br />
          <strong>ADATÉDELEM</strong>
          <br />
          <strong>SHOP</strong>
          <br />
          <strong>TÁPLÁLKOZÁS</strong>
          <br />
          <strong>AJÁNLOTT OLVASMÁNYOK</strong>
          <br /> <br />
        </div>
      </div>
      <div id="wcb" class="carbonbadge wcb-d"></div>

      <p className="footer--designedby">
        Designed by <br />
        <a href="https://omworks.hu">OMWORKS YOGA CREATIVES</a>
      </p>
    </div>
  )
}
