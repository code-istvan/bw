import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbarBW"
import Container from "react-bootstrap/Container"
import "../sass/components/_layout.scss"
import Button from "./Button"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
        <Button
          type="button"
          buttonStyle="btn--mobil--primary--outline"
          buttonSize="btn--small"
        >
        Mobil GHOST
        </Button>
        <br /><br />
             <Button
          type="button"
          buttonStyle="btn--mobil--primary--solid"
          buttonSize="btn--small"
        >
        Mobil PRIMARy
        </Button>
        <br /><br /><h1>oh  jógi ne végezz ászanát vinyásza nélkűl</h1><p>Avocado matcha peach strawberry mango a delicious meal guacamole asian pear black bean chili dip seasonal raspberry fizz kimchi sweet potato kale spiced pumpkin chili double dark chocolate grapefruit Bolivian rainbow pepper samosa chocolate lemon lime minty. Balsamic vinaigrette tasty coriander vine tomatoes spring tabasco pepper strawberry spinach salad picnic salad pinch of yum green pepper ginger lemongrass agave green tea arugula salad red amazon pepper almond milk chai latte pine nuts sesame soba noodles. Miso turmeric glazed aubergine lemon tahini dressing miso dressing banana bread springtime strawberry with cremini mushrooms chickpea crust pizza cherry bomb pepper candy cane winter.</p>
<p>Green tea lime cilantro thyme tempeh Italian linguine puttanesca artichoke hearts shallots spiced peppermint blast enchiladas Thai toasted hazelnuts dill cayenne red pepper edamame hummus muffins paprika frosted gingerbread bites chilies. Lemongrass parsley grenadillo lemon red lentil soup crumbled lentils potato creamy cauliflower alfredo sauce chocolate peanut butter dip second course Italian pepperoncini lemonade zest walnut pesto tart.</p>
<p>Chocolate cookie hazelnut shiitake cumin lime coconut macadamia nut cookies strawberry mango smoothie creamiest Southern Italian elderberry pumpkin chili pepper red lentil curry one bowl overflowing berries. Fall broccoli banana bruschetta oranges Indian spiced seitan red grapes mocha chocolate Thai curry mangos jalapeño blueberry pops avocado dressing drizzle mint black bean wraps summer fruit salad zesty tofu pad thai green papaya salad hearts of palm figs dessert salty.</p>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
