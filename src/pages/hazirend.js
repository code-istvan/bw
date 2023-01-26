import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import "../sass/pages/_hazirend.scss"

export default function Házirend() {
  return (
    <Layout>
      <Seo title="HÁZIREND" />
      <div className="row mt-80px simple-header-style">
        <div className="col">
          <h1>HÁZIREND</h1>
        </div>
      </div>
      <div className="row gap-1">
        <div className="col-12-xs col-6-md col-4-xl">
          <div className="a">1</div>
        </div>
        <div className="col-12-xs col-6-md col-4-xl">
          <div className="a">2</div>
        </div>
        <div className="col-12-xs col-6-md col-4-xl">
          <div className="a">3</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ol type="1" className="body">
            <li>
              Érkezz legalább tíz perccel az óra előtt, öt perccel előtte már
              bezárjuk a bejáratot és nem tudsz bejönni.
            </li>
            <li>
              Óra előtt kapcsold ki a mobiltelefonod, és ne hozd be a terembe.
            </li>
            <li>
              Szükséged lesz kényelmes ruhára, egy kisebb (az igazításokhoz) és
              egy nagyobb (a matracra teríteni) törülközőre vagy jógaszőnyegre.
              Ha nagyon izzadós vagy, érdemes egy másik törülközőt is
              bekészítened (zuhanyzáshoz). Jógamatracot biztosítunk, de ha van
              sajátod, bátran hozd magaddal.
            </li>
            <li>
              Ne használj parfümöt vagy erős illatú kozmetikumot (melegítő
              krémet sem) óra előtt.
            </li>
            <li>
              Óra alatt nem lehet inni, ne hozz be vizet vagy poharat a terembe.
              Napközben viszont figyelj a megfelelő folyadékpótlásra.
            </li>
            <li>
              Óra előtt jelezd a tanárnak, ha bármilyen egészségügyi problémád,
              sérülésed vagy betegséged van.
            </li>
            <li>
              A jógateremben nem beszélgetünk, az óra előtti pár percet csendes
              ráhangolódással töltsd.
            </li>
            <li>
              Óra alatt mindig kövesd a tanár utasításait. Végig figyelj a
              légzésedre, soha ne áldozd fel a mély légzésta mélyebb ászana
              érdekében.
            </li>
            <li>
              Az órákon mindenki saját felelősségére vesz részt, ezért ügyelj
              saját és társaid testi épségére, figyeld a tested jelzéseit.
            </li>
            <li>A matracot takarítsd le magad után.</li>
            <li>
              Távozás előtt győződj meg róla, hogy nem hagysz semmit az
              öltözőben, az itt felejtett ruhákat nem áll módunkban megőrizni.
            </li>
            <li>Az öltözőben hagyott értékekért felelősséget nem vállalunk.</li>
          </ol>
        </div>
        {/* <div className="col-12-xs col-6-md">bal</div>
        <div className="col-12-xs col-6-md">jobb</div> */}
      </div>
    </Layout>
  )
}
