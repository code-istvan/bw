import React from "react"
import { useTagsRoll } from "../hooks/useTagsRollQuery"
import "../sass/components/_blogtags.scss"

function BlogTags() {
  const tags = useTagsRoll()

  return (
    <div className="row">
      <div className="col blogtags tag-button">
        {tags?.map(tag => {
          return <p key={tag}>{tag}</p>
        })}
      </div>
    </div>
  )
}

export default BlogTags
