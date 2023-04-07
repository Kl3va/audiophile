import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'

type Props = {}

const Product = (props: Props) => {
  const { id } = useParams()
  const { products } = useAppSelector((state) => state.products)

  return (
    <div>
      Product-{id} // <span>{products[2].slug}</span>
    </div>
  )
}

export default Product
