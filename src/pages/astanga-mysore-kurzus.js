import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomLink } from "../components/CustomLink"
import { StaticImage } from "gatsby-plugin-image"
import CourseApplication from "../components/Cards/CourseApplication"
import Seo from "../components/seo"

export default function AstangaMysoreKurzus() {
  return (
    <Layout>
      <Seo title="ASTANGA MYSORE KURZUS" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">ASTANGA MYSORE-KURZUS</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mysore_kurzus_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mysore_kurzus_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>

      <div className="mysore-kurzus--wrapper">
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
        <CourseApplication
          courseDate={"2023. szeptember 5. (kedd) 19:00."}
          courseLink={
            "https://shop.bandha.works/products/astanga-mysore-kurzus"
          }
          courseType={"kurzus"}
        />
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </Layout>
  )
}
