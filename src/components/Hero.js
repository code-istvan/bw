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
                <h1 className="hero--font-big">
                  {isEnglish ? "The only way " : "Az egyetlen kiút"} <br />
                  {isEnglish ? "OUT is IN" : "befelé vezet"} <br />
                </h1>
                <h2 className="hero--font-subtitle">
                  {isEnglish ? (
                    <>
                      Traditional astanga yoga shala with{" "}
                      <br className="display-none-mobil" />
                      the blessing of Paramaguru
                    </>
                  ) : (
                    <>
                      Tradicionális astanga jógaiskola <br />a Paramaguru
                      áldásával
                    </>
                  )}
                </h2>
                <Button
                  type="button"
                  buttonStyle="btn--primary--outline-full"
                  className="hero-button-mobil display-none-desktop "
                  onClick={() => {
                    navigate("/astanga-mysore-program")
                  }}
                >
                  Astanga Mysore-program
                </Button>
                <div>
                  <Button
                    type="button"
                    buttonStyle="btn--primary--outline"
                    className="hero-button-desktop"
                    onClick={() => {
                      navigate("/ashtanga-mysore-program")
                    }}
                  >
                    Ashtanga Mysore Program
                  </Button>
                </div>
              </div>
              {/* <div className="hero--buttons hero-button-mobil">
                <Button
                  type="button"
                  buttonStyle="btn--primary--outline-full"
                  className="hero-button-mobil"
                  onClick={() => {
                    navigate("/astanga-mysore-program")
                  }}
                >
                  Astanga Mysore-program
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
