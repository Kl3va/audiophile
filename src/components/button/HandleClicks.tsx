import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { controlCheckoutPopUp } from 'store/features/modal/modalSlice'
import { removeAllItems } from 'store/features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

interface PaymentButtonProps {
  btnText: string
  className: CSSModuleClasses[string]
  onClick?: () => void
  handleSubmit?: () => void
}

interface CheckoutButtonProps extends PaymentButtonProps {
  disabled: boolean
}

const PaymentButton = ({
  btnText,
  handleSubmit,
  className,
}: PaymentButtonProps) => {
  //const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state) => state.cart)

  const isCartEmpty = cartItems.length === 0

  const handlePopUp = () => {
    handleSubmit!()
    // dispatch(controlCheckoutPopUp(true))
  }

  return (
    <button
      type='submit'
      disabled={isCartEmpty}
      className={className}
      onClick={handlePopUp}
    >
      {btnText}
    </button>
  )
}

const CheckoutButton = ({
  btnText,
  onClick,
  className,
  disabled,
}: CheckoutButtonProps) => (
  <button
    type='submit'
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {btnText}
  </button>
)

const BackToHomeButton = ({
  btnText,
  onClick,
  className,
}: PaymentButtonProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const goToHome = () => {
    dispatch(controlCheckoutPopUp(false))
    dispatch(removeAllItems())
    navigate('/')
  }

  return (
    <button className={className} onClick={goToHome}>
      {btnText}
    </button>
  )
}

export { PaymentButton, CheckoutButton, BackToHomeButton }
