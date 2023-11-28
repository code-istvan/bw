import * as React from "react"
import Seo from "../components/seo"

export default function Developmentpage() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-2">Development-page</h1>

        <p>I use Gatsby, Netlify CMS and Netlify</p>
        <p className="mb-2">
          GitHub repo:{" "}
          <a href="https://github.com/code-istvan/bw">
            https://github.com/code-istvan/bw
          </a>
          .
        </p>

        <h3>Task1: Create TAG page</h3>
        <br />
        <p>
          The linked tags work within the blog post. This is my blog page:{" "}
          <a href="https://bandha.works/blog">https://bandha.works/blog</a>.
        </p>
        <p>
          What I'd like your help me to write the code in gatsby-node.js to
          render the page of the posts associated with the tags. Unfortunately,
          I haven't managed to do this yet.
        </p>
        <p>This is my tags.js code:</p>
        <a href="https://codepen.io/santosa8/pen/ExRQvdx?editors=0010">
          https://codepen.io/santosa8/pen/ExRQvdx?editors=0010
        </a>
        <p>This is my gatsby-node.js code:</p>
        <a
          className="mb-2"
          href="https://codepen.io/santosa8/pen/XWYZZVK?editors=0010"
        >
          https://codepen.io/santosa8/pen/XWYZZVK?editors=0010
        </a>
        <h3>Task2: Blog roll</h3>
        <p>
          2.1 I want to create a blog roll component that I can use elsewhere.
        </p>
        <p>
          2.2 I want to create a blog roll page, that render all the tags on one
          page.
        </p>
        <p>This is my blogtags.js code:</p>
        <a href="https://codepen.io/santosa8/pen/YzveaVg?editors=0010">
          https://codepen.io/santosa8/pen/YzveaVg?editors=0010
        </a>
      </div>
    </div>
  )
}

export const Head = ({ location }) => (
  <Seo title="Developer page" location={location} />
)
