import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Button from "react-bootstrap/Button"
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

  return (
    <LayoutBlog>
      <div className="container">
        <Seo
          title={frontmatter.title}
          description={frontmatter.description}
          thumbnail={src}
        />
        <div className="container-fluid">
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
            <p>{frontmatter.date}</p>
            <div className="blog-card-header-separator"></div>
            <div className="tag-button"></div>
            <p>{timeToRead} perc olvasás</p>
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
        {/* <div className="row">
          <div className="col">
            <p>{frontmatter.tags}</p>
          </div>
        </div> */}
        <br />
        <br />
        <article>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        {/* <Button variant="primary" href="/blog"> */}
        <Button variant="primary" onClick={() => navigate(-1)}>
          Vissza
        </Button>
        <br /> <br />
      </div>
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
