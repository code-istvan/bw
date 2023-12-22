import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
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
import mysoreFaqEnglish from "../data/mysoreFaqEnglish.json"
import Sj_blessing from "../components/Icons/sj_handwrite.svg"
import "../sass/pages/_mysoreprogram.scss"

export default function Mysoreprogram() {
  const mysoreElements = [
    {
      icon: <Icons.Mysore color="orange" />,
      title: "MYSORE PRACTICE",
      description: "5 times a week",
    },
    {
      icon: <Icons.LedClass color="orange" />,
      title: "LED CLASS",
      description: "once a week",
    },
    {
      icon: <Icons.Restday color="orange" />,
      title: "CONFERENCE",
      description: "once a month",
    },
    {
      icon: <Icons.MoonDays color="orange" />,
      title: "REST DAY",
      description: "Saturdays and moon days",
    },
    {
      icon: <Icons.Conference color="orange" />,
      title: "ASHTANGA COMMUNITY",
      description: "24/7",
    },
  ]

  const mysoreSpecialities = [
    {
      title: "Personal Attention",
      description:
        "Since everyone practices at their own pace, the instructor has time to work individually with each practitioner. This allows the practitioners to receive specific, personalized guidance.",
    },
    {
      title: "Individual Progress",
      description:
        "During practice, practitioners develop through active participation of the instructor, based on the invested energy, enthusiasm, and the 'baggage' they bring along. They gradually build up their practice. There will be periods of faster progress and there might be times when progress is slower.",
    },
    {
      title: "Independence",
      description:
        "The Mysore style enables practitioners to learn to practice the sequence independently. This is an important skill that can help practitioners maintain their yoga practice in the long run, even if their teacher is not nearby.",
    },
    {
      title: "Meditation",
      description:
        "Independent practice, precise synchronization of breath and movement require serious concentration from the practitioners. Sustained, uninterrupted concentration can lead to a meditative state.",
    },
  ]

  const hasznosOlvasmanyok = [
    {
      link: "https://samawellnessmn.com/blog/2019/10/28/5-things-new-students-should-learn",
      title: "5 Things That New Practitioners Should Learn",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
    {
      link: "https://www.sonima.com/yoga/yoga-articles/yoga-shala",
      title: "Sharath Jois on How a Local Shala Offers More Than a Workout",
      classNames:
        "body link-decoration-remove clr-brand-orange schedule-teacher",
    },
  ]

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">ASHTANGA MYSORE-PROGRAM</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_desktop.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore gyakorlás"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
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
              The Mysore style of ashtanga yoga practice is an effective and
              personalized method that brings physical strength, flexibility,
              and inner calm. The continuous progress it offers, along with the
              teacher-student relationship, provides an opportunity for deeper
              understanding and personal development.
            </strong>
          </h3>
        </div>
        <div className="row">
          <p>
            The{" "}
            <CustomLink
              link="/vinyasza-jogairanyzatok"
              title="ashtanga yoga"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            is an eight-limbed yoga system aimed at achieving the unity of body,
            mind, and spirit. The journey can be long and arduous, and it should
            begin with the practice of asanas. By practicing these specific
            bodily postures, we can achieve a strong and flexible body, which
            will serve as the foundation for progressing in the ashtanga yoga
            system. The asana practice itself is a very small part of the entire
            system, but it is very important and indispensable for the "modern"
            Western person, who tends to neglect their physical body due to
            their lifestyle.
          </p>
        </div>
        <br />
        <div className="row">
          <p>
            A distinctive feature of ashtanga vinyasa yoga is that through the
            practice of asanas, we not only work on healing the physical body,
            but also prepare numerous higher-level branches, such as pranayama,
            concentration, or the meditative state of consciousness.
          </p>
        </div>
        <br />
        <div className="row image-track-3">
          <div className="col-12-xs col-4-md">
            <StaticImage
              className=""
              src="../images/Mysore_program_1.jpg"
              layout="fullWidth"
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
            In ashtanga vinyasa yoga, asanas are traditionally taught in the
            Mysore style (pronounced 'my-sore'). This method combines the
            advantages of group-led classes and individual practice. The essence
            of it is that all practitioners in the room perform the sequence
            independently, according to the rhythm of their own breath, allowing
            the instructor to give personalized adjustments and instructions to
            each individual without disrupting the dynamics of the class. This
            means it is not a problem if someone practices for a shorter time
            (e.g., beginners) or spends a longer time in the room (e.g.,
            advanced practitioners) during the same class.
          </p>
        </div>
        <br />
        <div className="island-section text-align-center">
          <h3 className="mb-20px clr-brand-orange font-family-primary">
            <strong>Did you know?</strong>
          </h3>
          <p>
            The Mysore style of ashtanga practice is named after the city of
            Mysore in South India.{" "}
            <CustomLink
              link="/blog/astanga-ikonok-sri-k-pattabhi-jois-1-resz/"
              title="Pattabhi Jois"
              classNames="body link-decoration-remove schedule-teacher"
            />{" "}
            developed the modern system of ashtanga yoga here at the Ashtanga
            Yoga Research Institute, founded in 1948.
          </p>
        </div>
        <div className="row">
          <p>
            The timing of the practice is also specific; Mysore classes are
            traditionally held in the morning. This is because the time of day
            known as <i>Brahma muhurta</i>, which is the one and a half hours
            before sunrise, or as close to it as possible, is considered most
            suitable for yoga practice. At this time, the air is fresh, the
            environment is quiet, and after waking up refreshed, we are not yet
            burdened by the impressions of a hard day’s work. The mind is more
            easily able to focus and is less prone to wander. The body is clean,
            and the stomach is empty, creating ideal conditions for practice.
            Initially, the body may seem less flexible in the early hours, but
            it quickly adapts to the new routine.
          </p>
        </div>
        <br />
        <div className="row">
          <p>
            This traditional Mysore teaching method also entails that everyone
            practices regularly, aiming for six sessions per week; however, most
            practitioners only gradually achieve this, or may practice less
            frequently. Saturdays, as well as the full and new moon days,
            referred to as{" "}
            <CustomLink
              link="/holdnapok"
              title="moon days"
              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
            />{" "}
            are rest days, as are the first three to five days of menstruation
            for women. This might seem like a significant challenge at first,
            but of course, gradual progression is a crucial component of
            uninterrupted development in yoga. The teacher monitors the
            students' progress, and when a student is ready, they are given new
            asanas to add to their sequence.
          </p>
        </div>
        <br />
        <div className=" text-align-center mb-20px mt-20px">
          <h3 className="clr-brand-orange font-family-primary">
            Characteristics of Mysore Practice
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
              TRADITION
            </h3>
            <div className="col-12-xs mb-20px">
              <Counter tag="h3" className="" language="eng" />
            </div>
            <p>Hungary's oldest ashtanga mysore program</p>

            <p>
              <strong>With the Blessing of Paramaguru Sharath Jois</strong>
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
                The Structure and Elements of the Mysore Program
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
            It is evident that the conditions are strict and this approach
            demands a high level of commitment. However, within these
            frameworks, Astanga Vinyasa Yoga is able to fully unfold its
            beneficial effects. In addition to automatically adopting a
            healthier lifestyle to maintain the practice (light meals, early to
            bed and early to rise, regular life rhythm), the mind also gradually
            transforms. The Mysore practice almost forces us to be honest with
            ourselves, confronts us with our flaws that pose obstacles on the
            spiritual path, and serves as a tool to overcome them.
          </p>
        </div>
        <br />

        <div className="island-section mysore-program-lead container-fluid">
          <h3 className="mb-20px font-family-primary clr-brand-orange text-align-center">
            The Leader of the Mysore Program
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
                  loading="lazy"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Szalai István ashtanga yoga teacher"
                  placeholder="blurred"
                />{" "}
              </Link>
            </div>
            <p>
              <strong>
                {" "}
                <CustomLink
                  link="/szalai-istvan"
                  title="István Szalai"
                  classNames="header header--3 link-decoration-remove schedule-teacher"
                />{" "}
              </strong>
              <br />
              <small>KPJAYI Authorized Level 1</small> <br />
              <small>ashtanga yoga teacher</small>
            </p>
          </div>
        </div>
        <div className="row mb-20px">
          <p>
            If you would like to join, you can do so through the
            <CustomLink
              link="/mysore-program-jelentkezes/"
              title=" application to the Mysore program"
              classNames="header header--3 link-decoration-remove schedule-teacher"
            />{" "}
            interface. Please make sure to wait for our feedback before coming
            to your first Mysore class, useful information for which can be
            found under the following menu items:
            <CustomLink
              link="/elso-alkalom"
              title=" first time"
              classNames="header header--3 link-decoration-remove schedule-teacher"
            />{" "}
            as well as
            <CustomLink
              link="/hazirend"
              title=" house rules"
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
                  navigate("/mysore-programme-application")
                }}
              >
                Application to the Mysore Program
              </Button>
            </div>
            <div className="col mysore-program--button-holder">
              {" "}
              <Button
                type="button"
                buttonStyle="btn--primary--outline"
                onClick={() => {
                  navigate("/prices")
                }}
              >
                Mysore program prices
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-20px mt-20px">
            <h3>Frequently Asked Questions</h3>
          </div>{" "}
          <div className="row">
            {mysoreFaqEnglish &&
              mysoreFaqEnglish.map(({ question, answer }, index) => (
                <AccordionFaq key={index} question={question} answer={answer} />
              ))}
          </div>
        </div>
        <br />
        <div className="unordered-list-style">
          <h3>Useful readings about Mysore practice:</h3>
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
          title
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const pageTitle =
    "Ashtanga Yoga Mysore Program Budapest | " + data.site.siteMetadata.title
  const pageDescription =
    "Ashtanga Yoga Mysore Program in Budapest. Best plaece for Mysore style of Ashtanga Yoga practice in Budapest. Join our Mysore program!"

  return (
    <CustomHead
      lang="en"
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
