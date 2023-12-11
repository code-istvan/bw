import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import NameCard from "../components/NameCard"
import Button from "../components/Buttons/Button"
import { CustomLink } from "../components/CustomLink"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/pages/_rolunk.scss"

export default function Rolunk() {
  const guestTeachers = [
    [
      { name: "Harmony Slater", country: "CDN" },
      { name: "Lucia Andrade", country: "BRA" },
      { name: "David Robson", country: "CDN" },
      { name: "Russel Case", country: "USA" },
    ],
    [
      { name: "Lakshmisha Bhat", country: "IND" },
      { name: "Laruga Glaser", country: "USA" },
      { name: "Santina Giardina-Chard", country: "AUS" },
      { name: "Govinda Kai", country: "USA" },
    ],
    [
      { name: "R. Saraswathi Jois", country: "IND" },
      { name: "Andréa Drottholm", country: "S" },
      { name: "Sharmila Mahesh", country: "IND" },
      { name: "Dr. Norman Sjoman", country: "CDN" },
    ],
  ]

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">RÓLUNK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/rolunk_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="bandha Wokrs jógaiskola Három mérnök alapította"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/rolunk_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="bandha Wokrs jógaiskola Három mérnök alapította"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="rolunk-wrapper tight--desktop--container">
        <div className="row mt-40px">
          <h3 className="font-family-primary clr-brand-orange">
            A Bandha Works Jógaiskolát 2013-ban három mérnök alapította, akiket
            összekötött azon törekvés, hogy a tradicionális astanga vinyásza
            jógát népszerűsítsék, oktassák Magyarországon.
          </h3>
          <p className="mt-20px mb-20px">
            Több mint tíz év elteltével a helyzet mit sem változott, oktatóink
            elkötelezett gyakorlói az irányzatnak, és rendszeresen, az astanga
            jóga fővárosába, a dél-indiai Mysore-ba utaznak, hogy a{" "}
            <strong>paramparából </strong>
            (tanítói láncolatból) merítve, tovább mélyítsék tudásuk, megértésük.
          </p>
          <div className="island-section text-align-center rolunk-parampara">
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
            <div>
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
          <h3 className="clr-brand-orange font-family-primary mt-20px mb-20px">
            Tradicionális astanga jóga
          </h3>
          <p className="mb-20px">
            A jógaiskolában tradicionális{" "}
            <CustomLink
              link="/vinyasza-jogairanyzatok"
              title="astanga vinyásza jógát"
              classNames="link-decoration-remove"
            />{" "}
            és vinyásza krama jógát oktatunk. A Bandha Works specialitása a
            Magyarországon egyedülálló múltú reggeli{" "}
            <CustomLink
              link="/astanga-mysore-program"
              title="astanga Mysore-program,"
              classNames="link-decoration-remove"
            />
            {""} az astanga jóga tanításának eredeti és leghatékonyabb formája.
            Programunkban, rendszeresen látunk vendégül nemzetközileg is
            elismert külföldi astanga jóga tanárokat, akik tovább növelik
            intézményünkben az oktatás színvonalát.
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
            nemzetközileg is elismert astanga jóga tanárt láthattunk vendégül az
            évek során:
          </p>
        </div>
        <div className="guest-teachers-container-mobil">
          <div className="guest-teachers-mobil">
            {guestTeachers[0].map((person, index) => (
              <NameCard
                key={index}
                name={person.name}
                country={person.country}
              />
            ))}
          </div>
          <div className="guest-teachers-mobil">
            {guestTeachers[1].map((person, index) => (
              <NameCard
                key={index}
                name={person.name}
                country={person.country}
              />
            ))}
          </div>
          <div className="guest-teachers-mobil">
            {guestTeachers[2].map((person, index) => (
              <NameCard
                key={index}
                name={person.name}
                country={person.country}
              />
            ))}
          </div>
        </div>
        <div className="guest-teachers-container-desktop">
          <div className="guest-teachers-desktop">
            {guestTeachers.flat().map((person, index) => (
              <NameCard
                key={index}
                name={person.name}
                country={person.country}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="separator-horizontal mt-40px"></div>
          <div className="row">
            <h3 className="clr-brand-orange font-family-primary mt-20px mb-20px">
              2018. április 18.
            </h3>
            <p className="mb-20px">
              Az új jógaiskolánk felszentelésénél abban a különleges áldásban
              részesültünk, hogy az ünnepségen a <strong>Jois</strong> család is
              tiszteletét tette,
              <strong className="clr-brand-orange"> R. Saraswathi Jois </strong>
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
            <h3 className="clr-brand-orange font-family-primary mt-20px mb-20px">
              Kiadványaink
            </h3>
            <p className="mb-20px">
              „2019-ben, majd 2020-ban az a hatalmas megtiszteltetés ért minket,
              hogy <strong>Paramaguru R. Sharath Jois</strong>{" "}
              <CustomLink
                link="https://shop.bandha.works/collections/konyvek"
                title="két művét"
                classNames="link-decoration-remove"
              />{" "}
              is kiadhattuk magyar nyelven, alapítványunk, a{" "}
              <CustomLink
                link="https://nyolcag.hu/"
                title="Nyolcágú Jóga
              Alapítvány"
                classNames="link-decoration-remove"
              />{" "}
              gondozásában. Ezen túl még Eddie Stern bestseller{" "}
              <CustomLink
                link="https://shop.bandha.works/products/eddie-stern-egy-egyszeru-modszer"
                title="astanga
                könyvének"
                classNames="link-decoration-remove"
              />{" "}
              - 2022. áprilisában megjelent - magyar nyelvű kiadása is
              alapítványunkhoz fűződik. <br />
              <br /> Legújabb kiadványunk Szvámi Prabhavananda és Christopher
              Isherwood:{" "}
              <CustomLink
                link="https://shop.bandha.works/products/isten-megismerese-patandzsali-jogaaforizmai"
                title="Isten megismerése –
                Patandzsali jógaaforizmái"
                classNames="link-decoration-remove"
              />{" "}
              című művének magyar nyelvű fordítása (2023. december).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rolunk_desktop.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Seo
      title="Rólunk | Bandha Works Jógaiskola"
      description="A Bandha Works Jógaiskolát 2013-ban három mérnök alapította, akiket
  összekötött azon törekvés, hogy a tradicionális astanga vinyásza
  jógát népszerűsítsék, oktassák Magyarországon."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
