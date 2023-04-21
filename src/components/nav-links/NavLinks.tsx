import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from 'components/nav-links/navbarLinks.module.scss'

interface navLinksProps {
  navbarLinksData: navLink[]
  flex: CSSModuleClasses[string]
}

interface navLink {
  text: string
  navLink: string
}

const NavLinks = ({ navbarLinksData, flex }: navLinksProps) => {
  const { pathname } = useLocation()

  return (
    <ul className={flex}>
      {navbarLinksData.map(({ text, navLink }, index) => {
        const isActive = pathname === navLink
        return (
          <li
            key={index}
            className={`${styles.link} ${isActive ? styles.active : ''}`}
          >
            <Link to={navLink}>{text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
