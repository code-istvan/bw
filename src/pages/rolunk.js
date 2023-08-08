import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import NameCard from "../components/NameCard"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/pages/_rolunk.scss"

export default function Rolunk() {
  const guestTeachers = [
    { name: "Harmon Slater", country: "CDN" },
    { name: "Lucia Andrade", country: "BRA" },
    { name: "David Robson", country: "CDN" },
    { name: "Russel Case", country: "USA" },
    { name: "Govinda Kai", country: "USA" },
    { name: "Laruga Glaser", country: "USA" },
    { name: "Santina Giardina-Chard", country: "AUS" },
    { name: "Lakshmisha Bhat", country: "IND" },
    { name: "Dr. Norman Sjoman", country: "CDN" },
    { name: "Andrea Drottholm", country: "S" },
    { name: "R. Saraswathi Jois", country: "IND" },
    { name: "Sharmila Mahesh", country: "IND" },
  ]

  return (
    <Layout>
      <Seo title="RÓLUNK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">RÓLUNK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/rolunk_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/rolunk_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="rolunk-wrapper">
        <div className="row mt-40px">
          <h1>
            A Bandha Works Jógaiskolát{" "}
            <span className="clr-brand-orange heading heading--1">2013</span>
            -ban három mérnök alapította, akiket összekötött azon törekvés, hogy
            tradicionális astanga vinyásza jógát népszerűsítsék, oktassák
            Magyarországon.
          </h1>
          <p className="mt-20px mb-20px">
            Több mint tíz év elteltével a helyzet mit sem változott, oktatóink
            elkötelezett gyakorlói az irányzatnak, és rendszeresen, az astanga
            jóga fővárosába, a dél-indiai Mysore-ba utaznak, hogy a paramparából
            (tanítói láncolatból) merítve, tovább mélyítsék tudásuk,
            tapasztalatuk.
          </p>
          <p className="mb-20px">
            A jógaiskolában tradicionális astanga vinyásza jógát és vinyásza
            krama jógát oktatunk. A Bandha Works specialitása a Magyarországon
            egyedülálló reggeli Mysore-program, az astanga jóga tanításának
            eredeti és leghatékonyabb formája. A módszer ötvözi a csoportos órák
            és az egyéni gyakorlás előnyeit. Lényege, hogy a teremben az összes
            gyakorló a saját légzésének ritmusára önállóan végzi az ismert és
            állandó ászanasorozatokat, ezáltal az oktató mindenkinek egyénre
            szabott igazításokat, utasításokat tud adni, anélkül, hogy ez
            megzavarná az óra dinamikáját.
          </p>
          <p className="mb-20px">
            Azok számára pedig, akik még csak most kezdenek ismerkedni ezzel az
            irányzattal, rendszeresen indítunk astanga kezdő tanfolyamot,
            illetőleg Mysore-gyakorlásra felkészítő kurzust.
          </p>
          <p className="mb-20px">
            Az ászanák oktatásán túl nagy hangsúlyt fektetünk a jógafilozófia és
            a jógikus életmód megismertetésére. A havonta megrendezésre kerülő
            ingyenes astanga konferenciákon kötetlen beszélgetés formájában
            foglalkozunk a jóga elméletével és a tudatos életmóddal. Itt
            mindenki felteheti a felmerülő kérdéseit, és jó alkalom arra is,
            hogy a gyakorlótársak jobban megismerjék egymást.
          </p>
        </div>
        <div className="separator-horizontal-full mt-20px mb-20px"></div>
        <div className="row ">
          <h3 className="clr-brand-orange font-family-primary mt-20px mb-20px">
            Első évtizedünk
          </h3>
          <p className="mb-20px">
            Abban a nagy megtiszteltetésben volt részünk, hogy rengeteg
            nemzetközileg is elismert astanga jóga tanárt láthattunk vendégűl az
            évek során:
          </p>
          <div className="name-card-container">
            {guestTeachers.map((person, index) => (
              <NameCard
                key={index}
                name={person.name}
                country={person.country}
              />
            ))}
          </div>
          <h3 className="mt-40px">2018 április 18.</h3>
          <p className="mb-20px">
            Az a hatalmas nagy megtiszteltetés ért minket, hogy az új
            jógaiskolán felszentelésénél, a Jois család is tiszteletét tette,{" "}
            <strong>R. Saraswhathi Jois</strong> személyében.
          </p>
          <div>
            <StaticImage
              className="container-fluid-left page-hero-image page-big-image"
              src="../images/fire_ceremony.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
