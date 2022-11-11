import React from "react"
import { Link } from "gatsby"
import { useBlogRoll } from "../hooks/useBlogRollQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../sass/components/_blogroll.scss"

function BlogRoll({ count }) {
  var posts = []
  const postsQueried = useBlogRoll()
  //This hardcopy operation is needed specifically because the component is being used w. different {count} parameters
  //Since the static query runs only once, we query all posts
  //and slice the array of posts on render time
  posts = [...postsQueried]
  if (count !== undefined) {
    posts.length = Math.min(posts.length, count)
  }

  return (
    <div className="row">
      <div className="col">
        {posts &&
          posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const image = getImage(post.frontmatter.thumbnail)
            const author = post.frontmatter.author
            const tags = post.frontmatter.tags
            const { timeToRead } = post
            // const jaki = tags.toString().split(",")
            let jaki = ""
            tags.forEach(myFunk)
            function myFunk(item) {
              jaki += "<p>" + item + "</p>"
            }

            console.log(jaki)

            return (
              <div className="mt-40px mb-40px" key={post.slug}>
                <div className="blog-card">
                  <div className="blog-card-header">
                    <p>{author}</p>
                    <div className="blog-card-header-separator"></div>
                    <p>{post.frontmatter.date}</p>
                  </div>
                  <div className="blog-card-body">
                    {/* <GatsbyImage
                      image={image}
                      className="blog__thumbnail"
                      alt={post.frontmatter.title}
                      aspectratio={4 / 3}
                    /> */}
                    <h3 className="blog-card-title">{title}</h3>
                    <p className="blog-card-text">
                      {post.frontmatter.description}
                    </p>
                  </div>

                  <div className="blog-card-footer">
                    <div className="blog-card-footer-text">
                      <div
                        className="breki"
                        dangerouslySetInnerHTML={{ __html: jaki }}
                      />

                      <p>{timeToRead} perc olvasás</p>
                    </div>
                    <div className="blog-card-footer-button">
                      <Link
                        to={`/blog/${post.slug}`}
                        iscurrent="true"
                        className={""}
                      >
                        Olvasd tovább
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BlogRoll
