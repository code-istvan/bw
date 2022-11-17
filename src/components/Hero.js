import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../components/Buttons/Button"
import { navigate } from "gatsby"
import "../sass/components/_hero.scss"

const Hero = () => (
  <>
    <div className="hero-container">
      <div className="conatiner">
        <div className="row">
          <div className="col">
            <div className="hero-text">
              <p className="hero--font-big mb-20px">
                óh jógi, ne <br />
                végezz ászanát <br />
                vinyásza nélkül
              </p>
              <div className="row">
                <div className="hero-risi-section">
                  <StaticImage
                    className="hero--risi"
                    src="../images/risi.jpg"
                    layout="fullWidth"
                    loading="eager"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Astanga jóga Mysore"
                    placeholder="blurred"
                  />
                  <div className="hero--author">
                    <p className="hero--font-small-serif">Jóga korunta</p>
                    <p className="hero--font-small-sans-serif">VÁMANA RISI</p>
                  </div>
                </div>
                <div className="row hero-buttons hero-buttons-onthehero">
                  <div className="col-12-xs col-6-sm mb-20px">
                    <Button
                      type="button"
                      buttonStyle="btn--primary--outline"
                      onClick={() => {
                        navigate("/mysore-program")
                      }}
                    >
                      Mysore program
                    </Button>
                  </div>
                  <div className="col-12-xs col-6-sm">
                    <Button
                      type="button"
                      buttonStyle="btn--primary--outline"
                      onClick={() => {
                        navigate("/")
                      }}
                    >
                      Tanítói láncolatunk
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <StaticImage
              className="hero_desktop"
              src="../images/Hero_desktop.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
            <StaticImage
              className="hero_tablet"
              src="../images/hero_tablet_test.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
            <StaticImage
              className="hero_mobil"
              src="../images/hero_mobil.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container hero-buttons-underhero">
      <div className="row hero-buttons">
        <div className="col-12-xs col-6-sm mb-20px">
          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            onClick={() => {
              navigate("/mysore-program")
            }}
          >
            Mysore program
          </Button>
        </div>
        <div className="col-12-xs col-6-sm">
          <Button
            type="button"
            buttonStyle="btn--primary--outline"
            onClick={() => {
              navigate("/tanfolyam")
            }}
          >
            Tanfolyamok
          </Button>
        </div>
      </div>
    </div>
  </>
)

export default Hero
