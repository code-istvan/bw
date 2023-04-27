import { useState, useEffect } from "react"

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("sm")

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < 320) {
        setBreakpoint("xs")
      } else if (width >= 320 && width < 576) {
        setBreakpoint("sm")
      } else if (width >= 576 && width < 768) {
        setBreakpoint("md")
      } else if (width >= 768 && width < 992) {
        setBreakpoint("lg")
      } else if (width >= 992 && width < 1200) {
        setBreakpoint("xl")
      } else {
        setBreakpoint("xxl")
      }
    }

    updateBreakpoint()

    window.addEventListener("resize", updateBreakpoint)

    return () => {
      window.removeEventListener("resize", updateBreakpoint)
    }
  }, [])

  return {
    breakpoint,
  }
}

export default useBreakpoint
