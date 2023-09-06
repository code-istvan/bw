import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
// import IstvanEducation from "../data/istvanEducation.json"
import "../sass/pages/_szalaiIstvan.scss"

export default function Istvan() {
  // const renderEducationList = year => (
  //   <div className="row unordered-list-style mb-40px">
  //     <ul>
  //       {IstvanEducation[year] &&
  //         IstvanEducation[year].map(({ event, teacher }) => (
  //           <li key={event}>
  //             <p>
  //               <strong>{event}</strong>: {teacher}
  //             </p>
  //           </li>
  //         ))}
  //     </ul>
  //     <br />
  //   </div>
  // )

  return (
    <Layout>
      <Seo title="Szalai István Jóga" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">István</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/istvan_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Szalai István jóga oktató"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/istvan_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Szalai István jóga oktató"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="szalai-istvan-wrapper tight--desktop--container">
        <div className="row mt-20px">
          <blockquote>
            Egy betegség kitűnő lehetőség, hogy megváltoztasd magad
          </blockquote>
          <p>
            2005-ben kezdtem jógázni abban a reményben, hogy sikerül leküzdenem
            egy – a nyugati orvostudomány által – gyógyíthatatlannak vélt
            betegséget. Ezt a célt nem várt gyorsasággal és hatékonysággal értem
            el, ami máig is segít fenntartani töretlen lelkesedésem a jóga
            tudománya iránt. Gyógyulásom után egy aktív keresési periódus
            következett. Különböző hatha jóga irányzatok kipróbálása után a
            figyelmem egyre inkább az astanga vinyásza jóga felé fordult.
          </p>
          <blockquote>
            A tudat stabilitásának szilárd alapja a hosszú időn keresztül,
            megszakítás nélkül végzett gondos gyakorlás. - Patandzsali Jóga
            Szútrák I.14
          </blockquote>

          <p className="mt-20px">
            Három év aktív ászanázást követően, egy megmagyarázhatatlan,
            hirtelen döntéstől vezérelve egy évre Indiába költöztem. Az első
            hónapokat a Himalájában különböző guruk, szádhuk, szemfényvesztők
            társaságában töltöttem, aktív hangolódással, gyakorlással, és
            útkereséssel. Itt kezdtem el komolyabban foglalkozni az astanga
            vinyásza jógával.
          </p>
          <p className="mt-20px">
            A második félévben dél-indiai mesterek szigorú felügyelete alatt
            napi 6-7 órát gyakoroltam. Itt már elsősorban az astanga rendszer
            tanulmányozásával foglalkoztam. Mysore-ban a Sthalam 8 Astanga
            Intézetben végeztem oktatói tanfolyamot, ahol az elméleti és
            gyakorlati képzés magas színvonalát a Mysore-i Egyetem professzorai
            és hallgatói biztosították. Tanáraim: BNS Iyengar, V. Sheshadri,
            Vinay Kumar és Ajay Kumar.
          </p>
          <p className="mt-20px">
            2013-ban a szakmai kíváncsiságtól vezérelve jelentkeztem, majd
            felvételt nyertem a KPJAYI-ba, a világszinten legnagyobb
            hagyománnyal rendelkező astanga vinyásza jóga intézménybe. Ez
            alapjaiban változtatta meg az addigi „astangás” szemléletem,
            hozzáállásom, kérdés nem férhetett hozzá, hogy ezentúl itt szeretnék
            tanulni.
          </p>
          <p className="mt-20px">
            Jelenleg is minden évben ellátogatok Mysore-ba, a SYC-be (a KPJAYI
            utódintézménye), a Gurumhoz, R. Sharath Joishoz, fejlődésem
            folyamatos fenntartása érdekében.
          </p>
          <p className="mt-20px">
            Jógikus életmódot követő gyakorlóként a rendszeres gyakorlati és
            elméleti képzéseken túl kiemelt jelentőséget tulajdonítok a
            megfelelő, etikus táplálkozásnak. A Vegan Society tagjaként, vegán
            életvitelt folytatok.
          </p>
          <blockquote>
            …A jóga nem való mindenkinek, rendkívül összetett rendszer. Azt
            szeretném, ha jól átgondolnád a döntést, mielőtt elkezded. A jóga
            felforgatja az egész életed, mert elkezded magad igazán jól érezni
            (…) Az is előfordulhat, hogy otthagyod az állásodat és elmész
            Indiába. Ezért kérlek, nagyon fontold meg, hogy el akarod-e kezdeni…
            (David Williams)
          </blockquote>
          <p>
            4 év intenzív oktatási tapasztalat után 2013 augusztusában saját
            jógaiskolát nyitottunk, a Bandha Works-öt, Gubán Dorottyával, R.
            Sharath Jois áldásával. Azóta is itt gyakorlok és oktatok töretlen
            lelkesedéssel és hittel.
          </p>
          <p className="mt-20px">
            2017-ben Gurumtól, R. Sharath Jois-tól, KPJAYI Authorized Level 1
            oktatói címet kaptam.
          </p>
          <p className="mt-20px">
            2018 januárjában az a hatalmas megtiszteltetés ért, hogy segédtanár
            lehettem egy hónapra Gurum mellett a KPJAYI-ban, Indiában.
          </p>
        </div>
        <div className="row">
          <h3 className="mt-20px clr-brand-orange">
            KPJAYI Mysore, India. 2018.
          </h3>
        </div>
        <div className="szalai-istvan-image-block mt-20px">
          <div className="col-12-xs col-4-md">
            <StaticImage
              className=""
              src="../images/sharathji_and_istvan.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Saharath Jois és Szalai István, Mysore, KPJAYI"
              placeholder="blurred"
            />
          </div>
          <div className="col-12-xs col-4-md">
            <StaticImage
              className=""
              src="../images/assist_team.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Assist team with Szalai Istvan, Mysore, KPJAYI"
              placeholder="blurred"
            />
          </div>
          <div className="col-12-xs col-4-md">
            <StaticImage
              className=""
              src="../images/lakshmishji_and_istvan.jpg"
              layout="fullWidth"
              loading="eager"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Lakshmish Ji és Szalai István, Mysore, KPJAYI"
              placeholder="blurred"
            />
          </div>
        </div>
        {/* <div>
          {Object.keys(IstvanEducation).map(year => renderEducationList(year))}
        </div> */}
      </div>
    </Layout>
  )
}
