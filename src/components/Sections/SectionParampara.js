import React from "react"
import Button from "../Button"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../../sass/components/_sectionparampara.scss"

const SectionParampara = () => {
  return (
    <section className="section--rolunk">
      <div className="row">
        <div className="col">
          <StaticImage
            className="container-fluid"
            src="../../images/SharathJi.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-20px">
        <div className="col">
          <h1 className="mb-20px">Bandha Works Parampara</h1>
          <p>
            A parampara a tudás, amelyet a tanár a tanítványára hagyományoz. A
            parampara szanszkrit szó jelentése a tudás átadásának legértékesebb
            formáját, a közvetlen és tapasztalati tudás átadását fejezi ki. A
            jógatanításnak a paramparaból kell származnia ahhoz, hogy hatékony,
            igaz és teljes legyen.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col mt-20px">
          <Button
            type="button"
            buttonStyle="btn--mobil--primary--outline"
            buttonSize="btn--small"
            onClick={() => {
              navigate("/")
            }}
          >
            Tanítói láncolatunk
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionParampara
