import { useState, useEffect } from "react"

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("sm")

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < 576) {
        setBreakpoint("xs")
      } else if (width >= 576 && width < 768) {
        setBreakpoint("sm")
      } else if (width >= 768 && width < 992) {
        setBreakpoint("md")
      } else if (width >= 992 && width < 1200) {
        setBreakpoint("lg")
      } else {
        setBreakpoint("xl")
      }
    }

    updateBreakpoint()

    window.addEventListener("resize", updateBreakpoint)

    return () => {
      window.removeEventListener("resize", updateBreakpoint)
    }
  }, [])

  const breakpoints = {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1440px",
  }

  return {
    breakpoint,
    breakpoints,
  }
}

export default useBreakpoint
