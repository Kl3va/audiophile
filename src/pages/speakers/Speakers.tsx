import React from 'react'
//COMPONENTS
import SecondaryHero from 'components/secondary-hero/SecondaryHero'
import NavSecondary from 'components/nav-secondary/NavSecondary'
import AudioGear from 'components/audio-gear/AudioGear'


//REUSABLE STYLES FROM HEADPHONES PAGE
import styles from 'pages/headphones/headphones.module.scss'

//DATA
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'
import { audioGearData } from 'components/audio-gear/audioGearData'

//TYPES
import { productCategory } from 'types/productCategory'
import Category from 'components/category/Category'

interface SpeakersProps {
  speakersData: productCategory[]
}

const Speakers = ({ speakersData }: SpeakersProps) => {
  return (
    <main>
      <SecondaryHero heading='Speakers' />
      <section className={styles.section_category}>
        <div className={styles.category_wrapper}>
          {speakersData.map((speaker, index) => {
            return <Category {...speaker} key={index} />
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

export default Speakers
