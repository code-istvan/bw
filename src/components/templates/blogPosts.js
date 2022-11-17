import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Button from "../Button"
import LayoutBlog from "../Layouts/LayoutBlog"
import { Link } from "gatsby"
import Seo from "../seo"
import { navigate } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import "../../sass/components/_blogposts.scss"

const blogPosts = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx
  const src = getSrc(frontmatter.thumbnail) || ""
  const image = getImage(frontmatter.thumbnail)
  const { tags } = frontmatter

  console.log("ezaz")
  console.log(image)

  return (
    <LayoutBlog>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        thumbnail={src}
      />
      <div className="container-fluid blog-post-image">
        <GatsbyImage image={image} alt={frontmatter.title} />
      </div>
      <div className="row">
        <div className="col">
          <h2>{frontmatter.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col blog-post-details">
          <p>{frontmatter.author}</p>
          <div className="blog-card-header-separator"></div>
          <p>{timeToRead} perc olvasás</p>
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
      <br />
      <br />
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      {/* <Button variant="primary" href="/blog"> */}

      <Button
        type="button"
        buttonStyle="btn--third--naked"
        // buttonSize="btn--small"
        onClick={() => {
          navigate("/blog")
        }}
      >
        Vissza az összes bejegyzéshez
      </Button>
    </LayoutBlog>
  )
}

export default blogPosts

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        description
        author
        tags
        date(formatString: "YYYY. MM. DD.")
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              transformOptions: { cropFocus: CENTER }
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
