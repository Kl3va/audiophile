import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'components/header/header.module.scss'

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
  return (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <nav className={styles.open_nav}>
          <div>
            <img src={menu} alt='open navigation' className={styles.close} />
          </div>
          <div className={styles.sidenav_wrapper}>
            <NavSecondary navSecondaryData={navSecondaryData} />
          </div>
        </nav>
        <div className={styles.logo_wrapper}>
          <Link to={logo.link}>
            <img src={logo.img} alt='logo' />
          </Link>
        </div>
        <nav className={styles.links_wrapper}>
          {/* <ul>
            {navLinks.map(({ text, navLink }, index) => {
              return (
                <li key={index}>
                  <a href={navLink}>{text}</a>
                </li>
              )
            })}
          </ul>*/}
          <NavLinks
            navbarLinksData={navbarLinksData}
            flex={styles.header_links}
          />
        </nav>
        <div className={styles.cartIcon_wrapper}>
          <div className={styles.cart}>
            <div>
              <img src={cartIcon} alt='add to cart' />
            </div>
            <span>
              <p>1</p>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
