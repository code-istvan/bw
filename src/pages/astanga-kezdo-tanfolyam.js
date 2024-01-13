import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { CustomLink } from "../components/CustomLink"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import AccordionFaq from "../components/Accordions/AccordionFaq"
import CourseApplication from "../components/Cards/CourseApplication"
import kezdoFaq from "../data/kezdoFaq.json"
import "../sass/pages/_astangaKezdoTanfolyam.scss"

export default function AstangaKezdoTanfolyam() {
  const breakpoints = useBreakpoint()

  // const tematika = [
  //   "Az astanga jóga eredetének és elméleti hátterének ismertetése",
  //   "A helyes légzéstechnika elsajátítása, tisztító gyakorlatok",
  //   "A vinyásza rendszer elmélete és gyakorlata",
  //   "A triszthána, a gyakorlás három fókusza",
  //   "A bandhák, avagy az ászanák mélyebb energetikai rétegei",
  //   "Az astanga vinyásza jóga első sorozatának ászanái, púrvóttánászanáig, pontos vinyászaszámolással és a hozzájuk tartozó dristikkel. Ahol szükséges, az oktató egyénre szabott módosításokat javasol a hatásos és biztonságos gyakorlás érdekében.",
  //   "A hosszú távú gyakorlás felépítése: a vezetett és a Mysore-óratípus, illetve az otthoni gyakorlás",
  // ]

  // const firstColumnItems = tematika.slice(0, 5)
  // const secondColumnItems = tematika.slice(5)

  const hasznosOlvasmanyok = [
    {
      link: "/blog/david-garrigues-gyenge-testben-erotlen-lelek",
      title: "Gyenge testben erőtlen lélek",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },

    {
      link: "/blog/astanga-joga-segit-a-noknek-hogy-erosebbek-legyenek",
      title: "Astanga jóga: „Segít a nőknek, hogy erősebbek legyenek”",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },

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
          <h1 className="page-hero-title">ASTANGA KEZDŐ TANFOLYAM</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/astanga-kezdo-tanfolyam-desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/astanga-kezdo-tanfolyam-mobil.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="astanga-kezdo--wrapper tight--desktop--container">
        <div className="row">
          <div className="mt-40px mb-20px">
            <h3>
              <strong>
                Az astanga jóga gyakorlása hatékony és személyre szabott
                módszer, amely fizikai erőt, rugalmasságot és belső nyugalmat
                hoz. Az általa kínált folyamatos fejlődés és az oktató-tanítvány
                kapcsolat lehetőséget ad a mélyebb megértésre és a személyes
                előrehaladásra.
              </strong>
            </h3>
          </div>
        </div>
        <div className="row">
          <p className="mb-20px">
            Az astanga szanszkrit szó jelentése nyolc ág, Patandzsali
            nyolclépcsős jógarendszerére utal. Patandzsali Maharishi
            feltehetőleg az i.e. 2. században élt nagy indiai bölcs volt, aki
            tömör aforizmákban, nyolc lépcsőből álló módszert dolgozott ki a
            hatékony testi-lelki fejlődés érdekében.
          </p>
          <p className="mb-20px">
            Az{" "}
            <CustomLink
              link="/vinyasza-jogairanyzatok"
              title="astanga jóga"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            gyakorlását az ászanák elsajátításával kell kezdeni. Ezen speciális
            testhelyzetek rendszeres gyakorlásával elérhetjük, hogy testünk erős
            és rugalmas legyen, elménk nyugodt és kiegyensúlyozott, ami alapul
            szolgál majd az astanga jógarendszerében történő továbblépésre.{" "}
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
        <div className="row">
          <p className="mb-20px">
            Az astanga kezdő tanfolyamon a résztvevők megismerik a rendszer
            eredetét és elméleti hátterét. Betekintést nyernek a gyakorlás
            megkezdésének folyamatába, ami ebben a jógairányzatban az ászanák
            gyakorlásával indul, vinyásza rendszerben. A kezdő tanfolyamon a fő
            hangsúly (kb. 90%) az ászanák és a hozzájuk kapcsolódó technikák
            (pl. hangos légzés, bandhák) helyes és biztonságos elsajátításán
            van.
          </p>
        </div>
        <div className="row">
          <h3>A nyolc alkalmas kezdő tanfolyam tematikája:</h3>
        </div>
        <div
          className={
            breakpoints.md
              ? "row unordered-list-style mb-20px"
              : "row unordered-list-style mb-20px gap-1"
          }
        >
          <div className="col-12-xs col-6-md">
            <ul>
              <li>
                <p>
                  Az astanga jóga eredetének és elméleti hátterének ismertetése
                </p>
              </li>
              <li>
                <p>
                  A helyes{" "}
                  <CustomLink
                    link="/blog/a-legzes-legtokeletesebb-modja-az-astanga-jogaban/"
                    title="légzéstechnika"
                    classNames="body link-decoration-remove schedule-teacher"
                  />{" "}
                  elsajátítása, tisztító gyakorlatok
                </p>
              </li>
              <li>
                <p>A vinyásza rendszer elmélete és gyakorlata</p>
              </li>
              <li>
                <p>
                  A{" "}
                  <CustomLink
                    link="/blog/astanga-triszthana/"
                    title="triszthána,"
                    classNames="body link-decoration-remove schedule-teacher"
                  />{" "}
                  a gyakorlás három fókusza
                </p>
              </li>
              <li>
                <p>A bandhák, avagy az ászanák mélyebb energetikai rétegei</p>
              </li>
            </ul>
          </div>
          <div className="col-12-xs col-6-md tematika__second-column">
            <ul>
              <li>
                <p>
                  Az astanga vinyásza jóga első sorozatának ászanái,
                  púrvóttánászanáig, pontos vinyászaszámolással és a hozzájuk
                  tartozó dristikkel. Ahol szükséges, az oktató egyénre szabott
                  módosításokat javasol a hatásos és biztonságos gyakorlás
                  érdekében.
                </p>
              </li>
              <li>
                <p>
                  A hosszú távú gyakorlás felépítése: a vezetett és a
                  Mysore-óratípus, illetve az otthoni gyakorlás
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>
            A kezdő tanfolyam folytatása az{" "}
            <CustomLink
              link="/astanga-mysore-kurzus"
              title="astanga Mysore-kurzus"
              classNames="link-decoration-remove"
            />
            . Ezen a képzésen a résztvevők megtanulnak Mysore-stílusban és
            egyénileg, külső segítség nélkül, biztonságosan gyakorolni.
            Mindenkinek személyre szabjuk a gyakorlását, ami a leghatékonyabb
            fejlődési ütemet eredményezi. Ezek után a gyakorlók már nem lesznek,
            helyhez és időhöz kötve, bárhová "elvihetik" a gyakorlást, bármikor
            végezhetik.
          </p>
        </div>
        <div className="row">
          <div className="mb-20px mt-20px">
            <h3>Gyakran ismételt kérdések</h3>
          </div>{" "}
          <div className="row">
            {kezdoFaq &&
              kezdoFaq.map(({ question, answer }, index) => (
                <AccordionFaq key={index} question={question} answer={answer} />
              ))}
          </div>
        </div>
        <div className="row">
          <h3 className="mt-40px mb-20px clr-brand-orange font-family-primary">
            <strong>TANFOLYAMI IDŐPONTOK</strong>
          </h3>
        </div>
        {/* <CourseApplication
          courseName={"ASTANGA KEZDŐ TANFOLYAM"}
          courseDate={"2024. január 9."}
          // courseLink={
          //   "https://shop.bandha.works/products/astanga-ezdo-tanfolyam"
          // }
          courseType={"tanfolyam"}
          courseTeacher={"István"}
          // courseNote={"Még két szabad hely van!"}
        /> */}
        <CourseApplication
          courseName={"HÉTVÉGI ASTANGA KEZDŐ TANFOLYAM"}
          courseDate={"2024. január 20."}
          courseLink={
            "https://shop.bandha.works/products/hetvegi-astanga-kezdo-tanfolyam"
          }
          courseType={"tanfolyam"}
          courseWeekend={"igen"}
          courseTeacher={"Noémi"}
          courseNote={"Sajnos erre a tanfolyamra nincs már szabad helyünk!"}
        />
        <CourseApplication
          courseName={"ASTANGA KEZDŐ TANFOLYAM - MÁRCIUS"}
          courseDate={"2024. március 5."}
          courseLink={
            "https://shop.bandha.works/products/astanga-kezdo-tanfolyam-marcius"
          }
          courseType={"tanfolyam"}
          courseTeacher={"István"}
          // courseNote={"Még egy szabad hely van!"}
        />
        <div className="row mt-20px">
          <div className="col-12-xs">
            <StaticImage
              className=""
              src="../images/bandhami.jpeg"
              layout="fullWidth"
              loading="lazy"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga kezdő tanfolyam"
              placeholder="blurred"
            />
          </div>
        </div>
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
      file(relativePath: { eq: "astanga-kezdo-tanfolyam-desktop.jpeg" }) {
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
    "Astanga jóga kezdő tanfolyam Budapest | " + data.site.siteMetadata.title
  const pageDescription =
    "Astanga jóga kezdő tanfolyam Budapesten a második kerületben"

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
