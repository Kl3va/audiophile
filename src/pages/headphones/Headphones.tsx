import React from 'react'
//COMPONENTS
import SecondaryHero from 'components/secondary-hero/SecondaryHero'
import NavSecondary from 'components/nav-secondary/NavSecondary'
import AudioGear from 'components/audio-gear/AudioGear'

//STYLES
import styles from 'pages/headphones/headphones.module.scss'

//DATA
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'
import { audioGearData } from 'components/audio-gear/audioGearData'

//TYPES
import { productCategory } from 'types/productCategory'

interface HeadphonesProps {
  headphonesData: productCategory[]
}

const Headphones = ({ headphonesData }: HeadphonesProps) => {
  return (
    <main>
      <SecondaryHero heading='Headphones' />
      <section className={styles.section_category}>
        <div className={styles.category_wrapper}>
          {headphonesData.map((headphone, index) => {
            const { productImg, title, heading, description, btn } = headphone
            return (
              <div className={styles.category}>
                <div className={styles.img_wrapper}>
                  <picture>
                    <source
                      media='(min-width: 1000px)'
                      srcSet={productImg.desktop}
                    />
                    <source
                      media='(min-width: 750px)'
                      srcSet={productImg.tablet}
                    />
                    <img
                      src={productImg.mobile}
                      alt='zx9-speaker'
                      className={styles.product_category__img}
                    />
                  </picture>
                </div>
                <div className={styles.product_content}></div>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>
      <AudioGear {...audioGearData} />
    </main>
  )
}

export default Headphones
