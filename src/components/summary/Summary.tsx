import React from 'react'
import { useAppSelector } from 'store/hooks'
import { getCartImg } from 'utils/getCartImg'

interface SummaryProps {
  heading: string
  totalText: string
  shippingText: string
  vatText: string
  grandTotalText: string
  btnPaymentText: string
}

const Summary = ({
  heading,
  totalText,
  shippingText,
  vatText,
  grandTotalText,
  btnPaymentText,
}: SummaryProps) => {
  const { cartItems } = useAppSelector((state) => state.cart)

  return (
    <div>
      <h2>{heading}</h2>
      <div>
        <div>
          {cartItems.map((item, index) => {
            return (
              <div key={index}>
                <img src={getCartImg(item.id)} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{`$ ${item.price.toLocaleString()}`}</p>
                </div>
                <p>{`x${item.productQuantity}`}</p>
              </div>
            )
          })}
        </div>
        <div>
          <div>
            <p>{totalText}</p>
            <p>0</p>
          </div>
          <div>
            <p>{shippingText}</p>
            <p>0</p>
          </div>
          <div>
            <p>{vatText}</p>
            <p>0</p>
          </div>
          <div>
            <p>{grandTotalText}</p>
            <p>0</p>
          </div>
        </div>
        <button>{btnPaymentText}</button>
      </div>
    </div>
  )
}

export default Summary
