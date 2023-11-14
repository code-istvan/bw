import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import SocialProofs from "../data/socialProofs.json"
import { CustomLink } from "../components/CustomLink"
import SocialProofCard from "../components/Cards/SocialProofCard"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/pages/_osztondij.scss"

export default function Osztondij() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <div className="page-hero-container tight--desktop--container">
        <div className="row">
          <h1 className="page-hero-title">ÖSZTÖNDÍJ</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/osztondij_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga ösztöndíj"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/osztondij_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="osztondij-wrapper tight--desktop--container">
        <div className="row mt-40px">
          <p>
            A jóga mindenki életében gyökeres változásokat hozhat, gyakorlását
            bármely élethelyzetben érdemes elkezdeni. Előfordulhat azonban, hogy
            anyagi körülményeink nem teszik lehetővé jógabérlet vásárlását,
            ráadásul még nem rendelkezünk annyi rutinnal, hogy otthoni
            gyakorlásba kezdjünk. A Bandha Works Ösztöndíj éppen az ilyen
            helyzetekben nyújthat segítséget, jógaiskolánk a nyertesnek három
            hónapra korlátlan jógabérletet biztosít.
          </p>
          <blockquote>
            A tudat stabilitásának szilárd alapja a hosszú időn keresztül,
            megszakítás nélkül végzett gondos gyakorlás. - Patandzsali Jóga
            Szútrák I.14
          </blockquote>
          <p>
            Jógagyakorlásod minél hatékonyabbá tételében – a reggeli{" "}
            <CustomLink
              link="/astanga-mysore-program/"
              title="Mysore-program"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            látogatása mellett – intenzív, személyes segítséget nyújtanak
            oktatóink. A jelentkezők vállalják, hogy minimum heti háromszor
            részt vesznek a Mysore-program óráin – az előre közösen
            meghatározott időpontokban –, és havi rendszerességgel elkészítenek
            egy beadandó esszét egy meghatározott témában. Amennyiben kezdő
            astanga gyakorló vagy, az első hónapban az{" "}
            <CustomLink
              link="/astanga-kezdo-tanfolyam/"
              title="astanga kezdő tanfolyamon"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            biztosítunk helyet számodra. A második hónapban az{" "}
            <CustomLink
              link="/astanga-mysore-kurzus/"
              title="astanga Mysore-kurzussal"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            készítünk fel az astanga jóga egyéni gyakorlására. A harmadik
            hónapban pedig már a reggeli Mysore-órákon tudsz résztvenni.
          </p>
        </div>
        <StaticImage
          className="container-fluid-right page-hero-image page-big-image mt-40px"
          src="../images/oszt_content_img.jpg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Astanga jóga ösztöndíj"
          placeholder="blurred"
        />
        <StaticImage
          className="container-fluid page-hero-image page-mobil-image mt-40px"
          src="../images/oszt_content_img_mobil.jpg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Astanga jóga Mysore"
          placeholder="blurred"
        />
        <div className="row mt-20px">
          <h2 className="clr-brand-orange font-family-primary mb-20px">
            Jelentkezés az ösztöndíjra
          </h2>
          <p className="mb-20px">
            Az ösztöndíj igényléséhez ki kell tölteni az online jelentkezési
            űrlapot. Ehhez kell a pályázónak csatolnia egy motivációs levelet
            (A4-es oldal, Times New Roman 12-es betűtípus, 1,5-ös sorköz,
            minimum 1 oldal, maximum 3), amelyben leírja, hogy ez a lehetőség
            mit adna számára, hogyan segítené elmélyíteni vagy elindítani a jóga
            gyakorlását és melyek azok a körülmények, amelyek nehézséget okoznak
            a bérlet vásárlásában. Azon pályázókat, akik bejutnak a második
            fordulóba egy személyes beszélgetésre hívjuk meg, ahol is
            kiválasztjuk a nyertest. A nyertes pályázó három hónapig korlátlanul
            látogathatja a Bandha Works jógastúdió óráit, a fenti menetrend
            szerint. Továbbá minden hónapban egy egyéni konzultációs alkalmon
            vehet részt, ahol segítséget kap a gyakorlás elmélyítésében, illetve
            az esetlegesen felvetődő akadályok megoldásában.
          </p>
          <div className="osztondij-timings">
            <div className="osztondij-timings--wrapper">
              <p className="mb-20px">
                <strong>Az ösztöndíj időszaka</strong>
                <br />
                2024. január 1. – 2024. március 31.
              </p>
              <div className="separator-horizontal"></div>
              <p className="mb-20px">
                <strong>Első forduló</strong> <br />
                Az első fordulóra online tudsz jelentkezni a fenti leírás
                szerint. A jelentkezési felület{" "}
                <strong>
                  2023. december 7. 12:00-tól, december 10. 12:00-ig
                </strong>{" "}
                lesz elérhető ezen az oldalon.
                <br /> <br />
                <strong>Második forduló</strong>
                <br />A második fordulóban, az első fordulóból továbbjutott
                jelentkezők vehetnek részt, ahol egy személyes felvételi
                beszélgetés keretein belül választjuk kis a nyertest. Ennek
                időpontja:{" "}
                <strong>
                  2023. december 17-én vasárnap, 16:00 órától
                </strong>. <br />
                <div className="separator-horizontal mt-20px"></div>
                <strong>Felvételi bizottság tagjai</strong> <br />
                <p>
                  Dr. Kővári Zsuzsa, Dr. Németh György, Dr. Bokk Ágota,{" "}
                  <CustomLink
                    link="/szalai-istvan/"
                    title="Szalai István"
                    classNames="body link-decoration-remove schedule-teacher"
                  />
                </p>
                <div className="separator-horizontal mt-20px"></div>
                <strong>Helyszín</strong> <br />
                <CustomLink
                  link="/kapcsolat/"
                  title="Bandha Works Jógaiskola"
                  classNames="body link-decoration-remove schedule-teacher"
                />
              </p>
              <div className="separator-horizontal"></div>
              <p className="mb-20px">Várjuk jelentkezésedet!</p>
            </div>
          </div>
        </div>
        <div className="separator-horizontal-full mt-40px"></div>
        <div className="row mt-40px">
          <h2 className="clr-brand-orange font-family-primary">
            Ösztöndíjasaink írták
          </h2>
        </div>
        <div className="row mb-40px">
          <Slider {...settings}>
            {SocialProofs.scholarship &&
              SocialProofs.scholarship.map(({ name, text, intro }, index) => (
                <SocialProofCard
                  key={index}
                  name={name}
                  intro={intro}
                  text={text}
                />
              ))}
          </Slider>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "osztondij_desktop.jpg" }) {
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
      title="JÓGA ÖSZTÖNDÍJ | Bandha Works Jógaiskola"
      description="A jóga életre szóló változásokat hozhat az életedbe, és ha anyagi akadályok állnak a gyakorlás útjában, a Bandha Works Ösztöndíj éppen az ilyen helyzetekben nyújthat segítséget."
      image2={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
