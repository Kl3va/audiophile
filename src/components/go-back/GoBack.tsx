import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from 'components/go-back/go-back.module.scss'

const GoBack = () => {
  const navigate = useNavigate()
  return (
    <section className={styles.section_back}>
      <div>
        <button className={styles.go_back} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </section>
  )
}

export default GoBack
