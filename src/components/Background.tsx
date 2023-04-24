import React from 'react'
const isSidebarOpen = true
const Background = () => {
  return (
    <aside
      className={`${
        isSidebarOpen
          ? 'navigation-background show-background'
          : 'navigation-background'
      }`}
    ></aside>
  )
}

export default Background
