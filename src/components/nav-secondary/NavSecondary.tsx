import React from 'react'
import styles from 'components/nav-secondary/nav-secondary.module.scss'

export interface Props {
  navSecondaryData: navProps[]
}

export interface navProps {
  productImg: string
  category: string
  text: string
  iconRight: string
  link: string
}

const NavSecondary = ({ navSecondaryData }: Props) => {
  return (
    <div className={styles.sidenav}>
      {navSecondaryData.map((product, index) => {
        const { productImg, category, text, iconRight, link } = product
        return (
          <div className={styles.wrapper} key={index}>
            <div className={styles.imgWrapper}>
              <img src={productImg} alt='product' className={styles.img} />
            </div>
            <h2 className={styles.heading}>{category}</h2>
            <div className={styles.linkwrapper}>
              <a href={link}>
                {text}
                <span className={styles.iconwrapper}>
                  <img src={iconRight} alt='icon-arrow-right' />
                </span>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NavSecondary
