import React from "react"
import { Link } from "gatsby"
// import "../sass/components/card-hover.scss"
import "../sass/components/_blog.scss"
// import "../sass/components/card-hover.scss"
import { useBlogRoll } from "../hooks/useBlogRollQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { node } from "prop-types"

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
      {posts &&
        posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.thumbnail)
          const { timeToRead } = node

          return (
            <div className="col-md-6 col-lg-4">
              <div className="card card-hover" key={post.slug}>
                <GatsbyImage
                  image={image}
                  className="blog__thumbnail"
                  alt={post.frontmatter.title}
                  aspectratio={4 / 3}
                />
                <div className="card-body">
                  <h5 className="card-title clr-primary-black">{title}</h5>
                  <p className="card-text clr-primary-black">
                    {post.frontmatter.date}
                  </p>
                  <p className="card-text clr-primary-black">
                    &bull; {timeToRead}
                  </p>
                  <p className="card-text clr-primary-black">
                    {post.frontmatter.author}
                  </p>
                  <p className="card-text clr-primary-black">
                    {post.frontmatter.description}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    iscurrent="true"
                    className={"btn btn-primary"}
                  >
                    Olvasd tovább
                  </Link>
                </div>
              </div>
              <br />
            </div>
          )
        })}
    </div>
  )
}

export default BlogRoll
