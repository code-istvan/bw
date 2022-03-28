import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "../sass/components/_bgimages.scss"
// import BackgroundImage from "gatsby-background-image"

const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "hero_test.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImage123)

  return (
    // <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
    //   TEST
    // </BackgroundImage>

    <BgImage image={pluginImage} className="masthead">
      <h1>oh jógi ne végezz ászanát vinyásza nélkűl</h1>
    </BgImage>
  )
}

export default GbiBridged

//SAVE

// import React from "react"

// import { graphql, useStaticQuery } from "gatsby"
// import { getImage } from "gatsby-plugin-image"

// import { convertToBgImage } from "gbimage-bridge"
// import BackgroundImage from "gatsby-background-image"

// const GbiBridged = () => {
//   const { backgroundImage123 } = useStaticQuery(
//     graphql`
//       query {
//         backgroundImage123: file(relativePath: { eq: "BW_hero_desktop.jpg" }) {
//           childrenImageSharp {
//             gatsbyImageData(
//               width: 2000
//               quality: 50
//               webpOptions: { quality: 70 }
//             )
//           }
//         }
//       }
//     `
//   )

//   const image = getImage(backgroundImage123)

//   const bgImage = convertToBgImage(image)

//   return (
//     <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
//       TEST
//     </BackgroundImage>
//   )
// }

// export default GbiBridged
