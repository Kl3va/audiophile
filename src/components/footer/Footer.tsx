import React from 'react'
import { navbarLinksData } from 'components/nav-links/navbarLinksData'
import { Link } from 'react-router-dom'
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
        <div className={styles.footer_aside}>
          <div className={styles.footer_aside__bg}></div>
        </div>
        <div className={styles.footer__navigation}>
          <div>
            <Link to='/'>
              <img src={logo.img} alt='logo' />
            </Link>
          </div>

          <nav className={styles.nav}>
            <NavLinks
              navbarLinksData={navbarLinksData}
              flex={styles.footer_links}
            />
          </nav>
        </div>
        <div className={styles.footer__description}>
          <div>
            <p className={styles.text}>{text}</p>
          </div>

          <p className={styles.copyright}>{copyright}</p>

          <div className={styles.social_icons}>
            {socialIcons.map((icon, index) => {
              return <img src={icon} key={index} alt='social icon' />
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
