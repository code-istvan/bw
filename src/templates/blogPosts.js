import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import LayoutBlog from "../components/layoutBlog"
import AuthorIcon from "../components/AuthorIcon"
import DateIcon from "../components/DateIcon"
import TagsIcon from "../components/TagsIcon"
import Seo from "../components/seo"
import { navigate } from "gatsby"
import "../sass/components/_blogposts.scss"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const blogPosts = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const src = getSrc(frontmatter.thumbnail) || ""
  const image = getImage(frontmatter.thumbnail)

  return (
    <LayoutBlog>
      <Container>
        <Seo
          title={frontmatter.title}
          description={frontmatter.description}
          thumbnail={src}
        />
        <Row className="blogPosts__card">
          <Col md={{ span: 8, offset: 2 }} className="blogPost__backgrondColor">
            <h2>{frontmatter.title}</h2>
            <ul>
              {" "}
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
          </Col>
        </Row>
      </Container>
    </LayoutBlog>
  )
}

export default blogPosts

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
