import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import moonDays from "../data/moonDays.json"
import "../sass/pages/_holdnapok.scss"

export default function Holdnapok() {
  return (
    <Layout>
      <Seo title="HOLDNAPOK" />
      <div className="holdnapok-wrapper">
        <div className="page-hero-container">
          <div className="row">
            <h1 className="page-hero-title">HOLDNAPOK 2023</h1>
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
        <div className="row gap-2 moondays-frame">
          <div className="col-12-xs col-4-md col-4-xl moondays-right-column">
            <h3 className="mb-20px">HOLDNAPOK</h3>
            <table>
              <tr>
                <th>TELIHOLD</th>
                <th>ÉKADASHI</th>
                <th>ÚJHOLD</th>
                <th>ÉKADASHI</th>
              </tr>
              {moonDays &&
                moonDays.map(
                  ({
                    month,
                    fullmoon,
                    newmoon,
                    ekadashiNewmoon,
                    ekadashiFullmoon,
                  }) => (
                    <tr key={month}>
                      <td>{fullmoon}</td>
                      <td>{ekadashiFullmoon}</td>
                      <td>{newmoon}</td>
                      <td>{ekadashiNewmoon}</td>
                    </tr>
                  )
                )}
            </table>
          </div>

          <div className="col-12-xs col-8-md col-8-xl ">
            <h3>
              Miért nem gyakorlunk teli- és újholdkor astanga vinyásza jógát?
            </h3>
            <br />
            <p>
              Sokféle ötlet szokott felmerülni azzal kapcsolatban, hogy Pattabhi
              Jois miért nem tartott órákat teli- és újholdkor (röviden
              holdnapokon). Pedig a magyarázat egyszerű. Amint tudod, a
              Maharádzsa Pathasálája (a Szanszkrit Főiskola) szünetet tartott
              minden holdnapon, illetve az azokat megelőző és követő napokon. A
              tanulók otthon folytatták a tanulmányaikat, de nem kaptak új
              leckéket. Ennek egyik oka az, hogy az amavaszja és a púrnima
              napokon bizonyos rituálékat kellett a tanároknak és a diákoknak
              végrehajtaniuk, akik mindannyian brahminok voltak – például a
              pitri tarpanát, amelyet amavaszján végeztek, és a rituális fürdőt
              a holdnapokat követő napon. Ezek a szertartások meglehetősen
              időigényesek. Ezen kívül, bár én soha nem találtam erre utalást,
              de Pattabhi Jois gyakran idézte nekünk, illetve a mysore-i
              Bhagavad Gítá tanárom, Naranacharya Professzor is említette, hogy
              ha egy tanár holdnapon újat tanít, akkor csökken a tudása, a
              megelőző és követő napokon pedig a diák tudása csökken.
            </p>
            <br />
            <p>
              Amikor beszéltem Pattabhi Jois asztrológusával a Guruji könyvben
              lévő interjú készítésekor, akkor ő is egyet értett azzal, hogy ez
              a szokás azzal a gondolattal függ össze, hogy “amint fent úgy
              lent”: a védikus hagyomány szerint az elménk olyan, mint a hold:
              növekszik, csökken és ugyanezen ciklusok szerint tárolja az
              információt, mivel a Hold hatással van a Föld gravitációjára.
            </p>
            <br />
            <p>
              Mivel Pattabhi Jois a Maharádzsa Pathasálájának tanulója volt,
              majd a főiskola Jógaprofesszora lett 1937-1973 között, ezért a
              tanítási szünet ezeken a napokon szokásává vált. Mivel ő a jóga
              gyakorlását védikus eredetűnek tartotta, és úgy gondolta, hogy a
              pránájáma és az ászana az Upanisadok megértéséhez vezető út
              kapuja, ezért a jóga tanítására is ugyanazokat a szabályokat
              vonatkoztatta, mint a Védák oktatására. Továbbá azt is mondta,
              hogy a holdnapokon könnyebb megsérülni, és a sérülések lassabban
              gyógyulnak. Személy szerint ezt sosem tudtam alátámasztani a
              dzsjótis alapján; talán ez is olyasvalami, amit az édesapjától
              tanult, aki kiváló asztrológus volt.
            </p>
            <p>
              Pattabhi maga is értett az asztrológiához – a neve, Jois a
              dzsjótis (asztrológus) szó dél-indiai torzítása, tehát az
              asztrológia a családi hagyományuk része volt. Azért mondom el
              mindezt, hogy megértessem, hogy Pattabhi Joisnak voltak bizonyos
              szokásai 14 évesen. Hogy miért voltak ezek a szokásai az is
              érdekes, és bár lehet, hogy mi nem vagyunk brahminok, sőt még
              indiaiak sem, de mivel a tanítványai vagyunk, ezért jó, ha
              megértjük miért tett bizonos dolgokat, és elfogadjuk azt, hogy ha
              neki fontos volt követni őket, akkor ránk is vonatkoznak. De nem
              érdemes túl nagy ügyet csinálni belőlük, vagy mindenféle
              fantasztikus sztorit költeni köréjük! Itt van például egy vicces
              történet, ami jól jellemzi, hogy mi (például az astanga jóga
              gyakorlói!) nem szánjuk rá az időt, hogy egyszerű dolgokra fényt
              derítsünk racionális elmével: Egy szent tudós minden este egy fa
              alatt tartott Bhagavad Gítá leckéket egy falu mellett. Volt egy
              macskája, aki néha beugrott a tömegbe, és megzavarta a
              hallgatóságot. Ezért a bölcs mindig kikötötte őt a fához az órák
              alatt. Évek múltán a bölcs eltávozott az élők soraiból. Az egyik
              tanítványa folytatta az esti Bhagavad Gítá órákat a fa alatt, és ő
              is kikötötte a macskát a fához. A macska is megörgedett és meghalt
              idővel, és a tanítvány szerzett egy új macskát. Három generáció
              után az egyik tanítvány írt egy könyvet arról a szent tradícióról,
              hogy Bhagavad Gítá leckék alatt egy macskát kell a fához
              kötni.Tehát mindezek után azt gondolom, hogy a Pattabhi Jois és a
              módszere iránt érzett tiszteletből jó, ha a tanítványai követik a
              holdnapokra vonatkozó szabályokat, ha lehetőságük van rá.
              Mindennek az a célja, hogy kapcsolódjunk a tanítói láncolathoz,
              illetve alázatot, figyelmességet és egyfajta fegyelmet ébresszen a
              tanítványokban. (Nagyon valószínű, hogy) nem fogunk pokolra jutni,
              ha ezeken a napokon gyakorlunk; Pattabhi Jois lánya, Saraswati
              (aki a Szanszrkit Főiskolán az első és egyetlen női jógatanítványa
              is volt egyben) hétfőtől péntekig tanított, és a hétvégék voltak a
              pihenőnapok, illetve hozzátette, hogy holdnapokon nem ad új
              ászanát. Tisztában volt vele, hogy a tanítványai nem gyakorolnak a
              hét minden napján, de akik mégis ezt teszik, azok testének jól jön
              egy extra pihenőnap.
            </p>
            <br />
            <p>
              Van egy sajátos bája annak, ha meghódolunk egy láncolat előtt, és
              ez hatással van a személyiségünkre is, tehát miért ne próbálnánk
              meg? Én nem hiszem, hogy minden jógagyakorlónak szigorúan
              pihenőnapot kellene tartania ezeken a napokon – mindenki kövesse a
              saját tanárát, és remélhetőleg, ha magasabb elvekhez hangoljuk az
              elménket, akkor boldogságot találunk a gyakorlásunkban.
              Holdnapokon és azokon túl!”
            </p>
            <br />
            <p>
              <strong>Forrás:</strong> Eddie Stern
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
