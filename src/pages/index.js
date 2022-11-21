import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero"
import Icons from "../Icon/Icons"
import SectionRolunk from "../components/Sections/SectionRolunk"
import SectionParampara from "../components/Sections/SectionParampara"
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
      <div className="row">
        <div className="col">
          <p>
            Avocado matcha pichu peach strawberry mango a delicious meal
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
          <p>
            Green tea lime cilantro thyme tempeh Italian linguine puttanesca
            artichoke hearts shallots spiced peppermint blast enchiladas Thai
            toasted hazelnuts dill cayenne red pepper edamame hummus muffins
            paprika frosted gingerbread bites chilies. Lemongrass parsley
            grenadillo lemon red lentil soup crumbled lentils potato creamy
            cauliflower alfredo sauce chocolate peanut butter dip second course
            Italian pepperoncini lemonade zest walnut pesto tart.
          </p>
          <p>
            Chocolate cookie hazelnut shiitake cumin lime coconut macadamia nut
            cookies strawberry mango smoothie creamiest Southern Italian
            elderberry pumpkin chili pepper red lentil curry one bowl
            overflowing berries. Fall broccoli banana bruschetta oranges Indian
            spiced seitan red grapes mocha chocolate Thai curry mangos jalapeño
            blueberry pops avocado dressing drizzle mint black bean wraps summer
            fruit salad zesty tofu pad thai green papaya salad hearts of palm
            figs dessert salty.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default IndexPage
