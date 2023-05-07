import React from 'react'
import { useAppSelector } from 'store/hooks'

//Button components
import { CheckoutButton } from 'components/button/HandleClicks'
import RemoveAllBtn from 'components/button/RemoveAllBtn'

//Utility functions
import { getShortName } from 'utils/getShortName'
import { getCartImg } from 'utils/getCartImg'

import styles from 'components/cart/cart.module.scss'
import { QuantityBtn } from 'components/button/QuantityBtn'

//type Props = {}

const Cart = () => {
  const { totalAmount, totalPrice, cartItems } = useAppSelector(
    (state) => state.cart
  )

  return (
    <aside className={styles.cart}>
      <div className={styles.cart_header}>
        <h1 className={styles.heading}>{`Cart (${totalAmount})`}</h1>
        <RemoveAllBtn className={styles.remove_btn} />
      </div>
      <div className={styles.cart_product__wrapper}>
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
              <div className={styles.cart_btns}>
                <QuantityBtn
                  btnText='-'
                  productId={item.id}
                  increment={false}
                  className={styles.increment}
                />
                <p className={styles.quantity}>{item.productQuantity}</p>
                <QuantityBtn
                  btnText='+'
                  productId={item.id}
                  increment={true}
                  className={styles.increment}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.total_price}>
        <p>Total</p>
        <p>{`$ ${totalPrice.toLocaleString()}`}</p>
      </div>
      <CheckoutButton
        disabled={true}
        className={styles.checkout_btn}
        btnText='Checkout'
      />
    </aside>
  )
}

export default Cart
