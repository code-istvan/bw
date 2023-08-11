import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import NameCard from "../components/NameCard"
import Button from "../components/Buttons/Button"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/pages/_rolunk.scss"

export default function Rolunk() {
  const guestTeachers = [
    [
      { name: "Harmon Slater", country: "CDN" },
      { name: "Lucia Andrade", country: "BRA" },
      { name: "David Robson", country: "CDN" },
      { name: "Russel Case", country: "USA" },
    ],
    [
      { name: "Govinda Kai", country: "USA" },
      { name: "Laruga Glaser", country: "USA" },
      { name: "Santina Giardina-Chard", country: "AUS" },
      { name: "Lakshmisha Bhat", country: "IND" },
    ],
    [
      { name: "Dr. Norman Sjoman", country: "CDN" },
      { name: "Andrea Drottholm", country: "S" },
      { name: "R. Saraswathi Jois", country: "IND" },
      { name: "Sharmila Mahesh", country: "IND" },
    ],
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
          <h3 className="font-family-primary clr-brand-orange">
            A Bandha Works Jógaiskolát 2013-ban három mérnök alapította, akiket
            összekötött azon törekvés, hogy tradicionális astanga vinyásza jógát
            népszerűsítsék, oktassák Magyarországon.
          </h3>
          <p className="mt-20px mb-20px">
            Több mint tíz év elteltével a helyzet mit sem változott, oktatóink
            elkötelezett gyakorlói az irányzatnak, és rendszeresen, az astanga
            jóga fővárosába, a dél-indiai Mysore-ba utaznak, hogy a{" "}
            <strong>paramparából </strong>
            (tanítói láncolatból) merítve, tovább mélyítsék tudásuk, megértésük.
          </p>

          <div className="island-section text-align-center">
            <h3 className="mb-20px clr-brand-orange font-family-primary">
              <strong>PARAMPARA</strong>
            </h3>
            <p>
              A parampara a tudás, amelyet a tanár a tanítványára hagyományoz. A
              parampara szanszkrit szó jelentése a tudás átadásának
              legértékesebb formáját, a közvetlen és tapasztalati tudás átadását
              fejezi ki. Ez minden tanítói láncolat alapja: az évezredes tanítás
              megőrzésének láncolatában a tanár és tanítványa a láncszemek.
            </p>
            <div className="">
              <Button
                type="button"
                buttonStyle="btn--third--naked-orange"
                onClick={() => {
                  navigate("/parampara")
                }}
              >
                Paramparáról bővebben
              </Button>
            </div>
          </div>

          <p className="mb-20px">
            A jógaiskolában tradicionális astanga vinyásza jógát és vinyásza
            krama jógát oktatunk. A Bandha Works specialitása a Magyarországon
            egyedülálló reggeli astanga Mysore-program, az astanga jóga
            tanításának eredeti és leghatékonyabb formája. Programunkban,
            rendszeresen látunk vendégűl nemzetközileg is elismert külföldi
            astanga jóga tanárokat, akik tovább növelik intézményünkben az
            oktatás színvonalát.
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
        <div className="row">
          <h3 className="clr-brand-orange font-family-primary mt-20px mb-20px">
            Első évtizedünk
          </h3>
          <p className="mb-20px">
            Abban a nagy megtiszteltetésben volt részünk, hogy rengeteg
            nemzetközileg is elismert astanga jóga tanárt láthattunk vendégűl az
            évek során:
          </p>
          <div className="senki-container">
            <div className="senki">
              {guestTeachers[0].map((person, index) => (
                <NameCard
                  key={index}
                  name={person.name}
                  country={person.country}
                />
              ))}
            </div>
            <div className="senki">
              {guestTeachers[1].map((person, index) => (
                <NameCard
                  key={index}
                  name={person.name}
                  country={person.country}
                />
              ))}
            </div>
            <div className="senki">
              {guestTeachers[2].map((person, index) => (
                <NameCard
                  key={index}
                  name={person.name}
                  country={person.country}
                />
              ))}
            </div>
          </div>
          <div className="separator-horizontal mt-40px"></div>
          <div className="row">
            <h3 className="clr-brand-orange font-family-primary mt-20px mb-20px">
              2018 április 18.
            </h3>
            <p className="mb-20px">
              Az a hatalmas nagy megtiszteltetés ért minket, hogy az új
              jógaiskolán felszentelésénél, a Jois család is tiszteletét tette,{" "}
              <strong className="clr-brand-orange">R. Saraswhathi Jois</strong>{" "}
              személyében.
            </p>
            <StaticImage
              className="container"
              src="../images/fire_ceremony.jpeg"
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
