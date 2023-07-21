import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import "../sass/pages/_adatvedelmi.scss"

export default function AdatvedelmiTajekoztato() {
  const adatkezeloNev = "Szalai István EV"
  const adatkezeloSzekhely = "1133 Budapest, Bessenyei u. 8-10."
  const adatkezeloTelephely = "1027 Budapest, Frankel Leó út 18."
  const adatkezeloNyilvantartasiSzam = "5786080"
  const adatkezeloLevelezes = "1133 Budapest, Bessenyei u. 8-10."
  const adatkezeloEmail = "bandha.works@gmail.com"
  const tarhelyszolgaltatoNev = "DOTROLL Kft."
  const tarhelyszolgaltatoLevelezes = "1148 Budapest, Fogarasi út 3-5."
  const tarhelyszolgaltatoEmail = "support@dotroll.com"
  const tarhelyszolgaltatoTelefon = "+36-1-432-3232"

  return (
    <Layout>
      <Seo title="ADATVÉDELMI TÁJÉKOZTATÓ" />
      <div className="page-hero-container tight--desktop--container">
        <div className="row">
          <h1 className="page-hero-title">ADATVÉDELMI TÁJÉKOZTATÓ</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/adatkezeles_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/adatkezeles_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="adatvedelmi--wrapper tight--desktop--container">
        <div className="row mt-40px">
          <p>
            A jelen tájékoztató <strong>(„Adatvédelmi tájékoztató”)</strong>{" "}
            célja, hogy rögzítse a https://bandha.works honlap („Honlap”)
            tulajdonosa - mint Adatkezelő - által alkalmazott adatvédelmi és
            adatkezelési elveket, és egyben tájékoztatást nyújtson az érintettek
            részére személyes adataik kezeléséről.
          </p>
          <p className="mt-20px">
            A Tájékoztató rendelkezései és tartalma az Európai Parlament és a
            Tanács 2016/679 Rendeletében <strong>(„GDPR”)</strong> foglaltakon,
            valamint az információs önrendelkezési jogról és az
            információszabadságról szóló 2011. évi CXII. törvény{" "}
            <strong>(„Infotv.”)</strong> rendelkezésein alapul.
          </p>
          <div>
            <p className="mt-20px">
              <strong>
                <span>
                  <u>Adatkezelő</u>
                </span>
              </strong>
            </p>
            <p className="mt-20px">
              <span>Név: {adatkezeloNev}</span>
            </p>
            <p className="mt-20px">
              <span>Székhely: {adatkezeloSzekhely}</span>
            </p>
            <p className="mt-20px">
              <span>Telephely: {adatkezeloTelephely}</span>
            </p>
            <p className="mt-20px">
              <span>Nyilvántartási szám: {adatkezeloNyilvantartasiSzam}</span>
            </p>
            <p className="mt-20px">
              <span>Levelezési cím, panaszkezelés: {adatkezeloLevelezes}</span>
            </p>
            <p className="mt-20px">
              <span>E-mail: {adatkezeloEmail}</span>
            </p>
            <p className="mt-20px">
              <strong>
                <span>
                  <u>Tárhelyszolgáltató</u>
                </span>
              </strong>
            </p>
            <p className="mt-20px">
              <span>Név: {tarhelyszolgaltatoNev}</span>
            </p>
            <p className="mt-20px">
              <span>Levelezési cím: {tarhelyszolgaltatoLevelezes}</span>
            </p>
            <p className="mt-20px">
              <span>E-mail cím: {tarhelyszolgaltatoEmail}</span>
            </p>
            <p className="mt-20px">
              <span>Telefonszám: {tarhelyszolgaltatoTelefon}</span>
            </p>
            <h1 className="mt-20px">I. A Honlapra vonatkozó adatkezelés</h1>
            <h3 className="mt-20px">
              1. A cookie-k használatával kapcsolatos tájékoztatás
            </h3>
            <p className="mt-20px">
              <span>Mi az a cookie?</span>
            </p>
            <p className="mt-20px">
              Az Adatkezelő a Honlap látogatása során úgynevezett cookie-kat
              (sütiket) használ. A cookie betűből és számokból álló
              információcsomag, amit Honlapunk az Ön böngészőjének küld el azzal
              a céllal, hogy elmentse bizonyos beállításait, megkönnyítse a
              Honlapunk használatát és közreműködik abban, hogy néhány releváns,
              statisztikai jellegű információt gyűjtsünk a látogatóinkról.
            </p>
            <p className="mt-20px">
              A cookie-k (sütik) egy része nem tartalmaz személyes
              információkat, és nem alkalmas az egyéni felhasználó
              azonosítására, egy részük azonban olyan egyéni azonosítót
              tartalmaz - egy titkos, véletlenül generált számsort - amelyet az
              Ön eszköze tárol, ezzel az Ön azonosíthatóságát is biztosítja. Az
              egyes cookie-k (sütik) működési időtartamát az egyes cookie-k
              (sütik) vonatkozó leírása tartalmazza.
            </p>
            <p className="mt-20px">
              <span>Mi az a cookie?</span>
            </p>
            <p className="mt-20px">
              Alapvetően három típusú cookie-t különböztetünk meg: a működéshez
              elengedhetetlen cookie-t, ami a Honlap megfelelő működését
              szolgálja, valamint statisztikai célú és marketing célú
              cookie-kat. Az adatkezelés jogalapja a GDPR 6. Cikk (1) bekezdés
              a) pontja alapján az Ön hozzájárulása a statisztikai és a
              marketing célú cookie-k esetében, valamint a GDPR 6. Cikk (1)
              bekezdés f) pontja szerint a Honlap működésének biztosításához
              szükséges jogos érdek, a működéshez szükséges cookie-k esetében.
            </p>
            <h3 className="mt-20px">2. Kapcsolatfelvétel</h3>
            <p className="mt-20px">
              Ha például e-mailben, vagy a kapcsolatfelvételi űrlapon a
              jógaiskolával, jógaórákkal kapcsolatos kérdéssel fordul hozzánk.
              Az Adatkezelő a Honlapon „Kapcsolat” menüpont alatt üzenetküldési
              lehetőséget biztosít a felhasználók részére, amelynek során az
              érintett a kapcsolatfelvételhez szükséges személyes adatait
              (nevét, e-mail címét) köteles megadni. A név, e-mail cím rögzítése
              elektronikusan történik oly módon, hogy az erre szolgáló panelt a
              felhasználó kitölti, a checkbox kipipálásával elfogadja az
              Adatvédelmi tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Adatkezelő a nevét és e-mail címét kapcsolatfelvétel,
              valamint üzenet küldése céljából kezelje, majd a küldés gombra
              kattint.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br /> Az Ön által a kapcsolatfelvétel során megadott adatok (név,
              e-mail cím).
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az adatokat csak a kapcsolatfelvétel lezárultáig kezeljük.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong> <br />
              Az Ön önkéntes hozzájárulása, amit a kapcsolatfelvétellel ad meg
              Adatkezelő számára. [GDPR 6. Cikk (1) bekezdés a) pont szerinti
              adatkezelés]
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
