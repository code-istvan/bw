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
  const futarNev = "Delivery Solutions Zrt."
  const futarSzekhely = "1033 Budapest, Szentendrei út 89-95. X. ép"
  const futarTelefon = "+36-1-374-3890"
  const futarEmail = "info@sameday.hu"
  const futarWeboldal = "https://sameday.hu"

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
              <span>A cookie-k jogszabályi háttere és jogalapja:</span>
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
            <h3 className="mt-20px">
              3. A hírlevélküldéssel kapcsolatos adatkezelés
            </h3>
            <p className="mt-20px">
              Az adatkezelési folyamat a hírlevelek kiküldése érdekében
              történik. A hírlevél-szolgáltatás nyújtása érdekében az Adatkezelő
              személyes adatot (nevet, e-mail címet) vesz fel Öntől. A név, és
              az e-mail cím rögzítése elektronikusan történik oly módon, hogy az
              erre szolgáló panelt a felhasználó kitölti, a checkbox
              kipipálásával elfogadja az Adatvédelmi tájékoztatót és egyúttal
              hozzájárulását adja ahhoz, hogy az Adatkezelő a megadott adatait
              Hírlevél küldése céljából kezelje, majd a küldés gombra kattint.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Név, e-mail cím.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az érintett hozzájárulásának visszavonásáig, a hírlevélről történő
              leiratkozásáig.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az Ön önkéntes hozzájárulása, ami a hírlevélre történő
              feliratkozással ad meg az Adatkezelő számára [GDPR 6. Cikk (1)
              bekezdés a) pont szerinti adatkezelés]
            </p>
            <h1 className="mt-20px">
              II. A webshopra vonatkozó adatkezelés (A szerződéskötés és a
              teljesítés érdekében kezelt adatok)
            </h1>
            <p className="mt-20px">
              A szerződéskötés és teljesítés érdekében több adatkezelési eset is
              megvalósulhat. Tájékoztatjuk, hogy panaszkezeléssel, garanciális
              ügyintézéssel kapcsolatos adatkezelés csak abban az esetben
              valósul meg, ha Ön él valamelyik említett jogával.
            </p>
            <p className="mt-20px">
              A szerződéskötés és teljesítés érdekében megvalósuló adatkezelések
              részletesebben:
            </p>
            <h3 className="mt-20px">1. Kapcsolatfelvétel</h3>
            <p className="mt-20px">
              Ha például e-mailben kérdéssel fordul hozzánk valamely termékkel
              kapcsolatban. Az előzetes kapcsolatfelvétel nem kötelező, ezt
              kihagyva is bármikor rendelhet a webshopból.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Az Ön által a kapcsolatfelvétel során megadott adatok (név, e-mail
              cím)
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az adatokat csak a kapcsolatfelvétel lezárultáig kezeljük.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az Ön önkéntes hozzájárulása, amit a kapcsolatfelvétellel ad meg
              Adatkezelő számára. [GDPR 6. Cikk (1) bekezdés a) pont szerinti
              adatkezelés]
            </p>
            <h3 className="mt-20px">2. Regisztráció a webshopban</h3>
            <p className="mt-20px">
              A regisztráció során megadott adatok tárolásával az Adatkezelő
              kényelmesebb szolgáltatást tud biztosítani (pl. az érintett
              adatait újabb vásárláskor nem kell ismét megadni). A regisztráció
              a szerződéskötésnek nem feltétele.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Az adatkezelés során az Adatkezelő az Ön nevét, lakcímét,
              telefonszámát, e-mail címét, a megvásárolt termék jellemzőit és a
              vásárlás időpontját kezeli.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />A hozzájárulásának visszavonásáig.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az Ön önkéntes hozzájárulása, amit a regisztrációval ad meg az
              Adatkezelő számára [GDPR 6. Cikk (1) bekezdés a) pont szerinti
              adatkezelés]
            </p>
            <h3 className="mt-20px">3. A rendelés feldolgozása</h3>
            <p className="mt-20px">
              A rendelések feldolgozása során a szerződés teljesítése érdekében
              szükségesek adatkezelési tevékenységek.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Az adatkezelés során az Adatkezelő az Ön nevét, lakcímét,
              telefonszámát, e-mail címét, a megvásárolt termék jellemzőit, a
              megrendelés számát és a vásárlás időpontját kezeli.
            </p>
            <p className="mt-20px">
              Amennyiben Ön rendelést adott le a webshopban, akkor az
              adatkezelés és az adatok megadása a szerződés teljesítéséhez
              elengedhetetlen.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az adatokat a polgári jogi elévülési idő szerint 5 évig kezeljük.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />A szerződés teljesítése. [GDPR 6. Cikk (1) bekezdés b) pont
              szerinti adatkezelés]
            </p>
            <h3 className="mt-20px">4. A számla kiállítása</h3>
            <p className="mt-20px">
              Az adatkezelési folyamat a jogszabályoknak megfelelő számla
              kiállítása és a számviteli bizonylat-megőrzési kötelezettség
              teljesítése érdekében történik. A számvitelről szóló 2000. évi C.
              törvény (a továbbiakban: Sztv.) 169. § (1)-(2) bekezdése alapján a
              gazdasági társaságoknak a könyvviteli elszámolást közvetlenül és
              közvetetten alátámasztó számviteli bizonylatot meg kell őrizniük.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Név, cím, e-mail cím
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />A kiállított számlákat az Sztv. 169. § (2) bekezdése alapján
              a számla kiállításától számított 8 évig meg kell őrizni.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az általános forgalmi adóról szóló 2007. évi CXXVII. 159. § (1)
              bekezdése alapján a számla kibocsátása kötelező és azt
              számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése
              alapján 8 évig kell megőrizni [GDPR 6. Cikk (1) bekezdés c) pont
              szerinti adatkezelés].
            </p>
            <h3 className="mt-20px">
              5. Az áruszállításhoz kapcsolódó adatkezelés
            </h3>
            <p className="mt-20px">
              Az adatkezelési folyamat a megrendelt termék kiszállítása
              érdekében történik.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Név, cím, e-mail cím, telefonszám.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az Adatkezelő az adatokat a megrendelt áru kiszállításának
              időtartamáig kezeli.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Szerződés teljesítése [GDPR 6. Cikk (1) bekezdés b) pont szerinti
              adatkezelés].
            </p>
            <p className="mt-20px">A címzett megnevezése: {futarNev}</p>
            <p className="mt-20px">A címzett székhelye: {futarSzekhely}</p>
            <p className="mt-20px">A címzett telefonszáma: {futarTelefon}</p>
            <p className="mt-20px">A címzett e-mail címe: {futarEmail}</p>
            <p className="mt-20px">A címzett weboldala: {futarWeboldal}</p>
            <p className="mt-20px">
              A futárszolgálat az Adatkezelővel kötött szerződés alapján
              közreműködik a megrendelt áru kiszállításában. A futárszolgálat a
              megkapott személyes adatokat a weboldalán elérhető adatkezelési
              tájékoztatóban foglaltak szerint kezeli.
            </p>
            <h3 className="mt-20px">6. Szavatossági igények kezelése</h3>
            <p className="mt-20px">
              A szavatossági igény esetében az irányadó szabályokat a 19/2014.
              (IV. 29.) NGM rendelet tartalmazza.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />A szavatossági igények kezelésekor a 19/2014. (IV. 29.) NGM
              rendelet szabályai szerint kell eljárnunk.
            </p>
            <p className="mt-20px">
              A GDPR alapján a nálunk bejelentett szavatossági igényéről
              jegyzőkönyvet vagyunk kötelesek felvenni, amelyben rögzítjük:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>
                  az Ön nevét, címét, valamint nyilatkozatát arról, hogy
                  hozzájárul a jegyzőkönyvben rögzített adatainak a GDPR-ban
                  meghatározottak szerinti kezeléséhez,
                </li>
                <li>
                  az Ön és közöttünk létrejött szerződés keretében eladott ingó
                  dolog megnevezését, vételárát,
                </li>
                <li>a szerződés teljesítésének időpontját,</li>
                <li>a hiba bejelentésének időpontját,</li>
                <li>a hiba leírását,</li>
                <li>
                  szavatossági igénye alapján az Ön által érvényesíteni kívánt
                  jogot, továbbá
                </li>
                <li>
                  a szavatossági igény rendezésének módját vagy az igény,
                  illetve az az alapján érvényesíteni kívánt jog elutasításának
                  indokát.
                </li>
              </ul>
            </div>
            <p className="mt-20px">
              Amennyiben Öntől a megvásárolt terméket átvesszük, erről átvételi
              elismervényt kell kiállítanunk, amelyen fel kell tüntetni
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>az Ön nevét és címét,</li>
                <li>a dolog azonosításához szükséges adatokat,</li>
                <li>a dolog átvételének időpontját, továbbá</li>
                <li>
                  azt az időpontot, amikor Ön a kijavított dolgot átveheti.
                </li>
              </ul>
            </div>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />A vállalkozás a fogyasztó szavatossági igényéről felvett
              jegyzőkönyvet az annak felvételétől számított három évig köteles
              megőrizni, és azt az ellenőrző hatóság kérésére bemutatni.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az adatkezelés jogalapja a 19/2014. (IV. 29.) NGM rendelet [4. §
              (1) bekezdés és 6. § (1) bekezdés] szerinti jogi
              kötelezettségeknek való megfelelés [GDPR 6. Cikk (1) bekezdés c)
              pont szerinti adatkezelés].
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
