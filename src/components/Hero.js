import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/components/_hero.scss"

const Hero = () => (
  <>
    <div className="hero--relative">
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
      <div className="container hero--text">
        <p className="hero--font-big">
          "óh jógi, ne végezz ászanát vinyásza nélkül"
        </p>

        <div className="row hero--text-small">
          <div className="col-4-sm">
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
          </div>
          <div className="col-8-sm">
            <div className="hero--author">
              <p className="hero--font-small-serif">Jóga korunta</p>
              <p className="hero--font-small-sans-serif">VÁMANA RISI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero
