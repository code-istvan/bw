exports.onCreateWebpackConfig = helper => {
  const { stage, actions, getConfig } = helper
  if (stage === "develop" || stage === "build-javascript") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    "./src/components/Templates/blogPosts.js"
  )

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMdx.nodes
    // create page for each mdx node
    posts.forEach(post => {
      createPage({
        path: `blog${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      })
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
