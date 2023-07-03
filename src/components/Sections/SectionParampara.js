import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../../sass/components/_sectionparampara.scss"

const SectionParampara = () => {
  const breakpoints = useBreakpoint()

  return (
    <section className="section--parampara">
      <div className="container-fluid">
        <div className="container">
          <div className="section--parampara--wapper">
            <div className="row parampara">
              <div className="col-12-xs col-4-xl section--parampara--image">
                <StaticImage
                  className={`${breakpoints.md ? "container-fluid" : null}`}
                  src="../../images/SharathJi.jpg"
                  // layout="fullWidth"
                  loading="eager"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="R. Sharath Jois"
                  placeholder="blurred"
                />
              </div>
              <div className="col-12-xs col-8-xl section--parampara-text">
                <h1 className="mb-20px">Bandha Works Parampara</h1>
                <p>
                  A parampara a tudás, amelyet a tanár a tanítványára
                  hagyományoz. A parampara szanszkrit szó jelentése a tudás
                  átadásának legértékesebb formáját, a közvetlen és tapasztalati
                  tudás átadását fejezi ki. A jógatanításnak a paramparaból kell
                  származnia ahhoz, hogy hatékony, igaz és teljes legyen.
                </p>
                <div className="mt-20px">
                  <Button
                    type="button"
                    buttonStyle="btn--primary--outline"
                    onClick={() => {
                      navigate("/parampara")
                    }}
                  >
                    Tanítói láncolatunk
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionParampara
