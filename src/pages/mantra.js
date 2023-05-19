import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import AccordionTypeTwo from "../components/AccordionTypeTwo"
import { StaticImage } from "gatsby-plugin-image"

export default function Mantra() {
  return (
    <Layout>
      <Seo title="MANTRÁK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">MANTRÁK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-40px mb-20px">
        <p>
          A <i>mantra</i> szanszkrit szó, a jelentése “túljutni az elmén”. A{" "}
          <i>„man”</i> jelentése elme, a <i>„tra”</i> pedig keresztül jutni,
          átkelni. A mantrák varázsigék, amelyek képesek megváltoztatni a
          valóságot, vagy legalábbis a mi felfogásunkat róla, ami valójában
          jelentheti ugyanazt, mint az előbbi. De ahhoz, hogy alkalmazni tudjuk
          ezt a varázserőt, először el kell ismernünk, hogy a mantrák
          varázsigék, és éppen ezért csak akkor hatásosak, ha tiszta szándékkal
          és helyes kiejtéssel alkalmazzuk őket. A legtöbbünknek nagyon sokszor
          el kell ismételni egy mantrát ahhoz, hogy jelentkezzen a hatása. Ahogy
          a régi korok alkimistái mondták bátorításul:
          <blockquote>Az ismétlés hozza működésbe a varázslatot</blockquote>
        </p>
        <p>
          Az ősi jógikus szövegek kijelentik, hogy Isten hang és a hang Isten:
          Sabda Brahman. Nincs más, csak Isten. Isten a mindenség. Isten valódi.
          Isten a valóság. Isten a hang. A valóság minden formája hang – vagyis
          zene – mivel lényegében minden rezgésekből áll. Amit mi anyagi
          létezésnek látunk, az valójában szemmel érzékelhető, füllel hallható
          és a többi érzékszervünkkel is felfogható lelassult hangrezgés. A hang
          szüli az anyagot – kezdetben volt a szó.
        </p>
      </div>
      <div className="row">
        <AccordionTypeTwo
          title="Astanga nyitó mantra"
          content="auṁ <br/>
          vande gurūṇāṁ caraṇāravinde <br/>
          sandarśita svātma sukhāva bodhe | <br/>
          niḥ-śreyase jaṅgali-kāyamāne<br/>
          saṁsāra hālāhala mohaśāṁtyai ||<br/>
          <br/>
          ābāhu puruṣākāraṁ<br/>
          śaṅkhacakrāsi dhāriṇam |<br/>
          sahasra śirasaṁ śvetaṁ<br/>
          praṇamāmi patañjalim ||<br/>
          auṁ <br/><br/>
          OM<br/>
Leborulok a nagy tanítók lótuszlába előtt, akik felfedik előttünk az önvalónk valódi természetét és ezáltal boldogságot ébresztenek bennünk.<br/>
A tanító teljes jólétbe vezet, mint a varázsló a dzsungelben, még a feltételekhez kötöttség és az illúzió okozta szörnyű mérgezésből is kigyógyít.<br/>
<br/>
Hódolatom ajánlom Patandzsalinak, akinek a felsőteste ember formájú,<br/>
ezer feje fényesen ragyog, kezeiben kagylókürtöt (eredeti hang), csakrát (végtelenség) és kardot (a megkülönböztetés ereje) tart.<br/>
OM<br/>
          "
          className="clr-shades-white"
        />
      </div>
    </Layout>
  )
}
