import HandleActions from 'components/button/HandleActions'
import React from 'react'
import { SingleProduct } from 'types/singleProduct'

//Styles

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
  new: isNew,
  includes,
  gallery,
  others,
}: SingleProduct) => {
  return (
    <section>
      <div>
        <div>
          <div>
            <picture>
              <source media='(min-width: 1000px)' srcSet={image.desktop} />
              <source media='(min-width: 750px)' srcSet={image.tablet} />
              <img src={image.mobile} alt={`image of ${slug}`} />
            </picture>
          </div>
          <div>
            {isNew ? <span>New product</span> : ''}
            <h1>{name}</h1>
            <p>{description}</p>
            <p>${price}</p>
            <div>
              <div>
                <HandleActions className={''} btnText='-' />
                <p>{productQuantity}</p>
                <HandleActions className={''} btnText='+' />
              </div>
              <HandleActions className={''} btnText='Add to cart' />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default UniqueProduct
