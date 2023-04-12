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
              <div>
                <HandleActions className={''} btnText='-' />
                <p>{productQuantity}</p>
                <HandleActions className={''} btnText='+' />
              </div>
              <HandleActions
                className={styles.btn_addToCart}
                btnText='Add to cart'
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Features</h2>
            <p>{features}</p>
          </div>
          <div>
            <h2>In the box</h2>
            <ul>
              {includes.map((include, index) => {
                return (
                  <li key={index}>
                    <span>{include.quantity}x</span>
                    {include.item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div>
          <div>
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
              />
            </picture>
          </div>
        </div>
        <div>
          <h2>You may also like</h2>
          <div>
            {others.map((other, index) => {
              return (
                <div key={index}>
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
                      <img src={other.image.mobile} alt={`image of ${slug}`} />
                    </picture>
                  </div>
                  <h3>{other.name}</h3>
                  <Button
                    className=''
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
