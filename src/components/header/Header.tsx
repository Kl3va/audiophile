import React from 'react'
import styles from 'components/header/header.module.scss'

interface navProp {
  text: string
  navLink: string
}

interface headerProp {
  logo: string
  cartIcon: string
  menu: string
  navLinks: navProp[]
}

const Header = ({ logo, cartIcon, menu, navLinks }: headerProp) => {
  return (
    <header className={styles.header}>
      <div>
        <nav>
          <button>
            <img src={menu} alt='open navigation' />
          </button>
        </nav>
        <div>
          <img src={logo} alt='logo' />
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
          <button>
            <div>
              <img src={cartIcon} alt='add to cart' />
            </div>
            <span>
              <p>1</p>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
