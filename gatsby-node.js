const ALL_QUERIES = require(`./src/Queries/index.js`)
const slugify = require(`./src/utils/slugify`)
const readingTime = require(`reading-time`)
const {
  fmImagesToRelative: fmImagesToRelative2,
} = require(`gatsby-remark-relative-images-v2`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const _ = require("lodash")

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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogListTamplate = path.resolve("./src/components/Blog/blogList.js")
  const blogPostTemplate = path.resolve("./src/components/Blog/blogPost.js")
  const tagsTemplate = path.resolve("./src/components/Blog/tags.js")
  // const tagsShopify = path.resolve("./src/components/Shopify/tagsShop.js")
  const scheduleTemplate = path.resolve("./src/components/orarend.js")

  // shopify_commen-out
  // const productShopify = await graphql(`
  //   query {
  //     allShopifyProduct {
  //       edges {
  //         node {
  //           title
  //           handle
  //           tags
  //           featuredMedia {
  //             preview {
  //               image {
  //                 localFile {
  //                   childrenImageSharp {
  //                     gatsbyImageData
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //           variants {
  //             shopifyId
  //             product {
  //               options {
  //                 name
  //                 position
  //                 shopifyId
  //                 values
  //               }
  //             }
  //           }
  //           priceRangeV2 {
  //             maxVariantPrice {
  //               amount
  //             }
  //           }
  //           descriptionHtml
  //         }
  //       }
  //     }
  //   }
  // `)

  // shopify_commen-out
  // productShopify.data.allShopifyProduct.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/shop/products/${node.handle}`,
  //     component: path.resolve(`./src/components/Shopify/product.js`),
  //     context: {
  //       product: node,
  //     },
  //   })
  // })

  return graphql(ALL_QUERIES).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const schedule = result.data.allScheduleJson.nodes.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateA - dateB
    })

    schedule.forEach(item =>
      createPage({
        path: "/orarend",
        component: scheduleTemplate,
      })
    )

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

    // shopify_commen-out
    // const products = productShopify.data.allShopifyProduct.edges
    // let productTags = []
    // products.forEach(({ node }) => {
    //   productTags.push(...node.tags)
    // })
    // productTags = Array.from(new Set(productTags))

    // productTags.forEach(productTag => {
    //   createPage({
    //     path: `shop/tags/${slugify(productTag)}`,
    //     component: tagsShopify,
    //     context: { productTag },
    //   })
    // })

    const postsPerPage = 5
    const postNumPages = Math.ceil(Number(posts.length) / 5)
    // create page for each mdx node
    posts.forEach(post => {
      const imageName = post.frontmatter.thumbnail
        .split("/")
        .pop()
        .split(".")[0]
      const mobileImageName = post.frontmatter?.thumbnailMobil ?? ""

      const postThumbnail = result.data.allFile.edges.find(({ node }) =>
        node.childImageSharp?.gatsbyImageData?.images?.sources[0]?.srcSet?.includes(
          imageName
        )
      )

      Array.from({ length: postNumPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: blogListTamplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: postNumPages,
            currentPage: i + 1,
          },
        })
      })

      createPage({
        path: `blog${post.fields.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          slug: post.fields.slug,
          postThumbnail,
          mobileImageName,
          author: post.frontmatter.author,
        },
      })
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative2(node) // convert image paths for gatsby images

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type Mdx implements Node @infer {
    frontmatter: Frontmatter!
  }
  type Frontmatter @infer {
    title: String!
    date: Date! @dateformat
    description: String!
    authorFull: AuthorsJson @link(by: "email", from: "author")
  }
  type Frontmatter @infer {
    title: String!
    date: Date! @dateformat
    description: String!
    eventsFull: EventsJson @link(by: "link", from: "teacher")
  }
`
  createTypes(typeDefs)

  createTypes(`#graphql
    type Mdx implements Node {
        # You can also use other keys from fields.timeToRead if you don't want "minutes"
        timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
    }
  `)
}
