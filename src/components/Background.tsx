import React from 'react'
import { useAppSelector } from 'store/hooks'

const Background = () => {
  const { isSidebarOpen, isCartOpen } = useAppSelector((state) => state.modal)

  return (
    <aside
      className={`${
        isSidebarOpen || isCartOpen
          ? 'navigation-background show-background'
          : 'navigation-background'
      }`}
    ></aside>
  )
}

export default Background
