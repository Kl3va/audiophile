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
      <section className={styles.secondary_nav}>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>

      <section className={styles.section_features}>
        <div className={styles.features}>
          <div className={styles.speakerzx9}>
            <div className={styles.speakerzx9_wrapper}>
              <picture>
                <source
                  media='(min-width: 1000px)'
                  srcSet={zx9Details.desktop}
                />
                <source media='(min-width: 750px)' srcSet={zx9Details.tablet} />
                <img
                  src={zx9Details.mobile}
                  alt='zx9-speaker'
                  className={styles.speakerzx9_wrapper__img}
                />
              </picture>
            </div>
            <div className={styles.speakerzx9_details}>
              <h2 className={styles.speakerzx9_heading}>{zx9Details.name}</h2>
              <p className={styles.speakerzx9_text}>{zx9Details.text}</p>
              <Button
                className={styles.speakerzx9_btn}
                link={zx9Details.zx9Btn.zx9BtnPath}
                btnText={zx9Details.zx9Btn.zx9BtnText}
              />
            </div>
          </div>

          <div className={styles.speakerzx7}>
            <div className={styles.speakerzx7__wrapper}>
              <h2 className={styles.speakerzx7__heading}>{zx7Details.name}</h2>
              <Button
                className={styles.speakerzx7__btn}
                link={zx7Details.zx7Btn.zx7BtnPath}
                btnText={zx7Details.zx7Btn.zx7BtnText}
              />
            </div>
          </div>

          <div className={styles.yx1_wrapper}>
            <div className={styles.bgyx1}></div>
            <div className={styles.speakeryx1}>
              <div className={styles.speakerzx7__wrapper}>
                <h2 className={styles.speakerzx7__heading}>
                  {yx1Details.name}
                </h2>
                <Button
                  className={styles.speakerzx7__btn}
                  link={yx1Details.yx1Btn.yx1BtnPath}
                  btnText={yx1Details.yx1Btn.yx1BtnText}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudioGear {...audioGearData} />
    </main>
  )
}

export default Home
