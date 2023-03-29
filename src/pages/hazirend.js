import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/pages/_hazirend.scss"

export default function Házirend() {
  const houseRules = [
    {
      rule: "Érkezz legalább tíz perccel az óra előtt, öt perccel előtte már bezárjuk a bejáratot és nem tudsz bejönni.",
    },
    {
      rule: "Óra előtt kapcsold ki a mobiltelefonod, és ne hozd be a terembe.",
    },
    {
      rule: "Szükséged lesz kényelmes ruhára, egy kisebb (az igazításokhoz) és egy nagyobb (a matracra teríteni) törülközőre vagy jógaszőnyegre. Ha nagyon izzadós vagy, érdemes egy másik törülközőt is bekészítened (zuhanyzáshoz). Jógamatracot (Manduka Black Mat PRO) biztosítunk, de ha van sajátod, bátran hozd magaddal.",
    },
    {
      rule: "Ne használj parfümöt vagy erős illatú kozmetikumot (melegítő krémet sem) óra előtt.",
    },
    {
      rule: "Óra alatt nem lehet inni, ne hozz be vizet vagy poharat a terembe. Napközben viszont figyelj a megfelelő folyadékpótlásra.",
    },
    {
      rule: "Óra előtt jelezd a tanárnak, ha bármilyen egészségügyi problémád, sérülésed vagy betegséged van.",
    },
    {
      rule: "A jógateremben nem beszélgetünk, az óra előtti pár percet csendes ráhangolódással töltsd.",
    },
    {
      rule: "Óra alatt mindig kövesd a tanár utasításait. Végig figyelj a légzésedre, soha ne áldozd fel a mély légzésta mélyebb ászana érdekében.",
    },
    {
      rule: "Az órákon mindenki saját felelősségére vesz részt, ezért ügyelj saját és társaid testi épségére, figyeld a tested jelzéseit.",
    },
    { rule: "A matracot takarítsd le magad után." },
    {
      rule: "Távozás előtt győződj meg róla, hogy nem hagysz semmit az öltözőben, az itt felejtett ruhákat nem áll módunkban megőrizni.",
    },
    { rule: "Az öltözőben hagyott értékekért felelősséget nem vállalunk." },
  ]

  return (
    <Layout>
      <Seo title="HÁZIREND" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">HÁZIREND</h1>
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
      <div className="row">
        <div className="col">
          <ol type="1" className="body">
            {houseRules.map(({ rule }) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}
