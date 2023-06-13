import React, { useState } from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"
import "../sass/pages/_jogairanzyatok.scss"

export default function Vinyasza() {
  const [selectedTab, setSelectedTab] = useState("Astanga")

  const handleTabSelect = tab => {
    setSelectedTab(tab)
  }

  const tabsData = [
    {
      id: "astanga",
      title: "Astanga",
      content: (
        <div>
          <blockquote>
            Viná vinyásza jógéna ászanádin na kárajét <br />
            Óh, jógi, ne végezz ászanát vinyásza nélkül <br />
            Jóga korunta - Vámana rishi <br />
          </blockquote>
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
          <ul>
            <li>
              <p>
                <strong>Jama</strong> - erkölcsi előírások
              </p>
            </li>
            <li>
              <p>
                <strong>Nijama</strong> - önfegyelem gyakorlása
              </p>
            </li>
            <li>
              <p>
                <strong>Ászana</strong> - jógatesthelyzetek gyakorlása
              </p>
            </li>
            <li>
              <p>
                <strong>Pránájáma</strong> - légzés szabályozásának gyakorlása
              </p>
            </li>
            <li>
              <p>
                <strong>Pratjáhára</strong> - érzékek és a világ dolgai közötti
                kapcsolat kiiktatása
              </p>
            </li>
            <li>
              <p>
                <strong>Dhárána</strong> - tartós koncentráció
              </p>
            </li>
            <li>
              <p>
                <strong>Dhjána</strong> - megszakítás nélküli meditáció
              </p>
            </li>
            <li>
              <p>
                <strong>Szamádhi</strong> - a látó és a látott iránti
                közömbösség megtapasztalása
              </p>
            </li>
          </ul>{" "}
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
          <p>A sorozatokat három csoportba soroljuk:</p>
          <br />
          <ul>
            <li>
              <p>
                <strong>Jóga Csikitszá</strong> (jóga terápia): a fizikai test
                rendbetételére szolgál
              </p>
            </li>
            <li>
              <p>
                <strong>Nádi Sódhana</strong> (nádik tisztítása): az
                idegrendszer tisztítását végzi
              </p>
            </li>
            <li>
              <p>
                <strong>Szthíra Bhága A, B, C, D </strong>(szilárd erő): az
                előző sorozatok hatásainak elmélyítését szolgálja
              </p>
            </li>
          </ul>
          <br />
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
          <p>Ez egy másik példa tartalom, krama.</p>
        </div>
      ),
    },
  ]

  const selectedTabContent = tabsData.find(
    tab => tab.title === selectedTab
  )?.content

  return (
    <Layout>
      <Seo title="VINYÁSZA JÓGAIRÁNYZATOK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">VINYÁSZA JÓGAIRÁNYZATOK</h1>
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

      <div className="tabs row mt-40px">
        <div className="tabs__header mb-20px">
          {tabsData.map((tab, index) => (
            <h3
              key={index}
              className={`tabs__label ${
                selectedTab === tab.title ? "active" : ""
              }`}
              onClick={() => handleTabSelect(tab.title)}
            >
              {tab.title}
            </h3>
          ))}
        </div>
        <div className="tabs__content">{selectedTabContent}</div>
      </div>
    </Layout>
  )
}
