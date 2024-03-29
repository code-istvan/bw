import remarkGfm from "remark-gfm"
import rehypeMetaAsAttributes from "@lekoarts/rehype-meta-as-attributes"
import rehypeExternalLinks from "rehype-external-links"
import dotenv from "dotenv"
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 576px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 992px)",
  xl: "(max-width: 1200px)",
  xxl: "(max-width: 1400px)",
}

let plugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./static/blogpostimages`,
      name: `uploads`,
    },
  },
  {
    resolve: `gatsby-plugin-plausible`,
    options: {
      domain: `bandha.works`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blogpostimages`,
      path: `./static/blogpostimages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `authorFull`,
      path: `./static/blogpostimages/_authors`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `teachersFull`,
      path: `./static/teachers`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `scheduleFull`,
      path: `./static/schedule`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `classesFull`,
      path: `./static/classes`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `eventsFull`,
      path: `./static/events`,
    },
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `customdateFull`,
      path: `./static/customdate`,
    },
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `./src/images`,
    },
  },
  {
    resolve: "gatsby-plugin-sass",
    options: {
      useResolveUrlLoader: true,
    },
  },
  {
    resolve: "gatsby-plugin-breakpoints",
    options: {
      queries: myCustomQueries,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-image`,
  "gatsby-plugin-netlify",
  "gatsby-plugin-sitemap",
  "@mediacurrent/gatsby-plugin-silence-css-order-warning",
  {
    resolve: "gatsby-transformer-json",
    options: {
      path: `./static/blogpostimages/_authors`,
    },
  },
  {
    resolve: "gatsby-transformer-json",
    options: {
      path: `./static/teachers`,
    },
  },
  {
    resolve: "gatsby-transformer-json",
    options: {
      path: `./static/events`,
    },
  },

  {
    resolve: "gatsby-transformer-json",
    options: {
      path: `./static/classes`,
    },
  },
  {
    resolve: "gatsby-transformer-json",
    options: {
      path: `./static/schedule`,
    },
  },
  {
    resolve: "gatsby-transformer-json",
    options: {
      path: `./static/customdate`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeMetaAsAttributes,
          [rehypeExternalLinks, { target: "_blank" }],
        ],
      },
    },
  },
  // {
  //   resolve: `gatsby-omni-font-loader`,
  //   options: {
  //     mode: "async",
  //     enableListener: true,
  //     preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
  //     web: [
  //       {
  //         name: `Nunito Sans`,
  //         file: `https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap`,
  //       },
  //       {
  //         name: `Abril Fatface`,
  //         file: `https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap`,
  //       },
  //     ],
  //   },
  // },

  // {
  //   resolve: `gatsby-plugin-page-creator`,
  //   options: {
  //     path: `./blog`,
  //   },
  // },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Bandha Works Shala`,
      short_name: `Bandha`,
      start_url: `/`,
      background_color: `hsl(0, 0%, 15%)`,
      theme_color: `hsl(0, 0%, 15%)`,
      display: `minimal-ui`,
      icon: `src/images/bw-favicon.png`,
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: "https://bandha.works",
      sitemap: "https://bandha.works/sitemap-0.xml",
      policy: [{ userAgent: "*", allow: "/" }],
    },
  },
  `gatsby-plugin-netlify-cms`,
]

if (process.env.NODE_ENV === "production") {
  plugins.push({
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
      },
    },
  })
}

export default {
  siteMetadata: {
    title: `Bandha Works Astanga Jógaiskola`,
    description: `Fedezzd fel az Astanga Jógát a Bandha Works Jógaiskolában! Astanga Mysore-stílusú gyakorlás, astanga kezdő tanfolyamok, vinyásza krama jógaórák.`,
    author: `@omworks`,
    siteUrl: `https://bandha.works/`,
    social: {
      facebook: `bandhaworks`,
      twitter: `IstvnSzalai5`,
    },
  },
  plugins: plugins,
}
