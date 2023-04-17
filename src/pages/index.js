import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero"
import Icons from "../components/Icons/Icons"
import SectionRolunk from "../components/Sections/SectionRolunk"
import SectionParampara from "../components/Sections/SectionParampara"
import SectionEvents from "../components/Sections/SectionEvents"
import Counter from "../components/Counter"
import "../sass/pages/_index.scss"

const inputDate = "1990-03-31"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="FŐOLDAL" />
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
            <Counter initialDate={inputDate} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Avocado kiwi matcha pichu peach strawberry mango a delicious meal
              guacamole asian pear black bean chili dip seasonal raspberry fizz
              kimchi sweet potato kale spiced pumpkin chili double dark
              chocolate grapefruit Bolivian rainbow pepper samosa chocolate
              lemon lime minty. Balsamic vinaigrette tasty coriander vine
              tomatoes spring tabasco pepper strawberry spinach salad picnic
              salad pinch of yum green pepper ginger lemongrass agave green tea
              arugula salad red amazon pepper almond milk chai latte pine nuts
              sesame soba noodles. Miso turmeric glazed aubergine lemon tahini
              dressing miso dressing banana bread springtime strawberry with
              cremini mushrooms chickpea crust pizza cherry bomb pepper candy
              cane winter coconut sushmna.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
