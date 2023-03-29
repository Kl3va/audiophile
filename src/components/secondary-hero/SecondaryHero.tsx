import React from 'react'
import styles from 'components/secondary-hero/secondary-hero.module.scss'

interface Props {
  heading: string
}

const SecondaryHero = ({ heading }: Props) => {
  return (
    <section className={styles.section_hero}>
      <h1 className={styles.secondary_heading}>{heading}</h1>
    </section>
  )
}

export default SecondaryHero
