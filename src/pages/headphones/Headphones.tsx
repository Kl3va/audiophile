import React from 'react'
//COMPONENTS
import SecondaryHero from 'components/secondary-hero/SecondaryHero'
import NavSecondary from 'components/nav-secondary/NavSecondary'
import AudioGear from 'components/audio-gear/AudioGear'
import Button from 'components/button/Button'

//STYLES
import styles from 'pages/headphones/headphones.module.scss'

//DATA
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'
import { audioGearData } from 'components/audio-gear/audioGearData'

//TYPES
import { productCategory } from 'types/productCategory'
import Category from 'components/category/Category'

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
            
            return (
              <Category {...headphone} key={index}/>
              
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
