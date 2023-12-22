import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Parampara() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title ">PARAMPARA</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/parampara_desktop.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Parampara"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/parampara_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Parampara"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row tight--desktop--container">
        <h2 className="mt-40px heading heading--1 text-align-left mb-0px">
          <span className="clr-brand-orange heading heading--1">
            Tanítói láncolatunk:
          </span>{" "}
          R. Sharath Jois – K. Pattabhi Jois – T. Krishnamacharya – Ramamohana
          Brahmachari… ...Patandzsali
        </h2>
        <p className="mt-20px">
          A parampara a tudás, amelyet a tanár a tanítványára hagyományoz. A
          parampara szanszkrit szó jelentése a tudás átadásának legértékesebb
          formáját, a közvetlen és tapasztalati tudás átadását fejezi ki. Ez
          minden tanítói láncolat alapja: az évezredes tanítás megőrzésének
          láncolatában a tanár és tanítványa a láncszemek. A jógatanításnak a
          paramparaból kell származnia ahhoz, hogy hatékony, igaz és teljes
          legyen. A parampara biztosítja azt, hogy a jóga tanítása hatékony,
          igaz és teljes legyen.
        </p>
        <h3 className="clr-brand-orange font-family-primary mt-20px">
          A tanítvány útja
        </h3>
        <p className="mt-20px">
          A tudást csak azt követően lehet átadni, hogy a tanítvány már éveket
          töltött egy tapasztalt guruval, egy olyan tanárral, akinek a tanítvány
          a testét, szellemét, beszédét és belső lényét teljes mértékben átadta.
          A tanítvány csak ezt követően válik alkalmassá a tudás befogadására. A
          tudásnak a tanár és tanítványa között, ily módon történő átadása a
          parampara.
        </p>
        <p className="mt-20px">
          A tanítvány dharmája, vagyis kötelessége az odaadó gyakorlás valamint
          az, hogy törekedjen a guru tanításainak megértésére. A tudás – és a
          jóga – tökéletessége több, mint egyszerűen megtanulni a gyakorlást; a
          tudás a tanítvány és a tanár közötti kölcsönös szeretetből és
          tiszteletből fakad, és ennek a kapcsolatnak a kiműveléséhez
          elkerülhetetlenül idő kell.
        </p>
        <h3 className="clr-brand-orange font-family-primary mt-20px">
          A tanítvány és a tanár kapcsolata
        </h3>
        <p className="mt-20px">
          A tanár kötelessége az, hogy pontosan a gurujától tanult módon tanítsa
          a jógát, jó szívvel és nemes szándékkal, jó célra törekedve. A
          tanításban még szikrája se legyen ártó szándéknak. A tanár semmiben
          sem tévesztheti meg tanítványát és nem térhet el attól, amire őt magát
          megtanították.
        </p>
        <p className="mt-20px">
          A tanár és a tanítvány közötti köteléknek, amely egy bőséges
          spirituális örökség alapját képezi, Indiában több ezer éves hagyománya
          van. A tanár meg tudja szilárdítani tanítványait – erőssé tudja őket
          tenni akkor, ha meginognának. A tanár olyan, mint egy apa vagy egy
          anya, aki tanítványa minden egyes spirituális lépésénél jelen van és
          ügyel azokra.
        </p>
        <h3 className="clr-brand-orange font-family-primary mt-20px">
          A parampara hagyománya és jelentősége
        </h3>
        <p className="mt-20px">
          A jóga tanítását számos ősi tanári tradíció őrzi, ugyanakkor manapság
          egyesek új tanítói láncolatokat próbálnak létrehozni és új utakat
          részesítve előnyben Gurujuk paramparaját elítélik vagy megváltozatják.
          Ezzel szemben átadni magunkat a paramparanak olyasvalami, mintha sok
          ezer éve tartó tanítások folyamába olvadnánk bele, egy olyan folyó
          áramlatába, amelyet ősrégi mesterek tartottak fenn, és amely egy
          óceánnyi tudássá gyűlt össze. Azonban nem minden folyó jut el az
          óceánig, ezért ügyelnünk kell arra, hogy az általunk követett
          hagyomány igaz és önzetlen legyen.
        </p>
        <p className="mt-20px">
          A Himalája csúcsaira sokan akarnak feljutni, de nem mindenki jár
          sikerrel. Ugyanakkor bátorság és önátadás által, valamint a Guru
          kegyelméből, aki a tudás birtokosa és aki tanítványaiért
          fáradhatatlanul dolgozik, feljuthatunk a tudás csúcsaira.
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "parampara_desktop.jpg" }) {
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
  const pageTitle = "Parampara | " + data.site.siteMetadata.title
  const pageDescription =
    "A parampara a tudás, amelyet a tanár a tanítványára hagyományoz."

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
