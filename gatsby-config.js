module.exports = {
  siteMetadata: {
    title: `BW test`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@omworks`,
    siteUrl: `https://https://lucid-easley-756a67.netlify.app`,
  },
  plugins: [
    {
      resolve: "gatsby-remark-relative-images",
      options: {
        name: "blogpostimages",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "@mediacurrent/gatsby-plugin-silence-css-order-warning",
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
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogpostimages`,
        path: `${__dirname}/static/blogpostimages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
