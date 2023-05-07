import React from 'react'
import { useAppSelector } from 'store/hooks'

//Styling
import styles from 'components/checkout-modal/checkout-modal.module.scss'

//Utilities
import { getCartImg } from 'utils/getCartImg'
import { getShortName } from 'utils/getShortName'

//Image data
import iconOrderConfirmed from 'assets/starter-code/assets/checkout/icon-order-confirmation.svg'

const CheckoutModal = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart)
  const item = cartItems[0]

  return (
    <aside className={styles.checkout_modal}>
      <div>
        <img src={iconOrderConfirmed} alt='icon to confirm order' />
      </div>
      <h1>
        Thank you
        <br />
        for your order
      </h1>
      <p>You will receive an email confirmation shortly.</p>
      <div>
        <div>
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
          <div>
            <p>{`and ${cartItems.length - 1} other item(s)`}</p>
          </div>
        </div>
        <div>
          <p>Grand Total</p>
          <p>{totalPrice}</p>
        </div>
      </div>
      <button>jshhj</button>
    </aside>
  )
}

export default CheckoutModal
