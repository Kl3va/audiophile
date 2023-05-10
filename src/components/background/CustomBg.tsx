import React from 'react'
import { useAppSelector } from 'store/hooks'
import styles from 'components/background/background.module.scss'

const CustomBg = () => {
  const { isCheckoutModalOpen } = useAppSelector((state) => state.modal)

  return (
    <aside
      className={`${
        isCheckoutModalOpen
          ? `${styles.custom_background} show-background`
          : `${styles.custom_background}`
      }`}
    ></aside>
  )
}

export default CustomBg
