import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Osztondij() {
  return (
    <Layout>
      <Seo title="ÖSZTÖNDÍJ" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">ÖSZTÖNDÍJ</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/osztondij_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/osztondij_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="osztondij-wrapper">
        <div className="mt-40px">
          <p>
            A jóga mindenki életében gyökeres változásokat hozhat, gyakorlását
            bármely élethelyzetben érdemes elkezdeni. Előfordulhat azonban, hogy
            anyagi körülményeink nem teszik lehetővé jógabérlet vásárlását,
            ráadásul még nem rendelkezünk annyi rutinnal, hogy otthoni
            gyakorlásba kezdjünk. A Bandha Works Ösztöndíj éppen az ilyen
            helyzetekben nyújthat segítséget, jógaiskolánk a nyertesnek három
            hónapra korlátlan jógabérletet biztosít.
          </p>
          <blockquote>
            A tudat stabilitásának szilárd alapja a hosszú időn keresztűl,
            megszakítás nélkül végzett gondos gyakorlás.
            <br />- Patanjali jóga szútrák I.14
          </blockquote>
          <p className="mb-20px">
            Jógagyakorlásod minél hatékonyabbá tételében – az órarendi órák
            látogatása mellett – intenzív, személyes segítséget nyújtanak
            oktatóink. A jelentkezők vállalják, hogy minimum heti háromszor
            részt vesznek az órarendi órákon – az előre közösen meghatározott
            időpontokban – és havi rendszerességgel elkészítenek egy beadandó
            esszét egy meghatározott témában.
          </p>
          <p className="mb-20px">
            Az ösztöndíj igényléséhez ki kell tölteni a jelentkezési űrlapot,
            valamint mellékelni kell motivációs levelet (egy A4-es oldal, Times
            New Roman 12-es betűtípus, 1,5-ös sorköz), amelyben a pályázó
            leírja, hogy mit adna számára ez a lehetőség, hogyan segítene
            elmélyíteni vagy elindítani a jóga gyakorlását és melyek azok a
            szempontok, amelyek nehézséget okoznak a bérlet vásárlásában. A
            második körben személyes elbeszélgetésre hívjuk be a kiválasztott
            felvételizőket, és kiválasztjuk a nyertest. A nyertes pályázó három
            hónapig korlátlanul látogathatja a Bandha Works jógastúdió óráit,
            emellett minden hónapban egy magánórán vehet részt, ahol segítséget
            kap a felvetődő problémák megoldásában és a gyakorlás
            elmélyítésében.
          </p>
        </div>
      </div>
    </Layout>
  )
}
