import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/components/_hero.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"

const Hero = () => (
  <>
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
      src="../images/hero_test.jpg"
      layout="fullWidth"
      loading="eager"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Astanga jóga Mysore"
      placeholder="blurred"
    />
    <Container>
      <Row>
        <h1 className="test">"óh jógi, ne végezz ászanát vinyásza nélkül"</h1>
      </Row>
    </Container>
  </>
)

export default Hero
