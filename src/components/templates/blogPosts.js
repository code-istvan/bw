import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Button from "react-bootstrap/Button"
import LayoutBlog from "../Layouts/LayoutBlog"
import AuthorIcon from "../../Icon/AuthorIcon"
import DateIcon from "../../Icon/DateIcon"
import TagsIcon from "../../Icon/TagsIcon"
import Seo from "../seo"
import { navigate } from "gatsby"
import "../../sass/components/_blogposts.scss"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const blogPosts = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx
  const src = getSrc(frontmatter.thumbnail) || ""
  const image = getImage(frontmatter.thumbnail)

  return (
    <LayoutBlog>
      <div className="container">
        <Seo
          title={frontmatter.title}
          description={frontmatter.description}
          thumbnail={src}
        />
        <div className="row blogPosts__card">
          <div className="col blogPost__backgrondColor">
            <h2>{frontmatter.title}</h2>
            <ul>
              <li className="blogPosts__same-line">
                <AuthorIcon />
                <p>{frontmatter.author}</p>
              </li>
              <li className="blogPosts__same-line">
                <DateIcon />
                <p>{frontmatter.date}</p>
              </li>
              <li className="blogPosts__same-line">
                <TagsIcon />
                <p>{frontmatter.tags}</p>
              </li>
              <li className="blogPosts__same-line">
                <TagsIcon />
                <p>{timeToRead}</p>
              </li>
            </ul>
            <GatsbyImage image={image} alt={frontmatter.title} />
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
        </div>
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
