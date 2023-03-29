import React from 'react'
import styles from 'components/secondary-hero/secondary-hero.module.scss'

interface Props {}

const SecondaryHero = (props: Props) => {
  return (
    <section className={styles.section_hero}>
      <h1 className={styles.secondary_heading}>Section HEro</h1>
    </section>
  )
}

export default SecondaryHero
