import React from 'react'
import { formDataProps } from 'types/formDataTypes'

//Styles
import styles from 'components/form/form-submit.module.scss'

//for test
let showInput = false

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
        <div>
          <h2 className={styles.secondary_heading}>{billingInfo.heading}</h2>
          <div>
            <div>
              <div>
                <label htmlFor={billingInfo.nameInfo.inputName}>
                  {billingInfo.nameInfo.label}
                </label>
                <p></p>
              </div>
              <input
                type='text'
                id={billingInfo.nameInfo.inputName}
                name={billingInfo.nameInfo.inputName}
                placeholder={billingInfo.nameInfo.placeholder}
              />
            </div>
            <div>
              <div>
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
              />
            </div>
            <div>
              <div>
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
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.secondary_heading}>{shippingInfo.heading}</h2>
          <div>
            <div>
              <div>
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
              />
            </div>
            <div>
              <div>
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
              />
            </div>
            <div>
              <div>
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
              />
            </div>
            <div>
              <div>
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
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.secondary_heading}>{paymentInfo.heading}</h2>
          <div>
            <div>
              <h3>{paymentInfo.paymentRadioBtns.label}</h3>
              <div>
                <label>
                  <input type='radio' name='view' value='true' />
                  {paymentInfo.paymentRadioBtns.eMoneyInfo.label}
                </label>

                <label>
                  <input type='radio' name='view' value='false' />
                  {paymentInfo.paymentRadioBtns.cashInfo.label}
                </label>
              </div>
            </div>
            <div>
              {showInput ? (
                <form>
                  <div>
                    <div>
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
                    />
                  </div>
                  <div>
                    <div>
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
                    />
                  </div>
                </form>
              ) : (
                <div>
                  <img src={paymentInfo.icon} alt='cash-on-delivery' />
                  <p>{paymentInfo.cashText}</p>
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
