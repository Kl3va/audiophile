import React from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import {
  controlCartPopUp,
  controlCheckoutPopUp,
  controlModal,
} from 'store/features/modal/modalSlice'

//Style
import styles from 'components/background/background.module.scss'

const Background = () => {
  const { isSidebarOpen, isCartOpen } = useAppSelector(
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
        isSidebarOpen || isCartOpen
          ? `${styles.navigation_background} show-background`
          : `${styles.navigation_background}`
      }`}
    ></aside>
  )
}

export default Background
