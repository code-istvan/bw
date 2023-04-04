import * as React from "react"
import Layout from "../Layouts/Layout"
import Seo from "../seo"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { graphql } from "gatsby"
import BlogTags from "../Blog/BlogTags"
import BlogSidebar from "../Blog/BlogSidebar"
import SearchBar from "../SearchBar"
import BlogRoll from "../Blog/BlogRoll"
import { CustomLink } from "../CustomLink"
import "../../sass/components/_bloglist.scss"

export default function Blog({ pageContext, data }) {
  const breakpoints = useBreakpoint()

  const isFirst = pageContext?.currentPage === 1
  const isLast = pageContext?.currentPage === pageContext?.numPages
  const prevPage =
    pageContext?.currentPage - 1 === 1
      ? "/blog"
      : `/blog/${(pageContext?.currentPage - 1).toString()}`
  const nextPage = `/blog/${(pageContext?.currentPage + 1).toString()}`

  return (
    <Layout>
      <Seo title="BLOG" />
      <div className="blog-hero-container">
        <h1 className="blog-title">BLOG</h1>
        <div className="row blog--desktop--container">
          <StaticImage
            className="container-fluid blog-hero-image hero-big-image"
            src="../../images/blog_hero_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid blog-hero-image hero-mobil-image"
            src="../../images/blog_hero.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row blog-frame gap-2">
        <div className="col-12-xs col-3-md col-3-xl blog-right-column">
          <div className="blog-header-only-mobil">
            <SearchBar id="" type="text" name="serach" placeholder="Keresés" />
            <h4>CIMKÉK</h4>
            <BlogTags />
          </div>
          <div className="separator-horizontal-full"></div>
          {breakpoints.sm ? null : <BlogSidebar />}
        </div>
        <div className="col-12-xs col-9-md col-9-xl blogroll-desktop">
          <BlogRoll posts={data.allMdx.nodes} />
          <div className="separator-horizontal-full"></div>
          <div className="blog-list-footer">
            <div className="blog-list-footer-buttons">
              {!isFirst && (
                <CustomLink
                  link={prevPage}
                  classNames="btn btn--secondary--solid link-decoration-remove"
                  title="Következő oldal"
                />
              )}
              {!isLast && (
                <CustomLink
                  link={nextPage}
                  classNames="btn btn--secondary--solid link-decoration-remove"
                  title="Elöző oldal"
                />
              )}
            </div>
            <div className="mt-20px blog-list-footer-buttons">
              <CustomLink
                link="/blog"
                classNames="btn btn--secondary--outline link-decoration-remove"
                title="Legfrissebb posztok"
              />
              <CustomLink
                link={`/blog/${pageContext?.numPages}`}
                classNames="btn btn--secondary--outline link-decoration-remove"
                title="Legrégebbi posztok"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      nodes {
        excerpt
        fields {
          slug
          timeToRead {
            minutes
          }
        }
        frontmatter {
          date(formatString: "YYYY. MM. DD.")
          description
          title
          author
          tags
        }
      }
    }
  }
`
