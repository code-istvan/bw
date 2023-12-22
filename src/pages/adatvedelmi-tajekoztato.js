import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { CustomHead } from "../components/CustomHead"
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

  const datumModositas = "2023. augusztus 1."

  return (
    <Layout>
      <div className="page-hero-container tight--desktop--container">
        <div className="row">
          <h1 className="page-hero-title">ADATVÉDELMI TÁJÉKOZTATÓ</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/adatkezeles_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Bandha Works Jógaiskola adatvédelmi tájékoztató"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/adatkezeles_mobil.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Bandha Works Jógaiskola adatvédelmi tájékoztató"
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
              <span>Email: {adatkezeloEmail}</span>
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
              <span>Email cím: {tarhelyszolgaltatoEmail}</span>
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
              Ha például emailben, vagy a kapcsolatfelvételi űrlapon a
              jógaiskolával, jógaórákkal kapcsolatos kérdéssel fordul hozzánk.
              Az Adatkezelő a Honlapon „Kapcsolat” menüpont alatt üzenetküldési
              lehetőséget biztosít a felhasználók részére, amelynek során az
              érintett a kapcsolatfelvételhez szükséges személyes adatait
              (nevét, email címét) köteles megadni. A név, email cím rögzítése
              elektronikusan történik oly módon, hogy az erre szolgáló panelt a
              felhasználó kitölti, a checkbox kipipálásával elfogadja az
              Adatvédelmi tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Adatkezelő a nevét és email címét kapcsolatfelvétel,
              valamint üzenet küldése céljából kezelje, majd a küldés gombra
              kattint.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br /> Az Ön által a kapcsolatfelvétel során megadott adatok (név,
              email cím).
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
              személyes adatot (nevet, email címet) vesz fel Öntől. A név, és az
              email cím rögzítése elektronikusan történik oly módon, hogy az
              erre szolgáló panelt a felhasználó kitölti, a checkbox
              kipipálásával elfogadja az Adatvédelmi tájékoztatót és egyúttal
              hozzájárulását adja ahhoz, hogy az Adatkezelő a megadott adatait
              Hírlevél küldése céljából kezelje, majd a küldés gombra kattint.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Név, email cím.
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

            <h3 className="mt-20px">
              4. Mysore-programra történő on-line jelentkezéssel kapcsolatos
              adatkezelés
            </h3>
            <p className="mt-20px">
              Az Adatkezelő a Honlapon a „Mysore-program” menüpont alatt on-line
              módon történő jelentkezést tesz lehetővé, amelynek során az
              érintett a programban való részvételhez szükséges személyes
              adatait (név, születési idő, email cím, telefonszám,
              jógagyakorlással kapcsolatos adatait) adja meg. Az adatok
              rögzítése elektronikusan történik oly módon, hogy az erre szolgáló
              űrlapot a jelentkező kitölti, a checkbox kipipálásával elfogadja
              az Adatvédelmi tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Adatkezelő a megadott adatait kapcsolatfelvétel, üzenet
              küldése, valamint a Mysore-programban való részvétel céljából
              kezelje; majd a küldés gombra kattint.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Az Ön által a jelentkezés során megadott adatok (név, születési
              idő, email cím, telefonszám, jógagyakorlással kapcsolatos adatok)
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az adatokat a Mysore-programban való részvétel ideje alatt,
              illetőleg az érintett hozzájárulásának visszavonásáig kezeljük.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az Ön önkéntes hozzájárulása, amit a jelentkezéssel ad meg
              Adatkezelő számára. [GDPR 6. Cikk (1) bekezdés a) pont szerinti
              adatkezelés]
            </p>
            <h3 className="mt-20px">
              5. Astanga jóga ösztöndíjra történő on-line jelentkezéssel
              kapcsolatos adatkezelés
            </h3>

            <p className="mt-20px">
              Az Adatkezelő a Honlapon az „Ösztöndíj” menüpont alatt a megjelölt
              időszakban on-line módon történő jelentkezést tesz lehetővé,
              amelynek során az érintett az Astanga jóga ösztöndíj programra
              történő jelentkezéshez szükséges személyes adatait (családi és
              utónév, nem, életkor, lakcím, e-mail cím, telefonszám,
              foglalkozás, munkahely, illetve iskola megnevezése, gyermekek
              száma, jógagyakorlással kapcsolatos adatait) adja meg, továbbá
              csatolja motivációs levelét. Az adatok rögzítése elektronikusan
              történik oly módon, hogy az erre szolgáló űrlapot a jelentkező
              kitölti, feltölti a motivációs levelét, majd a checkbox
              kipipálásával elfogadja az Adatvédelmi tájékoztatót és egyúttal
              hozzájárulását adja ahhoz, hogy az Adatkezelő a megadott személyes
              adatait az ösztöndíj programba való jelentkezés elbírálása,
              illetőleg a programban való részvétele, továbbá ezek keretében
              kapcsolatfelvétel és üzenetküldés céljából kezelje; majd a küldés
              gombra kattint.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Az Ön által a jelentkezés során megadott adatok (családi és
              utónév, nem, életkor, lakcím, e-mail cím, telefonszám,
              foglalkozás, munkahely, illetve iskola megnevezése, gyermekek
              száma, jógagyakorlással kapcsolatos adatok, motivációs levélben
              szereplő személyes adatok)
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />
              Az adatokat az ösztöndíj programra történő jelentkezés
              elbírálásáig, továbbá nyertes pályázó esetén a programban való
              részvétel ideje alatt, illetőleg az érintett hozzájárulásának
              visszavonásáig kezeljük.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az Ön önkéntes hozzájárulása, amelyet a jelentkezéssel ad meg
              Adatkezelő számára. [GDPR 6. Cikk (1) bekezdés a) pont szerinti
              adatkezelés]
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
              Ha például emailben kérdéssel fordul hozzánk valamely termékkel
              kapcsolatban. Az előzetes kapcsolatfelvétel nem kötelező, ezt
              kihagyva is bármikor rendelhet a webshopból.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Az Ön által a kapcsolatfelvétel során megadott adatok (név, email
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
              telefonszámát, email címét, a megvásárolt termék jellemzőit és a
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
              telefonszámát, email címét, a megvásárolt termék jellemzőit, a
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
              Név, cím, email cím
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
              Név, cím, email cím, telefonszám.
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
            <p className="mt-20px">A címzett email címe: {futarEmail}</p>
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
            <h3 className="mt-20px">
              7. Egyéb fogyasztóvédelmi panaszok kezelése
            </h3>
            <p className="mt-20px">
              Az adatkezelési folyamat a fogyasztóvédelmi panaszok kezelése
              érdekében történik. Amennyiben Ön panasszal fordult hozzánk, akkor
              az adatkezelés és az adatok megadása elengedhetetlen.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />
              Vásárló neve, telefonszáma, email címe, panasz tartalma.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />A garanciális panaszokat a fogyasztóvédelemről szóló törvény
              alapján 5 évig őrizzük meg.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />
              Az, hogy hozzánk fordul-e panasszal az Ön önkéntes döntése,
              azonban ha hozzánk fordul, a fogyasztóvédelemről szóló 1997. évi
              CLV. törvény 17/A. § (7) bekezdése alapján 3 évig köteles vagyunk
              a panaszt megőrizni [GDPR 6. Cikk (1) bekezdés c) pont szerinti
              adatkezelés].
            </p>
            <h3 className="mt-20px">
              8. A hozzájárulás igazolhatóságával kapcsolatban kezelt adatok
            </h3>
            <p className="mt-20px">
              A regisztráció, megrendelés, hírlevélre történő feliratkozás során
              az informatikai rendszer eltárolja a hozzájárulással kapcsolatos
              informatikai adatokat a későbbi bizonyíthatóság érdekében.
            </p>
            <p className="mt-20px">
              <strong>Kezelt adatok</strong>
              <br />A hozzájárulás időpontja és az érintett IP címe.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés időtartama</strong>
              <br />A jogszabályi előírások miatt a hozzájárulást később
              igazolni kell tudni, ezért az adattárolás időtartama az
              adatkezelés megszűnését követő elévülési ideig kerül tárolásra.
            </p>
            <p className="mt-20px">
              <strong>Az adatkezelés jogalapja</strong>
              <br />A GDPR 7. Cikk (1) bekezdése írja elő ezt a kötelezettséget.
              [GDPR 6. Cikk (1) bekezdés c) pont szerinti adatkezelés]
            </p>
            <h3 className="mt-20px">9. További adatkezelések</h3>
            <p className="mt-20px">
              Amennyiben az Adatkezelő további adatkezelést kíván végezni, akkor
              előzetes tájékoztatatást nyújt az adatkezelés lényeges
              körülményeiről (adatkezelés jogszabályi háttere és jogalapja, az
              adatkezelés célja, a kezelt adatok köre, az adatkezelés
              időtartama).
            </p>
            <h3 className="mt-20px">
              9.1. Könyveléssel kapcsolatos adatkezelés{" "}
            </h3>
            <p className="mt-20px">
              Az adatfeldolgozó megnevezése: Németh Numerus Nobilis Számviteli
              Szolgáltató Bt.
            </p>
            <p className="mt-20px">
              Az adatfeldolgozó székhelye: 1146 Budapest, Dózsa György út 11.
              fsz 2.
            </p>
            <p className="mt-20px">
              Az adatfeldolgozó telefonszáma: 06-1/303-7885
            </p>
            <p className="mt-20px">
              Az adatfeldolgozó email címe: konyveles@nnnbt.eu
            </p>
            <p className="mt-20px">
              Az adatfeldolgozó weboldala: http://www.nnnbt.hu
            </p>
            <p className="mt-20px">
              Az Adatfeldolgozó az Adatkezelővel kötött írásbeli szerződés
              alapján közreműködik a számviteli bizonylatok könyvelésében. Ennek
              során az Adatfeldolgozó az érintett nevét és címét a számviteli
              nyilvántartáshoz szükséges mértékben, a Sztv. 169. § (2)
              bekezdésének megfelelő időtartamban kezeli, ezt követően
              haladéktalanul törli.
            </p>
            <h3 className="mt-20px">
              9.2. Az online fizetéssel kapcsolatos adatkezelés
            </h3>
            <p className="mt-20px">
              Az adatkezelő megnevezése: OTP Mobil Szolgáltató Kft.
            </p>
            <p className="mt-20px">
              Az adatkezelő székhelye: 1093 Budapest, Közraktár u. 30-32.
            </p>
            <p className="mt-20px">
              Az adatkezelő telefonszáma: +36 1/20-30-70
            </p>
            <p className="mt-20px">
              Az adatkezelő email címe: ugyfelszolgalat@simple.hu
            </p>
            <p className="mt-20px">Az adatkezelő weboldala: simple.hu</p>
            <p className="mt-20px">
              A fizetési szolgáltató az Adatkezelővel kötött szerződés alapján
              közreműködik az Online fizetés végrehajtásában, amely érdekében a
              vásárlási folyamat során adattovábbítás valósul meg az online
              fizetési szolgáltató felé. Ennek során az az online fizetési
              szolgáltató az érintett számlázási nevét és címét, a rendelés
              számát és időpontját saját adatkezelési szabályai szerint kezeli.
            </p>
            <p className="mt-20px">
              Az adattovábbítás célja: az online fizetési szolgáltató számára a
              vásárláshoz kapcsolódó, nála kezdeményezett fizetési művelethez
              szükséges tranzakciós adatok biztosítása.
            </p>
            <p className="mt-20px">
              Az adattovábbítás jogalapja: a GDPR 6. Cikk (1) bekezdés b) pontja
              alapján az Ön és Adatkezelő között létrejött szerződés
              teljesítése, amelynek része a fizetés a vásárló részéről, online
              fizetés esetén pedig a fizetéshez a jelen pont szerinti
              adattovábbítás szükséges.
            </p>
            <h1 className="mt-20px">
              III. Az adatkezelés során Önt megillető jogok
            </h1>
            <p className="mt-20px">
              Az adatkezelés időtartamán belül Önt a GDPR előírásai szerint az
              alábbi jogok illetik meg:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>a hozzájárulás visszavonásának joga,</li>
                <li>
                  személyes adatokhoz és az adatkezeléssel kapcsolatos
                  információkhoz való hozzáférés,
                </li>
                <li>helyesbítéshez való jog,</li>
                <li>adatkezelés korlátozása,</li>
                <li>törléshez való jog,</li>
                <li>tiltakozáshoz való jog,</li>
                <li>hordozhatósághoz való jog.</li>
              </ul>
            </div>
            <p className="mt-20px">
              Amennyiben Ön a jogaival élni kíván, az az Ön azonosításával jár
              együtt, valamint az Adatkezelőnek Önnel szükségszerűen
              kommunikálnia kell. Ezért az azonosítás érdekében személyes adatok
              megadására lesz szükség (de az azonosítás csak olyan adaton
              alapulhat, amelyet Adatkezelő egyébként is kezel Önről), valamint
              az Adatkezelő email fiókjában elérhetőek lesz az Ön adatkezeléssel
              kapcsolatos panaszai a jelen tájékoztatóban, a panaszokkal
              kapcsolatban megjelölt időtartamon belül. Amennyiben Ön vásárlónk
              volt és panaszügyintézés, vagy garanciális ügyintézés érdekében
              szeretné magát azonosítani, az azonosításhoz kérjük adja meg
              rendelési azonosítóját is. Ennek felhasználásával Önt, mint
              vásárlót is be tudjuk azonosítani.
            </p>
            <p className="mt-20px">
              Az adatkezeléssel kapcsolatos panaszokat legkésőbb 30 napon belül
              válaszolja meg Adatkezelő.
            </p>
            <p className="mt-20px">
              <strong>A hozzájárulás visszavonásának joga</strong>
            </p>
            <p className="mt-20px">
              Ön bármikor jogosult az adatkezeléshez adott hozzájárulást
              visszavonni, ilyen esetben a megadott adatokat rendszereinkből
              töröljük. Kérjük azonban vegye figyelembe, hogy a még nem
              teljesített megrendelés esetén a visszavonás azzal a
              következménnyel járhat, hogy nem tudjuk Ön felé teljesíteni a
              kiszállítást. Emellett, ha a vásárlás már megvalósult, a
              számviteli előírások alapján a számlázással kapcsolatos adatokat
              nem törölhetjük rendszereinkből, valamint ha Önnek tartozása áll
              fenn felénk, akkor a követelés behajtásával kapcsolatos jogos
              érdek alapján adatait a hozzájárulás visszavonása esetén is
              kezelhetjük.
            </p>
            <p className="mt-20px">
              <strong>A személyes adatokhoz való hozzáférés</strong>
            </p>
            <p className="mt-20px">
              Ön jogosult arra, hogy az Adatkezelőtől visszajelzést kapjon arra
              vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e,
              és ha adatkezelés folyamatban van, jogosult arra, hogy:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>a kezelt személyes adatokhoz hozzáférést kapjon és</li>
                <li>a következő információkról az Adatkezelő tájékoztassa:</li>
                <div className="unordered-list-style unordered-list-nested">
                  <ul className="mt-20px">
                    <li>az adatkezelés céljai;</li>
                    <li>az Önről kezelt személyes adatok kategóriái;</li>
                    <li>
                      információ azon címzettekről vagy címzettek kategóriáiról,
                      akikkel, illetve amelyekkel a személyes adatokat az
                      Adatkezelő közölte vagy közölni fogja;
                    </li>
                    <li>
                      a személyes adatok tárolásának tervezett időtartama, vagy
                      ha ez nem lehetséges, ezen időtartam meghatározásának
                      szempontjai;
                    </li>
                    <li>
                      az Ön azon joga, hogy kérelmezheti az Adatkezelőtől az
                      Önre vonatkozó személyes adatok helyesbítését, törlését
                      vagy kezelésének korlátozását, és jogos érdeken alapuló
                      adatkezelés esetén tiltakozhat az ilyen személyes adatok
                      kezelése ellen
                    </li>
                    <li>
                      a felügyeleti hatósághoz címzett panasz benyújtásának
                      joga;
                    </li>
                    <li>
                      ha az adatokat nem Öntől gyűjtötték be, a forrásukra
                      vonatkozó minden elérhető információ;
                    </li>
                    <li>
                      az automatizált döntéshozatal tényéről (ha alkalmazott
                      ilyen eljárás), ideértve a profilalkotást is, valamint
                      legalább ezekben az esetekben az alkalmazott logikára és
                      arra vonatkozóan érthető információkat, hogy az ilyen
                      adatkezelés milyen jelentőséggel, és Önre nézve milyen
                      várható következményekkel bír
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            <p className="mt-20px">
              A jog gyakorlásának célja az adatkezelés jogszerűségének
              megállapítására és ellenőrzésére irányulhat, ezért többszöri
              tájékoztatás kérés esetén az Adatkezelő méltányos költségtérítést
              számolhat fel a tájékoztatás teljesítéséért cserébe.
            </p>
            <p className="mt-20px">
              A személyes adatokhoz való hozzáférést az Adatkezelő úgy
              biztosítja, hogy az Ön azonosítását követően emailben juttatja el
              Önhöz a kezelt személyes adatokat és az információkat. Amennyiben
              regisztrációval rendelkezik, akkor a hozzáférést úgy biztosítjuk,
              hogy a felhasználói fiókjába belépve tudja az Önről kezelt
              személyes adatokat megtekinteni és ellenőrizni.
            </p>
            <p className="mt-20px">
              Kérjük, hogy kérelmében jelölje meg, hogy a személyes adatokhoz
              kér hozzáférést, vagy az adatkezeléssel kapcsolatos információkat
              kéri.
            </p>
            <p className="mt-20px">
              <strong>Helyesbítéshez való jog</strong>
            </p>
            <p className="mt-20px">
              Ön jogosult arra, hogy kérésére az Adatkezelő késedelem nélkül
              helyesbítse az Önre vonatkozó pontatlan személyes adatokat.
            </p>
            <p className="mt-20px">
              <strong>Adatkezelés korlátozásához való jog</strong>
            </p>
            <p className="mt-20px">
              Ön jogosult arra, hogy kérésére az Adatkezelő korlátozza az
              adatkezelést, ha az alábbiak valamelyike teljesül:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>
                  Ön vitatja a személyes adatok pontosságát, ez esetben a
                  korlátozás arra az időtartamra vonatkozik, amely lehetővé
                  teszi, hogy az Adatkezelő ellenőrizze a személyes adatok
                  pontosságát, ha a pontos adat azonnal megállapítható, akkor
                  nem kerül sor a korlátozásra;
                </li>
                <li>
                  az adatkezelés jogellenes, de Ön ellenzi az adatok törlését
                  bármely okból (például azért, mert az Ön számára jogi igény
                  érvényesítése miatt fontosak az adatok), ezért nem az adatok
                  törlését kéri, hanem ehelyett kéri azok felhasználásának
                  korlátozását;
                </li>
                <li>
                  az Adatkezelőnek már nincs szüksége a személyes adatokra a
                  megjelölt adatkezelés céljából, de Ön igényli azokat jogi
                  igények előterjesztéséhez, érvényesítéséhez vagy védelméhez;
                  vagy
                </li>
                <li>
                  Ön tiltakozott az adatkezelés ellen, de Adatkezelő jogos
                  érdeke is megalapozhatja az adatkezelést, ez esetben amíg
                  megállapításra nem kerül, hogy az Adatkezelő jogos indokai
                  elsőbbséget élveznek-e az Ön jogos indokaival szemben, az
                  adatkezelést korlátozni kell.
                </li>
              </ul>
            </div>
            <p className="mt-20px">
              Ha az adatkezelés korlátozás alá esik, az ilyen személyes adatokat
              a tárolás kivételével csak az érintett hozzájárulásával, vagy jogi
              igények előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy
              más természetes vagy jogi személy jogainak védelme érdekében, vagy
              az Unió, illetve valamely tagállam fontos közérdekéből lehet
              kezelni.
            </p>
            <p className="mt-20px">
              Adatkezelő az adatkezelés korlátozásának feloldásáról előzetesen
              (legalább a korlátozás feloldását megelőző 3 munkanappal)
              tájékoztatja Önt.
            </p>
            <p className="mt-20px">
              <strong>Törléshez - elfeledtetéshez való jog</strong>
            </p>
            <p className="mt-20px">
              Ön jogosult arra, hogy az Adatkezelő indokolatlan késedelem nélkül
              törölje az Önre vonatkozó személyes adatokat, ha az alábbi indokok
              valamelyike fennáll:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>
                  a személyes adatokra már nincs szükség abból a célból,
                  amelyből azokat az Adatkezelő gyűjtötte vagy más módon
                  kezelte;
                </li>
                <li>
                  Ön visszavonja hozzájárulását és az adatkezelésnek nincs más
                  jogalapja;
                </li>
                <li>
                  Ön tiltakozik a jogos érdeken alapuló adatkezelés ellen, és
                  nincs elsőbbséget élvező jogszerű ok (azaz jogos érdek) az
                  adatkezelésre,
                </li>
                <li>
                  a személyes adatokat az Adatkezelő jogellenesen kezelte és ez
                  a panasz alapján megállapítást nyert,
                </li>
                <li>
                  a személyes adatokat az Adatkezelőre alkalmazandó uniós vagy
                  tagállami jogban előírt jogi kötelezettség teljesítéséhez
                  törölni kell.
                </li>
              </ul>
            </div>
            <p className="mt-20px">
              Ha az Adatkezelő bármely jogszerű oknál fogva nyilvánosságra hozta
              az Önről kezelt személyes adatot, és bármely fent megjelölt okból
              törölni köteles azt, az elérhető technológia és a megvalósítás
              költségeinek figyelembevételével köteles megtenni az észszerűen
              elvárható lépéseket – ideértve technikai intézkedéseket – annak
              érdekében, hogy tájékoztassa az adatokat kezelő más adatkezelőket,
              hogy Ön kérelmezte a szóban forgó személyes adatokra mutató linkek
              vagy e személyes adatok másolatának, illetve másodpéldányának
              törlését.
            </p>
            <p className="mt-20px">
              A törlés nem alkalmazandó, amennyiben az adatkezelés szükséges:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>
                  a véleménynyilvánítás szabadságához és a tájékozódáshoz való
                  jog gyakorlása céljából;
                </li>
                <li>
                  a személyes adatok kezelését előíró, az adatkezelőre
                  alkalmazandó uniós vagy tagállami jog szerinti kötelezettség
                  teljesítése (ilyen eset a számlázás keretében megvalósuló
                  adatkezelés, mivel a számla megőrzését jogszabály írja elő),
                  illetve közérdekből vagy az adatkezelőre ruházott közhatalmi
                  jogosítvány gyakorlása keretében végzett feladat végrehajtása
                  céljából;
                </li>
                <li>
                  jogi igények előterjesztéséhez, érvényesítéséhez, illetve
                  védelméhez (pl.: ha az Adatkezelőnek Ön felé követelése áll
                  fenn és azt még nem teljesítette, vagy fogyasztói,
                  adatkezelési panasz intézése van folyamatban).
                </li>
              </ul>
            </div>
            <p className="mt-20px">
              <strong>Tiltakozáshoz való jog</strong>
            </p>
            <p className="mt-20px">
              Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból
              bármikor tiltakozzon személyes adatainak jogos érdeken alapuló
              kezelése ellen. Ebben az esetben az Adatkezelő a személyes
              adatokat nem kezelheti tovább, kivéve, ha az bizonyítja, hogy az
              adatkezelést olyan kényszerítő erejű jogos érdekek indokolják,
              amelyek elsőbbséget élveznek az Ön érdekeivel, jogaival és
              szabadságaival szemben, vagy amelyek jogi igények
              előterjesztéséhez, érvényesítéséhez vagy védelméhez kapcsolódnak.
            </p>
            <p className="mt-20px">
              Ha a személyes adatok kezelése közvetlen üzletszerzés érdekében
              történik, Ön jogosult arra, hogy bármikor tiltakozzon az Önre
              vonatkozó személyes adatok e célból történő kezelése ellen,
              ideértve a profilalkotást is, amennyiben az a közvetlen
              üzletszerzéshez kapcsolódik. Ha Ön tiltakozik a személyes adatok
              közvetlen üzletszerzés érdekében történő kezelése ellen, akkor a
              személyes adatok a továbbiakban e célból nem kezelhetők.
            </p>
            <p className="mt-20px">
              <strong>Hordozhatósághoz való jog</strong>
            </p>
            <p className="mt-20px">
              Amennyiben az adatkezelés automatizált módon valósul meg, vagy ha
              az adatkezelés az Ön önkéntes hozzájárulásán alapul, Önnek joga
              van arra, hogy kérje az Adatkezelőtől, hogy az Ön által az
              Adatkezelő részére megadott adatokat megkapja, amit az Adatkezelő
              xml, JSON, vagy csv formátumban bocsát az Ön rendelkezésére, ha ez
              technikailag megvalósítható, akkor kérheti, hogy az Adatkezelő az
              adatokat ebben a formában más adatkezelő számára továbbítsa.
            </p>
            <p className="mt-20px">
              <strong>Automatizált döntéshozatal</strong>
            </p>
            <p className="mt-20px">
              Ön jogosult arra, hogy ne terjedjen ki Önre az olyan, kizárólag
              automatizált adatkezelésen alapuló döntés hatálya (ideértve a
              profilalkotást is), amely Önre nézve joghatással járna vagy Önt
              hasonlóképpen jelentős mértékben érintené. Ezekben az esetekben az
              Adatkezelő köteles megfelelő intézkedéseket tenni az érintett
              jogainak, szabadságainak és jogos érdekeinek védelme érdekében,
              ideértve az érintettnek legalább azt a jogát, hogy az adatkezelő
              részéről emberi beavatkozást kérjen, álláspontját kifejezze, és a
              döntéssel szemben kifogást nyújtson be.
            </p>
            <p className="mt-20px">
              A fentiek nem alkalmazandóak abban az esetben, ha a döntés:
            </p>
            <div className="row unordered-list-style">
              <ul className="mt-20px">
                <li>
                  Ön és az Adatkezelő közötti szerződés megkötése vagy
                  teljesítése érdekében szükséges;
                </li>
                <li>
                  meghozatalát az Adatkezelőre alkalmazandó olyan uniós vagy
                  tagállami jog teszi lehetővé, amely Ön jogainak és
                  szabadságainak, valamint jogos érdekeinek védelmét szolgáló
                  megfelelő intézkedéseket is megállapít; vagy
                </li>
                <li>az Ön kifejezett hozzájárulásán alapul.</li>
              </ul>
            </div>
            <p className="mt-20px">
              <strong>Adatbiztonsági intézkedések</strong>
            </p>
            <p className="mt-20px">
              Az Adatkezelő kijelenti, hogy megfelelő biztonsági intézkedéseket
              hozott annak érdekében, hogy a személyes adatokat védje a
              jogosulatlan hozzáférés, megváltoztatás, továbbítás,
              nyilvánosságra hozatal, törlés vagy megsemmisítés, valamint a
              véletlen megsemmisülés és sérülés, továbbá az alkalmazott technika
              megváltozásából fakadó hozzáférhetetlenné válás ellen.
            </p>
            <p className="mt-20px">
              Az Adatkezelő a szervezeti és technikai lehetőségekhez képest
              mindent megtesz annak érdekében, hogy az Adatfeldolgozói is
              megfelelő adatbiztonsági intézkedéseket tegyenek, amikor az Ön
              személyes adataival dolgoznak.
            </p>
            <p className="mt-20px">
              <strong>Jogorvoslati lehetőségek</strong>
            </p>
            <p className="mt-20px">
              Amennyiben Ön szerint az Adatkezelő megsértette valamely, az
              adatkezelésre vonatkozó törvényi rendelkezést, vagy nem
              teljesítette valamely kérelmét, akkor vélelmezett jogellenes
              adatkezelés megszüntetése érdekében a Nemzeti Adatvédelmi és
              Információszabadság Hatóság vizsgálati eljárását kezdeményezheti
              (levelezési cím: 1363 Budapest, Pf. 9., email:
              ugyfelszolgalat@naih.hu, telefonszámok: +36 (30) 683-5969 +36 (30)
              549-6838; +36 (1) 391 1400).
            </p>
            <p className="mt-20px">
              Tájékoztatjuk emellett arról is, hogy az adatkezelésre vonatkozó
              törvényi rendelkezések megsértése esetén, vagy ha az Adatkezelő
              nem teljesítette valamely kérelmét, akkor az Adatkezelővel szemben
              polgári pert indíthat bíróság előtt.
            </p>
            <p className="mt-20px">Budapest, {datumModositas}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "adatkezeles_desktop.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const pageTitle = "Adatvédelmi tájékoztató | " + data.site.siteMetadata.title
  const pageDescription = "Bandha Works Jógaiskola adatvédelmi tájékoztató"

  return (
    <CustomHead
      canonical={siteUrl + location.pathname}
      title={pageTitle}
      description={pageDescription}
      image={ogImage}
      schemaData={{
        "@type": "WebPage",
        name: pageTitle,
        description: pageDescription,
        url: `${siteUrl}${location.pathname}`,
        logo: "https://mula.bandha.works/images/bw_logo.png",
      }}
    />
  )
}
