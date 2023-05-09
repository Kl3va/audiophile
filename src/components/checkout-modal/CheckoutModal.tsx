import React from 'react'
import { useAppSelector } from 'store/hooks'

//Styling
import styles from 'components/checkout-modal/checkout-modal.module.scss'

//Button component to go back to home page
import { BackToHomeButton } from 'components/button/HandleClicks'

//Utilities
import { getCartImg } from 'utils/getCartImg'
import { getShortName } from 'utils/getShortName'

//Image data
import iconOrderConfirmed from 'assets/starter-code/assets/checkout/icon-order-confirmation.svg'

const CheckoutModal = () => {
  const { cartItems, grandTotal } = useAppSelector((state) => state.cart)
  const item = cartItems[0]

  return (
    <aside className={styles.checkout_modal}>
      <div className={styles.img_wrapper}>
        <img src={iconOrderConfirmed} alt='icon to confirm order' />
      </div>
      <h1 className={styles.checkout_heading}>
        Thank you
        <br />
        for your order
      </h1>
      <p className={styles.checkout_text}>
        You will receive an email confirmation shortly.
      </p>
      <div className={styles.cart_details}>
        <div className={styles.cart_contents}>
          <div className={styles.cart_product}>
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
          <div className={styles.other_items}>
            <p>{`and ${cartItems.length - 1} other item(s)`}</p>
          </div>
        </div>
        <div className={styles.prices_wrapper}>
          <p className={styles.grand_total}>Grand Total</p>
          <p
            className={styles.total_price}
          >{`$ ${grandTotal.toLocaleString()}`}</p>
        </div>
      </div>
      <BackToHomeButton btnText='Back to Home' className={styles.btn} />
    </aside>
  )
}

export default CheckoutModal
