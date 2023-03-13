import React from 'react'

interface navLinksProps {
  navbarLinksData: navLink[]
}

interface navLink {
  text: string
  navLink: string
}

const NavLinks = ({ navbarLinksData }: navLinksProps) => {
  return (
    <ul>
      {navbarLinksData.map(({ text, navLink }, index) => {
        return (
          <li key={index}>
            <a href={navLink}>{text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
