import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Product = (props: Props) => {
  const { id } = useParams()

  return <div>Product-{id}</div>
}

export default Product
