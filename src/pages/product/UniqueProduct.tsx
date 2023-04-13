import React from 'react'
import HandleActions from 'components/button/HandleActions'
import { features } from 'process'
import { SingleProduct } from 'types/singleProduct'

//COMPONENTS
import Button from 'components/button/Button'

//Styles
import styles from 'pages/product/unique-product.module.scss'

const UniqueProduct = ({
  id,
  slug,
  name,
  productQuantity,
  image,
  category,
  categoryImage,
  price,
  description,
  features,
  new: isNew,
  includes,
  gallery,
  others,
}: SingleProduct) => {
  return (
    <section className={styles.section_product}>
      <div className={styles.product_wrapper}>
        <div className={styles.head}>
          <div className={styles.product_img}>
            <picture>
              <source media='(min-width: 1000px)' srcSet={image.desktop} />
              <source media='(min-width: 750px)' srcSet={image.tablet} />
              <img src={image.mobile} alt={`image of ${slug}`} />
            </picture>
          </div>
          <div className={styles.product_contents}>
            {isNew ? <span className={styles.title}>New product</span> : ''}
            <h1 className={styles.heading}>{name}</h1>
            <p>{description}</p>
            <p className={styles.price}>${price}</p>
            <div className={styles.btns}>
              <div className={styles.btns__crease}>
                <HandleActions className={styles.btn_decrease} btnText='-' />
                <p>{productQuantity}</p>
                <HandleActions className={styles.btn_increase} btnText='+' />
              </div>
              <HandleActions
                className={styles.btn_addToCart}
                btnText='Add to cart'
              />
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.features__heading_wrapper}>
            <h2 className={styles.features__heading}>Features</h2>
            <p className={styles.features__text}>{features}</p>
          </div>
          <div className={styles.features__box}>
            <h2 className={styles.box_heading}>In the box</h2>
            <ul className={styles.lists}>
              {includes.map((include, index) => {
                return (
                  <li key={index} className={styles.list}>
                    <span className={styles.quantity}>{include.quantity}x</span>
                    <p>{include.item}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.gallery__img_wrapper}>
            <picture>
              <source
                media='(min-width: 1000px)'
                srcSet={gallery.first.desktop}
              />
              <source
                media='(min-width: 750px)'
                srcSet={gallery.first.tablet}
              />
              <img
                src={gallery.first.mobile}
                alt={`another image of ${slug}`}
                className={styles.gallery__img}
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media='(min-width: 1000px)'
                srcSet={gallery.second.desktop}
              />
              <source
                media='(min-width: 750px)'
                srcSet={gallery.second.tablet}
              />
              <img
                src={gallery.second.mobile}
                alt={`another image of ${slug}`}
                className={styles.gallery__img}
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media='(min-width: 1000px)'
                srcSet={gallery.third.desktop}
              />
              <source
                media='(min-width: 750px)'
                srcSet={gallery.third.tablet}
              />
              <img
                src={gallery.third.mobile}
                alt={`another image of ${slug}`}
                className={styles.gallery__img}
              />
            </picture>
          </div>
        </div>
        <div className={styles.other_products}>
          <h2 className={styles.other_products__heading}>You may also like</h2>
          <div className={styles.other_products__wrapper}>
            {others.map((other, index) => {
              return (
                <div key={index} className={styles.other_products__content}>
                  <div>
                    <picture>
                      <source
                        media='(min-width: 1000px)'
                        srcSet={other.image.desktop}
                      />
                      <source
                        media='(min-width: 750px)'
                        srcSet={other.image.tablet}
                      />
                      <img
                        src={other.image.mobile}
                        alt={`image of ${slug}`}
                        className={styles.other_img}
                      />
                    </picture>
                  </div>
                  <h3 className={styles.other_products__subheading}>
                    {other.name}
                  </h3>
                  <Button
                    className={styles.btn}
                    link={`/product/${other.slug}`}
                    btnText='See Product'
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniqueProduct
