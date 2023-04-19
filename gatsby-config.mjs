import remarkGfm from "remark-gfm"
import rehypeMetaAsAttributes from "@lekoarts/rehype-meta-as-attributes"

const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 576px)",
  md: "(max-width: 768px)",
  l: "(max-width: 992px)",
  xl: "(max-width: 1200px)",
  xll: "(max-width: 1400px)",
}

const config = {
  siteMetadata: {
    title: `BW test`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@omworks`,
    siteUrl: `https://lucid-easley-756a67.netlify.app`,
    social: {
      facebook: `bandhaworks`,
      twitter: `IstvnSzalai5`,
    },
  },
  plugins: [
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
          rehypePlugins: [rehypeMetaAsAttributes],
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://lucid-easley-756a67.netlify.app",
        sitemap: "https://lucid-easley-756a67.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ].filter(Boolean),
}

export default config
