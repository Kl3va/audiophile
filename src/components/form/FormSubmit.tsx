import React from 'react'
import { formDataProps } from 'types/formDataTypes'
import { Field } from 'formik'
import { useAppSelector } from 'store/hooks'

//Form hooks
import { useForm } from 'hooks/useForm'

//Styles
import styles from 'components/form/form-submit.module.scss'

//Utility functions
import { getCartImg } from 'utils/getCartImg'
import { getShortName } from 'utils/getShortName'

//Components
import { PaymentButton } from 'components/button/HandleClicks'

const FormSubmit = ({
  heading,
  billingInfo,
  shippingInfo,
  paymentInfo,
  tertiaryHeading,
  totalText,
  shippingText,
  vatText,
  grandTotalText,
  btnPaymentText,
}: formDataProps) => {
  //Form handlers
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useForm()

  const { cartItems, shippingFee, vat, grandTotal, totalAmount } =
    useAppSelector((state) => state.cart)

  return (
    <form onSubmit={handleSubmit} className={styles.checkout}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.input_main}>
          <h2 className={styles.secondary_heading}>{billingInfo.heading}</h2>
          <div className={styles.form_container}>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={billingInfo.nameInfo.inputName}>
                  {billingInfo.nameInfo.label}
                </label>
                {touched.name && errors.name ? (
                  <p className={styles.error_message}>{errors.name}</p>
                ) : null}
              </div>
              <input
                type='text'
                id={billingInfo.nameInfo.inputName}
                name={billingInfo.nameInfo.inputName}
                placeholder={billingInfo.nameInfo.placeholder}
                className={`${
                  touched.name && errors.name
                    ? `${styles.input_text} ${styles.error}`
                    : styles.input_text
                }`}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={billingInfo.emailInfo.inputName}>
                  {billingInfo.emailInfo.label}
                </label>
                {touched.email && errors.email && (
                  <p className={styles.error_message}>{errors.email}</p>
                )}
              </div>
              <input
                type='email'
                id={billingInfo.emailInfo.inputName}
                name={billingInfo.emailInfo.inputName}
                placeholder={billingInfo.emailInfo.placeholder}
                className={`${
                  touched.email && errors.email
                    ? `${styles.input_email} ${styles.error}`
                    : styles.input_email
                }`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={billingInfo.numberInfo.inputName}>
                  {billingInfo.numberInfo.label}
                </label>
                {touched.phone && errors.phone && (
                  <p className={styles.error_message}>{errors.phone}</p>
                )}
              </div>
              <input
                type='tel'
                id={billingInfo.numberInfo.inputName}
                name={billingInfo.numberInfo.inputName}
                placeholder={billingInfo.numberInfo.placeholder}
                className={`${
                  touched.phone && errors.phone
                    ? `${styles.input_tel} ${styles.error}`
                    : styles.input_tel
                }`}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
        <div className={styles.input_main}>
          <h2 className={styles.secondary_heading}>{shippingInfo.heading}</h2>
          <div className={styles.form_container}>
            <div className={styles.shipping_wrapper}>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.addressInfo.inputName}>
                  {shippingInfo.addressInfo.label}
                </label>
                {touched.address && errors.address && (
                  <p className={styles.error_message}>{errors.address}</p>
                )}
              </div>
              <input
                type='text'
                id={shippingInfo.addressInfo.inputName}
                name={shippingInfo.addressInfo.inputName}
                placeholder={shippingInfo.addressInfo.placeholder}
                className={`${
                  touched.address && errors.address
                    ? `${styles.input_text} ${styles.error}`
                    : styles.input_text
                }`}
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.zipInfo.inputName}>
                  {shippingInfo.zipInfo.label}
                </label>
                {touched.zip && errors.zip && (
                  <p className={styles.error_message}>{errors.zip}</p>
                )}
              </div>
              <input
                type='number'
                id={shippingInfo.zipInfo.inputName}
                name={shippingInfo.zipInfo.inputName}
                placeholder={shippingInfo.zipInfo.placeholder}
                className={`${
                  touched.zip && errors.zip
                    ? `${styles.input_number} ${styles.error}`
                    : styles.input_number
                }`}
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.cityInfo.inputName}>
                  {shippingInfo.cityInfo.label}
                </label>
                {touched.city && errors.city && (
                  <p className={styles.error_message}>{errors.city}</p>
                )}
              </div>
              <input
                type='text'
                id={shippingInfo.cityInfo.inputName}
                name={shippingInfo.cityInfo.inputName}
                placeholder={shippingInfo.cityInfo.placeholder}
                className={`${
                  touched.city && errors.city
                    ? `${styles.input_text} ${styles.error}`
                    : styles.input_text
                }`}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.countryInfo.inputName}>
                  {shippingInfo.countryInfo.label}
                </label>
                {touched.country && errors.country && (
                  <p className={styles.error_message}>{errors.country}</p>
                )}
              </div>
              <input
                type='text'
                id={shippingInfo.countryInfo.inputName}
                name={shippingInfo.countryInfo.inputName}
                placeholder={shippingInfo.countryInfo.placeholder}
                className={`${
                  touched.country && errors.country
                    ? `${styles.input_text} ${styles.error}`
                    : styles.input_text
                }`}
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
        <div className={styles.input_main}>
          <h2 className={styles.secondary_heading}>{paymentInfo.heading}</h2>
          <div>
            <div className={styles.radio_container}>
              <h3 className={styles.tertiary_heading}>
                {paymentInfo.paymentRadioBtns.label}
              </h3>
              <div className={styles.radio_wrapper}>
                <label className={styles.label_radio}>
                  <input
                    type='radio'
                    name='view'
                    value='true'
                    checked={values.showForm === true}
                    onChange={() => {
                      setFieldValue('showForm', true)
                    }}
                  />
                  {paymentInfo.paymentRadioBtns.eMoneyInfo.label}
                </label>

                <label className={styles.label_radio}>
                  <input
                    type='radio'
                    name='view'
                    value='false'
                    checked={values.showForm === false}
                    onChange={() => {
                      setFieldValue('showForm', false)
                    }}
                  />
                  {paymentInfo.paymentRadioBtns.cashInfo.label}
                </label>
              </div>
            </div>
            <div>
              {values.showForm ? (
                <div className={styles.form_container}>
                  <div>
                    <div className={styles.label_wrapper}>
                      <label htmlFor={paymentInfo.eNumberInfo.inputName}>
                        {paymentInfo.eNumberInfo.label}
                      </label>
                      {touched.eNumber && errors.eNumber && (
                        <p className={styles.error_message}>{errors.eNumber}</p>
                      )}
                    </div>
                    <input
                      type='number'
                      id={paymentInfo.eNumberInfo.inputName}
                      name={paymentInfo.eNumberInfo.inputName}
                      placeholder={paymentInfo.eNumberInfo.placeholder}
                      className={`${
                        touched.eNumber && errors.eNumber
                          ? `${styles.input_number} ${styles.error}`
                          : styles.input_number
                      }`}
                      value={values.eNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <div className={styles.label_wrapper}>
                      <label htmlFor={paymentInfo.ePinInfo.inputName}>
                        {paymentInfo.ePinInfo.label}
                      </label>
                      {touched.ePin && errors.ePin && (
                        <p className={styles.error_message}>{errors.ePin}</p>
                      )}
                    </div>
                    <input
                      type='number'
                      id={paymentInfo.ePinInfo.inputName}
                      name={paymentInfo.ePinInfo.inputName}
                      placeholder={paymentInfo.ePinInfo.placeholder}
                      className={`${
                        touched.ePin && errors.ePin
                          ? `${styles.input_number} ${styles.error}`
                          : styles.input_number
                      }`}
                      value={values.ePin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.cash_wrapper}>
                  <img src={paymentInfo.icon} alt='cash-on-delivery' />
                  <p className={styles.cash_text}>{paymentInfo.cashText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/*Summary Component*/}

      <div className={styles.summary}>
        <h2 className={styles.tertiary_heading}>{tertiaryHeading}</h2>
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
          handleSubmit={handleSubmit}
          className={styles.payment_btn}
        />
      </div>
    </form>
  )
}

export default FormSubmit
