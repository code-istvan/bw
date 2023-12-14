import React, { useRef, useState, useEffect } from "react"
import { graphql, Link, navigate } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import Layout from "../Layouts/Layout"
import Seo from "../seo"
import { GatsbyImage } from "gatsby-plugin-image"
import BlogSidebar from "./BlogSidebar"
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import slugify from "../../utils/slugifyes6"
import "../../sass/components/_blogposts.scss"

const BlogPost = ({ data, children, pageContext, location }) => {
  const breakpoints = useBreakpoint()
  const [articleProperties, setArticleProperties] = useState({})
  const post = data.mdx
  const { tags } = post.frontmatter
  const timeToRead = Math.ceil(post.fields.timeToRead.minutes)
  const { authorsJson: author } = data
  const { siteUrl } = data.site.siteMetadata
  const sectionRef = useRef(null)
  useEffect(() => setArticleProperties(sectionRef.current), [])

  return (
    <Layout articleProperties={articleProperties}>
      <div className="blog-posts-wrapper">
        <div className="row">
          <div ref={sectionRef} className="col-12-xs col-9-md col-9-xl">
            {/* <Seo
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              // thumbnail={src}
            /> */}
            <div
              className={`${
                breakpoints.md
                  ? "blog-post-image container-fluid"
                  : "blog-post-image"
              }`}
            >
              {pageContext.mobileImageName && breakpoints.md ? (
                <img
                  src={pageContext.mobileImageName}
                  alt={post.frontmatter.title ?? "some value"}
                />
              ) : !pageContext.postThumbnail ? (
                <img
                  src={pageContext.frontmatter.thumbnail}
                  alt={post.frontmatter.title ?? "some value"}
                />
              ) : (
                <GatsbyImage
                  image={
                    pageContext.postThumbnail.node.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.frontmatter.title ?? "some value"}
                />
              )}
            </div>
            <div className="blog-post-header mt-20px">
              <div className="row">
                <div className="col">
                  <h1>{post.frontmatter.title}</h1>
                </div>
              </div>
              <div className="meta mt-20px">
                <div className="blog-posts-meta-first-line">
                  <div className="meta-author">
                    <GatsbyImage
                      image={author.authorimage.childImageSharp.gatsbyImageData}
                      className="avatar__image avatar__image--small"
                      alt={post.frontmatter.author}
                    />
                    <p>{post.frontmatter.author}</p>
                  </div>
                  <div className="vertical-separator"></div>
                  <p>{post.frontmatter.date}</p>
                </div>
                <div className="blog-posts-meta-second-line">
                  <div className="vertical-separator"></div>
                  <p>{timeToRead} perc olvasás</p>
                  <div className="blog-card-footer-text tag-button blogposts-tag-button">
                    {tags.map(tag => {
                      return (
                        <p key="tag" className="blogposts-tag-button">
                          <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="separator-horizontal-full mt-40px"></div>
            <article className="mb-20px blog-posts-body-style">
              {children}
            </article>

            <div className="blogpost-share-section mb-40px">
              <div className="separator-horizontal"></div>
              <p>
                <strong>Bejegyzés megosztása:</strong>
              </p>
              <div className="blogpost-share-buttons">
                <FacebookShareButton url={`${siteUrl}${location.pathname}`}>
                  <Icons.Facebook color="white" />
                </FacebookShareButton>
                <TwitterShareButton url={`${siteUrl}${location.pathname}`}>
                  <Icons.Twitter color="white" />
                </TwitterShareButton>
                <TelegramShareButton url={`${siteUrl}${location.pathname}`}>
                  <Icons.Telegram color="white" />
                </TelegramShareButton>
                <WhatsappShareButton url={`${siteUrl}${location.pathname}`}>
                  <Icons.Whatsapp color="white" />
                </WhatsappShareButton>
                <EmailShareButton url={`${siteUrl}${location.pathname}`}>
                  <Icons.Email color="white" />
                </EmailShareButton>
              </div>
            </div>
            <ButtonIcon
              buttonType="icon-text"
              className=""
              text="Vissza az összes bejegyzéshez"
              icon={<Icons.ArrowLeft color="orange" />}
              onClick={() => {
                navigate(-1)
              }}
            />
          </div>
          <div className="col-12-xs col-3-md col-3-xl hide-blogsidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const Head = ({ location, data, pageContext }) => {
  const ogImage =
    pageContext.frontmatter.thumbnail ??
    getSrc(pageContext.postThumbnail.node.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const post = data.mdx

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    name: post.frontmatter.title,
    description: post.frontmatter.description,
    url: `${siteUrl}${location.pathname}`,
    logo: "https://mula.bandha.works/images/bw_logo.png",
  }

  console.log("ogImage", ogImage)

  return (
    <>
      <link rel="canonical" href={schema.url} />
      <meta name="description" content={schema.description} />
      <meta property="og:title" content={schema.name} />
      <meta property="og:url" content={schema.url} />
      <meta property="og:description" content={schema.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary" />
    </>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!, $author: String) {
    authorsJson(name: { eq: $author }) {
      name
      email
      authorimage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }

    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fields {
        slug
        timeToRead {
          minutes
        }
      }
      frontmatter {
        author
        title
        date(formatString: "YYYY MMMM DD.", locale: "hu-HU")
        tags
        thumbnail
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    file(relativePath: { eq: "blog_desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1200)
      }
    }
  }
`
