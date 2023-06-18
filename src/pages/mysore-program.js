import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"

export default function Mysoreprogram() {
  const hasznosOlvasmanyok = [
    {
      link: "/blog/5-dolog-amit-az-uj-gyakorloknak-erdemes-megtanulnia/",
      title: "5 dolog amit az új gyakorlóknak érdemes megtanulnia",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
    {
      link: "/blog/sharath-jois-arrol-hogy-miben-nyujt-tobbet-egy-helyi-shala-mint-egy-hagyomanyos-edzes/",
      title:
        "Sharath Jois arról, hogy miben nyújt többet egy helyi Shala mint egy hagyományos edzés",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
  ]

  return (
    <Layout>
      <Seo title="MYSORE PROGRAM" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">MYSORE PROGRAM</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-40px">
        <p>
          Az astanga vinyásza jógát tradicionálisan Mysore stílusban oktatják. A
          módszer ötvözi a csoportos vezetett órák és az egyéni gyakorlás
          előnyeit. Lényege, hogy a teremben az összes gyakorló a saját
          légzésének ritmusára önállóan végzi a sorozatot, ezáltal az oktató
          mindenkinek egyénre szabott igazításokat, utasításokat tud adni,
          anélkül, hogy ez megzavarná az óra dinamikáját. Ráadásul így az sem
          probléma, ha valaki rövidített sorozatot végez, míg más a teljes első
          sorozatot és a második sorozat elejét is elvégzi ugyanazon az órán.
        </p>
      </div>
      <br />
      <div className="row">
        <p>
          A hagyományos oktatási módszerhez az is hozzátartozik, hogy
          mindenkinek heti hatszor kell gyakorolnia (a szombatok, illetve a
          teli- és az újhold pihenőnapok, hölgyeknél a menstruáció első három-öt
          napja). Ez elsőre nehéznek tűnhet, de természetesen a kezdők
          fokozatosan építik fel a teljes sorozatot, addig rövidebb a
          gyakorlásuk. A tanár figyeli az előrehaladásukat, és ha a tanítvány
          készen áll, akkor újabb ászanákat kap, amelyeket hozzá kell fűznie a
          többihez.
        </p>
      </div>
      <br />
      <div className="row">
        <p>
          A gyakorlás időpontja is meghatározott, a Mysore órákat Indiában
          reggel tartják. Ennek az oka, hogy a jógagyakorláshoz az úgynevezett
          Brahma muhurta napszak a legmegfelelőbb, azaz a napfelkelte előtti
          másfél óra. Ekkor a levegő friss, a környezet csendes, és az is fontos
          szempont, hogy Indiában ekkor van a leghűvösebb. Frissen, kipihenten
          ébredve még nem nyomasztanak bennünket a benyomások, amelyek a nehéz
          munkanap során értek minket, az elme könnyebben tud fókuszálni és
          kevésbé kalandozik el. A test tiszta, a gyomor üres, tehát a
          körülmények ideálisak a gyakorláshoz. Kezdetben a test kevésbé
          hajlékonynak tűnhet a hajnali órákban, de gyorsan alkalmazkodik az új
          rutinhoz.
        </p>
      </div>
      <br />
      <div className="row">
        <p>
          Természetesen eleinte, főleg, ha sok új ászanát kapunk, problémát
          okozhat a pontos vinyászaszámolás memorizálása. Ezért a KPAYI-ban heti
          két vezetett óra van, pénteken mindenkinek vezetett első sorozat, míg
          vasárnap az arra felkészült tanítványok vezetett második sorozaton
          vesznek részt. A Bandha Works Jógaiskolában pedig péntek reggelente
          van vezetett első sorozat.
        </p>
      </div>
      <br />
      <div className="row">
        <p>A Mysore stílus elemei tehát:</p>
      </div>
      <div className="row unordered-list-style">
        <ul>
          {[
            "csoportos, egyéni gyakorlás órán, szakképzett oktató felügyelete alatt",
            "napi szintű gyakorlás (a szombatok, a teli- és újhold, illetve a hölgynapok pihenőnapok)",
            "gyakorlás korán reggel, lehetőleg ugyanabban az időpontban",
            "hetente vezetett óra a vinyászaszámolás memorizálásához",
            "önálló gyakorlás jelentősége",
          ].map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div className="row">
        <p>
          Látszik, hogy szigorúak a feltételek, nagy elkötelezettséget kíván ez
          az irányzat. Azonban az astanga vinyásza jóga ezen keretek között
          képes kifejteni teljesen az áldásos hatását. Amellett, hogy a
          gyakorlás fenntartásához automatikusan egészségesebb életmódra
          váltanak a gyakorlók (könnyű étkezések, korai fekvés és kelés,
          rendszeres életritmus), az elme is fokozatosan átalakul. A Mysore
          gyakorlás szinte rákényszerít minket, hogy őszinték legyünk
          önmagunkkal, szembesít a hibáinkkal, amelyek akadályt képeznek a
          spirituális úton, és eszközként szolgál a leküzdésükhöz. A jamákat és
          nijamákat önmagában hordozza, és kezdetben a gyakorlás során, majd az
          életünk minden területén megnyilvánítja őket. Először például
          megtanuljuk, hogyan ne ártsunk önmagunknak az ászanák közben, úgy,
          hogy figyeljük a légzésünk és test jelzéseit, majd később a
          megszerzett tapasztalatainkra alapozva ugyanerre képesek leszünk akkor
          is, ha egy haragos kollégánk áll velünk szemben.
        </p>
      </div>
      <br />
      <div className="row">
        <p>
          A délutáni vezetett astanga vinyásza órák inkább elméleti órák, céljuk
          elsősorban a vinyászaszámolás és a dristik elsajátítása, és
          felkészítés a komolyabb elkötelezettséget igénylő, sokkal mélyebb
          Mysore stílusú gyakorlásra. Hatásuk inkább fizikai, a mentális
          változások sokkal lassabban indulnak be. A Mysore stílusú gyakorlás
          ezzel szemben spirituális gyakorlat, amely nem csak a testet, de az
          elmét is tisztítja és gyógyítja. Éppen ezért van pár szabály, amelyek
          betartása szükséges ahhoz, hogy a gyakorlás hatása képes legyen teljes
          pompájában virágozni az életünkben. A házirend tapasztalati
          útmutatásokat tartalmaz, és mindig a gyakorló biztonságát és
          fejlődését szolgálja.
        </p>
      </div>
      <br />
      <div className="row">
        <p>
          {" "}
          Ha szeretnéd felfedezni az astanga vinyásza jóga valódi mélységét,
          csatlakozz Mysore programunkhoz! A programban résztvevők vállalják,
          hogy legjobb tudásuk szerint betartják a fenti pontokat.
        </p>
      </div>{" "}
      <br />
      <div className="row">
        <p>
          A BandhaWorks Mysore programjának vezetője: Szalai István KPJAYI
          Authorized Level 1 oktató
        </p>
      </div>{" "}
      <br />
      <div className="row">
        <p>
          A BandhaWorks Mysore programjához előzetes bejelentkezés után tudsz
          csatlakozni. Előzetes bejelentkezés: mysore (kukac) bandhaworks.hu.
          Írásos visszaigazolásunkat minden esetben várd meg!
        </p>
      </div>
      <br />
      <div className="row unordered-list-style">
        <h3>Hasznos olvasmányok a témában:</h3>
        <ul>
          {hasznosOlvasmanyok.map((link, index) => (
            <li key={index}>
              <p>
                <CustomLink
                  link={link.link}
                  title={link.title}
                  classNames={link.classNames}
                />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
