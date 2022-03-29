import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/components/_hero.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Hero = () => (
  <>
    <StaticImage
      className="hero__big"
      src="../images/Hero_desktop.jpg"
      width={2000}
      layout="fullWidth"
      loading="eager"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Astanga jóga Mysore"
      placeholder="blurred"
    />
    <StaticImage
      className="hero__small"
      src="../images/hero_test.jpg"
      width={674}
      layout="fullWidth"
      loading="eager"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Astanga jóga Mysore"
      placeholder="blurred"
    />
  </>
)

export default Hero
