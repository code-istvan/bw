import * as React from "react"
import { useWindowSize } from "../hooks/useWindowSize"
import "../sass/components/_progressbar.scss"

const ProgressBar = ({ scroll, articleProperties }) => {
  let currentScroll = Math.abs(scroll),
    { height: windowHeight } = useWindowSize(),
    { offsetTop: articleOffsetTop, offsetHeight: articleHeight } =
      articleProperties,
    currentProgress = Math.round(
      ((currentScroll - articleOffsetTop) / (articleHeight - windowHeight)) *
        100
    )
  if (currentProgress >= 100) currentProgress = 100

  return (
    <div className={`container-fluid ${currentScroll > 2000 ? "hide" : ""}`}>
      <div
        style={{ width: `${currentProgress}vw` }}
        className="progress-line"
      />
    </div>
  )
}

export default ProgressBar
