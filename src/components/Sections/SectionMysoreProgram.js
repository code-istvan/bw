import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
// import Sj_blessing from "../Icons/sj_handwrite.svg"
// import Counter from "../Counter"
import "../../sass/components/_sectionMysoreProgram.scss"

const SectionMysoreProgram = () => {
  const breakpoints = useBreakpoint()

  return (
    <section className="section--mysore-program">
      <div className="container-fluid">
        <div className="container">
          <div className="section--mysore-program--wrapper">
            <div className="row">
              <div className="col-12-xs col-4-md section--mysore-program--image">
                <StaticImage
                  className={`${breakpoints.md ? "container-fluid" : null}`}
                  src="../../images/Mysore-program-bw.jpg"
                  // layout="fullWidth"
                  loading="eager"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="R. Sharath Jois"
                  placeholder="blurred"
                />
              </div>
              <div className="col-12-xs col-8-md section--mysore-program-text">
                <h1 className="mb-20px">Astanga Mysore-program</h1>
                <p>
                  A Mysore-stílusú astanga jóga gyakorlás hatékony és személyre
                  szabott módszer, amely fizikai erőt, rugalmasságot és belső
                  nyugalmat hoz. Az általa kínált folyamatos fejlődés és az
                  oktató-tanítvány kapcsolat lehetőséget ad a mélyebb megértésre
                  és a személyes fejlődésre.
                </p>
                <div className="mt-20px">
                  <Button
                    type="button"
                    buttonStyle="btn--primary--outline"
                    onClick={() => {
                      navigate("/mysore-program")
                    }}
                  >
                    Mysore-programról bővebben
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

export default SectionMysoreProgram
