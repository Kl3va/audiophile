import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'

import { useForm } from 'hooks/useForm'

//Utility functions
import { getCartImg } from 'utils/getCartImg'
import { getShortName } from 'utils/getShortName'

//Components
import { PaymentButton } from 'components/button/HandleClicks'

//import styles from 'components/summary/summary.module.scss'

import styles from 'components/form/form-submit.module.scss'

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
  const { cartItems, shippingFee, vat, grandTotal, totalAmount } =
    useAppSelector((state) => state.cart)

  const { handleSubmit, values } = useForm()
  //console.log(values)

  return (
    <div className={styles.summary}>
      <h2 className={styles.tertiary_heading}>{heading}</h2>
      <div className={styles.cart_wrapper}>
        {cartItems.length === 0 && (
          <div className={styles.no_product}>
            There are no products in your cart!
          </div>
        )}
        {cartItems.map((item, index) => {
          return (
            <div key={index} className={styles.cart_product}>
              <img
                src={getCartImg(item.id)}
                alt={item.name}
                className={styles.cart_img}
              />
              <div className={styles.cart_items}>
                <p>{getShortName(item.name)}</p>
                <p>{`$ ${item.price.toLocaleString()}`}</p>
              </div>
              <p className={styles.quantity}>{`x${item.productQuantity}`}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.sum_container}>
        <div>
          <p className={styles.sum_text}>{totalText}</p>
          <p
            className={styles.sum_value}
          >{`$ ${totalAmount.toLocaleString()}`}</p>
        </div>
        <div>
          <p className={styles.sum_text}>{shippingText}</p>
          <p className={styles.sum_value}>{`$ ${shippingFee}`}</p>
        </div>
        <div>
          <p className={styles.sum_text}>{vatText}</p>
          <p className={styles.sum_value}>{`$ ${vat.toLocaleString()}`}</p>
        </div>
        <div className={styles.grandtotal_container}>
          <p className={styles.sum_text}>{grandTotalText}</p>
          <p
            className={styles.sum_totalvalue}
          >{`$ ${grandTotal.toLocaleString()}`}</p>
        </div>
      </div>

      <PaymentButton
        btnText={btnPaymentText}
        onClick={handleSubmit}
        className={styles.payment_btn}
      />
    </div>
  )
}

export default Summary
