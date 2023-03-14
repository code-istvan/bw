import * as React from "react"
import SearchBar from "../SearchBar"
import { Link } from "gatsby"
import BlogTags from "./BlogTags"
import Icons from "../Icons/Icons"
import "../../sass/components/_blogSidebar.scss"

const BlogSidebar = () => {
  const mostPopularPosts = [
    {
      link: "/blog/az-astanga-vinyasza-joga-nem-hatha-joga",
      title: "Az astanga vinyásza jóga nem hatha jóga",
    },
    { link: "/blog/a-kombucha-tea", title: "A kombucha tea" },
  ]

  return (
    <div>
      <SearchBar id="" type="text" name="serach" placeholder="Keresés" />
      <h4>CIMKÉK</h4>
      <BlogTags />
      <div>
        <h4>LEGKEDVELTEBB BEJEGZÉSEK</h4>
        <ul className="list-style-remove most-popular-ul">
          {mostPopularPosts.map(({ title, link }) => (
            <li key={title}>
              <div className="most-popular-posts">
                <div>
                  <Icons.ChevronRight />
                </div>

                <p>
                  <Link
                    className="clr-shades-white link-decoration-remove"
                    to={link}
                  >
                    {title}
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogSidebar
