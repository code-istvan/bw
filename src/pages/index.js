import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero"
import Icons from "../components/Icons/Icons"
import SectionRolunk from "../components/Sections/SectionRolunk"
import SectionParampara from "../components/Sections/SectionParampara"
import SectionEvents from "../components/Sections/SectionEvents"
import "../sass/pages/_index.scss"

const IndexPage = () => (
  <>
    <Seo title="FŐOLDAL" />
    <Navbar />
    <Hero />
    <div className="container">
      <div className="row">
        <div className="col index-namaste mt-20px mb-20px">
          <Icons.Namaste />
        </div>
      </div>
      <SectionRolunk />
      <SectionParampara />
      <SectionEvents />
      <div className="row">
        <div className="col">
          <p>
            Avocado kiwi matcha pichu peach strawberry mango a delicious meal
            guacamole asian pear black bean chili dip seasonal raspberry fizz
            kimchi sweet potato kale spiced pumpkin chili double dark chocolate
            grapefruit Bolivian rainbow pepper samosa chocolate lemon lime
            minty. Balsamic vinaigrette tasty coriander vine tomatoes spring
            tabasco pepper strawberry spinach salad picnic salad pinch of yum
            green pepper ginger lemongrass agave green tea arugula salad red
            amazon pepper almond milk chai latte pine nuts sesame soba noodles.
            Miso turmeric glazed aubergine lemon tahini dressing miso dressing
            banana bread springtime strawberry with cremini mushrooms chickpea
            crust pizza cherry bomb pepper candy cane winter.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default IndexPage
