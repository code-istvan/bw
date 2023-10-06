import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "./Buttons/Button"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import "../sass/components/_hero.scss"

const Hero = () => {
  const location = useLocation()
  const isEnglish = location.pathname.includes("/english")

  return (
    <>
      <div className="hero-container">
        <div className="conatiner">
          <div className="page-hero-container">
            <div className="row">
              <StaticImage
                className="container-fluid page-hero-image page-big-image"
                src="../images/hero_desktop.jpg"
                layout="fullWidth"
                loading="eager"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Astanga jóga Mysore"
                placeholder="blurred"
              />
              <StaticImage
                className="container-fluid page-hero-image page-mobil-image"
                src="../images/hero_mobil.jpeg"
                layout="fullWidth"
                loading="eager"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Astanga jóga Mysore"
                placeholder="blurred"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="hero-text">
                <p className="hero--font-big">
                  {isEnglish ? "The only way " : "Az egyetlen kiút"} <br />
                  {isEnglish ? "OUT is IN" : "befelé vezet"} <br />
                </p>
                <p className="hero--font-subtitle mb-20px">
                  {isEnglish ? (
                    <>
                      Traditional astanga yoga shala with
                      <br />
                      the blessing of Paramaguru
                    </>
                  ) : (
                    <>
                      Tradicionális astanga jógaiskola
                      <br />a Paramaguru áldásával
                    </>
                  )}
                </p>
                <div className="hero-button-desktop">
                  <Button
                    type="button"
                    buttonStyle="btn--primary--outline"
                    className=""
                    onClick={() => {
                      navigate("/astanga-mysore-program")
                    }}
                  >
                    Astanga Mysore-program
                  </Button>
                </div>
              </div>
              <div className="hero--buttons">
                <Button
                  type="button"
                  buttonStyle="btn--primary--outline-full"
                  className=""
                  onClick={() => {
                    navigate("/astanga-mysore-program")
                  }}
                >
                  Astanga Mysore-program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
