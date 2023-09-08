import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
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
          Mysore-ba utaznak, hogy a paramparából merítve, tovább mélyítsék
          tudásuk, megértésük.
        </p>
      </div>
      <div className="section--rolunk--button mt-20px">
        <Button
          type="button"
          buttonStyle="btn--primary--outline"
          onClick={() => {
            navigate("/rolunk")
          }}
        >
          Tudj meg többet rólunk
        </Button>
      </div>
    </section>
  )
}

export default SectionRolunk
