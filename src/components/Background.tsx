import React from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { controlCartPopUp, controlModal } from 'store/features/modal/modalSlice'

const Background = () => {
  const { isSidebarOpen, isCartOpen } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  const handlePopUps = () => {
    dispatch(controlModal(false))
    dispatch(controlCartPopUp(false))
  }

  return (
    <aside
      onClick={handlePopUps}
      className={`${
        isSidebarOpen || isCartOpen
          ? 'navigation-background show-background'
          : 'navigation-background'
      }`}
    ></aside>
  )
}

export default Background
