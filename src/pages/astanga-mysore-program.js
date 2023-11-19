import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { CustomLink } from "../components/CustomLink"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import Icons from "../components/Icons/Icons"
import Counter from "../components/Counter"
import AccordionFaq from "../components/Accordions/AccordionFaq"
import mysoreFaq from "../data/mysoreFaq.json"
import Sj_blessing from "../components/Icons/sj_handwrite.svg"
import "../sass/pages/_mysoreprogram.scss"

export default function Mysoreprogram() {
  const mysoreElements = [
    {
      icon: <Icons.Mysore color="orange" />,
      title: "MYSORE GYAKORLÁS",
      description: "heti 5x",
    },
    {
      icon: <Icons.LedClass color="orange" />,
      title: "VEZETETT ÓRA",
      description: "heti 1x",
    },
    {
      icon: <Icons.Restday color="orange" />,
      title: "KONFERENCIA",
      description: "havi 1x",
    },
    {
      icon: <Icons.MoonDays color="orange" />,
      title: "PIHENŐNAP",
      description: "szombat és a holdnapok",
    },
    {
      icon: <Icons.Conference color="orange" />,
      title: "ASTANGÁS KÖZÖSSÉG",
      description: "24/7",
    },
  ]

  const mysoreSpecialities = [
    {
      title: "Személyes figyelem",
      description:
        "Mivel mindenki a saját tempójában gyakorol, az oktatónak van ideje minden egyes gyakorlóval egyénileg foglalkozni. Ez lehetővé teszi, hogy a gyakorlók specifikus, személyre szabott útmutatást kapjanak.",
    },
    {
      title: "Egyéni fejlődés",
      description:
        'A gyakorlás során a gyakorlók az oktató aktív részvételével, a befektetett energia, lelkesedés és a "hozott csomagok" függvényében fejlődnek. Fokozatosan építik fel a gyakorlásukat. Lesznek olyan időszakok, amikor gyorsabban fejlődnek és lehet, hogy lesz olyan, amikor lassabban.',
    },
    {
      title: "Önállóság",
      description:
        "A Mysore-stílus lehetővé teszi a gyakorlóknak, hogy megtanulják önállóan gyakorolni a sorozatot. Ez fontos készség, amely segíthet a gyakorlóknak abban, hogy hosszú távon fenntartsák a jóga gyakorlását (ha pl. nincs a közelükben a tanáruk).",
    },
    {
      title: "Meditáció",
      description:
        "Az önálló gyakorlás, a légzés és a mozdulatok pontos összehangolása komoly koncentrációt igényel a gyakorlóktól. A hosszan fenntartott, megszakítás nélküli koncentráció meditatív állapothoz vezethet.",
    },
  ]

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
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">MYSORE-PROGRAM</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore gyakorlás"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore Budapest"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="mysore-program--wrapper">
        <div className="mt-40px mb-20px">
          <h3>
            <strong>
              A Mysore-stílusú astanga jóga gyakorlás hatékony és személyre
              szabott módszer, amely fizikai erőt, rugalmasságot és belső
              nyugalmat hoz. Az általa kínált folyamatos fejlődés és az
              oktató-tanítvány kapcsolat lehetőséget ad a mélyebb megértésre és
              a személyes fejlődésre.
            </strong>
          </h3>
        </div>
        <div className="row">
          <p>
            Az{" "}
            <CustomLink
              link="/vinyasza-jogairanyzatok"
              title="astanga jóga"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            egy nyolcágú jógarendszer, amelynek célja a test, az elme és a lélek
            egységének elérése. Az út hosszú és rögös lehet, amit az ászanák
            gyakorlásával kell kezdeni. Ezen speciális testhelyzetek
            gyakorlásával elérhetjük, hogy testünk erős és rugalmas legyen, ami
            alapul szolgál majd az astanga jógarendszerében történő
            továbblépésre. Maga az ászanagyakorlás igen kicsi része a teljes
            rendszernek, viszont nagyon fontos, kihagyhatatlan a „modern”
            nyugati ember számára, aki az életmódjából fakadóan igencsak
            elhanyagolja a fizikai testét.
          </p>
        </div>
        <br />
        <div className="row">
          <p>
            Az astanga vinyásza jóga sajátossága, hogy az ászanagyakorlás által,
            nemcsak a fizikai test gyógyításán dolgozunk, hanem számos magasabb
            szintű ágat is előkészítünk, mint például a pránajáma, koncentráció
            vagy a meditációs tudatállapotot.
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
              alt="Astanga Mysore program"
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
              alt="Astanga jóga Budapest"
              placeholder="blurred"
            />
          </div>
          <div className="col-12-xs col-4-md">
            <StaticImage
              className="display-none-mobil"
              src="../images/Mysore_program_7.jpeg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Astanga Mysore gyakorlás"
              placeholder="blurred"
            />
          </div>
        </div>
        <br />
        <div className="row">
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
        <br />
        <div className="island-section text-align-center">
          <h3 className="mb-20px clr-brand-orange font-family-primary">
            <strong>TUDTAD?</strong>
          </h3>
          <p>
            A Mysore-stílusú astanga gyakorlás a dél-indiai Mysore városáról
            kapta a nevét.{" "}
            <CustomLink
              link="/blog/astanga-ikonok-sri-k-pattabhi-jois-1-resz/"
              title="Pattabhi Jois"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            itt fejlesztette ki a modernkori astanga jóga rendszerét az 1948-ban
            alapított Ashtanga Yoga Research Institute-ban (Astanga Jóga Kutató
            Intézet).
          </p>
        </div>
        <div className="row">
          <p>
            A gyakorlás időpontja is meghatározott, a Mysore-órákat
            tradicionálisan reggel tartják. Ennek az az oka, hogy a
            jógagyakorláshoz az úgynevezett <i>Brahma muhurta</i> napszak a
            legmegfelelőbb, azaz a napfelkelte előtti másfél óra, vagy ehhez
            minél közelebbi időpont. Ekkor a levegő friss, a környezet csendes,
            frissen, kipihenten ébredve még nem nyomasztanak bennünket a
            benyomások, amelyek a nehéz munkanap során értek minket. Az elme
            könnyebben tud fókuszálni és kevésbé kalandozik el. A test tiszta, a
            gyomor üres, tehát a körülmények ideálisak a gyakorláshoz. Kezdetben
            a test kevésbé hajlékonynak tűnhet a reggeli órákban, de gyorsan
            alkalmazkodik az új rutinhoz.
          </p>
        </div>
        <br />
        <div className="row">
          <p>
            Ehhez a hagyományos mysore-i oktatási módszerhez az is
            hozzátartozik, hogy mindenki rendszeresen gyakorol, a cél a heti
            hatszori gyakorlás; de a legtöbb gyakorló ezt csak fokozatosan éri
            el, vagy kevesebbszer gyakorol. A szombatok, illetve a teli- és az
            újhold, azaz a{" "}
            <CustomLink
              link="/holdnapok"
              title="holdnapok"
              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
            />{" "}
            pihenőnapok, valamint a hölgyeknél a menstruáció első három-öt
            napja. Ez elsőre igen nagy kihívásnak tűnik, de természetesen a
            jógában is a fokozatosság fontos eleme a zavartalan fejlődésnek. A
            tanár figyeli a gyakorlók előrehaladását, és ha a tanítvány készen
            áll, akkor újabb ászanákat kap, amelyeket hozzá kell fűznie a
            többihez.
          </p>
        </div>
        <br />
        <div className=" text-align-center mb-20px mt-20px">
          <h3 className="clr-brand-orange font-family-primary">
            A Mysore-gyakorlás jellegzetességei
          </h3>
        </div>
        <div className="row gap-1">
          {mysoreSpecialities.map((program, index) => (
            <div className="col-12-xs col-6-md col-6-xl" key={index}>
              <div className="card__mysore-program">
                <h3 className="clr-brand-orange font-family-primary mb-20px">
                  {program.title}
                </h3>
                <p>{program.description}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="mysore-program--tradicio">
          <div className="island-section island-section--orange-border island-section--orange-border__width text-align-center mysore-program--blessing">
            <h3 className="mb-20px font-family-primary clr-brand-orange">
              TRADÍCIÓ
            </h3>
            <div className="col-12-xs mb-20px">
              <Counter tag="h3" className="" />
            </div>
            <p>Magyarország legrégebbi astanga Mysore-programja</p>
            <p>
              <strong>Paramaguru Sharath Jois</strong> áldásával
            </p>
            <div className="mysore-program--tradicio__image">
              <img src={Sj_blessing} alt="Sj_blessing" />
            </div>
          </div>
        </div>
        <br />
        <div className="framed-section mt-20px">
          <div className="framed-section-orange__inside">
            <div className="framed-section-orange-title text-align-center mb-20px">
              <h3 className="font-family-primary">
                A Mysore-program felépítése, elemei
              </h3>
            </div>
            <div className="framed-section-orange__body">
              {mysoreElements.map((card, index) => (
                <div
                  className="framed-section-orange__card text-align-center"
                  key={index}
                >
                  {card.icon}
                  <h4 className="framed-section-orange-title--h4">
                    {card.title}
                  </h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <p>
            Látszik, hogy szigorúak a feltételek, nagy elkötelezettséget kíván
            ez az irányzat. Azonban az astanga vinyásza jóga ezen keretek között
            képes kifejteni teljesen az áldásos hatását. Amellett, hogy a
            gyakorlás fenntartásához automatikusan egészségesebb életmódra
            váltanak a gyakorlók (könnyű étkezések, korai fekvés és kelés,
            rendszeres életritmus), az elme is fokozatosan átalakul. A
            Mysore-gyakorlás szinte rákényszerít minket, hogy őszinték legyünk
            önmagunkkal, szembesít a hibáinkkal, amelyek akadályt képeznek a
            spirituális úton, és eszközként szolgál a leküzdésükhöz.
          </p>
        </div>
        <br />

        <div className="island-section mysore-program-lead container-fluid">
          <h3 className="mb-20px font-family-primary clr-brand-orange text-align-center">
            A Mysore-program vezetője
          </h3>
          <div className="mysore-program-avatar">
            <div className="mysore-program-avatar__image-container">
              <Link
                className="dropdown-item clr-shades-white"
                to="/szalai-istvan"
              >
                <StaticImage
                  className="avatar__image avatar__image--medium zindex-1"
                  src="../images/istvan.png"
                  layout="fullWidth"
                  loading="eager"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Szalai István astanga jóga oktató"
                  placeholder="blurred"
                />{" "}
              </Link>
            </div>
            <p>
              <strong>
                {" "}
                <CustomLink
                  link="/szalai-istvan"
                  title="Szalai István"
                  classNames="header header--3 link-decoration-remove schedule-teacher"
                />{" "}
              </strong>
              <br />
              <small>KPJAYI Authorized Level 1</small> <br />
              <small>astanga jóga oktató</small>
            </p>
          </div>
        </div>
        <div className="row mb-20px">
          <p>
            Amennyiben szeretnél csatlakozni, ezt a{" "}
            <CustomLink
              link="/mysore-program-jelentkezes/"
              title="jelentkezés a
                  Mysore-programba"
              classNames="header header--3 link-decoration-remove schedule-teacher"
            />{" "}
            felületen keresztül teheted meg. Kérlek, mindenképp várd meg
            visszajelzésünket, mielőtt jössz az első Mysore-órára, amelyhez
            hasznos információkat találhatsz a következő menüpontok alatt:{" "}
            <CustomLink
              link="/elso-alkalom"
              title="első alkalom"
              classNames="header header--3 link-decoration-remove schedule-teacher"
            />{" "}
            valamint{" "}
            <CustomLink
              link="/hazirend"
              title="házirend"
              classNames="header header--3 link-decoration-remove schedule-teacher"
            />
            .
          </p>
        </div>
        <div className="mysore-program--buttons">
          <div className="row mb-20px gap-1">
            <div className="col mysore-program--button-holder">
              <Button
                type="button"
                buttonStyle="btn--primary--solid"
                onClick={() => {
                  navigate("/mysore-program-jelentkezes")
                }}
              >
                Jelentkezés a Mysore-programba
              </Button>
            </div>
            <div className="col mysore-program--button-holder">
              {" "}
              <Button
                type="button"
                buttonStyle="btn--primary--outline"
                onClick={() => {
                  navigate("/arak")
                }}
              >
                Mysore-program árak
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-20px mt-20px">
            <h3>Gyakran ismételt kérdések</h3>
          </div>{" "}
          <div className="row">
            {mysoreFaq &&
              mysoreFaq.map(({ question, answer }, index) => (
                <AccordionFaq key={index} question={question} answer={answer} />
              ))}
          </div>
        </div>
        <br />
        <div className="row unordered-list-style">
          <h3>Hasznos olvasmányok a Mysore-gyakorlásról:</h3>
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
      file(relativePath: { eq: "mysore_desktop.jpg" }) {
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
      title="Astanga jóga mysore program budapest | Bandha Works Jógaiskola"
      description="A Mysore-stílusú astanga jóga gyakorlás hatékony és személyre
  szabott módszer, amely fizikai erőt, rugalmasságot és belső
  nyugalmat hoz. Az általa kínált folyamatos fejlődés és az
  oktató-tanítvány kapcsolat lehetőséget ad a mélyebb megértésre és
  a személyes fejlődésre."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
