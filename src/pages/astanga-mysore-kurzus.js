import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomLink } from "../components/CustomLink"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import CourseApplication from "../components/Cards/CourseApplication"
import AccordionFaq from "../components/Accordions/AccordionFaq"
import mysoreKurzusFaq from "../data/mysoreKurzusFaq.json"
import { CustomHead } from "../components/CustomHead"

export default function AstangaMysoreKurzus() {
  const hasznosOlvasmanyok = [
    {
      link: "/blog/5-dolog-amit-az-uj-gyakorloknak-erdemes-megtanulnia",
      title: "5 dolog amit az új gyakorlóknak érdemes megtanulnia",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
    {
      link: "/blog/sharath-jois-arrol-hogy-miben-nyujt-tobbet-egy-helyi-shala-mint-egy-hagyomanyos-edzes",
      title:
        "Sharath Jois arról, hogy miben nyújt többet egy helyi Shala mint egy hagyományos edzés",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
  ]

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">ASTANGA MYSORE-KURZUS</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_kurzus_desktop.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_kurzus_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>

      <div className="mysore-kurzus--wrapper tight--desktop--container">
        <div className="mt-40px mb-20px">
          <h3 className="clr-brand-orange">
            <strong>
              A Mysore-stílusú astanga jóga gyakorlás hatékony és személyre
              szabott módszer, amely fizikai erőt, rugalmasságot és belső
              nyugalmat hoz. Az általa kínált folyamatos fejlődés és az
              oktató-tanítvány kapcsolat lehetőséget ad a mélyebb megértésre és
              a személyes előrehaladásra.
            </strong>
          </h3>
        </div>
        <div className="row mb-20px">
          <p>
            Az astanga vinyásza jógában az ászanákat tradicionálisan Mysore-
            (ejtsd: májszor) stílusban oktatják. A módszer ötvözi a csoportos
            vezetett órák és az egyéni gyakorlás előnyeit. Lényege, hogy a
            teremben az összes gyakorló a saját légzésének ritmusára önállóan
            végzi a sorozatot, ezáltal az oktató mindenkinek egyénre szabott
            igazításokat, utasításokat tud adni, anélkül hogy ez megzavarná az
            óra dinamikáját. Így az sem probléma, ha valaki rövidebben gyakorol
            (pl. kezdő gyakorlók), vagy ha valaki hosszabb időt tölt a teremben
            (pl. haladó gyakorlók) ugyanazon az órán.
          </p>
        </div>
        <div className="row mb-20px">
          <div className="col-12-xs">
            <StaticImage
              className="page-mobil-image"
              src="../images/akt1.jpg"
              layout="fullWidth"
              loading="lazy"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga kezdő tanfolyam"
              placeholder="blurred"
            />
            <StaticImage
              className="page-big-image"
              src="../images/akt_big.jpg"
              layout="fullWidth"
              loading="lazy"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga kezdő tanfolyam"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="row mt-20px">
          <h3 className="clr-brand-orange">A kurzusról</h3>
          <p>
            Hogyha szeretnéd kipróbálni, milyen a Mysore-stílusú astanga
            gyakorlás vagy otthon szeretnél egyedül gyakorolni, akkor minderre
            lehetőséged van a{" "}
            <CustomLink
              link="/astanga-kezdo-tanfolyam"
              title="kezdő astanga tanfolyamot"
              classNames="link-decoration-remove"
            />{" "}
            követő négy hétben a <strong>Mysore-kurzuson</strong>. A{" "}
            Mysore-kurzus tananyaga az astanga kezdő tanfolyam tananyagára épül.
          </p>
          <p className="mt-20px">
            A kurzus során megtanítjuk az első sorozat álló és az első néhány
            ülő ászanájának sorrendjét, az ászanákhoz tartozó vinyásza számolást
            és belekóstolhatsz abba is, milyen a saját légzésed ütemére
            gyakorolni. Ezen felül megismerhetik a résztvevők a Mysore-etikettet
            és betekintést nyerhetnek az indiai „main shala”-nak (rendszerünk
            központi intézményének) a működésébe.
          </p>
          <p className="mt-20px">
            Minden alkalmat egy rövid beszélgetéssel, elméleti résszel kezdünk,
            ahol lesz lehetőség feltenni a gyakorlással kapcsolatban felmerülő
            kérdéseket. Az ászana gyakorlásban mindenkivel a saját fejlődése
            ütemében haladunk. A résztvevőknek a kurzus végére - ha minden
            alkalmon részt vettek - lesz egy stabil egyéni gyakorlásuk, amit
            vagy otthoni körülmények között vagy egy astanga Mysore-programban
            tudnak majd elmélyíteni.
          </p>
          <p className="mt-20px">
            A kurzus utolsó két reggeli alkalmán, a Mysore-programban,
            megtapasztalhatod milyen másokkal együtt, de mégis önállóan
            gyakorolni, tanári jelenlét mellett.
          </p>
        </div>
        <div className="row">
          <div className="mb-20px mt-20px">
            <h3 className="clr-brand-orange">Gyakran ismételt kérdések</h3>
          </div>{" "}
          <div className="row">
            {mysoreKurzusFaq &&
              mysoreKurzusFaq.map(({ question, answer }, index) => (
                <AccordionFaq key={index} question={question} answer={answer} />
              ))}
          </div>
        </div>
        <div className="row">
          <h3 className="mt-40px mb-20px clr-brand-orange font-family-primary">
            Tanfolyami időpontok
          </h3>
        </div>
        <CourseApplication
          courseName={"ASTANGA MYSORE-KURZUS"}
          courseDate={"2025. február 4. (kedd) 19:00"}
          courseLink={
            "https://shop.bandha.works/products/astanga-mysore-kurzus-1"
          }
          // courseNote={"Még egy szabad helyünk van erre a kurzusra!"}
          courseType={"kurzus"}
          courseTeacher={"Kisanna"}
        />
        <CourseApplication
          courseName={"ASTANGA MYSORE-KURZUS"}
          courseDate={"2025. május 13. (kedd) 19:00"}
          courseLink={
            "https://shop.bandha.works/products/astanga-mysore-kurzus"
          }
          // courseNote={"Még egy szabad helyünk van erre a kurzusra!"}
          courseType={"kurzus"}
          courseTeacher={"Kisanna"}
        />
        {/* <CourseApplication
          courseName={"HÉTVÉGI ASTANGA MYSORE-KURZUS"}
          courseDate={"2024. június 22. (szombat) 10:00"}
          courseLink={
            "https://shop.bandha.works/products/hetvegi-astanga-mysore-kurzus"
          }
          // courseNote={"Még három szabad helyünk van erre a kurzusra!"}
          courseType={"kurzus"}
          courseTeacher={"Kisanna"}
          courseWeekend={"igen"}
        /> */}
        <div className="row unordered-list-style mt-20px">
          <h3>Hasznos olvasmányok az astanga-gyakorlásról:</h3>
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
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mysore_kurzus_desktop.jpg" }) {
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
  const pageTitle =
    "Astanga jóga Mysore-kurzus Budapest | " + data.site.siteMetadata.title
  const pageDescription = "Astnaga jóga Mysore-kurzus Budapesten"

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
