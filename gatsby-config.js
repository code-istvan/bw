module.exports = {
  siteMetadata: {
    title: `BW test`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@omworks`,
    siteUrl: `https://https://lucid-easley-756a67.netlify.app`,
    social: {
      facebook: `bandhaworks`,
      twitter: `IstvnSzalai5`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/blogpostimages`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogpostimages`,
        path: `${__dirname}/static/blogpostimages`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authorFull`,
        path: `${__dirname}/static/blogpostimages/_authors`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    "@mediacurrent/gatsby-plugin-silence-css-order-warning",
    {
      resolve: "gatsby-transformer-json",
      options: {
        path: `${__dirname}/static/blogpostimages/_authors`,
      },
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        path: `${__dirname}/static/events`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024, withWebp: true },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/blog`,
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
  ],
}
