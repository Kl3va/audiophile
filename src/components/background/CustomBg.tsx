import React from 'react'
import { useAppSelector } from 'store/hooks'

const CustomBg = () => {
  const { isCheckoutModalOpen } = useAppSelector((state) => state.modal)

  return (
    <aside
      className={`${
        isCheckoutModalOpen
          ? 'custom-background show-background'
          : 'custom-background'
      }`}
    ></aside>
  )
}

export default CustomBg
