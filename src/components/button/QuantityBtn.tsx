import React from 'react'
import { useAppSelector } from 'store/hooks'

interface QuantityBtnProps {
  btnText: string
  productId: number
  increment?: boolean
  className: CSSModuleClasses[string]
}

const QuantityBtn = ({
  btnText,
  productId,
  increment,
  className,
}: QuantityBtnProps) => {
  return <button className={className}>{btnText}</button>
}

const CustomReduceBtn = ({
  btnText,
  productId,
  className,
}: QuantityBtnProps) => {
  return <button className={className}>{btnText}</button>
}

const AddToCartBtn = ({ btnText, productId, className }: QuantityBtnProps) => {
  return <button className={className}>{btnText}</button>
}

export { QuantityBtn, CustomReduceBtn, AddToCartBtn }
