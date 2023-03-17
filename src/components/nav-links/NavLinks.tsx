import React from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <ul className={flex}>
      {navbarLinksData.map(({ text, navLink }, index) => {
        return (
          <li key={index} className={styles.link}>
            <Link to={navLink}>{text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
