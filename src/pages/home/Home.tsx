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
            <span className={styles.spantext}>{spanText}</span>
            <h1 className={styles.heading}>{productName}</h1>
            <p className={styles.herotext}>{description}</p>
            <Button
              className={styles.heroBtn}
              btnText={btnHero.btnHeroText}
              link={btnHero.btnHeroPath}
            />
          </div>
          <div className={styles.heroSecondary}></div>
        </div>
      </section>
      <section className={styles.secondarynav}>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>

      <section>
        <div className={styles.features}>
          <div>
            <div>
              <picture>
                <source
                  media='(min-width: 573px)'
                  srcSet={zx9Details.desktop}
                />
                <source media='(min-width: 375px)' srcSet={zx9Details.tablet} />
                <img src={zx9Details.mobile} alt='zx9-speaker' />
              </picture>
            </div>
            <div>
              <h2>{zx9Details.name}</h2>
              <p>{zx9Details.text}</p>
              <Button
                className={styles.test}
                link={zx9Details.zx9Btn.zx9BtnPath}
                btnText={zx9Details.zx9Btn.zx9BtnText}
              />
            </div>
          </div>
          <div>
            <div>
              <h2>{zx7Details.name}</h2>
              <Button
                className={styles.test}
                link={zx7Details.zx7Btn.zx7BtnPath}
                btnText={zx7Details.zx7Btn.zx7BtnText}
              />
            </div>
          </div>
          <div>YX1 image </div>
          <div>
            <div>
              <h2>{yx1Details.name}</h2>
              <Button
                className={styles.test}
                link={yx1Details.yx1Btn.yx1BtnPath}
                btnText={yx1Details.yx1Btn.yx1BtnText}
              />
            </div>
          </div>
        </div>
      </section>

      <AudioGear {...audioGearData} />
    </main>
  )
}

export default Home
