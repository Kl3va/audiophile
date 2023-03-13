import React from 'react'
import styles from 'components/header/header.module.scss'

//Navbar links component and props
import NavLinks from 'components/nav-links/NavLinks'
import { navbarLinksData } from 'components/nav-links/navbarLinksData'

interface headerProp {
  logo: {
    img: string
    link: string
  }
  cartIcon: string
  menu: string
}

const Header = ({ logo, cartIcon, menu }: headerProp) => {
  return (
    <header className={styles.header}>
      <div>
        <nav>
          <div>
            <a href=''></a>
            <img src={menu} alt='open navigation' />
          </div>
        </nav>
        <div>
          <a href={logo.link}>
            <img src={logo.img} alt='logo' />
          </a>
        </div>
        <nav>
          {/* <ul>
            {navLinks.map(({ text, navLink }, index) => {
              return (
                <li key={index}>
                  <a href={navLink}>{text}</a>
                </li>
              )
            })}
          </ul>*/}
          <NavLinks navbarLinksData={navbarLinksData} />
        </nav>
        <div>
          <div>
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
