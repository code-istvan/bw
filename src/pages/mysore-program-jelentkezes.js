import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"
import { Link } from "gatsby"
import Icons from "../components/Icons/Icons"
import Counter from "../components/Counter"
import AccordionFaq from "../components/Accordions/AccordionFaq"
import mysoreFaq from "../data/mysoreFaq.json"
// import ImageScroller from "../components/ImageScroller"
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
      icon: <Icons.Conference color="orange" />,
      title: "KONFERENCIA",
      description: "havi 1x",
    },
    {
      icon: <Icons.MoonDays color="orange" />,
      title: "PIHENŐNAP",
      description: "szombat és a holdnapok",
    },
    {
      icon: <Icons.Restday color="orange" />,
      title: "EGYÉNI KONZULTÁCIÓ",
      description: "havi 1x",
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
      <Seo title="MYSORE PROGRAM" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">MYSORE-PROGRAM JELENTKEZÉS</h1>
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
          <h3>JELENTKEZÉSI LAP</h3>
        </div>
      </div>
    </Layout>
  )
}
