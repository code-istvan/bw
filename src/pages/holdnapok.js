import React, { useState } from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import MoondaysCard from "../components/Cards/MoondaysCard"
import { CustomLink } from "../components/CustomLink"
import Tabs from "../components/Tabs"
import moonDays from "../data/moonDays.json"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/Buttons/Button"
import "../sass/pages/_holdnapok.scss"

export default function Holdnapok() {
  const [currentMonthId, setCurrentMonthId] = useState(
    new Date().getMonth() + 1
  )
  const filteredData = moonDays.filter(
    item => item.monthValue === currentMonthId
  )

  const handleNextMonth = () => {
    const nextMonthId = currentMonthId === 12 ? 1 : currentMonthId + 1
    setCurrentMonthId(nextMonthId)
  }

  const handlePreviousMonth = () => {
    const previousMonthId = currentMonthId === 1 ? 12 : currentMonthId - 1
    setCurrentMonthId(previousMonthId)
  }

  const hasznosOlvasmanyok = [
    {
      link: "/blog/miert-nem-gyakorlunk-teli-es-ujholdkor-astanga-vinyasza-jogat/",
      title: "Miért nem gyakorlunk teli- és újholdkor astanga vinyásza jógát?",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
  ]

  const tabsData = [
    {
      id: "holdnapok",
      title: "Holdnapok",
      content: (
        <div className="mt-40px">
          <h3>
            Az astanga jóga tradíció része, hogy a Telihold és az Újhold napjai
            pihenőnapok, amikor nincs ászanagyakorlás.
          </h3>
          <br />
          <p>
            Ez a szokás azzal is magyarázható, miszerint a holdfázisok ránk (az
            emberi testre és elmére) is hatással bírnak, hiszen az emberi
            szervezet több mint 70%-a víz. Teliholdkor energikusnak érezzük
            magunkat, de érzelmileg nyugtalanok vagyunk. Újholdkor nyugodtnak,
            kiegyensúlyozottnak érezzük magunkat, viszont nem esik jól a fizikai
            megterhelés. Azaz Holdnapokon a különböző energiák erőteljes hatást
            gyakorolnak ránk, és emiatt sérülékenyebbek lehetünk.
          </p>
          <br />
          <p>
            A jógikus hagyományok szerint ezért Holdnapokon az ászanagyakorlás
            helyett a spirituális gyakorlatok végzése került előtérbe (pl.
            önmagunk megfigyelése, szent iratok, könyvek tanulmányozása, imák
            gyakorlása, mantrázás). A Holdnapok saját magunk általi
            megtapasztalása az egyik legjobb módja annak, hogy felismerjük és
            tiszteletben tartsuk a természet ritmusait, és ezáltal nagyobb
            harmóniában élhessünk vele.
          </p>
          <br />
          <p>
            Ezenkívül, aki napi rendszerességgel gyakorol (a heti hat nap
            ajánlott), hamar észre fogja venni, hogy a Holdnapokon tartott
            pihenőnap mennyire kedvező hatással van, amikor is a teste
            megpihenhet (elvégre az astanga gyakorlás fizikailag megterhelő
            lehet), a több szabadidő pedig a mentális feltöltődést teszi még
            teljesebbé.
          </p>
          <br />
          <div className="row unordered-list-style">
            <h3>További olvasmány a témában:</h3>
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
          <br />

          <div className="moondays--star-section">
            <p>
              A holdnaptárban *-gal jelölt dátumok speciális astangás holdnapok.
              A hivatalos – Budapestre számított – teli- és újhold nem erre a
              napra esik, viszont az aktuális holdnap órára és percre számított
              pontos időpontja (pl. 23:30) közelebb esik a következő napi
              gyakorlás időpontjához, ezért tolódík a pihenőnap erre a dátumra.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "ekadasi",
      title: "Ékádasi",
      content: (
        <div className="mt-40px">
          <h3>Az ékádasi a hindu kultúra böjtnapja</h3>
          <br />
          <p>
            A szó maga szanszkrit nyelven “tizenegyedik”-et jelent, és a
            holdtöltét, valamint újholdat követő tizenegyedik napra vonatkozik.
            A védikus hagyományok szerint - a Hold aktuális állásának
            köszönhetően -, testünk és elménk ezeken a napokon a legalkalmasabb
            a megtisztulásra. A böjt segítségével fizikai testünk megpihen.
            Üres, könnyű és tiszta gyomorral tudatunk energetikusabb és éberebb
            működésre képes. Ezeket a napokat érdemes befelé fordulással,
            spirituális gyakorlással tölteni (mantrázás, meditálás).
          </p>
        </div>
      ),
    },
  ]

  return (
    <Layout>
      <div className="holdnapok-wrapper">
        <div className="page-hero-container">
          <div className="row">
            <h1 className="page-hero-title">HOLDNAPOK 2025</h1>
            <StaticImage
              className="container-fluid page-hero-image page-big-image"
              src="../images/holdnapok_desktop.jpeg"
              layout="fullWidth"
              loading="lazy"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
            <StaticImage
              className="container-fluid page-hero-image page-mobil-image"
              src="../images/holdnapok_mobil.jpeg"
              layout="fullWidth"
              loading="lazy"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="row gap-2">
          <div className="col-12-xs col-4-lg holdnapok--right-side">
            <div className="mb-20px">
              <h3 className="moondays--holdnaptar-text">Holdnaptár</h3>
            </div>
            {filteredData.map(
              ({
                month,
                fullMoon,
                newMoon,
                thirdMoon,
                ekadashiNewMoon,
                ekadashiFullMoon,
              }) => (
                <MoondaysCard
                  month={month}
                  fullMoon={moonDays[currentMonthId - 1].fullMoon}
                  newMoon={moonDays[currentMonthId - 1].newMoon}
                  thirdMoon={moonDays[currentMonthId - 1].thirdMoon}
                  ekadashiNewMoon={moonDays[currentMonthId - 1].ekadashiNewMoon}
                  ekadashiFullMoon={
                    moonDays[currentMonthId - 1].ekadashiFullMoon
                  }
                  key={month}
                />
              )
            )}
            <div className="holdnapok--moondayCard--buttons">
              {currentMonthId === 1 ? (
                <div className="button--is-inactive">
                  <p>Előző hónap</p>
                </div>
              ) : (
                <div>
                  <Button
                    type="button"
                    buttonStyle="btn--third--naked-orange"
                    onClick={handlePreviousMonth}
                  >
                    Előző hónap
                  </Button>
                </div>
              )}
              {currentMonthId === 12 ? (
                <div className="button--is-inactive">
                  <p>Következő hónap</p>
                </div>
              ) : (
                <div>
                  <Button
                    type="button"
                    buttonStyle="btn--third--naked-orange"
                    onClick={handleNextMonth}
                  >
                    Következő hónap
                  </Button>
                </div>
              )}
            </div>
            <div className="moondays--holdnaptar-text mt-20px">
              <p>
                A *-gal jelölt dátumok speciális astangás holdnapok. A hivatalos
                – Budapestre számított – teli- és újhold nem erre a napra esik,
                viszont az aktuális holdnap órára és percre számított pontos
                időpontja (pl. 23:30) közelebb esik a következő napi gyakorlás
                időpontjához, ezért tolódík a pihenőnap erre a dátumra.
              </p>
            </div>
          </div>

          <div className="col-12-xs col-8-lg ">
            <div className="row moondays--tab">
              <Tabs tabsData={tabsData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "holdnapok_desktop.jpeg" }) {
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
  const pageTitle = "Holdnapok | " + data.site.siteMetadata.title
  const pageDescription =
    "Az astanga jóga tradíció része, hogy a Telihold és az Újhold napjai pihenőnapok, amikor nincs ászanagyakorlás."

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
