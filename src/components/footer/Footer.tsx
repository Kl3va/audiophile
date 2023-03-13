import { navbarLinksData } from 'components/nav-links/navbarLinksData'
import NavLinks from 'components/nav-links/NavLinks'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <NavLinks navbarLinksData={navbarLinksData} />
    </div>
  )
}

export default Footer
