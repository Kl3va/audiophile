import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'

//SINGLE PRODUCT COMPONENT
import UniqueProduct from 'pages/product/UniqueProduct'

//Get single product func
import { getSingleProduct } from 'utils/getProduct'
import { SingleProduct } from 'types/singleProduct'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products } = useAppSelector((state) => state.products)

  const product = getSingleProduct(products, id)

  console.log(product)

  return (
    <main>
      <section>
        <div>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </section>
      <UniqueProduct {...product} />
    </main>
  )
}

export default Product
