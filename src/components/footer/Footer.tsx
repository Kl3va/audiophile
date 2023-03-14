import { navbarLinksData } from 'components/nav-links/navbarLinksData'
import React from 'react'
import NavLinks from 'components/nav-links/NavLinks'
import styles from 'components/footer/footer.module.scss'

interface footerProps {
  logo: {
    img: string
    link: string
  }
  text: string
  copyright: string
  socialIcons: string[]
}

const Footer = ({ logo, text, copyright, socialIcons }: footerProps) => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footer}>
        <div>
          <div>h</div>
        </div>
        <div>
          <div>
            <a href='/'>
              <img src={logo.img} alt='logo' />
            </a>
          </div>
          <div>
            <nav>
              <NavLinks navbarLinksData={navbarLinksData} />
            </nav>
          </div>
        </div>
        <div>
          <div>
            <p>{text}</p>
          </div>
          <div>
            <p>{copyright}</p>
          </div>
          <div>
            {socialIcons.map((icon, index) => {
              return <img src={icon} alt='social icon' />
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
