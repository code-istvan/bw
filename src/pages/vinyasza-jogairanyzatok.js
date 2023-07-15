import React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"
import Tabs from "../components/Tabs"
import "../sass/pages/_jogairanzyatok.scss"

export default function Vinyasza() {
  const tabsData = [
    {
      id: "astanga",
      title: "Astanga",
      content: (
        <div>
          <div className="row">
            <blockquote>
              Viná vinyásza jógéna ászanádin na kárajét <br />
              Óh, jógi, ne végezz ászanát vinyásza nélkül <br />
              Jóga korunta - Vámana rishi <br />
            </blockquote>
          </div>
          <p>
            Az <b>astanga</b> szanszkrit szó jelentése nyolc ág, Patandzsali
            nyolclépcsős jógarendszerére utal. Patandzsali Maharishi
            feltehetőleg az i.e. 2. században élt nagy indiai bölcs volt, aki
            megírta a Jóga Szútrákat. A tömör aforizmákban nyolc lépcsőből álló
            módszert javasol a jógagyakorlóknak, innen kapta nevét az astanga
            (nyolcágú) jóga.
          </p>
          <br />
          <p>
            A rendszer célja tehát a szamádhi állapotába jutás, az ezt elősegítő
            lépcsőfokok pedig a következők:
          </p>
          <div className="unordered-list-style">
            <ul>
              {[
                "Jama - erkölcsi előírások",
                "Nijama - önfegyelem gyakorlása",
                "Ászana - jógatesthelyzetek gyakorlása",
                "Pránájáma - légzés szabályozásának gyakorlása",
                "Pratjáhára - érzékek és a világ dolgai közötti kapcsolat kiiktatása",
                "Dhárána - tartós koncentráció",
                "Dhjána - megszakítás nélküli meditáció",
                "Szamádhi - a látó és a látott iránti közömbösség megtapasztalása",
              ].map((item, index) => (
                <li key={index}>
                  <p>
                    {item.split(" ")[0] === item.split(" - ")[0] ? (
                      <strong>{item.split(" - ")[0]}</strong>
                    ) : (
                      item.split(" - ")[0]
                    )}{" "}
                    - {item.split(" - ")[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <p>
            Ezek alapján az ászana csak piciny szelet az egészből, mégis
            rendkívül fontos szerepe van abban, hogy később tovább tudjunk lépni
            a további szintek irányába. Ekkor gyakorlatilag a test felkészítése
            zajlik az akár több óráig tartó stabil, kényelmes ülőhelyzet
            (lótusz, sziddhászana) fenntartására, amelyre a légző- majd
            meditációs gyakorlatok során nagy szükségünk lesz. A ma ismert
            astanga vinyásza sorozatokat{" "}
            <CustomLink
              link="/blog/astanga-ikonok-sri-k-pattabhi-jois-1-resz/"
              classNames="body link-decoration-remove clr-brand-orange"
              title="Sri Krishna Pattabhi Jois"
            />{" "}
            tette világhírűvé, aki a legendás{" "}
            <CustomLink
              link="/blog/astanga-ikonok-t-krishnamacharya-1-resz/"
              classNames="body link-decoration-remove clr-brand-orange"
              title="Sri Krishnamacharya tanítványa"
            />{" "}
            volt.
          </p>
          <br />
          <StaticImage
            className="mt-20px mb-40px"
            src="../images/old_shala.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Old Shala Mysore"
            placeholder="blurred"
          />
          <p>
            A vinyásza rendszer a mozgás és a légzés szigorú összhangját
            jelenti. Lényege az, hogy minden egyes ki- és belégzésre
            meghatározott mozdulatot végzünk, az ászanákat pedig öt vagy több
            légzésig tartjuk. A rendszer lelke az úgynevezett{" "}
            <CustomLink
              link="/blog/astanga-triszthana/"
              classNames="body link-decoration-remove clr-brand-orange"
              title="triszthána"
            />{" "}
            (a figyelem három fókusza), azaz az ászana, a hangos légzés és a
            <b>dristi</b>. Az ászanákat a <b>bandhák</b> teszik könnyeddé,
            stabillá és biztonságossá. A <b>bandhák</b> fizikai szinten
            izomzárakat jelentenek, a finom testen belül pedig a <b>prána</b>{" "}
            (életerő) szabályozását irányítják. A légzés hangja olyan, mint a
            tenger hullámainak morajlása illetve sokan Darth Vader
            légzéstechnikáját is felfedezni vélik benne. A<b>dristi</b> a
            tekintet fókuszálása, megfelelő végrehajtásával nyugodt és tiszta
            elmével végezhetjük a sorozatokat. Az astanga vinyásza rendszerben
            fix ászanasorozatokat gyakorlunk, szám szerint hatot, mindenki a
            számára megfelelő(ke)t, amelyeket változatlan formában végzünk
            hetente hatszor.
          </p>{" "}
          <br />
          <p>
            A{" "}
            <CustomLink
              link="/sorozatabrak/"
              classNames="body link-decoration-remove clr-brand-orange"
              title="sorozatokat"
            />{" "}
            három csoportba soroljuk:
          </p>
          <div className="unordered-list-style">
            <ul>
              {[
                {
                  title: "Jóga Csikitszá",
                  description: "- a fizikai test rendbetételére szolgál",
                },
                {
                  title: "Nádi Sódhana",
                  description: "- az idegrendszer tisztítását végzi",
                },
                {
                  title: "Szthíra Bhága A, B, C, D",
                  description:
                    "- az előző sorozatok hatásainak elmélyítését szolgálja",
                },
              ].map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item.title}</strong> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <StaticImage
            className="mt-20px mb-40px"
            src="../images/Guruji_Sharathji.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Guruji Sharathji rooftop asana pratice"
            placeholder="blurred"
          />
          <p>
            A szombat, illetve a teli- és újhold (
            <CustomLink
              link="/holdnapok/"
              classNames="body link-decoration-remove clr-brand-orange"
              title="holdnapok"
            />
            ) napjai hagyományosan pihenőnapok. A sorozat ászanái egymásra
            épülnek, ezért tradicionálisan a gyakorlás addig tart, amíg el nem
            jutunk addig a testhelyzetig, amelyet már nem tudunk végrehajtani,
            ekkor a levezetés után relaxáció következik. Ha elértünk odáig, hogy
            a sorozat minden ászanáját megfelelően el tudjuk végezni, a tanítónk
            engedélyével továbbléphetünk a következő sorozatra. Ezzel a
            módszerrel bármilyen adottságokkal rendelkező gyakorló részesülhet a
            rendszer jótékony hatásaiból, és nem utolsósorban elkerülhetőek a
            sérülések. Ezt az ún. Mysore stílusú órákon lehetséges kivitelezni,
            ahol a vezetett órával ellentétben mindenki a saját légzésritmusára
            gyakorol, a tanár pedig lehetőséget kap arra, hogy mindenkinek az
            egyéni állapota szerint nyújtson segítséget. Egy nyugati astanga
            iskola órarendjében általában két óratípus található: a már említett
            Mysore- és a vezetett óra. Hagyományosan reggel, még napfelkelte
            előtt ideális megkezdeni a gyakorlást, manapság ezt (főként
            kezdetben) nehéz beilleszteni a mindennapokba. Érdekességként
            megemlíteném, hogy az indiai Mysore-ban, az astanga fővárosában a
            három legnagyobb jógaiskola közül mindössze egyikben tartanak
            vezetett órát, ott is csak heti egyszer. A vezetett óra elsődleges
            célja az ászana sorrend és az őket összekötő mozdulatok precíz
            elsajátítása. Mindenesetre óratípustól függetlenül ne lepődjünk meg,
            ha a tanártól finom vagy határozott érintéssel, testtel történő
            igazításokat kapunk, ez a stílus jellemzője. A tanár szakértő
            segítségével könnyebb a gyakorlónak megérteni az ászanák lényegét, a
            haladás irányát és elmélyülni bennük.
          </p>
          <br />
          <p>
            Összességében tehát az astanga célirányos, lépcsőzetes rendszert
            kínál azoknak, akik a szamádhi felé törekednek. Végül kötelességünk
            mindenkit figyelmeztetni a fellépő mellékhatásokra: testünk és
            elménk hihetetlen erőssé és egészségessé válik a gyakorlás által!
          </p>
        </div>
      ),
    },
    {
      id: "krama",
      title: "Vinyásza krama",
      content: (
        <div>
          <p>
            A vinyásza krama a fizikai és spirituális önfejlesztés ősi útja,
            amely egyesíti a tanulást, a gyakorlást és a tanítást. A szanszkrit
            vinyásza szó vi előtagja változatot jelent, a nyásza utótag pedig
            azt, hogy “előírt feltételek között”, tehát a teljes vinyásza
            szóösszetétel a mozdulat és légzés összhangjára vonatkozik, a krama
            szó jelentése pedig módszertan. A rendszer egyedi módon közelíti meg
            a jógászanát (jógapozíciókat). A test, az elme és a légzés működését
            időben összehangolja, ezáltal a gyakorló megtapasztalhatja az
            ászanázás valódi örömét.
          </p>
          <br />
          <p>
            A stílus jellegzetessége, hogy minden egyes mozdulatot megfelelő
            vinyászával kell kivitelezni, tehát az ászanákat légzéssel
            összehangolt összekötő elem fűzi össze. Az elme szintén szorosan
            követi a lassú, egyenletes és hangos jógalégzést; ezáltal megvalósul
            a jóga valódi célja: a test és elme leigázása. Talán a legismertebb
            példa az astanga vinyásza jóga hat sorozata, amelyek szintén a
            vinyásza krama rendszerbe tartoznak.
          </p>
          <br />
          <p>
            A vinyásza krama pontosan követi a klasszikus jóga definícióját. A
            jógát általában kétféleképpen definiálják: egyesülésnek (jukti) vagy
            belső békének (szamádhi). A légzést igaként felhasználva a vinyásza
            krama jóga összehangolja a testet és elmét, ezáltal létrejön az
            egyesülés. Emellett, mivel az elme követi a mély és egyenletes
            légzést, kitartó gyakorlással végül a legmagasabb szintű béke
            (szamádhi) is elérhető.
          </p>
          <br />
          <h3>Krishnamacharya hagyatéka</h3>
          <br />
          <StaticImage
            className="mt-20px mb-40px"
            src="../images/Krishnamacharya.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Krishnamacharya"
            placeholder="blurred"
          />
          <p>
            A legendás jógi,{" "}
            <CustomLink
              link="/blog/astanga-ikonok-t-krishnamacharya-1-resz/"
              classNames="clr-brand-orange body link-decoration-remove"
              title="Sri. T. Krishnamacharya "
            />
            hozta vissza ezt a jógatípust a köztudatba. Az 1930-as években
            megírta Jóga Makaranda (A jóga nektárja) című művét, amelyben
            bemutatja a vinyásza krama rendszert. A többszáz létező
            vinyászasorozat közül csupán néhányat ismertet benne, de ne
            gondoljuk, hogy az elnevezés csak ezekre a konkrét sorozatokra
            vonatkozik. A mester könyvéban megemlíti, hogy tanárától körülbelül
            700 ászanát tanult, amiből az következik, hogy a Jóga Makaranda csak
            egy kis ízelítő a teljes rendszerből.
          </p>
          <br />
          <h3>Spirituális háttér</h3>
          <br />
          <p>
            Krishnamacharya szerint a vinyásza krama három fő aspektusa a
            vinyásza csikitszá, a vinyásza sakti és a vinyásza adhjátmiká. A
            vinyásza csikitszá a jóga terápiás megközelítése, a vinyásza sakti
            az erőt növeli, a vinyásza adhjátmiká pedig közelebb viszi a
            gyakorlót kezdetben a finomfizikai elemekhez, később Istenhez. Az
            utóbbi módszer nem is egy adott technika, inkább a gyakorláshoz való
            hozzáállás. Tehát az első két technika gyakorlása közben elkezdünk
            odaadást mutatni a legfensőbb valónk iránt. Ezt bhakti jógának is
            nevezik, az odaadás jógájának. Ez sosem passzív meghódolás, sokkal
            inkább pozitív hozzáállás az összes egyéni lélekhez, mindenben és
            mindenkiben az isteni szikra észrevétele.
          </p>
          <br />
          <h3>A vinyásza krama jellemzői</h3>
          <br />
          <p>
            A jógászanák megvalósításával kapcsolatos feltételek Patandzsali
            Jóga szútrái alapján a következők:
          </p>
          <div className="unordered-list-style">
            <ul>
              {[
                {
                  title: "Stabilitás (szthíra)",
                  description:
                    "- ahhoz, hogy egy testhelyzetet jógászanának nevezhessünk, gyakorlóját képessé kell tennie arra, hogy stabil maradjon, legyen szó akár egyszerű állóhelyzetről (tádászana) akár fejállásról (sírsászana).",
                },
                {
                  title: "Kényelem (szukha)",
                  description:
                    "- az elmét a légzésre összpontosítjuk, ezzel biztosítjuk, hogy rendkívül örömteli és ellazult állapotban maradjunk a gyakorlás során.",
                },
                {
                  title: "Egyenletes és lassú légzés (prajatna szithila)",
                  description:
                    "-  ezt a módszert Patandzsali a gyakorlás megkönnyítése érdekében javasolja. A prajatna (törekvés, erőfeszítés) itt a dzsívána prajatnára vonatkozik (élni akarásra), amely itt nem más, mint maga a lélegzés. Ez a feltétel megszabja, hogy a gyakorlás alatt a légzésnek egyenletesnek és lassúnak kell maradnia. Ezért, amikor helyesen jógázunk, nem szabad erősen zilálnunk. Az aerob sportokkal ellentétben (amelyeknek szintén megvan a maga haszna) sem a légzés sebessége, sem a pulzusszám nem emelkedhet. A normál légzés sebessége 15-20 légzés percenként. Mivel a mozdulatok lassúak a vinyásza jógában, ezért a légzés sebességét is csökkenteni kell. Ideális esetben egy perc alatt legfeljebb ötször, hatszor lélegzünk.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item.title}</strong> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <StaticImage
            className="mt-20px mb-40px"
            src="../images/Krishnamacharya_teaching.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Krishnamacharya teaching"
            placeholder="blurred"
          />
          <h3>Pulzusszám a vinyásza jógában</h3>
          <br />
          <p>
            A vinyásza jóga gyakorlása alatt hangos légzést kell végeznünk,
            mivel ezzel automatikusan szabályozzuk a légzést. Ha a sorozat
            számos vinyászájának végzése közben a gyakorló úgy érzi, hogy
            túlterhelte magát, és nehéz lélegeznie, akkor pár perc pihenőt kell
            tartania, amíg helyreáll a légzése. A vinyásza rendszerben gyakorlók
            gyakran azt veszik észre, hogy az idő múlásával egyre lassul a
            légzésük a mindennapokban is, ezáltal az elméjük is nyugodtabb és
            derűsebb lesz. Vannak jógik, akik akár egy teljes óráig tartó
            gyakorlás alatt végig percenként négy légzést tudnak tartani.
            Számukra még a legnehezebb pózok is mélyen relaxálóak.
          </p>
          <br />
          <h3>Az elme fókuszálása a légzésre</h3>
          <br />
          <p>
            A szanszkrit ana szó légzést jelent (akárcsak a jól ismert svásza
            szó), a szamápatti pedig a teljes elmebeli koncentráció. Az elménket
            a légzésre kell fókuszálnunk a vinyásza gyakorlás alatt. Ha az
            elménk elkalandozna, gyengéden vissza kell vezetni a légzéshez.
            Szerencsére az emberek többsége könnyűnek találja a légzésre való
            figyelést, ezáltal élvezi a gyakorlást.
          </p>
          <br />
          <p>
            Krishnamacharya mindig a vinyásza krama elveit alkalmazta az
            ászanatanítás során, soha nem tanított különálló ászanákat vinyásza
            és légzés nélkül. Ez a kulcsa a vinyásza krama tanításának: a lassú,
            egyenletes légzés fennartása, és az ászanák széles skálájának
            ismerete. A jóga terápiás hatása csak megfelelően felkészült tanár
            segítségével érvényesülhet, aki ki tudja választani az ászanák
            skálájából a legmegfelelőbbet a gyakorló szükségleteinek
            megfelelően.
          </p>
        </div>
      ),
    },
  ]

  return (
    <Layout>
      <Seo title="VINYÁSZA JÓGAIRÁNYZATOK" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">VINYÁSZA JÓGAIRÁNYZATOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/jogairanyzatok_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/jogairanyzatok_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="jogairanyzatok-wrapper tight--desktop--container">
        <div className="row tabs mt-20px">
          <div className="tabs__header mb-20px">
            <Tabs tabsData={tabsData} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
