const slugify = require(`./src/utils/slugify`)

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
const _ = require("lodash")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// Create page for tags starts

// const createTagPages = (createPage, posts) => {
//   const tagPageTemplate = path.resolve(`src/templates/tags.js`)
//   const allTagsTemplate = path.resolve(`src/templates/blogtags.js`)

//   const postsByTags = {}

//   posts.forEach(({ node }) => {
//     if (node.frontmatter.tags) {
//       node.frontmatter.tags.forEach(tag => {
//         if (!postsByTags[tag]) {
//           postsByTags[tag] = []
//         }

//         postsByTags[tag].push(node)
//       })
//     }
//   })

//   const tags = Object.keys(postsByTags)

//   createPage({
//     path: `/tags`,
//     component: allTagsTemplate,
//     context: {
//       tags: tags.sort(),
//     },
//   })

//   tags.forEach(tagName => {
//     const posts = postsByTags[tagName]

//     createPage({
//       path: `/tags/${tagName}`,
//       component: tagPageTemplate,
//       context: {
//         posts,
//         tagName,
//       },
//     })
//   })
// }
// Create page for tags ends

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    "./src/components/templates/blogPosts.js"
  )
  const tagsTemplate = path.resolve("./src/components/templates/tags.js")

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
            tags
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMdx.nodes
    let tags = []
    posts.forEach(({ frontmatter }) => {
      tags.push(...frontmatter.tags)
    })
    tags = Array.from(new Set(tags))

    tags.forEach(tag => {
      createPage({
        path: `tags/${slugify(tag)}`,
        component: tagsTemplate,
        context: { tag },
      })
    })

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
