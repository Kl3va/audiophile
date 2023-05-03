import React, { useState } from 'react'

interface PaymentButtonProps {
  btnText: string
  className: CSSModuleClasses[string]
  onClick?: () => void
}

const PaymentButton = ({ btnText, onClick, className }: PaymentButtonProps) => (
  <button className={className} onClick={onClick}>
    {btnText}
  </button>
)

export { PaymentButton }
