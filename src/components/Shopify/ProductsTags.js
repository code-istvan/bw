import React from "react"
import { CustomLink } from "../CustomLink"
import { useShopify } from "../../hooks/useShopifyQuery"
import slugify from "../../utils/slugifyes6"
// import "../../sass/components/_blogtags.scss"

function ProductsTags() {
  const products = useShopify()
  const productTags = new Set()
  products.forEach(product =>
    product.node.tags.forEach(tag => {
      productTags.add(tag)
    })
  )

  console.log(productTags)

  return (
    <div className="row">
      <div className="col blogtags tag-button">
        {[...productTags]?.map(tag => (
          <p key={tag}>
            <CustomLink link={`/tags/${slugify(tag)}`} title={tag} />
          </p>
        ))}
      </div>
    </div>
  )
}

export default ProductsTags

// {
//   tags?.map(tag => {
//     return (
//       <p key={tag} className="tag-button-hover">
//         <CustomLink link={`/tags/${slugify(tag)}`} title={tag} />
//       </p>
//     )
//   })
// }
