import React from 'react'
import styles from 'components/audio-gear/audio-gear.module.scss'

interface Props {
  desktop: string
  tablet: string
  mobile: string
  text: string
}

const AudioGear = ({ desktop, tablet, mobile, text }: Props) => {
  return (
    <section className={styles.section_audioGear}>
      <div className={styles.audioGear}>
        <div>
          <picture>
            <source media='(min-width: 573px)' srcSet={desktop} />
            <source media='(min-width: 375px)' srcSet={tablet} />
            <img src={mobile} alt='best audio gear' />
          </picture>
        </div>
        <div>
          <h2>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default AudioGear
