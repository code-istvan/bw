import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"
import "../sass/pages/_mysoreprogram.scss"

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
      <div className="mt-40px mb-20px">
        <h3>
          <strong>
            A Mysore stílusú astanga jóga gyakorlás hatékony és személyre
            szabott módszer, amely fizikai erőt, rugalmasságot és belső
            nyugalmat hoz. Az általa kínált folyamatos fejlődés és az
            oktató-tanítvány kapcsolat lehetőséget ad a mélyebb megértésre és
            személyes fejlődésre.
          </strong>
        </h3>
      </div>
      <div className="row">
        <p>
          Az{" "}
          <CustomLink
            link="/vinyasza-jogairanyzatok/"
            title="astanga vinyásza jógát"
            classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
          />{" "}
          tradicionálisan Mysore stílusban oktatják. A módszer ötvözi a
          csoportos vezetett órák és az egyéni gyakorlás előnyeit. Lényege, hogy
          a teremben az összes gyakorló a saját légzésének ritmusára önállóan
          végzi a sorozatot, ezáltal az oktató mindenkinek egyénre szabott
          igazításokat, utasításokat tud adni, anélkül, hogy ez megzavarná az
          óra dinamikáját. Így az sem probléma, ha valaki rövidebben gyakorol
          (pl. kezdő gyakorlók), vagy ha valaki hosszabb időt tölt a teremben
          (pl. haladó gyakorlók) ugyanazon az órán.
        </p>
      </div>
      <br />
      <div className="row">
        <p>
          Ehhez a hagyományos Mysore-i oktatási módszerhez az is hozzátartozik,
          hogy mindenki rendszeresen gyakorol a cél a heti hatszori gyakorlás,
          de a legtöbb gyakorló ezt csak fokozatosan éri el, vagy kevesebbszer
          gyakorol. A szombatok, illetve a teli- és az újhold, azaz{" "}
          <CustomLink
            link="/holdnapok/"
            title="holdnapok"
            classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
          />{" "}
          pihenőnapok, hölgyeknél a menstruáció első három-öt napja is az. Ez
          elsőre igen nagy kihívásnak tűnik, de természetesen a jógában is a
          fokozatosság fontos eleme a zavartalan fejlődésnek. A tanár figyeli a
          gyakorlók előrehaladását, és ha a tanítvány készen áll, akkor újabb
          ászanákat kap, amelyeket hozzá kell fűznie a többihez.
        </p>
      </div>
      <br />
      <div className="row image-track-3">
        <div className="col-12-xs col-4-md">
          <StaticImage
            className=""
            src="../images/Mysore_program_1.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
        <div className="col-12-xs col-4-md">
          <StaticImage
            className="display-none-mobil"
            src="../images/Mysore_program_2.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
        <div className="col-12-xs col-4-md">
          <StaticImage
            className="display-none-mobil"
            src="../images/Mysore_program_4.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <p>
          A gyakorlás időpontja is meghatározott, a Mysore órákat
          tradicionálisan reggel tartják. Ennek az oka, hogy a jógagyakorláshoz
          az úgynevezett <i>Brahma muhurta</i> napszak a legmegfelelőbb, azaz a
          napfelkelte előtti másfél óra - vagy ehhez minnél közelebbi időpont -.
          Ekkor a levegő friss, a környezet csendes, frissen, kipihenten ébredve
          még nem nyomasztanak bennünket a benyomások, amelyek a nehéz munkanap
          során értek minket. Az elme könnyebben tud fókuszálni és kevésbé
          kalandozik el. A test tiszta, a gyomor üres, tehát a körülmények
          ideálisak a gyakorláshoz. Kezdetben a test kevésbé hajlékonynak tűnhet
          a reggeli órákban, de gyorsan alkalmazkodik az új rutinhoz.
        </p>
      </div>
      <br />
      <div className="row">
        <h3>Mysore programunk felépítése</h3>
      </div>
      <div className="row unordered-list-style">
        <ul>
          <li>
            <p>heti 5x Mysore stílusú gyakoráls</p>
          </li>
          <li>
            <p>heti egy vezetett óra</p>
          </li>
          <li>
            <p>szombat pihenőnap</p>
          </li>
          <li>
            <p>havonta egyszer konferencia</p>
          </li>
        </ul>
      </div>
      <br />
      <div className="row">
        <h3>A Mysore stílus elemei tehát:</h3>
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
        <h3>Hasznos olvasmányok a Mysore gyakorlásról:</h3>
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
