import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "./Buttons/Button"
import { navigate } from "gatsby"
import "../sass/components/_hero.scss"

const Hero = () => (
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
              <p className="hero--font-big mb-20px">
                Az egyetlen kiút befelé vezet <br />
              </p>
              <p className="hero--font-subtitle">
                Tradicionális astanga jógaiskola a Paramaguru áldásával
              </p>
            </div>
            <div className="hero--buttons">
              <Button
                type="button"
                buttonStyle="btn--primary--solid--full"
                className="mb-20px"
                onClick={() => {
                  navigate("/parampara")
                }}
              >
                Astanga Mysore-program
              </Button>
              <Button
                type="button"
                buttonStyle="btn--primary--outline-full"
                onClick={() => {
                  navigate("/parampara")
                }}
              >
                Astanga tanfolyamok
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="row">
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
        </div> */}
      </div>
    </div>
  </>
)

export default Hero
