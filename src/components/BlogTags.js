import React from "react"
import { useTagsRoll } from "../hooks/useTagsRoll"
import "../sass/components/_blogtags.scss"

function BlogTags() {
  const tags = useTagsRoll()

  return (
    <div className="row">
      <div className="col blogtags tag-button">
        {tags?.map(tag => {
          return <p>{tag}</p>
        })}
      </div>
    </div>
  )
}

export default BlogTags

{
  /* <div className="blog-card-footer-text tag-button">
{post.frontmatter.tags.map(tag => {
  return (
    <p key={tag}>
      <Link to={`/tags/${tag}`}>{tag}</Link>
    </p>
  )
})}
</div> */
}
