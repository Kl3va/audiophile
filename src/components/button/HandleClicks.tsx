import React, { useState } from 'react'

interface PaymentButtonProps {
  btnText: string
  className: CSSModuleClasses[string]
  onClick?: () => void
}

interface CheckoutButtonProps extends PaymentButtonProps {
  disabled: boolean
}

const PaymentButton = ({ btnText, onClick, className }: PaymentButtonProps) => (
  <button className={className} onClick={onClick}>
    {btnText}
  </button>
)

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
}: PaymentButtonProps) => (
  <button className={className} onClick={onClick}>
    {btnText}
  </button>
)

export { PaymentButton, CheckoutButton, BackToHomeButton }
