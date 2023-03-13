import React from 'react'
import styles from 'pages/home/home.module.scss'
import NavSecondary from 'components/nav-secondary/NavSecondary'
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'

interface homeProps {
  spanText: string
  productName: string
  description: string
  btnHero: {
    btnHeroText: string
    btnHeroPath: string
  }
  zx9Details: {
    desktop: string
    tablet: string
    mobile: string
    name: string
    text: string
    zx9Btn: {
      zx9BtnText: string
      zx9BtnPath: string
    }
  }
  zx7Details: {
    name: string
    zx7Btn: {
      zx7BtnText: string
      zx7BtnPath: string
    }
  }
  yx1Details: {
    name: string
    yx1Btn: {
      yx1BtnText: string
      yx1BtnPath: string
    }
  }
}

const Home = ({
  spanText,
  productName,
  description,
  btnHero,
  zx9Details,
  zx7Details,
  yx1Details,
}: homeProps) => {
  return (
    <main className={styles.main}>
      <section className={styles.sectionHero}>
        <div className='hero'>
          <div className='heroPrimary'>jh</div>
          <div className='heroSecondary'></div>
        </div>
      </section>
      <section>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>
    </main>
  )
}

export default Home
