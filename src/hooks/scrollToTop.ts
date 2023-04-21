import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
  // Get's the path from the useLocation hook
  const { pathname } = useLocation()

  // Automatically scrolls to top of the page whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
