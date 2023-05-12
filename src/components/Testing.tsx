import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import NavSecondary from './nav-secondary/NavSecondary'
import { navSecondaryData } from './nav-secondary/navSecondaryData'
import { controlModal } from 'store/features/modal/modalSlice'

import styles from 'components/header/header.module.scss'

type Props = {}

const Testing = (props: Props) => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen } = useAppSelector((state) => state.modal)

  return (
    <div
      className={`${
        isSidebarOpen
          ? `${styles.sidenav_wrapper} ${styles.show_sidebar}`
          : styles.sidenav_wrapper
      }`}
      onClick={() => dispatch(controlModal(false))}
    >
      <NavSecondary navSecondaryData={navSecondaryData} />
    </div>
  )
}

export default Testing
