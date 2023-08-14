import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Osztondij() {
  return (
    <Layout>
      <Seo title="ÖSZTÖNDÍJ" />
      <div className="page-hero-container tight--desktop--container">
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
      <div className="osztondij-wrapper tight--desktop--container">
        <div className="row mt-40px">
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
            A tudat stabilitásának szilárd alapja a hosszú időn keresztül,
            megszakítás nélkül végzett gondos gyakorlás.
            <br />- Patandzsali Jóga Szútrák I.14
          </blockquote>
          <p className="mb-20px">
            Jógagyakorlásod minél hatékonyabbá tételében – a reggeli
            Mysore-program látogatása mellett – intenzív, személyes segítséget
            nyújtanak oktatóink. A jelentkezők vállalják, hogy minimum heti
            háromszor részt vesznek a Mysore-program óráin – az előre közösen
            meghatározott időpontokban –, és havi rendszerességgel elkészítenek
            egy beadandó esszét egy meghatározott témában. Amennyiben kezdő
            astanga gyakorló vagy, az első hónapban a kezdő tanfolyamon
            biztosítunk helyet számodra. A második hónapban a Mysore-kurzussal
            készítünk fel az astanga jóga egyéni gyakorlására. A harmadik
            hónapban pedig már a reggeli Mysore-órákon tudsz résztvenni.
          </p>
          <p className="mb-20px">
            Az ösztöndíj igényléséhez ki kell tölteni az online jelentkezési
            űrlapot. Ehhez kell a pályázónak csatolnia egy motivációs levelet
            (A4-es oldal, Times New Roman 12-es betűtípus, 1,5-ös sorköz,
            minimum 1 oldal, maximum 3), amelyben leírja, hogy ez a lehetőség
            mit adna számára, hogyan segítené elmélyíteni vagy elindítani a jóga
            gyakorlását és melyek azok a körülmények, amelyek nehézséget okoznak
            a bérlet vásárlásában. Azon pályázókat, akik bejutnak a második
            fordulóba egy személyes beszélgetésre hívjuk meg, ahol is
            kiválasztjuk a nyertest. A nyertes pályázó három hónapig korlátlanul
            látogathatja a Bandha Works jógastúdió óráit, a fenti menetrend
            szerint. Továbbá minden hónapban egy egyéni konzultációs alkalmon
            vehet részt, ahol segítséget kap a gyakorlás elmélyítésében, illetve
            az esetlegesen felvetődő akadályok megoldásában.
          </p>
          <p className="mb-20px">
            <strong>Az ösztöndíj időszaka:</strong> 2024. január 1. – 2024.
            március 31.
          </p>
          <p className="mb-20px">
            <strong>Az online jelentkezési lap: </strong>2023. december 7.
            12:00-tól, december 10. 12:00-ig lesz elérhető. A második forduló:
            2023. december 17-én vasárnap, 16:00 órától kerül megrendezésre.
          </p>
          <p className="mb-20px">Várjuk jelentkezésedet!</p>
        </div>
      </div>
    </Layout>
  )
}
