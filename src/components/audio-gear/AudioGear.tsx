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
        <div className={styles.img_wrapper}>
          <picture>
            <source media='(min-width: 1000px)' srcSet={desktop} />
            <source media='(min-width: 400px)' srcSet={tablet} />
            <img
              src={mobile}
              alt='best audio gear'
              className={styles.audio_img}
            />
          </picture>
        </div>
        <div className={styles.audio_description}>
          <h2 className={styles.heading}>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default AudioGear
