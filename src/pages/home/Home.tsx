import React from 'react'
import styles from 'pages/home/home.module.scss'
import NavSecondary from 'components/nav-secondary/NavSecondary'
import AudioGear from 'components/audio-gear/AudioGear'

//Data
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'
import { audioGearData } from 'components/audio-gear/audioGearData'
import Button from 'components/button/Button'

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
        <div className={styles.hero}>
          <div className={styles.heroPrimary}>
            <span>{spanText}</span>
            <h1>{productName}</h1>
            <p>{description}</p>
            <Button
              className={styles.test}
              btnText={btnHero.btnHeroText}
              link={btnHero.btnHeroPath}
            />
          </div>
          <div className={styles.heroSecondary}></div>
        </div>
      </section>
      <section>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>

      <AudioGear {...audioGearData} />
    </main>
  )
}

export default Home
