import React from "react"
import { graphql,  Link , navigate } from "gatsby"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import LayoutBlog from "../Layouts/LayoutBlog"
import Seo from "../seo"
import "../../sass/components/_blogposts.scss"
import {GatsbyImage} from 'gatsby-plugin-image';

const BlogPosts = ({ data, children, pageContext }) => {
  const post = data.mdx
  const { tags } = post.frontmatter

  return (
    <LayoutBlog>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        // thumbnail={src}
      />
      <div className="container-fluid blog-post-image">
       <GatsbyImage image={pageContext.postThumbnail.node.childImageSharp.gatsbyImageData} alt={post.frontmatter.title ?? 'some value'} />
      </div>
      <div className="row">
        <div className="col">
          <h2>{post.frontmatter.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col blog-post-details">
          <p>{post.frontmatter.author}</p>
          <div className="blog-card-header-separator"></div>
          {/* <p>{timeToRead} perc olvasás</p> */}
          {/* <div className="blog-card-header-separator"></div>
          <p>{frontmatter.date}</p> */}
        </div>
      </div>
      <div className="blog-card-footer-text tag-button">
        {tags.map(tag => {
          return (
            <p key="tag">
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </p>
          )
        })}
      </div>
      <article className="mb-20px mt-20px blog-posts-body-style">
        {children}
      </article>
      <ButtonIcon
        buttonType="icon-text"
        className=""
        text="Vissza az összes bejegyzéshez"
        icon={<Icons.ArrowLeft color="orange" />}
        onClick={() => {
          navigate("/blog")
        }}
      />
    </LayoutBlog>
  )
}

export default BlogPosts

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        title
        date
        tags
        thumbnail
      }
    }
  }
`

//old query

// export const query = graphql`
//   query PostsBySlug($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       body
//       timeToRead
//       frontmatter {
//         title
//         description
//         author
//         tags
//         date(formatString: "YYYY. MM. DD.")
//         thumbnail {
//           childImageSharp {
//             gatsbyImageData(
//               placeholder: BLURRED
//               blurredOptions: { width: 100 }
//               transformOptions: { cropFocus: CENTER }
//               formats: [AUTO, WEBP, AVIF]
//             )
//           }
//         }
//       }
//     }
//   }
// `

// query PostsBySlug($slug: String!) {
//   mdx(fields: { slug: { eq: $slug } }) {
//     body
//     fields {
//       slug
//     }
//     frontmatter {
//       title
//       description
//       author
//       tags
//       date(formatString: "YYYY. MM. DD.")
//     }
//   }
// }
