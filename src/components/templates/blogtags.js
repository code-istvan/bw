import * as React from "react"
import { Link } from "gatsby"

const BlogTags = ({ pageContext }) => {
  const { tags } = pageContext

  if (tags) {
    return (
      <div className="row">
        <div className="col">
          <ul>
            {tags.map(tag => {
              return (
                <li>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default BlogTags
