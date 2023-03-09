import * as React from "react"
import SearchBar from "../SearchBar"
import BlogTags from "./BlogTags"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

const BlogSidebar = () => {
  return (
    <div>
      <SearchBar id="" type="text" name="serach" placeholder="Keresés" />
      <h4>CIMKÉK</h4>
      <BlogTags />
      <h4>LEGKEDVELTEBB BEJEGZÉSEK</h4>
    </div>
  )
}

export default BlogSidebar
