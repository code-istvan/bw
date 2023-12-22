import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../../sass/components/_sectionOsztondij.scss"

const SectionOsztondij = () => {
  return (
    <section className="section--osztondij">
      <StaticImage
        src="../../images/osztondij_background.jpg"
        alt="Astanga jóga ösztöndíj"
        placeholder="blurred"
        layout="fullWidth"
        className="section-osztondij__background"
      />
      <div className="section-osztondij__wrapper">
        <h2 className="mb-20px section--osztondij--header heading heading--1">
          Jóga ösztöndíj
        </h2>
        <div className="mt-20px section--osztondij--text">
          <p>
            A jóga mindenki életében gyökeres változásokat hozhat, gyakorlását
            bármely élethelyzetben érdemes elkezdeni. Előfordulhat azonban, hogy
            anyagi körülményeink nem teszik lehetővé hogy tapasztalt és hiteles
            jógatanároktól tanulhassunk. A Bandha Works Ösztöndíj éppen az ilyen
            helyzetekben nyújthat segítséget, jógaiskolánk a nyertesnek három
            hónapra korlátlan Mysore-jógabérletet biztosít.
          </p>
        </div>
        <div className="section--osztondij--button mt-20px">
          <Button
            type="button"
            buttonStyle="btn--primary--outline"
            onClick={() => {
              navigate("/osztondij")
            }}
          >
            Jóga ösztöndíj
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionOsztondij
