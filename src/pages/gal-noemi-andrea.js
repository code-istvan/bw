import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Noemi() {
  return (
    <Layout>
      <Seo title="Gál Noémi Andrea" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">Noémi</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/noemi_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/noemi_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-40px">
        <p>
          1991.11.11-én születtem. A mozgás iránti vágyam 2010-ben kezdődött,
          amikor az utolsó évemet töltöttem gimnáziumban. A táncművészet és a
          színház felé orientálódtam. Sokat tanulmányoztam a mozgás anatómiáját,
          miközben humánkineziológus végzettséget szereztem a Testnevelési
          Főiskolán. Szabadúszó táncosként kerestem az utam, fél évet töltöttem
          Prágában, majd másfelet Máltán, a jóga itt vált az életem részévé.
          Táncos előképzettségem előnyt jelentett a pózok kivitelezésében, ám a
          letisztult és valódi értékeket a folyamatos gyakorlás által
          tapasztaltam meg. Hazaköltözés után – tudásom bővítése céljából –
          elvégeztem az oktatóképzést az Atma Centerben, miközben ugyanitt
          azonnal kaptam lehetőséget órákat tartani. Kevés tapasztalattal, de
          annál nagyobb lelkesedéssel próbáltam ki az ismert jógairányzatokat. A
          táncban megélt mozgásminőséget a flow stílusban fedeztem fel,
          találkoztam az astangával, majd rátaláltam a Vinyásza Krámára.
          Jelenleg ez a rendszer az, ami a legközelebb áll a szívemhez,
          kiteljesít és erőt ad az élet más területein is. Hiszek abban, hogy az
          elvárások nélküli, rendszeres és odaadó gyakorlás által mindannyian
          választ kaphatunk arra, miért vagyunk itt.
        </p>
      </div>
    </Layout>
  )
}
