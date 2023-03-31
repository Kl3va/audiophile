import React from 'react'
//INTERFACE
import { productCategory } from 'types/productCategory'

//COMPONENTS
import Button from 'components/button/Button'

//STYLES
import styles from 'components/category/category.module.scss'

const Category = ({
  productImg,
  title,
  heading,
  description,
  btn,
}: productCategory) => {
  return (
    <div className={styles.category}>
      <div className={styles.img_wrapper}>
        <picture>
          <source media='(min-width: 1000px)' srcSet={productImg.desktop} />
          <source media='(min-width: 750px)' srcSet={productImg.tablet} />
          <img
            src={productImg.mobile}
            alt={productImg.alt}
            className={styles.product_category__img}
          />
        </picture>
      </div>
      <div className={styles.product_content}>
        <span className={styles.title}>{title}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        <Button
          className={styles.btn}
          link={btn.btnPath}
          btnText={btn.btnText}
        />
      </div>
    </div>
  )
}

export default Category
