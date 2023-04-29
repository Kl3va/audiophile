import React from 'react'
import { formDataProps } from 'types/formDataTypes'

//Styles
import styles from 'components/form/form-submit.module.scss'

const FormSubmit = ({
  heading,
  billingInfo,
  shippingInfo,
  paymentInfo,
}: formDataProps) => {
  return (
    <div>
      <h1>{heading}</h1>
      <form>
        <div>
          <h2></h2>
          <div></div>
        </div>
        <div>
          <h2></h2>
          <div></div>
        </div>
        <div>
          <h2></h2>
          <div></div>
        </div>
      </form>
    </div>
  )
}

export default FormSubmit
