import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Icons from "../components/Icons/Icons"
import "../sass/pages/_olvasmanyok.scss"

export default function Ajanlottolvasmanyok() {
  const olvasmanyokAstanga = [
    {
      author: "Sri K. Pattabhi Jois",
      title: "A jóga füzére - jóga málá",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "R. Sharath Jois",
      title: "Az astanga jóga spirituális ösvénye",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Eddie Stern",
      title: "Egy egyszerű módszer",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Matthew Sweeney",
      title: "Ashtanga Yoga As It Is",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "David Swenson",
      title: "Ashtanga Yoga – The Practice Manual",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Gregor Maehle",
      title: "Practice and Philosophy",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Gregor Maehle",
      title: "Ashtanga Yoga – The Intermediate Series",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Gregor Maehle",
      title: "Pranayama The Breath of Yoga",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Gregor Maehle",
      title:
        "Yoga Meditation: Through Mantra, Chakras and Kundalini to Spiritual Freedom",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Anthony “Prem” Carlisi",
      title: "The Only Way Out is In",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Sharmila Desai and Anna Wise",
      title: "Yoga sadhana for mothers",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Guy Donaheye and Eddie Stern",
      title: "Guruji",
      link: "",
      language: "angol",
      new: false,
    },
  ]

  const olvasmanyokKrama = [
    {
      author: "Sri T. Krishnamacharya",
      title: "Yoga Makaranda",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Srivatsa Ramaswami",
      title: "The Complete Book of Vinyasa Yoga",
      link: "",
      language: "angol",
      new: false,
    },
    {
      author: "Matthew Sweeney",
      title: "Vinyasa Krama",
      link: "",
      language: "angol",
      new: false,
    },
  ]

  const olvasmanyokSpiri = [
    {
      author: "Elisabeth Haich",
      title: "Beavatás",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Paramahansza Jogananda",
      title: "Egy jógi önéletrajza",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Pal Pandian",
      title: "Sziddhák, az alapok mesterei",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Szvámi Ráma",
      title: "A spirituális élet lényege",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Szvámi Ráma",
      title: "Élet a himalája mestereivel",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Paul Brunton",
      title: "India titkai",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Richard Freeman",
      title: "The mirror of yoga",
      link: "",
      language: "angol",
      new: false,
    },
  ]

  const olvasmanyokFood = [
    {
      author: "Dr. Michael Greger és Gene Stone",
      title: "Hogy ne halj meg",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "Colin Campbell",
      title: "Kína-tanulmány",
      link: "",
      language: "magyar",
      new: false,
    },
    {
      author: "R. Sharath Jois",
      title: " Kortalanul – Egy jógi titkai a hosszú és egészséges élethez",
      link: "",
      language: "magyar",
      new: false,
    },
  ]

  return (
    <Layout>
      <Seo title="AJÁNLOTT OLVASMÁNYOK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">AJÁNLOTT OLVASMÁNYOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="olvasmanyok-wrapper">
        <div className="row">
          <div className="col">
            <h3>Astanga vinyásza jóga</h3>
            <br />
            <ul>
              {olvasmanyokAstanga.map(({ author, title }) => (
                <li key={title}>
                  <Icons.ChevronRight />
                  <p>
                    <strong>{author}</strong>: {title}
                  </p>
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Vinyásza krama jóga</h3>
            <br />
            <ul>
              {olvasmanyokKrama.map(({ author, title }) => (
                <li key={title}>
                  <Icons.ChevronRight />
                  <p>
                    <strong>{author}</strong>: {title}
                  </p>
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Egyéb spirituális könyvek amiket előszeretettel forgatunk</h3>
            <br />
            <ul>
              {olvasmanyokSpiri.map(({ author, title }) => (
                <li key={title}>
                  <Icons.ChevronRight />
                  <p>
                    <strong>{author}</strong>: {title}
                  </p>
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Táplálkozással, életvitellel kapcsolatos könyvek</h3>
            <br />
            <ul>
              {olvasmanyokFood.map(({ author, title }) => (
                <li key={title}>
                  <Icons.ChevronRight />
                  <p>
                    <strong>{author}</strong>: {title}
                  </p>
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  )
}
