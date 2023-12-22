import * as React from "react"
import Layout from "../Layouts/Layout"
import Seo from "../seo"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { graphql, navigate } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import Icons from "../Icons/Icons"
import BlogTags from "./BlogTags"
import BlogSidebar from "./BlogSidebar"
// import SearchBar from "../SearchBar"
import BlogRoll from "./BlogRoll"
import ButtonIcon from "../Buttons/ButtonIcon"
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
      <div className="blog-hero-container">
        <h1 className="blog-title">BLOG</h1>
        <div className="row blog--desktop--container">
          <StaticImage
            className="container-fluid blog-hero-image hero-big-image"
            src="../../images/blog_desktop.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid blog-hero-image hero-mobil-image"
            src="../../images/blog_mobil.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="blog-list-wrapper">
        <div className="row blog-frame gap-2">
          <div className="col-12-xs col-3-md col-3-xl blog-right-column">
            <div className="blog-header-only-mobil">
              {/* <SearchBar id="" type="text" name="serach" placeholder="Keresés" /> */}
              <h4>CIMKÉK</h4>
              <BlogTags />
            </div>
            <div className="separator-horizontal-full mt-40px"></div>
            {breakpoints.sm ? null : <BlogSidebar />}
          </div>
          <div className="col-12-xs col-9-md col-9-xl blogroll-desktop">
            <BlogRoll posts={data.allMdx.nodes} />
            <div className="separator-horizontal-full"></div>
            <div className="blog-list-footer">
              <div className="blog-list-footer-buttons">
                <div className="row">
                  {isFirst ? (
                    <Icons.ChevronDoubleLeft color="darkGrey" />
                  ) : (
                    <ButtonIcon
                      buttonType="icon-text"
                      className=""
                      text=""
                      icon={<Icons.ChevronDoubleLeft color="orange" />}
                      onClick={() => {
                        navigate("/blog")
                      }}
                    />
                  )}
                  {isFirst ? (
                    <Icons.ChevronLeft color="darkGrey" />
                  ) : (
                    <ButtonIcon
                      buttonType="icon-text"
                      className=""
                      text=""
                      icon={<Icons.ChevronLeft color="orange" />}
                      onClick={() => {
                        navigate(`${prevPage}`)
                      }}
                    />
                  )}
                </div>
                <div>
                  <p>
                    {pageContext?.currentPage} / {pageContext?.numPages}
                  </p>
                </div>
                <div className="row">
                  {isLast ? (
                    <Icons.ChevronRight color="darkGrey" />
                  ) : (
                    <ButtonIcon
                      buttonType="icon-text"
                      text=""
                      icon={<Icons.ChevronRight color="orange" />}
                      onClick={() => {
                        navigate(`${nextPage}`)
                      }}
                    />
                  )}
                  {isLast ? (
                    <Icons.ChevronDoubleRight color="darkGrey" />
                  ) : (
                    <ButtonIcon
                      buttonType="icon-text"
                      className=""
                      text=""
                      icon={<Icons.ChevronDoubleRight color="orange" />}
                      onClick={() => {
                        navigate(`/blog/${pageContext?.numPages}`)
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location, data }) => {
  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  const schema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: "Bandha Works Blog",
    description:
      "A Bandha Works blogon astanga jóga és jógikus életmód témájában olvashatsz érdekes cikkeket, interjúkat, és a jóga világában történt érdekességeket.",
    url: "https://bandha.works/blog",
    logo: "https://mula.bandha.works/images/bw_logo.png",
  }

  return (
    <Seo
      title="Blog | Bandha Works Jógaiskola"
      description="A Bandha Works blogon astanga jóga és jógikus életmód témájában olvashatsz érdekes cikkeket, interjúkat, és a jóga világában történt érdekességeket."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      fbAppId="162565676946134"
      location={location}
      schemaMarkup={schema}
    />
  )
}

export const blogListAndImageDataQuery = graphql`
  query blogListAndImageDataQuery($skip: Int!, $limit: Int!) {
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
    file(relativePath: { eq: "blog_desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1200)
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
