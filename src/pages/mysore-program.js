import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"
import Icons from "../components/Icons/Icons"
import Counter from "../components/Counter"
import AccordionFaq from "../components/Accordions/AccordionFaq"
import mysoreFaq from "../data/mysoreFaq.json"
import ImageScroller from "../components/ImageScroller"
import "../sass/pages/_mysoreprogram.scss"

import image1 from "../images/Mysore_program_1.jpg"
import image2 from "../images/Mysore_program_2.jpg"
import image3 from "../images/Mysore_program_7.jpeg"

export default function Mysoreprogram() {
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

  const images = [
    { src: image1, alt: "Alt text 1" },
    { src: image2, alt: "Alt text 2" },
    { src: image3, alt: "Alt text 3" },
  ]

  return (
    <Layout>
      <Seo title="MYSORE PROGRAM" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">MYSORE PROGRAM</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="mysore-program--wrapper">
        <div className="mt-40px mb-20px">
          <h3>
            <strong>
              A Mysore stílusú astanga jóga gyakorlás hatékony és személyre
              szabott módszer, amely fizikai erőt, rugalmasságot és belső
              nyugalmat hoz. Az általa kínált folyamatos fejlődés és az
              oktató-tanítvány kapcsolat lehetőséget ad a mélyebb megértésre és
              személyes fejlődésre.
            </strong>
          </h3>
        </div>
        <div className="row">
          <p>
            Az{" "}
            <CustomLink
              link="/vinyasza-jogairanyzatok/"
              title="astanga jóga"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            egy nyolcágú jógarendszer aminek célja a test, az elme és a lélek
            egységének elérése. Az út hosszú és rögös lehet, amit az ászanák
            gyakorlásával kell kezdeni. Ezekkel a speciális testhelyzetek
            gyakorlásával elérhetjük, hogy testünk erős és rugalmas legyen ami
            alapúl szolgál majd az astanga jógarendszerébe történő
            továbblépésre. Maga az ászanagyakorlás igen kicsi része a teljes
            rendszernek, viszont nagyon fontos, kihagyhatatlan a “modern”
            nyugati ember számra, aki az életmódjából fakadóan igen elhanyagolta
            fizikai testét.
          </p>
        </div>
        <br />
        <div className="row">
          <p>
            Az astanga vinyásza jóga sajátossága, hogy az ászana gyakorlás
            által, nemcsak a fizikai test gyógyításán dolgozunk, hanem számos
            magasabb szintű ágat is előkészítünk, mint például a pránajáma,
            koncentráció vagy a meditációs tudatállapotot.
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
              alt="Astanga jóga Mysore"
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
              alt="Astanga jóga Mysore"
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
              alt="Astanga jóga Mysore"
              placeholder="blurred"
            />
          </div>
        </div>
        {/* <div className="row">
          <ImageScroller images={images} />
        </div> */}
        <br />
        <div className="row">
          <p>
            Az astanga vinyásza jógában az ászanákat tradicionálisan Mysore
            (ejtsd: májszor) stílusban oktatják. A módszer ötvözi a csoportos
            vezetett órák és az egyéni gyakorlás előnyeit. Lényege, hogy a
            teremben az összes gyakorló a saját légzésének ritmusára önállóan
            végzi a sorozatot, ezáltal az oktató mindenkinek egyénre szabott
            igazításokat, utasításokat tud adni, anélkül, hogy ez megzavarná az
            óra dinamikáját. Így az sem probléma, ha valaki rövidebben gyakorol
            (pl. kezdő gyakorlók), vagy ha valaki hosszabb időt tölt a teremben
            (pl. haladó gyakorlók) ugyanazon az órán.
          </p>
        </div>
        <br />
        <div className="island-section text-align-center">
          <h1 className="mb-20px clr-brand-orange">TUDTAD?</h1>
          <p>
            A Mysore stílusú astanga gyakorlás a dél-indiai Mysore városáról
            kapta a nevét. Pattabhi Jois itt fejlesztette ki a modernkori
            astanga jóga rendszerét az 1948-ban alapított Ashtanga Yoga Research
            Institute-ben (Astanga Jóga Kutató Intézet).
          </p>
        </div>
        <div className="row">
          <p>
            A gyakorlás időpontja is meghatározott, a Mysore órákat
            tradicionálisan reggel tartják. Ennek az oka, hogy a
            jógagyakorláshoz az úgynevezett <i>Brahma muhurta</i> napszak a
            legmegfelelőbb, azaz a napfelkelte előtti másfél óra - vagy ehhez
            minnél közelebbi időpont -. Ekkor a levegő friss, a környezet
            csendes, frissen, kipihenten ébredve még nem nyomasztanak bennünket
            a benyomások, amelyek a nehéz munkanap során értek minket. Az elme
            könnyebben tud fókuszálni és kevésbé kalandozik el. A test tiszta, a
            gyomor üres, tehát a körülmények ideálisak a gyakorláshoz. Kezdetben
            a test kevésbé hajlékonynak tűnhet a reggeli órákban, de gyorsan
            alkalmazkodik az új rutinhoz.
          </p>
        </div>
        <br />
        <div className="row">
          <p>
            Ehhez a hagyományos Mysore-i oktatási módszerhez az is
            hozzátartozik, hogy mindenki rendszeresen gyakorol a cél a heti
            hatszori gyakorlás, de a legtöbb gyakorló ezt csak fokozatosan éri
            el, vagy kevesebbszer gyakorol. A szombatok, illetve a teli- és az
            újhold, azaz{" "}
            <CustomLink
              link="/holdnapok/"
              title="holdnapok"
              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
            />{" "}
            pihenőnapok, hölgyeknél a menstruáció első három-öt napja is az. Ez
            elsőre igen nagy kihívásnak tűnik, de természetesen a jógában is a
            fokozatosság fontos eleme a zavartalan fejlődésnek. A tanár figyeli
            a gyakorlók előrehaladását, és ha a tanítvány készen áll, akkor
            újabb ászanákat kap, amelyeket hozzá kell fűznie a többihez.
          </p>
        </div>
        <br />
        <div className="framed-section mt-20px">
          <div className="framed-section-orange__inside">
            <div className="framed-section-orange-title text-align-center mb-20px">
              <h3> A MYSORE PROGRAM SAJÁTOSSÁGAI</h3>
            </div>
            <div className="framed-section-orange__body">
              <div className="framed-section-orange__card text-align-center">
                <Icons.Mysore color="orange" />
                <h4>Személyes figyelem</h4>
                {/* <p>heti 5x</p> */}
              </div>
              <div className="framed-section-orange__card text-align-center">
                <Icons.LedClass color="orange" />
                <h4>Egyéni fejlődés</h4>
                {/* <p>heti 1x</p> */}
              </div>
              <div className="framed-section-orange__card text-align-center">
                <Icons.Restday color="orange" />
                <h4>Önállóság</h4>
                {/* <p>szombat</p> */}
              </div>
              <div className="framed-section-orange__card text-align-center">
                <Icons.Conference color="orange" />
                <h4>Koncentráció</h4>
                {/* <p>havi 1x</p> */}
              </div>
              <div className="framed-section-orange__card text-align-center">
                <Icons.Conference color="orange" />
                <h4>Meditáció</h4>
                {/* <p>havi 1x</p> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row gap-1">
          <div className="col-12-xs col-6-md col-6-xl">
            <div className="card__mysore-program">
              <h3 className="clr-brand-orange mb-20px">Személyes figyelem</h3>
              <p>
                Mivel mindenki a saját tempójában gyakorol, az oktatónak van
                ideje minden egyes gyakorlóval egyénileg foglalkozni. Ez
                lehetővé teszi, hogy a gyakorlók specifikus, személyre szabott
                útmutatást kapjanak.
              </p>
            </div>
          </div>
          <div className="col-12-xs col-6-md col-6-xl">
            <div className="card__mysore-program">
              <h3 className="clr-brand-orange mb-20px">Egyéni fejlődés</h3>
              <p>
                A gyakorlás során a gyakorlók az oktató aktív részvételével, a
                befektetett energia, lelkesedés és a hozott csomagok
                függvényében fejlődnek. Fokozatosan építik fel a gyakorlásukat.
                Lesznek olyan időszakok, amikor gyorsabban fejlődnek és lehet,
                hogy lesz olyan amikor lassabban.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="row gap-1">
          <div className="col-12-xs col-6-md col-6-xl">
            <div className="card__mysore-program">
              <h3 className="clr-brand-orange mb-20px">Önállóság</h3>
              <p>
                A Mysore stílus lehetővé teszi a gyakorlóknak, hogy megtanulják
                önállóan gyakorolni. Ez fontos készség, amely segíthet a
                gyakorlónak abban, hogy hosszú távon fenntartsák a jóga
                gyakorlását (ha pl. nincs a közelükbe a tanáruk).
              </p>
            </div>
          </div>
          <div className="col-12-xs col-6-md col-6-xl">
            <div className="card__mysore-program">
              <h3 className="clr-brand-orange mb-20px">Meditáció</h3>
              <p>
                Az önálló gyakorlás, a légzés és a mozdulatok pontos
                összehangolása komoly koncentrációt igényel a gyakorlóktól. A
                hosszan fenntartott, megszakítás nélküli koncentráció meditatív
                állapothoz vezethet.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="island-section text-align-center island-section--orange-border">
          <h1 className="mb-20px clr-brand-orange">TRADÍCIÓ</h1>
          <div className="col-12-xs text-align-center mb-20px">
            <Counter tag="h2" className="" />
          </div>
          <p>Magyarország legrégebbi astanga mysore programja</p>
          <p>Paramaguru Sharath Jois áldásával</p>
        </div>
        <br />
        <div className="row">
          <p>
            Látszik, hogy szigorúak a feltételek, nagy elkötelezettséget kíván
            ez az irányzat. Azonban az astanga vinyásza jóga ezen keretek között
            képes kifejteni teljesen az áldásos hatását. Amellett, hogy a
            gyakorlás fenntartásához automatikusan egészségesebb életmódra
            váltanak a gyakorlók (könnyű étkezések, korai fekvés és kelés,
            rendszeres életritmus), az elme is fokozatosan átalakul. A Mysore
            gyakorlás szinte rákényszerít minket, hogy őszinték legyünk
            önmagunkkal, szembesít a hibáinkkal, amelyek akadályt képeznek a
            spirituális úton, és eszközként szolgál a leküzdésükhöz.
          </p>
        </div>
        <br />
        <div className="island-section">
          <h1 className="mb-20px clr-brand-orange">
            {" "}
            A Mysore program vezetője
          </h1>
          <h3>
            <CustomLink
              link="/vinyasza-jogairanyzatok/"
              title="Szalai István"
              classNames="header header--3 link-decoration-remove schedule-teacher"
            />{" "}
            KPJAYI Authorized Level 1 oktató
          </h3>
        </div>
        <div className="row">
          <div className="mb-20px">
            <h3>Gyakran ismételt kérdések</h3>
          </div>{" "}
          <div className="row">
            {mysoreFaq &&
              mysoreFaq.map(({ question, answer }) => (
                <AccordionFaq question={question} answer={answer} />
              ))}
          </div>
        </div>
        <br />
        <div className="row unordered-list-style">
          <h3>Hasznos olvasmányok a Mysore gyakorlásról:</h3>
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
