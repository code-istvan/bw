import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/components/_hero.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

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
      <Container className="hero--text">
        {/* <Row> */}
        <p className="hero--font-big">
          "óh jógi, ne végezz ászanát vinyásza nélkül"
        </p>
        {/* </Row> */}
        <Row className="hero--text-small">
          <Col sm={4}>
            {" "}
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
          </Col>
          <Col sm={8}>
            <div className="hero--author">
              <p className="hero--font-small-serif">Jóga korunta</p>
              <p className="hero--font-small-sans-serif">VÁMANA RISI</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)

export default Hero
