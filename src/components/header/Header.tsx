import React from 'react'
import styles from 'components/header/header.module.scss'

interface navProp {
  text: string
  navLink: string
}

interface headerProp {
  logo: {
    img: string
    link: string
  }
  cartIcon: string
  menu: string
  navLinks: navProp[]
}

const Header = ({ logo, cartIcon, menu, navLinks }: headerProp) => {
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
          <ul>
            {navLinks.map(({ text, navLink }, index) => {
              return (
                <li key={index}>
                  <a href={navLink}>{text}</a>
                </li>
              )
            })}
          </ul>
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
