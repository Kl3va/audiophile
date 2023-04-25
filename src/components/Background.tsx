import React from 'react'
import { useAppSelector } from 'store/hooks'

const Background = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.modal)

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
