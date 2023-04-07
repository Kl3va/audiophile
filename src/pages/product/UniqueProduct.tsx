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
  new: boolean,
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
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default UniqueProduct
