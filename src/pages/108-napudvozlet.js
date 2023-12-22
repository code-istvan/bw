import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { CustomLink } from "../components/CustomLink"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/Buttons/Button"
import "../sass/pages/_szaznyolc.scss"

export default function Szaznyolc() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">ÚJÉVI 108 NAPÜDVÖZLET</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/108_napudvozlet.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Újévi 108 napüdvözlet"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/108_napudvozlet_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Újévi 108 napüdvözlet a bandhában"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="arak-wrapper tight--desktop--container">
        <div className="row mt-40px">
          <h2 className="text-align-left clr-brand-orange">
            <strong>
              {" "}
              Kezdd az Újévet 108 napüdvözlettel! Ez az intenzív mozgó
              meditációs technika kiváló módszert kínál, hogy elengedd az előző
              év feszültségeit, aggodalmait, problémáit és kitisztult testtel és
              elmével vágj neki 2024-es évnek!
            </strong>
          </h2>
        </div>
        <div className="row mt-20px">
          <blockquote>
            Hridrógam mama szúrja harimánam csa násaja <br />
            Ó, Nap, szabadíts meg a szívemre és elmémre egészségtelen
            sápadságtól. <br />
            Rig-Véda. I. 50. 11.
          </blockquote>
        </div>
        <div className="row mt-20px">
          <p>
            {" "}
            <CustomLink
              link="/blog/astanga-ikonok-sri-k-pattabhi-jois-1-resz"
              title="Sri K. Pattabhi Jois"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            (Gurudzsi) szerint a napüdvüzletek gyakorlása által nem csak a
            fizikai test betegségei gyógyíthatóak, hanem a mentális kórok is,
            akár legyenek ezek múltbéli cselekedetek (prárabdha karma) ebben a
            születésben érvényesülő negatív hatásai. Ennek eredményeként
            elérhető a hosszú élet, jó egészség, kicsattanó erő és éles elme.
          </p>
        </div>
        <div className="row mt-20px">
          <p>
            <h3 className="clr-brand-orange font-family-primary mb-20px">
              Miért 108?
            </h3>
            A <strong>108</strong>-as szám rendkívül nagy jelentőséggel bír a
            védikus kultúrában, <strong>108</strong> szem van a hinduk
            imafüzérén és az Upanisadok száma is ugyanennyi. Ezen kedvező szám
            és a Nap között mindig is szoros kapcsolatot feltételeztek, hiszen a
            Nap átmérője épp <strong>108</strong>-szorosa Földének, illetve a
            két égitest között távolság a Nap átmérőjének <strong>108</strong>
            -szorosa.
          </p>
        </div>
        <div className="row mt-20px">
          <h3 className="clr-brand-orange font-family-primary mb-20px">
            A napüdvözlet technológiája
          </h3>
          <p>
            A napüdvözlet a test középpontját, a <strong>solar plexus</strong>{" "}
            területét aktivizálja, ami megmagyarázza az elnevezését és a
            kapcsolatát a csillaggal.
          </p>
          <p>
            A gyakorlatsor végzése közben a légzés és a mozdulatok tökéletes
            összehangolása és a tekintet fókuszálása az egyik legkiválóbb
            módszer a <strong>mozgó meditációs</strong> élmény
            megtapasztalására. A <strong>Szúrja Namaszkára </strong>mozdulatsor
            már önmagában végezve is rendkívüli gyógyító hatással rendelkezik, a
            legkedvezőbb hatás pedig akkor érhető el, ha <strong>108</strong>
            -szor végezzük, amely szám a Napot szimbolizálja.
          </p>
        </div>
        <div className="szaznyolc-timings mt-20px">
          <div className="szaznyolc-timings--wrapper">
            <p>
              <strong>Időpont</strong>
              <br /> 2024. január 1. (hétfő) <strong>17:00-től</strong> és{" "}
              <strong>19:00-tól</strong>. A nagy érdeklődésre való tekintettel
              lesz egy második időpont is (19:00).{" "}
              <span className="body clr-brand-orange">
                <strong>
                  A 17:00 időpontra a szabad helyek sajnos elfogytak a
                  nagyteremben.{" "}
                </strong>
              </span>
              <div className="separator-horizontal mt-20px"></div>
              <strong>Oktató</strong> <br />
              <CustomLink
                link="/szalai-istvan"
                title="Szalai István"
                classNames="body link-decoration-remove schedule-teacher"
              />{" "}
              KPJAYI Authorisation Level 1
              <div className="separator-horizontal mt-20px"></div>
              <strong>Helyszín</strong> <br />
              <CustomLink
                link="/kapcsolat"
                title="Bandha Works Jógaiskola"
                classNames="body link-decoration-remove schedule-teacher"
              />{" "}
              <br />
              <div className="separator-horizontal mt-20px"></div>A résztvevők
              száma sajnos korlátozott. Összesen 23-an tudnak részt venni az
              eseményen, 15-en a nagyteremben, 8-an a kisteremben. Érkezz
              minimum 15 perccel kezdés előtt.
              <div className="separator-horizontal mt-20px"></div>
              <p className="mb-20px">
                A programra a részvételi díj kiegyenlítésével tudsz jelentkezni.
              </p>
              <Button
                type="button"
                buttonStyle="btn--primary--solid"
                onClick={() => {
                  window.open(
                    "https://shop.bandha.works/products/ujevi-108-napudvozlet?_pos=1&_psq=108&_ss=e&_v=1.0",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }}
              >
                Jelentkezem
              </Button>
            </p>
          </div>
        </div>
        <div className="row mt-20px">
          <p>Várunk szeretettel!</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "108_napudvozlet.jpg" }) {
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
  const pageTitle = "Újévi 108 napüdvözlet | " + data.site.siteMetadata.title
  const pageDescription =
    "Kezdd az Újévet 108 napüdvözlettel! Ez az intenzív mozgó meditációs technika kiváló módszert kínál, hogy elengedd az előző év feszültségeit, aggodalmait, problémáit és kitisztult testtel és elmével vágj neki 2024-es évnek!"

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
