import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Link } from 'react-router-dom'
import styles from 'components/header/header.module.scss'

//MODAL SLICE ACTIONS
import {
  controlModal,
  controlCartPopUp,
  controlCheckoutPopUp,
} from 'store/features/modal/modalSlice'

//Navbar links component and props
import NavLinks from 'components/nav-links/NavLinks'
import { navbarLinksData } from 'components/nav-links/navbarLinksData'

import NavSecondary from 'components/nav-secondary/NavSecondary'
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'

interface headerProp {
  logo: {
    img: string
    link: string
  }
  cartIcon: string
  close: string
  menu: string
}

const Header = ({ logo, cartIcon, menu, close }: headerProp) => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen, isCartOpen } = useAppSelector((state) => state.modal)
  const { totalProducts } = useAppSelector((state) => state.cart)

  const handleCartPopUp = () => {
    dispatch(controlModal(false))
    dispatch(controlCartPopUp(!isCartOpen))
    dispatch(controlCheckoutPopUp(false))
  }

  const handleAllPopUps = () => {
    dispatch(controlCartPopUp(false))
    dispatch(controlCheckoutPopUp(false))
  }

  return (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <nav className={styles.open_nav} onClick={handleAllPopUps}>
          <div>
            {isSidebarOpen ? (
              <img
                src={close}
                alt='open navigation'
                className={styles.close}
                onClick={() => dispatch(controlModal(false))}
              />
            ) : (
              <img
                src={menu}
                alt='open navigation'
                className={styles.open}
                onClick={() => dispatch(controlModal(true))}
              />
            )}
          </div>

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
        </nav>
        <div className={styles.logo_wrapper}>
          <Link to={logo.link}>
            <img src={logo.img} alt='logo' />
          </Link>
        </div>
        <nav className={styles.links_wrapper}>
          <NavLinks
            navbarLinksData={navbarLinksData}
            flex={styles.header_links}
          />
        </nav>
        <div className={styles.cartIcon_wrapper}>
          <div className={styles.cart} onClick={handleCartPopUp}>
            <div>
              <img
                src={cartIcon}
                alt='add to cart'
                className={styles.cartt_icon}
              />
            </div>
            {totalProducts >= 1 && <span>{totalProducts}</span>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
