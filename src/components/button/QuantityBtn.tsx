import React from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'

//Actions
import {
  addToCart,
  customDecreaseQuantity,
  decreaseQuantity,
  increaseQuantity,
} from 'store/features/cart/cartSlice'

//Toast package
import { toast } from 'react-toastify'
import { SingleProduct } from 'types/singleProduct'

interface QuantityBtnProps {
  btnText: string
  productId: number
  increment?: boolean
  className: CSSModuleClasses[string]
}

//Dispatch actions

const QuantityBtn = ({
  btnText,
  productId,
  increment,
  className,
}: QuantityBtnProps) => {
  const dispatch = useAppDispatch()

  const handleProductQuanity = () => {
    if (increment) {
      dispatch(increaseQuantity(productId))
    } else {
      dispatch(decreaseQuantity(productId))
    }
  }

  return (
    <button onClick={handleProductQuanity} className={className}>
      {btnText}
    </button>
  )
}

const CustomReduceBtn = ({
  btnText,
  productId,
  className,
}: QuantityBtnProps) => {
  const dispatch = useAppDispatch()

  const handleCustomDecrease = () => {
    dispatch(customDecreaseQuantity(productId))
  }

  return (
    <button onClick={handleCustomDecrease} className={className}>
      {btnText}
    </button>
  )
}

const AddToCartBtn = ({ btnText, productId, className }: QuantityBtnProps) => {
  const { products } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const handleCartItems = () => {
    const singleProduct = products.find((product) => {
      return product.id === productId
    })
    //console.log(productId)
    if (!singleProduct) return

    dispatch(addToCart(singleProduct))
  }

  return (
    <button onClick={handleCartItems} className={className}>
      {btnText}
    </button>
  )
}

export { QuantityBtn, CustomReduceBtn, AddToCartBtn }
