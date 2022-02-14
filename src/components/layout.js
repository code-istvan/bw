import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavbarBandha from "./NavbarBandha"
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
      <NavbarBandha />
      <Container>
        <main>{children}</main>
        <h1>oh jógi ne végezz ászanát vinyásza nélkűl</h1>
        <p>
          Avocado matcha peach strawberry mango a delicious meal guacamole asian
          pear black bean chili dip seasonal raspberry fizz kimchi sweet potato
          kale spiced pumpkin chili double dark chocolate grapefruit Bolivian
          rainbow pepper samosa chocolate lemon lime minty. Balsamic vinaigrette
          tasty coriander vine tomatoes spring tabasco pepper strawberry spinach
          salad picnic salad pinch of yum green pepper ginger lemongrass agave
          green tea arugula salad red amazon pepper almond milk chai latte pine
          nuts sesame soba noodles. Miso turmeric glazed aubergine lemon tahini
          dressing miso dressing banana bread springtime strawberry with cremini
          mushrooms chickpea crust pizza cherry bomb pepper candy cane winter.
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
          elderberry pumpkin chili pepper red lentil curry one bowl overflowing
          berries. Fall broccoli banana bruschetta oranges Indian spiced seitan
          red grapes mocha chocolate Thai curry mangos jalapeño blueberry pops
          avocado dressing drizzle mint black bean wraps summer fruit salad
          zesty tofu pad thai green papaya salad hearts of palm figs dessert
          salty.
        </p>
        <p>
          Salty one bowl roasted butternut squash mocha chocolate green tea lime
          homemade balsamic pineapple salsa red pepper Italian linguine
          puttanesca mangos crunchy seaweed street style Thai basil tacos
          artichoke hearts sweet potato tempeh. Coconut sugar morning smoothie
          bowl chilies bananas scotch bonnet pepper cherry bomb pepper chai tea
          cinnamon apples lentils. Chocolate cookie paprika macadamia nut
          cookies citrusy fresh couscous edamame banana bread peanut butter
          edamame hummus dark chocolate peaches blueberry pops pine nuts Italian
          pepperoncini.
        </p>
        <p>
          Lime falafel bites green grapes pomegranate crispy spicy tahini
          drizzle avocado crunchy broccoli Thai sun pepper mediterranean luxury
          bowl. Asian pear Bolivian rainbow pepper vegan bento box chocolate
          lavender lemonade enchiladas coriander walnut mushroom tart cranberry
          spritzer lemongrass shiitake mushrooms sriracha pecans.
        </p>
        <p>
          Thai dragon pepper seitan red curry tofu noodles cumin four-layer
          cauliflower plums basil salad maple orange tempeh habanero golden.
          Grenadillo fall cremini mushrooms eating together summertime hot
          shallots pasta onion soba noodles roasted peanuts strawberry mango
          smoothie.
        </p>
        <p>
          Grains thyme lemonade zest black bean wraps strawberry spinach salad
          naga viper Bulgarian carrot cashew hummus tomato and basil tofu
          hearty. Creamiest jalapeño quinoa flatbread cool off cinnamon toast
          casserole strawberries red amazon pepper chili pepper delightful
          blueberry scones dark and stormy ghost pepper green onions chili
          coconut milk portobello mushrooms cozy cinnamon oatmeal mediterranean
          vegetables smoked tofu double dark chocolate oranges Sicilian
          pistachio pesto Thai basil curry.
        </p>
        <p>
          Chia seeds hemp seeds instant pot ultra creamy avocado pesto Caribbean
          red habanero mediterranean lemon lime minty second course apple
          vinaigrette farro platter cherry bomb parsley banh mi salad rolls
          hummus falafel bowl mint lime taco salsa figs fiery fruit lemon tahini
          dressing blueberries Thai super chili lemon red lentil soup kale
          Mexican fiesta apricot seeds. Creamy cauliflower alfredo sauce
          chickpea crust pizza butternut mix walnut pesto tart springtime
          strawberry golden cayenne pepper cilantro lime vinaigrette cookies
          garlic sriracha noodles mushroom risotto kale caesar salad heat açai
          soup.
        </p>
        <p>
          Overflowing kimchi toasted hazelnuts winter bruschetta seasonal black
          beans sandwiches main course miso dressing potato hearts of palm
          dragon fruit raspberries raspberry fizz fruit smash comforting pumpkin
          spice latte burritos ginger lemongrass agave green tea dill rich
          coconut cream sweet potato black bean burrito avocado dressing drizzle
          Malaysian. Sparkling pomegranate punch green pepper picnic salad
          cherries Thai curry arugula salad leek vitamin glow almond milk
          coconut rice fig arugula cashew salad tabasco pepper.
        </p>
        <p>
          Chocolate peanut butter dip coconut crispy iceberg lettuce creamy
          cauliflower alfredo banana orange spiced pumpkin chili pumpkin banana
          bread overflowing berries Thai picnic with green papaya salad spring
          mint ginger tofu shaved almonds simmer vine tomatoes cocoa grapefruit
          lemon tasty lime mango crisp. Hazelnut shiitake red grapes pinch of
          yum refreshing cucumber splash balsamic vinaigrette ultimate
          peppermint muffins cool green tea appetizer blackberries roasted
          brussel sprouts Chinese five-spice powder cherry sweet potato zesty
          tofu pad thai avocado basil pesto kung pao pepper entree sleepy
          morning tea blueberry chia seed jam.
        </p>
        <Button
          type="button"
          buttonStyle="btn--mobil--primary--outline"
          buttonSize="btn--small"
        >
          Mobil GHOST
        </Button>
        <br />
        <br />
        <Button
          type="button"
          buttonStyle="btn--mobil--primary--solid"
          buttonSize="btn--small"
        >
          Mobil PRIMARy
        </Button>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
