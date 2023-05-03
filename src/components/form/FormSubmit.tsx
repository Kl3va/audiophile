import React from 'react'
import { formDataProps } from 'types/formDataTypes'

//Styles
import styles from 'components/form/form-submit.module.scss'

//for test
let showInput = true

const FormSubmit = ({
  heading,
  billingInfo,
  shippingInfo,
  paymentInfo,
}: formDataProps) => {
  return (
    <div className={styles.form_wrapper}>
      <form>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.input_main}>
          <h2 className={styles.secondary_heading}>{billingInfo.heading}</h2>
          <div className={styles.form_container}>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={billingInfo.nameInfo.inputName}>
                  {billingInfo.nameInfo.label}
                </label>
                <p>hello</p>
              </div>
              <input
                type='text'
                id={billingInfo.nameInfo.inputName}
                name={billingInfo.nameInfo.inputName}
                placeholder={billingInfo.nameInfo.placeholder}
                className={styles.input_text}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={billingInfo.emailInfo.inputName}>
                  {billingInfo.emailInfo.label}
                </label>
                <p></p>
              </div>
              <input
                type='email'
                id={billingInfo.emailInfo.inputName}
                name={billingInfo.emailInfo.inputName}
                placeholder={billingInfo.emailInfo.placeholder}
                className={styles.input_email}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={billingInfo.numberInfo.inputName}>
                  {billingInfo.numberInfo.label}
                </label>
                <p></p>
              </div>
              <input
                type='tel'
                id={billingInfo.numberInfo.inputName}
                name={billingInfo.numberInfo.inputName}
                placeholder={billingInfo.numberInfo.placeholder}
                className={styles.input_tel}
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
                <p></p>
              </div>
              <input
                type='text'
                id={shippingInfo.addressInfo.inputName}
                name={shippingInfo.addressInfo.inputName}
                placeholder={shippingInfo.addressInfo.placeholder}
                className={styles.input_text}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.zipInfo.inputName}>
                  {shippingInfo.zipInfo.label}
                </label>
                <p></p>
              </div>
              <input
                type='number'
                id={shippingInfo.zipInfo.inputName}
                name={shippingInfo.zipInfo.inputName}
                placeholder={shippingInfo.zipInfo.placeholder}
                className={styles.input_number}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.cityInfo.inputName}>
                  {shippingInfo.cityInfo.label}
                </label>
                <p></p>
              </div>
              <input
                type='text'
                id={shippingInfo.cityInfo.inputName}
                name={shippingInfo.cityInfo.inputName}
                placeholder={shippingInfo.cityInfo.placeholder}
                className={styles.input_text}
              />
            </div>
            <div>
              <div className={styles.label_wrapper}>
                <label htmlFor={shippingInfo.countryInfo.inputName}>
                  {shippingInfo.countryInfo.label}
                </label>
                <p></p>
              </div>
              <input
                type='text'
                id={shippingInfo.countryInfo.inputName}
                name={shippingInfo.countryInfo.inputName}
                placeholder={shippingInfo.countryInfo.placeholder}
                className={styles.input_text}
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
                  <input type='radio' name='view' value='true' />
                  {paymentInfo.paymentRadioBtns.eMoneyInfo.label}
                </label>

                <label className={styles.label_radio}>
                  <input type='radio' name='view' value='false' />
                  {paymentInfo.paymentRadioBtns.cashInfo.label}
                </label>
              </div>
            </div>
            <div>
              {showInput ? (
                <form className={styles.form_container}>
                  <div>
                    <div className={styles.label_wrapper}>
                      <label htmlFor={paymentInfo.eNumberInfo.inputName}>
                        {paymentInfo.eNumberInfo.label}
                      </label>
                      <p></p>
                    </div>
                    <input
                      type='number'
                      id={paymentInfo.eNumberInfo.inputName}
                      name={paymentInfo.eNumberInfo.inputName}
                      placeholder={paymentInfo.eNumberInfo.placeholder}
                      className={styles.input_number}
                    />
                  </div>
                  <div>
                    <div className={styles.label_wrapper}>
                      <label htmlFor={paymentInfo.ePinInfo.inputName}>
                        {paymentInfo.ePinInfo.label}
                      </label>
                      <p></p>
                    </div>
                    <input
                      type='number'
                      id={paymentInfo.ePinInfo.inputName}
                      name={paymentInfo.ePinInfo.inputName}
                      placeholder={paymentInfo.ePinInfo.placeholder}
                      className={styles.input_number}
                    />
                  </div>
                </form>
              ) : (
                <div className={styles.cash_wrapper}>
                  <img src={paymentInfo.icon} alt='cash-on-delivery' />
                  <p className={styles.cash_text}>{paymentInfo.cashText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormSubmit
