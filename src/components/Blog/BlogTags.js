import React from "react"
import { useTagsRoll } from "../../hooks/useTagsRollQuery"
import { CustomLink } from "../CustomLink"
import slugify from "../../utils/slugifyes6"
import "../../sass/components/_blogtags.scss"

function BlogTags() {
  const tags = useTagsRoll()

  return (
    <div className="row">
      <div className="col blogtags tag-button">
        {tags?.map(tag => {
          return (
            <p key={tag}>
              <CustomLink
                link={`/tags/${slugify(tag)}`}
                title={tag}
                className="tag-button-hover"
              />
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default BlogTags
