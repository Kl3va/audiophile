import React from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import {
  controlCartPopUp,
  controlCheckoutPopUp,
  controlModal,
} from 'store/features/modal/modalSlice'

const Background = () => {
  const { isSidebarOpen, isCartOpen, isCheckoutModalOpen } = useAppSelector(
    (state) => state.modal
  )

  const dispatch = useAppDispatch()

  const handlePopUps = () => {
    dispatch(controlModal(false))
    dispatch(controlCartPopUp(false))
    dispatch(controlCheckoutPopUp(false))
  }

  return (
    <aside
      onClick={handlePopUps}
      className={`${
        isSidebarOpen || isCartOpen || isCheckoutModalOpen
          ? 'navigation-background show-background'
          : 'navigation-background'
      }`}
    ></aside>
  )
}

export default Background
