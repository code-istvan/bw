import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import Counter from "../Counter"
import Sj_blessing from "../Icons/sj_handwrite.svg"
import "../../sass/components/_sectionrolunk.scss"

const SectionRolunk = () => {
  return (
    <section className="section--rolunk">
      <div className="mt-20px section--rolunk--text">
        <p>
          A Bandha Works Jógaiskolát 2013-ban három mérnök alapította, akiket
          összekötött azon törekvés, hogy a tradicionális astanga vinyásza jógát
          népszerűsítsék, oktassák Magyarországon. Több mint tíz év elteltével a
          helyzet mit sem változott, oktatóink elkötelezett gyakorlói az
          irányzatnak, és rendszeresen, az astanga jóga fővárosába, a dél-indiai
          Mysore-ba utaznak, hogy tovább mélyítsék tudásuk, megértésük.
        </p>
      </div>

      <Button
        type="button"
        buttonStyle="btn--primary--outline"
        className="mt-20px"
        onClick={() => {
          navigate("/rolunk")
        }}
      >
        Tudj meg többet rólunk
      </Button>

      <div className="section--rolunk--tradicio island-section--gray-border island-section--gray-border mt-20px">
        <div className="section--rolunk--wrapper">
          <h3 className="mb-20px font-family-primary">TRADÍCIÓ</h3>
          <Counter tag="h3" className="mb-20px" />
          <p>
            Magyarország legrégebbi{" "}
            <span className="nowrap body">astanga Mysore-programja</span>
          </p>
          <p>
            <strong>Paramaguru Sharath Jois</strong> áldásával
          </p>
          <div className="mysore-program--tradicio__image">
            <img src={Sj_blessing} alt="Sj_blessing" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionRolunk
