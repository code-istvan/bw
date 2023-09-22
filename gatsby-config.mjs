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

const config = {
  siteMetadata: {
    title: `Bandha Works Astanga Jógaiskola`,
    description: `Fedezzd fel az Astanga Jógát a Bandha Works Jógaiskolában! Astanga Mysore-stílusú gyakorlás, astanga kezdő tanfolyamok, vinyásza krama jógaórák."`,
    author: `@omworks`,
    siteUrl: `https://bandha.works/`,
    social: {
      facebook: `bandhaworks`,
      twitter: `IstvnSzalai5`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },

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
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bandha Works Shala`,
        short_name: `Bandha`,
        start_url: `/lucid-easley-756a67.netlify.app`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bw-favicon.png`,
        // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     password: process.env.SHOPIFY_APP_PASSWORD,
    //     storeUrl: process.env.GATSBY_MYSHOPIFY_URL,
    //     salesChannel: process.env.SHOPIFY_APP_ID, // Optional but recommended
    //     downloadImages: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        // host: "https://lucid-easley-756a67.netlify.app",
        host: "https://bandha.works",
        // sitemap: "https://lucid-easley-756a67.netlify.app/sitemap.xml",
        sitemap: "https://bandha.works/sitemap-index.xml",
        // policy: [{ userAgent: "*", disallow: "/" }],
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ].filter(Boolean),
}

export default config
